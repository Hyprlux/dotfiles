"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNpmConfig = void 0;
const config = require("libnpmconfig");
const config_1 = require("./config");
let skippedNpmConfigLastTime;
const packageJsonPathToConfMap = {};
const getNpmConfig = (packageJsonPath) => {
    let conf = packageJsonPathToConfMap[packageJsonPath];
    const skipNpmConfig = (0, config_1.getConfig)().skipNpmConfig;
    if (conf === undefined || skipNpmConfig !== skippedNpmConfigLastTime) {
        if (skipNpmConfig) {
            conf = {};
            console.debug('Defaulting to empty config');
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            conf = config
                .read({
                // here we can override config
                // currently disable cache since it seems to be buggy with npm-registry-fetch
                // the bug was supposedly fixed here: https://github.com/npm/npm-registry-fetch/issues/23
                // but I still have issues, and not enough time to investigate
                // TODO: Investigate why the cache causes issues
                cache: null,
                // registry: 'https://registry.npmjs.org',
            }, { cwd: packageJsonPath })
                .toJSON();
            packageJsonPathToConfMap[packageJsonPath] = conf;
        }
        skippedNpmConfigLastTime = skipNpmConfig;
    }
    return conf;
};
exports.getNpmConfig = getNpmConfig;
//# sourceMappingURL=npmConfig.js.map