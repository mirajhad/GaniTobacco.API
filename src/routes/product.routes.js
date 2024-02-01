import { Router } from "express";
import addProduct  from "../controllers/product.controller.js";;
const router = Router();

// Routes

router.route("/addProduct")
    .post(addProduct);

export default router;