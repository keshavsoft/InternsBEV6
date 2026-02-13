import express from 'express';

const router = express.Router();

import { router as routerFromInsertWithChecks } from "./InsertWithChecks/routes.js"
import { router as routerFromRead } from "./Read/routes.js"

router.use("/InsertWithChecks", routerFromInsertWithChecks);
router.use("/Read", routerFromRead);

export { router };