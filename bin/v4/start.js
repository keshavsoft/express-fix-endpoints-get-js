import parseInput from "./core/parseInput.js";
import showUsage from './core/showUsage.js';

import updateJs from "./UpdateJs/index.js";

import pkg from '../../package.json' with { type: 'json' };

const version = pkg.version;

const run = ({ endPointsJsPath, showLog, inActionName, inFolderName, inGetType }) => {
  const input = parseInput({
    jsFilePath: endPointsJsPath, showLog,
    inActionName, inFolderName, inGetType
  });

  if (input.cmd === "--help" || input.cmd === "-h" || input.cmd === "help") return showUsage(version);

  updateJs(input);
};

export default run;