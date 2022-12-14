const express = require("express");
const podFactory = require("./pod-factory");
const {
    IS_DEVELOPMENT,
    PODLET_CONTAINER_ID,
    PODLET_PORT,
    PODLET_BASE_PATH
} = require("./environment");

const app = express();


const podlet = podFactory.createPod()


app.use(podlet.middleware());


IS_DEVELOPMENT && app.use("/static", express.static("build/static"));

app.get(podlet.content(), (req, res) => {
    res.status(200).podiumSend(`<div id="${PODLET_CONTAINER_ID}"></div>`);
});

app.get(podlet.manifest(), (req, res) => {
    res.status(200).send(podlet);
});

app.listen(PODLET_PORT, () => {
    console.log("Podlet  started!")
    console.log(`${PODLET_BASE_PATH}manifest.json`)
});

