import { Router } from "express";
import { addRate, getAllRates } from "../controllers/rate.controller.js";
const router = Router();
router.route("/addRate").post(addRate);
router.route("/getAllRates").get(getAllRates);
export default router;