"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearDecorations = exports.handleFileDecoration = void 0;
const vscode = require("vscode");
const decorations_1 = require("./decorations");
const ignorePattern_1 = require("./ignorePattern");
const npm_1 = require("./npm");
const packageJson_1 = require("./packageJson");
const types_1 = require("./types");
const config_1 = require("./config");
const util_1 = require("./util/util");
// If a user opens the same package.json several times quickly, several "loads" of decorators will
// be ongoing at the same time. So here we keep track of the latest start time and only use that.
const decorationStart = {};
let rowToDecoration = {};
const handleFileDecoration = (document, showDecorations) => {
    if (showDecorations === false) {
        (0, exports.clearDecorations)();
        return;
    }
    if (!(0, packageJson_1.isPackageJson)(document)) {
        return;
    }
    const startTime = new Date().getTime();
    decorationStart[document.fileName] = startTime;
    void loadDecoration(document, startTime);
};
exports.handleFileDecoration = handleFileDecoration;
const loadDecoration = async (document, startTime) => {
    const text = document.getText();
    const dependencyGroups = (0, packageJson_1.getDependencyInformation)(text);
    const textEditor = getTextEditorFromDocument(document);
    if (textEditor === undefined) {
        return;
    }
    const promises = (0, npm_1.refreshPackageJsonData)(document.getText(), document.uri.fsPath);
    try {
        await Promise.race([...promises, Promise.resolve()]);
    }
    catch (e) {
        //
    }
    // initial paint
    const stillLoading = promises.length !== 0;
    paintDecorations(document, dependencyGroups, stillLoading, startTime);
    return waitForPromises(promises, document, dependencyGroups, startTime);
};
const waitForPromises = async (promises, document, dependencyGroups, startTime) => {
    let newSettled = false;
    if (promises.length === 0) {
        return;
    }
    promises.forEach((promise) => {
        void promise
            .then(() => {
            newSettled = true;
        })
            .catch(() => {
            //
        });
    });
    const interval = setInterval(() => {
        if (newSettled === true) {
            newSettled = false;
            paintDecorations(document, dependencyGroups, true, startTime);
        }
    }, 1000);
    await Promise.allSettled(promises);
    clearInterval(interval);
    return paintDecorations(document, dependencyGroups, false, startTime);
};
const paintDecorations = (document, dependencyGroups, stillLoading, startTime) => {
    if (decorationStart[document.fileName] !== startTime) {
        return;
    }
    const textEditor = getTextEditorFromDocument(document);
    if (textEditor === undefined) {
        return;
    }
    const ignorePatterns = (0, ignorePattern_1.getIgnorePattern)();
    if (stillLoading) {
        paintLoadingOnDependencyGroups(dependencyGroups, document, textEditor);
    }
    else {
        clearLoadingOnDependencyGroups(dependencyGroups);
    }
    const dependencies = dependencyGroups.map((d) => d.deps).flat();
    dependencies.forEach((dep) => {
        if ((0, ignorePattern_1.isDependencyIgnored)(dep.dependencyName, ignorePatterns)) {
            return;
        }
        const lineText = document.lineAt(dep.line).text;
        const range = new vscode.Range(new vscode.Position(dep.line, lineText.length), new vscode.Position(dep.line, lineText.length));
        const npmCache = (0, npm_1.getCachedNpmData)(dep.dependencyName);
        if (npmCache === undefined) {
            return;
        }
        if (npmCache.asyncstate === types_1.AsyncState.Rejected) {
            const text = 'Dependency not found';
            const notFoundDecoration = (0, decorations_1.decorateDiscreet)(text);
            if (updateCache(notFoundDecoration, range.start.line, text)) {
                setDecorator(notFoundDecoration, textEditor, range);
            }
            return;
        }
        if (npmCache.item === undefined) {
            const msUntilRowLoading = (0, config_1.getConfig)().msUntilRowLoading;
            if (msUntilRowLoading !== 0 &&
                (msUntilRowLoading < 100 ||
                    npmCache.startTime + (0, config_1.getConfig)().msUntilRowLoading < new Date().getTime())) {
                const text = 'Loading...';
                const decorator = (0, decorations_1.decorateDiscreet)(text);
                if (updateCache(decorator, range.start.line, text)) {
                    setDecorator(decorator, textEditor, range);
                }
            }
            return;
        }
        const possibleUpgrades = (0, npm_1.getPossibleUpgrades)(npmCache.item.npmData, dep.currentVersion, dep.dependencyName);
        let decorator;
        let text;
        if (possibleUpgrades.major !== undefined) {
            // TODO add info about patch version?
            text = (0, decorations_1.getUpdateDescription)(possibleUpgrades.major.version, possibleUpgrades.existingVersion);
            decorator = (0, decorations_1.getDecoratorForUpdate)('major', text);
        }
        else if (possibleUpgrades.minor !== undefined) {
            text = (0, decorations_1.getUpdateDescription)(possibleUpgrades.minor.version, possibleUpgrades.existingVersion);
            decorator = (0, decorations_1.getDecoratorForUpdate)('minor', text);
        }
        else if (possibleUpgrades.patch !== undefined) {
            text = (0, decorations_1.getUpdateDescription)(possibleUpgrades.patch.version, possibleUpgrades.existingVersion);
            decorator = (0, decorations_1.getDecoratorForUpdate)('patch', text);
        }
        else if (possibleUpgrades.prerelease !== undefined) {
            text = (0, decorations_1.getUpdateDescription)(possibleUpgrades.prerelease.version, possibleUpgrades.existingVersion);
            decorator = (0, decorations_1.getDecoratorForUpdate)('prerelease', text);
        }
        else if (possibleUpgrades.validVersion === false) {
            text = 'Failed to parse version';
            decorator = (0, decorations_1.decorateDiscreet)(text);
        }
        if (decorator === undefined || text === undefined) {
            return;
        }
        if (updateCache(decorator, range.start.line, text)) {
            setDecorator(decorator, textEditor, range);
        }
    });
};
const paintLoadingOnDependencyGroups = (dependencyGroups, document, textEditor) => {
    dependencyGroups.forEach((lineLimit) => {
        const lineText = document.lineAt(lineLimit.startLine).text;
        const range = new vscode.Range(new vscode.Position(lineLimit.startLine, lineText.length), new vscode.Position(lineLimit.startLine, lineText.length));
        const text = 'Loading updates...';
        const loadingUpdatesDecoration = (0, decorations_1.decorateDiscreet)(text);
        if (updateCache(loadingUpdatesDecoration, range.start.line, text)) {
            setDecorator(loadingUpdatesDecoration, textEditor, range);
        }
    });
};
const clearLoadingOnDependencyGroups = (dependencyGroups) => {
    dependencyGroups.forEach((lineLimit) => {
        const current = rowToDecoration[lineLimit.startLine];
        if (current) {
            current.decoration.dispose();
            rowToDecoration[lineLimit.startLine] = undefined;
        }
    });
};
const setDecorator = (decorator, textEditor, range) => {
    textEditor.setDecorations(decorator, [
        {
            range,
        },
    ]);
};
const getTextEditorFromDocument = (document) => {
    return vscode.window.visibleTextEditors.find((textEditor) => {
        return textEditor.document === document;
    });
};
const clearDecorations = () => {
    (0, util_1.objectEntries)(rowToDecoration).forEach(([k, v]) => {
        v?.decoration.dispose();
    });
    rowToDecoration = {};
};
exports.clearDecorations = clearDecorations;
const updateCache = (decoration, line, text) => {
    const current = rowToDecoration[line];
    if (current === undefined || current.text !== text) {
        if (current) {
            current.decoration.dispose();
        }
        rowToDecoration[line] = {
            decoration,
            line,
            text,
        };
        return true;
    }
    else {
        return false;
    }
};
//# sourceMappingURL=texteditor.js.map