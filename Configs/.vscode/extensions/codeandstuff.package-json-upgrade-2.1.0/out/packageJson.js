"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPackageJson = exports.getDependencyInformation = exports.getDependencyFromLine = void 0;
const parser_1 = require("@typescript-eslint/parser");
const getDependencyFromLine = (jsonAsString, line) => {
    const dependencies = (0, exports.getDependencyInformation)(jsonAsString)
        .map((d) => d.deps)
        .flat();
    return dependencies.find((d) => d.line === line);
};
exports.getDependencyFromLine = getDependencyFromLine;
const getDependencyInformation = (jsonAsString) => {
    const jsonAsTypescript = `let tmp=${jsonAsString}`;
    const ast = (0, parser_1.parse)(jsonAsTypescript, {
        loc: true,
    });
    const variable = ast.body[0];
    const tmp = variable.declarations[0];
    const init = tmp.init;
    if (init == null || init.type !== 'ObjectExpression') {
        throw new Error(`unexpected type: ${init?.type}`);
    }
    const properties = init.properties;
    const dependencies = properties.find((p) => p.key.value === 'dependencies');
    const devDependencies = properties.find((p) => p.key.value === 'devDependencies');
    return [dependencies, devDependencies]
        .filter((i) => i !== undefined)
        .map(toDependencyGroup);
};
exports.getDependencyInformation = getDependencyInformation;
function toDependencyGroup(dependencyProperty) {
    if (dependencyProperty.value.type !== 'ObjectExpression') {
        throw new Error('unexpected type');
    }
    const dependencies = dependencyProperty.value.properties;
    const d = dependencies.map((dep) => {
        return {
            dependencyName: dep.key.value,
            currentVersion: dep.value.value,
            // TODO investigate exactly why we have "off by one" error
            line: dep.loc.end.line - 1,
        };
    });
    return {
        startLine: dependencyProperty.loc.start.line - 1,
        deps: d,
    };
}
const isPackageJson = (document) => {
    // Is checking both slashes necessary? Test on linux and mac.
    return document.fileName.endsWith('\\package.json') || document.fileName.endsWith('/package.json');
};
exports.isPackageJson = isPackageJson;
//# sourceMappingURL=packageJson.js.map