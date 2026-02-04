import express from 'express';

const router = express.Router();

import { router as routerFromTask1 } from "./Task1/routes.js";
import { router as routerFromStudentNames } from "./StudentNames/routes.js";

router.use("/Task1", routerFromTask1);
router.use("/StudentNames", routerFromStudentNames);

export { router };