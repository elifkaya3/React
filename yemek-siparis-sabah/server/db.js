const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://elif:1234@cluster0.keh4ri1.mongodb.net/yemek-siparis-sabah?retryWrites=true&w=majority"
);

var db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongo DB bağlantısı başarılı");
});
db.on("error", () => {
  console.log("Mongo DB bağlantısı başarısız");
});

module.exports = mongoose;
