require("dotenv").config();

const express = require("express");
const connectingDataBase = require("./MONGODB_CONNECT/index.js");
const cors = require("cors");
const routes = require("./ROUTES/donor.js");

const app = express();

app.use(express.json());
connectingDataBase();

app.use(cors());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 8060");
});
