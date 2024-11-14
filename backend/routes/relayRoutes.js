const express = require("express");
const Relay = require("../models/Relay");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
      // Database'dan relay statuslarini olish
      const relayData = await Relay.find();  // Agar kerakli qiymatlar bo'lsa
      res.json(relayData);
    } catch (error) {
      console.error("Error fetching relay data:", error);
      res.status(500).send("Server error");
    }
  });

router.post("/", async (req, res) => {
    const relay = await Relay.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(relay);
});

module.exports = router;
