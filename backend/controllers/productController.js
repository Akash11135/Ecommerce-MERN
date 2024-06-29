import Product from "../modals/Product.js";

const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();

    if (product) {
      return res.status(200).json(product);
    }
  } catch (error) {
    console.log("error in product : ", error);
    res.json({ ms: "error in getAllProducts." });
  }
};

const createProduct = async (req, res) => {
  try {
    const {
      id,
      title,
      description,
      category,
      price,
      discountPercentage,
      rating,
      stock,
      tags,
      brand,
      sku,
      weight,
      dimensions,
      warrantyInformation,
      shippingInformation,
      availabilityStatus,
      reviews,
      returnPolicy,
      minimumOrderQuantity,
      meta,
      images,
      thumbnail,
    } = req.body;

    const user = req.user;

    if (!user.isAdmin) {
      return res
        .status(403)
        .json({ message: "Not authorized. Admin access required." });
    }
    const duplicateTitle = await Product.findOne({ title: title });
    if (duplicateTitle) {
      return res.json({ mess: "product already exists." });
    }

    const duplicateId = await Product.findOne({ id: id });
    if (duplicateId) {
      return res.json({ mess: "product already exists." });
    }

    const product = new Product({
      id,
      title,
      description,
      category,
      price,
      discountPercentage,
      rating,
      stock,
      tags,
      brand,
      sku,
      weight,
      dimensions,
      warrantyInformation,
      shippingInformation,
      availabilityStatus,
      reviews,
      returnPolicy,
      minimumOrderQuantity,
      meta,
      images,
      thumbnail,
    });
    const createdProduct = await product.save();
    res.status(201).json({
      mess: "product created successfully.",
      title: createProduct.title,
    });
  } catch (error) {
    res.status(400).json({ message: "Product creation failed", error });
  }
};

const deleteProducts = async (req, res) => {
  try {
    const { title } = req.body;
    const user = req.user;
    if (!user.isAdmin) {
      res.json({ mess: "not authorised, only admin allowed." });
    }
    const product = await Product.findOne({ title: title });
    if (product) {
      await Product.deleteOne({ title: title });
      return res.json({ mess: "product deleted successfully." });
    } else {
      return res.json({ mes: "no product found." });
    }
  } catch (error) {
    res.status(400).json({ message: "Product creation failed", error });
  }
};

const updateProducts = async (req, res) => {
  try {
    const {
      id,
      title,
      description,
      category,
      price,
      discountPercentage,
      rating,
      stock,
      tags,
      brand,
      sku,
      weight,
      dimensions,
      warrantyInformation,
      shippingInformation,
      availabilityStatus,
      reviews,
      returnPolicy,
      minimumOrderQuantity,
      meta,
      images,
      thumbnail,
    } = req.body;
    const user = req.user;
    if (!user.isAdmin) {
      res.json({ mess: "not authorised, only admin allowed." });
    }
    const product = await Product.findOne({ title: title });
    if (product) {
      product.id = id;
      product.title = title;
      product.description = description;
      product.category = category;
      product.price = price;
      product.discountPercentage = discountPercentage;
      product.rating = rating;
      product.stock = stock;
      product.tags = tags;
      product.brand = brand;
      product.sku = sku;
      product.weight = weight;
      product.dimensions = dimensions;
      product.warrantyInformation = warrantyInformation;
      product.shippingInformation = shippingInformation;
      product.availabilityStatus = availabilityStatus;
      product.reviews = reviews;
      product.returnPolicy = returnPolicy;
      product.minimumOrderQuantity = minimumOrderQuantity;
      product.meta = meta;
      product.images = images;
      product.thumbnail = thumbnail;
      await product.save();
      res.json({ mess: "updated successfully." });
    }
  } catch (error) {
    res.status(400).json({ message: "Product creation failed", error });
  }
};
export { getAllProducts, createProduct, deleteProducts, updateProducts };
