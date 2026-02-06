import express from 'express';

const router = express.Router();

import { router as routerFromInsert } from "./Insert/routes.js"

router.use("/Insert", routerFromInsert);

export { router };