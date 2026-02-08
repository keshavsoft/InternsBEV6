import express from 'express';

const router = express.Router();

import { router as routerFromRead } from "./Read/routes.js"
import { router as routerFromInsert } from "./Insert/routes.js"
import { router as routerFromDelete } from "./Delete/routes.js"
import { router as routerFromImage } from "./Image/routes.js"
import { router as routerFromMail } from "./Mail/routes.js"
import { router as routerFromInsertWithChecks } from "./InsertWithChecks/routes.js"
import { router as routerFromSort } from "./Sort/routes.js"
import { router as routerFromGroupBy } from "./GroupBy/routes.js"
import { router as routerFromImport } from "./Import/routes.js"

router.use("/Read", routerFromRead);
router.use("/Insert", routerFromInsert);
router.use("/Delete", routerFromDelete);
router.use("/Image", routerFromImage);
router.use("/Mail", routerFromMail);
router.use("/InsertWithChecks", routerFromInsertWithChecks);
router.use("/Sort", routerFromSort);
router.use("/GroupBy", routerFromGroupBy);
router.use("/Import", routerFromImport);

export { router };