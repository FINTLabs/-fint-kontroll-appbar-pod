const {podlet} = require("@fintlabs/fint-podium-react-podlet");
const packageJson = require("./package.json");
const log4js = require("log4js");
const log = log4js.getLogger();
const PODLET_NAME = process.env.PODLET_NAME || packageJson.name;

log.level = process.env.LOGGING_LEVEL || "info"


podlet.runPod(PODLET_NAME);


