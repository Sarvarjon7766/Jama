const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:3000", // Frontend URL'ni o'rnating
  methods: ["GET", "POST"], // Ruxsat etilgan usullar
  credentials: true,
}));
app.use(express.json());

const dhtRoutes = require("./routes/dhtRoutes");
const relayRoutes = require("./routes/relayRoutes");

app.use("/dht", dhtRoutes);
app.use("/relay", relayRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(process.env.PORT ,() => console.log(`Server running on port ${process.env.PORT}`)))
    .catch(error => console.log(`${error} did not connect`));

