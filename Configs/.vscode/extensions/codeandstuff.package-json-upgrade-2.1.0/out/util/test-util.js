"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logToFile = void 0;
const vscode = require("vscode");
const logToFile = async (content, fileName) => {
    if (fileName === undefined) {
        fileName = 'test-log';
    }
    const uri = vscode.Uri.parse(`./tmp/${fileName}`);
    await vscode.workspace.fs.writeFile(uri, Buffer.from(content));
};
exports.logToFile = logToFile;
//# sourceMappingURL=test-util.js.map