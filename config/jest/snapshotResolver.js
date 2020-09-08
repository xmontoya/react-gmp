const pathSeparator = process.platform === 'win32' ? '\\' : '/';

const srcDir = `src${pathSeparator}`;
const snapshotDir = `src${pathSeparator}__snapshots__${pathSeparator}`;
const consistencyCheck = `some${pathSeparator}example.spec.js`;

module.exports = {
    resolveSnapshotPath: (testPath, snapshotExtension) => (
        testPath.replace(srcDir, snapshotDir) + snapshotExtension
    ),

    resolveTestPath: (snapshotFilePath, snapshotExtension) => (
        snapshotFilePath
            .replace(snapshotDir, srcDir)
            .replace(snapshotExtension, '')
    ),

    testPathForConsistencyCheck: consistencyCheck
};
