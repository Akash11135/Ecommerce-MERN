import React from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../../hooks/ProductHooks/useProducts";

const CategoryProduct = () => {
  const { id } = useParams();
  const { products } = useProducts();
  if (products) {
    const filterProducts = products?.filter((prod) => prod._id === id);
    console.log(filterProducts);
  }
  return <div>CategoryProduct:{id}</div>;
};

export default CategoryProduct;
