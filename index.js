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

const getCheckLinesKeys = async () => {
    const v = getLatestVersion();
    const { checkLinesKeys } = await import(`./bin/${v}/UpdateJs/index.js`);
    return checkLinesKeys;
};

const getCheckLines = async ({ inActionName, inFolderName, inGetType, inColumnName }) => {
    const v = getLatestVersion();
    const { alterLines } = await import(`./bin/${v}/UpdateJs/index.js`);
    return alterLines({ inActionName, inFolderName, inGetType, inColumnName });
};

export { getCheckLinesKeys, getCheckLines };
export default load;