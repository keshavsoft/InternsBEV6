import express from 'express';

const router = express.Router();

import { router as routerFromTask1 } from "./Task1/routes.js";

router.use("/Task1", routerFromTask1);

export { router };