import Cart from "../modals/Cart.js";
import Product from "../modals/Product.js";
import User from "../modals/User.js";

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.body.userId;
    const product = await Product.findById({ _id: productId });
    //auth
    if (userId && product) {
      const totalPrice = product.price * quantity;
      const totalItems = quantity;
      const newCartItem = new Cart({
        user: userId,
        items: product,
        totalPrice: totalPrice,
        totalItems: totalItems,
      });
      if (newCartItem) {
        await newCartItem.save();
        return res.send({
          mes: "sucessfully added new cart item : ",
          newCartItem,
        });
      }
    }
  } catch (error) {
    return res.json({ mes: "error in add to cart." });
  }
};
const removeFromCart = async (req, res) => {};
const updateCart = async (req, res) => {};
const viewCart = async (req, res) => {};
const checkout = async (req, res) => {};

export { addToCart, updateCart, removeFromCart, viewCart, checkout };
