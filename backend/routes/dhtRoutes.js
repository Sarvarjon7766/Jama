const express = require("express");
const Dht = require("../models/Dht");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        // So'nggi qo'shilgan ma'lumotni olish (limit(1) faqat bitta yozuvni oladi)
        const dhtData = await Dht.find().sort({ _id: -1 }).limit(1);
        
        res.json(dhtData);
        
        
        
    } catch (error) {
        console.error("Error fetching DHT data", error);
        res.status(500).send("Server error");
    }
});

router.post("/", async (req, res) => {
    try {
        // Ma'lumotlar bazasida mavjud bo'lgan yagona yozuvni yangilash yoki yaratish
        const updatedDht = await Dht.findOneAndUpdate(
            {}, // Filtr bo'sh qoldirilgan, shunda mavjud yagona yozuv yangilanadi
            {
                title_molxona: req.body.title_molxona,
                temperature_molxona: req.body.temperature_molxona,
                humidity_molxona: req.body.humidity_molxona,
                title_issiqxona: req.body.title_issiqxona,
                temperature_issiqxona: req.body.temperature_issiqxona,
                humidity_issiqxona: req.body.humidity_issiqxona
            },
            { new: true, upsert: true } // Yangilangan yozuvni qaytarish va mavjud bo'lmasa yaratish
        );

        res.json(updatedDht);
    } catch (error) {
        console.error("Error updating DHT data:", error);
        res.status(500).json({ error: "Ma'lumotlarni yangilashda xatolik yuz berdi" });
    }
});

module.exports = router;
