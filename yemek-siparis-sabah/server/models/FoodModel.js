const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    varient: [],
    prices: [],
    category: { type: String, required: true },
    img: { type: String, required: true },
    desc: { type: String, required: true },
  },
  {
    timestamps: true, //güncellendiği ve oluşturulduğu tarihi otomatik olarak tutmasını sağlayacak..
  }
);

const FoodModel = mongoose.model("foods", FoodSchema);
module.exports = FoodModel;
