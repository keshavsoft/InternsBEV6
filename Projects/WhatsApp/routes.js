import express from 'express';

const router = express.Router();

import { router as V1 } from "./V1/routes.js";

router.use("/V1", V1);

export { router };