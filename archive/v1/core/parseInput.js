export default function parseInput({ jsFilePath,
    showLog, inActionName = "KeshavSoftAction" }) {

    const [...args] = process.argv.slice(2);

    return {
        showLog: args[1] === undefined
            ? showLog
            : args[1] === "true",
        inJsFilePath: jsFilePath || process.cwd(),
        inActionName
    };
};