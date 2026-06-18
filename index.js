import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async ({ endPointsJsPath, inActionName, showLog, inFolderName,
    inGetType }) => {

    const v = getLatestVersion();

    const module = await import(`./bin/${v}/start.js`);

    await module.default({
        endPointsJsPath, inFolderName,
        inActionName, showLog, inGetType
    });
};

export default load;