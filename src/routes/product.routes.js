import { Router } from "express";
import {addProduct}  from "../controllers/product.controller.js";;
import {getProducts} from "../controllers/product.controller.js";
const router = Router();

// Routes

router.route("/addProduct")
    .post(addProduct);

router.route("/getProducts").get(getProducts);


export default router;