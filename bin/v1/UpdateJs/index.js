import fixAnyJs from "express-fix-any-js";
import checkLines from "./checkLines.json" with {type: "json"};

const alterLines = ({ inActionName }) => {
    let localCheckLines = checkLines;

    localCheckLines.importLines.toInsertLine = localCheckLines.importLines.toInsertLine.replaceAll("${endpoint}", inActionName);
    localCheckLines.importLines.duplicationCheck = localCheckLines.importLines.duplicationCheck.replaceAll("${endpoint}", inActionName).replaceAll("'", '"');

    localCheckLines.useLines.toInsertLine = localCheckLines.useLines.toInsertLine.replaceAll("${endpoint}", inActionName);
    localCheckLines.useLines.duplicationCheck = localCheckLines.useLines.duplicationCheck.replaceAll("${endpoint}", inActionName).replaceAll("'", '"');

    return localCheckLines;
};

const startFunc = ({ inJsFilePath, inActionName, showLog = false }) => {

    const localCheckLines = alterLines({ inActionName });
    console.log("localCheckLines : ", inJsFilePath);

    fixAnyJs({
        showLog,
        jsFilePath: inJsFilePath,
        inCheckLines: localCheckLines
    });

    return false;
};

export default startFunc;