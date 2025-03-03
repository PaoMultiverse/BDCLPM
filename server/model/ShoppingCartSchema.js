import mongoose, { Schema } from "mongoose";
import { DB_SCHEMA } from "../configs/Constants.js";
const ObjectId = mongoose.Types.ObjectId;

const ShoppingCartSchema = new Schema(
  {
    user: { type: ObjectId, ref: DB_SCHEMA.USER, required: true },
    items: [
      {
        product: { type: ObjectId, ref: DB_SCHEMA.PRODUCT, required: true },
        quantity: { type: Number, required: false, min: 1 },
        priceTotal: { type: Number, required: false },
      },
    ],
    count: {
      type: Number,
      max: 99,
    },
  },
  { timestamps: true }
);

const ShoppingCart = mongoose.model(DB_SCHEMA.SHOPINGCART, ShoppingCartSchema);

export default ShoppingCart;
