import { productModel } from "../models/productModel.js";

export const getProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    console.log("products", products);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
