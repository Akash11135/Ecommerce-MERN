import axios from "axios";
import Category from "../modals/Category.js";
import { json } from "express";

// const getAllCategories = async (req, res) => {
//   try {
//     let response = [];

//     const respCat = await axios.get(
//       "https://dummyjson.com/products/categories"
//     );
//     if (respCat.data) {
//       const categoryPromises = respCat.data.map(async (item) => {
//         const prodData = await axios.get(
//           `https://dummyjson.com/products/category/${item.slug}`
//         );
//         const itemName = item;
//         const relProducts = [];
//         if (prodData.data?.products) {
//           prodData.data.products.forEach((product) => {
//             relProducts.push(product);
//           });
//         }
//         return {
//           categoryName: itemName,
//           products: relProducts,
//         };
//       });

//       response = await Promise.all(categoryPromises);
//       console.log(response);

//       return res.json(response); // Send the response to the client
//     }
//   } catch (error) {
//     return res.send({ mes: "error in getAllCategories.", error });
//   }
// };

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    if (categories) {
      return res.status(200).json(categories);
    }
  } catch (error) {
    console.error("Error in getting all categories:", error); // Added error logging
    return res.json({ mes: "Error in getting all categories." });
  }
};

const addAnotherCategory = async (req, res) => {
  try {
    const user = req.user;
    if (!user.isAdmin) {
      res.json({ mess: "not authorised, only admin allowed." });
    }
    const { categoryName, products } = req.body;
    if (categoryName) {
      const duplicate = await Category.findOne({ categoryName });
      if (duplicate) {
        return res.json({ mess: "Category already exists." });
      }
    }
    const newCategory = new Category({
      categoryName,
      products,
    });

    if (newCategory) {
      await newCategory.save();
      res.status(200).json({ mess: "new category added successfully." });
    }
  } catch (error) {
    return res.json({ mess: "Error in adding category." });
  }
};

const removeCategory = async (req, res) => {
  try {
    const user = req.user;
    if (!user.isAdmin) {
      return res.json({ mess: "not authorised, only admin allowed." });
    }
    const { _id } = req.body;
    const category = await Category.findById({ _id: _id });
    if (!category) {
      return res.status(200).json({ mes: "category not found." });
    }
    const deleteResult = await Category.deleteOne({ _id: _id });
    if (deleteResult) {
      return res.status(200).json({ mess: "category successfully deleted." });
    }
  } catch (error) {
    console.error("Error in removing category:", error);
    return res.status(500).json({ mes: "Error in removing category." });
  }
};

const updateCategory = async (req, res) => {
  try {
    const user = req.user;
    if (!user.isAdmin) {
      res.json({ mess: "not authorised, only admin allowed." });
    }
    const { _id, categoryName, products } = req.body;
    const category = await Category.findOne({ _id: _id });
    console.log(category);
    if (category) {
      category.categoryName = categoryName;
      category.products = products;
      await category.save();
    } else {
      return res.json({ mess: "No category found for updation." });
    }
    return res.status(200).json({ mess: "Category Updated successfully." });
  } catch (error) {
    return res.json({ mess: "Error in updating category." });
  }
};

export default removeCategory;

export { getAllCategories, addAnotherCategory, removeCategory, updateCategory };
