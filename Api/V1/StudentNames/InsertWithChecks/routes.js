import express from 'express';

const router = express.Router();

import { router as routerFromForUniqueAndImage } from "./2.ForUniqueAndImage/routes.js";

router.use("/ForUniqueAndImage", routerFromForUniqueAndImage);

export { router };