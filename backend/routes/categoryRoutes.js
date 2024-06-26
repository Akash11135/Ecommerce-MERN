import express from "express";
import {
  addAnotherCategory,
  getAllCategories,
  removeCategory,
  updateCategory,
} from "../controllers/categoryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

router.get("/getAllCategories", authMiddleware, getAllCategories);
router.post("/add-category", authMiddleware, addAnotherCategory);
router.post("/delete-category", authMiddleware, removeCategory);
router.post("/update-category", authMiddleware, updateCategory);
export default router;
