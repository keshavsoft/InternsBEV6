import express from 'express';

const router = express.Router();

import { StartFunc as StartFuncFromMiddleware } from "./MiddleWares/entryFile.js";

import { router as routerFromUtility } from "./Utility/routes.js";
import { router as routerFromUsers } from "./Users/routes.js";
import { router as routerFromV1 } from "./V1/routes.js";
import { router as routerFromSV1 } from "./SV1/routes.js";

router.use("/Utility", routerFromUtility);
router.use("/Users", routerFromUsers);
router.use("/V1", routerFromV1);
router.use("/SV1", StartFuncFromMiddleware, routerFromSV1);

export { router };