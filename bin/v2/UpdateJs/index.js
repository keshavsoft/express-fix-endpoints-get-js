import fixAnyJs from "express-fix-any-js";
import checkLines from "./checkLines.json" with {type: "json"};

const alterLines = ({ inActionName, inFolderName }) => {
    let localCheckLines = checkLines;

    localCheckLines.importLines.toInsertLine = localCheckLines.importLines.toInsertLine.replaceAll("${folderName}", inFolderName);
    localCheckLines.importLines.duplicationCheck = localCheckLines.importLines.duplicationCheck.replaceAll("${folderName}", inFolderName).replaceAll("'", '"');

    localCheckLines.useLines.toInsertLine = localCheckLines.useLines.toInsertLine.replaceAll("${endpoint}", inActionName);
    localCheckLines.useLines.toInsertLine = localCheckLines.useLines.toInsertLine.replaceAll("${folderName}", inFolderName);

    localCheckLines.useLines.duplicationCheck = localCheckLines.useLines.duplicationCheck.replaceAll("${endpoint}", inActionName).replaceAll("'", '"');

    return localCheckLines;
};

const startFunc = ({ inJsFilePath, inActionName, inFolderName, showLog = false }) => {

    const localCheckLines = alterLines({ inActionName, inFolderName });

    fixAnyJs({
        showLog,
        jsFilePath: inJsFilePath,
        inCheckLines: localCheckLines
    });

    return false;
};

export default startFunc;