import express from 'express';

const router = express.Router();

import { router as routerFromUtility } from "./Utility/routes.js";
import { router as routerFromUsers } from "./Users/routes.js";
import { router as routerFromV1 } from "./V1/routes.js";

router.use("/Utility", routerFromUtility);
router.use("/Users", routerFromUsers);
router.use("/V1", routerFromV1);

export { router };