import path from "path";
import index from "../../index.js";

const startFunc = async () => {
    await index({
        showLog: true,
        endPointsJsPath: path.join(process.cwd(), "end-points.js"),
        inActionName: "ToTest"
    });
};

startFunc().then();