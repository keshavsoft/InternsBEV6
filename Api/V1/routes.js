import express from 'express';

const router = express.Router();

import { router as routerFromTask2 } from "./Task2/routes.js";
import { router as routerFromStudentNames } from "./StudentNames/routes.js";
import { router as routerFromWsChat } from "./WsChat/routes.js";

router.use("/Task2", routerFromTask2);
router.use("/StudentNames", routerFromStudentNames);
router.use("/WsChat", routerFromWsChat);

export { router };