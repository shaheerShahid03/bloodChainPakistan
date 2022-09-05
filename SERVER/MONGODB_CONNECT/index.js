const mongoose = require("mongoose");

const connectingDataBase = async () => {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log("DataBase Connected");
};

module.exports = connectingDataBase;
