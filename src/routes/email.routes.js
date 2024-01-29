import { Router } from "express";
import sendEmail from "../controllers/email.controller.js"
const router = Router();



router.route("/send").post(sendEmail);

export default router;