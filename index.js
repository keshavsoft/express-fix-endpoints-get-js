import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async ({ endPointsJsPath, inActionName, showLog, inFolderName,
    inGetType, inColumnName }) => {

    const v = getLatestVersion();

    const module = await import(`./bin/${v}/start.js`);

    await module.default({
        endPointsJsPath, inFolderName,
        inActionName, showLog, inGetType, inColumnName
    });
};

export default load;