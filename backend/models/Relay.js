const mongoose = require("mongoose");

const relaySchema = new mongoose.Schema({
    molxona_temperature: Boolean,
    molxona_humidity: Boolean,
    issiqxona_temperature: Boolean,
    issiqxona_humidity: Boolean,
});

module.exports = mongoose.model("Relay", relaySchema);
