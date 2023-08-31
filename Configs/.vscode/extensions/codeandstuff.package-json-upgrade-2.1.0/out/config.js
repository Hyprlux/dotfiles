"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setConfig = exports.getConfig = void 0;
let currentConfig;
const getConfig = () => {
    if (currentConfig === undefined) {
        throw 'config should be loaded';
    }
    return currentConfig;
};
exports.getConfig = getConfig;
const setConfig = (newConfig) => {
    currentConfig = newConfig;
};
exports.setConfig = setConfig;
//# sourceMappingURL=config.js.map