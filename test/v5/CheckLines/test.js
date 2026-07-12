import { getCheckLinesKeys, getCheckLines } from "../../../index.js";

const startFunc = async () => {
    console.log("Running V5 CheckLines test...");
    
    // Test key exposure
    const keys = await getCheckLinesKeys();
    console.log("Keys:", keys);
    if (!Array.isArray(keys) || keys.length === 0) {
        throw new Error("getCheckLinesKeys failed to return keys array");
    }

    // Test simple type resolution
    const simpleConfig = await getCheckLines({
        inActionName: "ToTest",
        inFolderName: "Fold1",
        inGetType: "simple"
    });
    console.log("Simple Config:", simpleConfig);
    if (!simpleConfig || !simpleConfig.importLines || !simpleConfig.useLines) {
        throw new Error("getCheckLines failed for 'simple' type");
    }

    // Test parameterized type resolution
    const paramConfig = await getCheckLines({
        inActionName: "ToTest",
        inFolderName: "Fold1",
        inGetType: "withParams"
    });
    console.log("Parameterized Config:", paramConfig);
    if (!paramConfig || !paramConfig.useLines.toInsertLine.includes(":pk")) {
        throw new Error("getCheckLines failed for 'withParams' type");
    }

    console.log("V5 CheckLines tests passed successfully!");
};

startFunc().catch(err => {
    console.error("Test failed:", err);
    process.exit(1);
});
