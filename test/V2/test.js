import index from "../../index.js";
import checkLines from "./checkLines.json" with {type: "json"};

const startFunc = async () => {
    // console.log("checkLines : ", checkLines);

    await index({
        showLog: true,
        endpoint: "Alter",
        inCheckLines: checkLines
    });
};

startFunc().then();