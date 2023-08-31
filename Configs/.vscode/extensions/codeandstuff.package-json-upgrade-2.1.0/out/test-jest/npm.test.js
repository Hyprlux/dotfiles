"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const npm_1 = require("../npm");
const config_1 = require("../config");
const testData = {
    'dist-tags': {
        latest: '2.1.1',
    },
    versions: {
        '1.0.0': {
            name: 'dependencyName',
            version: '1.0.0',
        },
        '1.0.1': {
            name: 'dependencyName',
            version: '1.0.1',
        },
        '1.1.0': {
            name: 'dependencyName',
            version: '1.1.0',
        },
        '1.1.1': {
            name: 'dependencyName',
            version: '1.1.1',
        },
        '2.0.0-alpha.1': {
            name: 'dependencyName',
            version: '2.0.0-alpha.1',
        },
        '2.0.0-alpha.2': {
            name: 'dependencyName',
            version: '2.0.0-alpha.2',
        },
        '2.0.0': {
            name: 'dependencyName',
            version: '2.0.0',
        },
        '2.1.0': {
            name: 'dependencyName',
            version: '2.1.0',
        },
        '2.1.1': {
            name: 'dependencyName',
            version: '2.1.1',
        },
        '3.0.0-alpha.1': {
            name: 'dependencyName',
            version: '3.0.0-alpha.1',
        },
        '3.0.0-alpha.2': {
            name: 'dependencyName',
            version: '3.0.0-alpha.2',
        },
    },
};
describe('Npm Test Suite', () => {
    beforeAll(() => {
        const config = {
            showUpdatesAtStart: true,
            skipNpmConfig: true,
            majorUpgradeColorOverwrite: '',
            minorUpgradeColorOverwrite: '',
            patchUpgradeColorOverwrite: '',
            prereleaseUpgradeColorOverwrite: '',
            decorationString: '',
            ignorePatterns: [],
            ignoreVersions: {},
            msUntilRowLoading: 6000,
        };
        (0, config_1.setConfig)(config);
    });
    test('Major upgrade', () => {
        const result = (0, npm_1.getPossibleUpgrades)(testData, '1.1.1', 'dependencyName');
        const expected = {
            major: { name: 'dependencyName', version: '2.1.1' },
            minor: undefined,
            patch: undefined,
            prerelease: undefined,
            validVersion: true,
            existingVersion: true,
        };
        assert.deepStrictEqual(result, expected);
    });
    test('Minor upgrade', () => {
        const result = (0, npm_1.getPossibleUpgrades)(testData, '2.0.0', 'dependencyName');
        const expected = {
            major: undefined,
            minor: { name: 'dependencyName', version: '2.1.1' },
            patch: undefined,
            prerelease: undefined,
            validVersion: true,
            existingVersion: true,
        };
        assert.deepStrictEqual(result, expected);
    });
    test('Patch upgrade', () => {
        const result = (0, npm_1.getPossibleUpgrades)(testData, '2.1.0', 'dependencyName');
        const expected = {
            major: undefined,
            minor: undefined,
            patch: { name: 'dependencyName', version: '2.1.1' },
            prerelease: undefined,
            validVersion: true,
            existingVersion: true,
        };
        assert.deepStrictEqual(result, expected);
    });
    test('Many upgrades', () => {
        const result = (0, npm_1.getPossibleUpgrades)(testData, '1.0.0', 'dependencyName');
        const expected = {
            major: { name: 'dependencyName', version: '2.1.1' },
            minor: { name: 'dependencyName', version: '1.1.1' },
            patch: { name: 'dependencyName', version: '1.0.1' },
            prerelease: undefined,
            validVersion: true,
            existingVersion: true,
        };
        assert.deepStrictEqual(result, expected);
    });
    test('Invalid version', () => {
        const result = (0, npm_1.getPossibleUpgrades)(testData, 'non-existing-version', 'dependencyName');
        const expected = {
            validVersion: false,
            existingVersion: false,
        };
        assert.deepStrictEqual(result, expected);
    });
    test('Prerelease upgrade', () => {
        const result = (0, npm_1.getPossibleUpgrades)(testData, '3.0.0-alpha.1', 'dependencyName');
        const expected = {
            major: undefined,
            minor: undefined,
            patch: undefined,
            prerelease: { name: 'dependencyName', version: '3.0.0-alpha.2' },
            validVersion: true,
            existingVersion: true,
        };
        assert.deepStrictEqual(result, expected);
    });
    test('Prerelease upgrade with inexact version', () => {
        const result = (0, npm_1.getPossibleUpgrades)(testData, '^3.0.0-alpha.1', 'dependencyName');
        const expected = {
            major: undefined,
            minor: undefined,
            patch: undefined,
            prerelease: { name: 'dependencyName', version: '3.0.0-alpha.2' },
            validVersion: true,
            existingVersion: true,
        };
        assert.deepStrictEqual(result, expected);
    });
    test('Prerelease upgrade to final', () => {
        const result = (0, npm_1.getPossibleUpgrades)(testData, '2.0.0-alpha.1', 'dependencyName');
        const expected = {
            major: undefined,
            minor: { name: 'dependencyName', version: '2.1.1' },
            patch: undefined,
            prerelease: { name: 'dependencyName', version: '2.0.0' },
            validVersion: true,
            existingVersion: true,
        };
        assert.deepStrictEqual(result, expected);
    });
    const testDataWithLatest = {
        'dist-tags': {
            latest: '1.0.0',
        },
        versions: {
            '1.0.0': {
                name: 'dependencyName',
                version: '1.0.0',
            },
            '2.0.0': {
                name: 'dependencyName',
                version: '2.0.0',
            },
            '2.0.1': {
                name: 'dependencyName',
                version: '2.0.1',
            },
        },
    };
    test('Latest dist-tag blocks major upgrade', () => {
        const result = (0, npm_1.getPossibleUpgrades)(testDataWithLatest, '1.0.0', 'dependencyName');
        const expected = {
            major: undefined,
            minor: undefined,
            patch: undefined,
            prerelease: undefined,
            validVersion: true,
            existingVersion: true,
        };
        assert.deepStrictEqual(result, expected);
    });
    test('Latest dist-tag ignored if current version is already higher than latest dist-tag', () => {
        const result = (0, npm_1.getPossibleUpgrades)(testDataWithLatest, '2.0.0', 'dependencyName');
        const expected = {
            major: undefined,
            minor: undefined,
            patch: { name: 'dependencyName', version: '2.0.1' },
            prerelease: undefined,
            validVersion: true,
            existingVersion: true,
        };
        assert.deepStrictEqual(result, expected);
    });
    const testDataWithOnlyPrereleases = {
        'dist-tags': {
            latest: '2.0.0-build100',
        },
        versions: {
            '1.0.0-build100': {
                name: 'dependencyName',
                version: '1.0.0-build100',
            },
            '2.0.0-build100': {
                name: 'dependencyName',
                version: '2.0.0-build100',
            },
        },
    };
    test('Should work even if all releases are pre-releases', () => {
        const result = (0, npm_1.getPossibleUpgrades)(testDataWithOnlyPrereleases, '1.0.1-build100', 'dependencyName');
        const expected = {
            major: {
                name: 'dependencyName',
                version: '2.0.0-build100',
            },
            minor: undefined,
            patch: undefined,
            prerelease: undefined,
            validVersion: true,
            existingVersion: false,
        };
        assert.deepStrictEqual(result, expected);
    });
    test('Ignored versions should work', () => {
        const result = (0, npm_1.getPossibleUpgradesWithIgnoredVersions)(testData, '1.1.1', 'dependencyName', '>=2.1.1');
        const expected = {
            major: { name: 'dependencyName', version: '2.1.0' },
            minor: undefined,
            patch: undefined,
            prerelease: undefined,
            validVersion: true,
            existingVersion: true,
        };
        assert.deepStrictEqual(result, expected);
    });
    test('Multiple ignored versions should work', () => {
        const result = (0, npm_1.getPossibleUpgradesWithIgnoredVersions)(testData, '1.1.1', 'dependencyName', ['=2.1.1', '=2.1.0']);
        const expected = {
            major: { name: 'dependencyName', version: '2.0.0' },
            minor: undefined,
            patch: undefined,
            prerelease: undefined,
            validVersion: true,
            existingVersion: true,
        };
        assert.deepStrictEqual(result, expected);
    });
    test('getLatestVersion major', () => {
        const result = (0, npm_1.getLatestVersionWithIgnoredVersions)(testData, '1.1.1', 'dependencyName', ['=2.1.1', '=2.1.0']);
        const expected = {
            name: 'dependencyName',
            version: '2.0.0',
        };
        assert.deepStrictEqual(result, expected);
    });
    test('getLatestVersion patch', () => {
        const result = (0, npm_1.getLatestVersionWithIgnoredVersions)(testData, '2.1.0', 'dependencyName', []);
        const expected = {
            name: 'dependencyName',
            version: '2.1.1',
        };
        assert.deepStrictEqual(result, expected);
    });
    test('getLatestVersion star', () => {
        const result = (0, npm_1.getLatestVersionWithIgnoredVersions)(testData, '*', 'dependencyName', []);
        assert.deepStrictEqual(result, undefined);
    });
    test('existingVersion should work with caret', () => {
        const result = (0, npm_1.getPossibleUpgrades)(testData, '^1.1.1', 'dependencyName');
        const expected = {
            major: { name: 'dependencyName', version: '2.1.1' },
            minor: undefined,
            patch: undefined,
            prerelease: undefined,
            validVersion: true,
            existingVersion: true,
        };
        assert.deepStrictEqual(result, expected);
    });
    test('existingVersion should work with tilde', () => {
        const result = (0, npm_1.getPossibleUpgrades)(testData, '~1.1.1', 'dependencyName');
        const expected = {
            major: { name: 'dependencyName', version: '2.1.1' },
            minor: undefined,
            patch: undefined,
            prerelease: undefined,
            validVersion: true,
            existingVersion: true,
        };
        assert.deepStrictEqual(result, expected);
    });
    test('existingVersion should be true when version does not exist', () => {
        const result = (0, npm_1.getPossibleUpgrades)(testData, '1.1.11', 'dependencyName');
        const expected = {
            major: { name: 'dependencyName', version: '2.1.1' },
            minor: undefined,
            patch: undefined,
            prerelease: undefined,
            validVersion: true,
            existingVersion: false,
        };
        assert.deepStrictEqual(result, expected);
    });
});
//# sourceMappingURL=npm.test.js.map