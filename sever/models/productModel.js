import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    image: {
      type: String,
    },

    name: {
      type: String,
      required: true,
    },
    priceOld: {
      type: String,
      default: 0,
    },
    priceCurrent: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
);
export const productModel = mongoose.model("Product", schema);
