const mongoose = require("mongoose");

const dhtSchema = new mongoose.Schema({
    title_molxona: String,
    temperature_molxona: Number,
    humidity_molxona: Number,
    title_issiqxona: String,
    temperature_issiqxona: Number,
    humidity_issiqxona: Number,
});

module.exports = mongoose.model("Dht", dhtSchema);
