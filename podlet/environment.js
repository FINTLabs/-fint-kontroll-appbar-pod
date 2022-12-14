const packageJson = require("./package.json");
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'
const K8S_CLUSTER = process.env.K8S_CLUSTER
const PODLET_NAME = process.env.PODLET_NAME || packageJson.name

const PODLET_CONTAINER_ID = process.env.PODLET_CONTAINER_ID || PODLET_NAME
const PODLET_PORT = process.env.PODLET_PORT || 7100

const PODLET_BASE_PATH = IS_DEVELOPMENT ? `http://localhost:${PODLET_PORT}/` : `https://cdn.flais.io/${K8S_CLUSTER}/${PODLET_NAME}/`

const PODLET_VERSION = process.env.PODLET_VERION || '1.0.0'
const PODLET_PATH_NAME = process.env.PODLET_PATHNAME || '/'

module.exports = {
    IS_DEVELOPMENT,
    K8S_CLUSTER,
    PODLET_NAME,
    PODLET_CONTAINER_ID,
    PODLET_VERSION,
    PODLET_PATH_NAME,
    PODLET_BASE_PATH,
    PODLET_PORT
}
