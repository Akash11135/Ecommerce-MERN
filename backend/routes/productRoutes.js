import express from "express";
import {
  getAllProducts,
  createProduct,
  deleteProducts,
  updateProducts,
} from "../controllers/productController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

router.get("/all-products", getAllProducts);
router.post("/createProduct", authMiddleware, createProduct);
router.post("/deleteProduct", authMiddleware, deleteProducts);
router.put("/updateProduct", authMiddleware, updateProducts);

export default router;
