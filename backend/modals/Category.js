import mongoose from "mongoose";
import Product, { productSchema } from "./Product.js";
const categorySchema = new mongoose.Schema({
  categoryName: {
    type: Object,
    required: true,
    unique: true,
  },
  products: [productSchema],
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
