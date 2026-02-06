import express from 'express';

const router = express.Router();

import { router as routerFromWsChat } from "./WsChat/routes.js";

router.use("/WsChat", routerFromWsChat);

export { router };