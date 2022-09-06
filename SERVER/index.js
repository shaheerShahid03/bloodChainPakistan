require("dotenv").config();

const express = require("express");
const connectingDataBase = require("./MONGODB_CONNECT/index.js");
const cors = require("cors");
const donorRegistrationRoutes = require("./ROUTER/donorRegistrationRouter.js");
const readyForDonationRouter = require("./ROUTER/readyForDonation.js");
const solvedCasesRoutes = require("./ROUTER/solvedCasesRouter.js");
const app = express();

app.use(express.json());
connectingDataBase();

app.use(cors());
app.use(donorRegistrationRoutes);
app.use(readyForDonationRouter);
app.use(solvedCasesRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 8060");
});
