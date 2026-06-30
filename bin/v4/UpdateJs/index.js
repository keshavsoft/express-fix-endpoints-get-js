import fixAnyJs from "express-fix-any-js";
import checkLines from "./checkLines.json" with {type: "json"};

const alterLines = ({ inActionName, inFolderName, inGetType }) => {
    let checkLinesData = checkLines;
    let localCheckLines = checkLinesData[inGetType];
    console.log("aaaaaaaaaa : ", inActionName, inFolderName, inGetType);

    localCheckLines.importLines.toInsertLine = localCheckLines.importLines.toInsertLine.replaceAll("${folderName}", inFolderName);
    localCheckLines.importLines.duplicationCheck = localCheckLines.importLines.duplicationCheck.replaceAll("${folderName}", inFolderName).replaceAll("'", '"');

    localCheckLines.useLines.toInsertLine = localCheckLines.useLines.toInsertLine.replaceAll("${endpoint}", inActionName);
    localCheckLines.useLines.toInsertLine = localCheckLines.useLines.toInsertLine.replaceAll("${folderName}", inFolderName);

    localCheckLines.useLines.duplicationCheck = localCheckLines.useLines.duplicationCheck.replaceAll("${endpoint}", inActionName).replaceAll("'", '"');

    return localCheckLines;
};

const startFunc = ({ inJsFilePath, inActionName, inFolderName, showLog = false, inGetType }) => {

    const localCheckLines = alterLines({ inActionName, inFolderName, inGetType });

    fixAnyJs({
        showLog,
        jsFilePath: inJsFilePath,
        inCheckLines: localCheckLines
    });

    return false;
};

export default startFunc;