import express from "express";
const router = express.Router();
import { getBrandsFrontend } from "../../controllers/configuration/master/brands.controller.js";

router.get("/brands/all", getBrandsFrontend);

export default router;
