const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const FoodModel = require("./models/FoodModel");
const foodsRoute = require("./routes/FoodsRoute");

app.use(cors());
app.use(express.json());

// app.get("/getfoods", (req, res) => {
//   FoodModel.find({}, (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

app.use("/api/foods", foodsRoute);
app.listen(3030, () => {
  console.log("Server çalışıyor...:)))))");
});
