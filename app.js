import express from 'express';
import cookieParser from 'cookie-parser';
import http from 'http';

const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || 3000);

import { StartFunc as StartFuncFromWebSocketServer } from "./Projects/WebSocketServer/V2/entryFile.js";

import { router as routerFromMetaData } from "./MetaData/routes.js";

import { router as routerFromApi } from "./Api/routes.js";
import { router as routerFromV3 } from "./V3/routes.js";

app.use(express.static('Public'));
app.use(cookieParser());

app.use("/MetaData", routerFromMetaData);

app.use("/Api", routerFromApi);
app.use("/V3", routerFromV3);

StartFuncFromWebSocketServer(server);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);
});