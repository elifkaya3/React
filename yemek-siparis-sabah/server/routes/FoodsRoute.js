const express = require("express");
const router = express.Router(); //sayfa geçişlerini rahat yapabilmek için yazıyoruz.
const FoodModel = require("../models/FoodModel");

router.get("/getAllFoods", (req, res) => {
  FoodModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
module.exports = router;
