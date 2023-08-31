"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs_1 = require("fs");
const packageJson_1 = require("../packageJson");
describe('packageJson', () => {
    test('should be able to correctly parse a simple package.json', () => {
        const packageJsonBuffer = (0, fs_1.readFileSync)('./src/test-jest/testdata/package-test1.json');
        const packageJson = packageJsonBuffer.toString();
        const result = (0, packageJson_1.getDependencyInformation)(packageJson);
        const dependencies = result.map((r) => r.deps).flat();
        if (!dependencies.some((dep) => dep.dependencyName === 'npm-registry-fetch' &&
            dep.currentVersion === '12.0.0' &&
            dep.line === 22)) {
            assert.fail('did not find npm-registry-fetch');
        }
        if (!dependencies.some((dep) => dep.dependencyName === '@types/npm-registry-fetch' &&
            dep.currentVersion === '8.0.4' &&
            dep.line === 30)) {
            assert.fail('did not find @types/npm-registry-fetch');
        }
        assert.ok('nice');
    });
    test('should be able to correctly parse another simple package.json', () => {
        const packageJsonBuffer = (0, fs_1.readFileSync)('./src/test-jest/testdata/package-test2.json');
        const packageJson = packageJsonBuffer.toString();
        const result = (0, packageJson_1.getDependencyInformation)(packageJson);
        assert.deepStrictEqual(result, [
            {
                deps: [
                    { currentVersion: '7.2.0', dependencyName: '@types/glob', line: 12 },
                    { currentVersion: '2.6.7', dependencyName: 'node-fetch', line: 13 },
                ],
                startLine: 11,
            },
        ]);
    });
});
//# sourceMappingURL=packageJson.test.js.map