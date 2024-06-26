import express from "express";
import {
  addToCart,
  removeFromCart,
  updateCart,
  viewCart,
  checkout,
} from "../controllers/cartController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/add-to-cart", authMiddleware, addToCart);
router.post("/remove-from-cart", authMiddleware, removeFromCart);
router.post("/update-cart", authMiddleware, updateCart);
router.get("/view-cart", authMiddleware, viewCart);
router.post("/checkout", authMiddleware, checkout);

export default router;
