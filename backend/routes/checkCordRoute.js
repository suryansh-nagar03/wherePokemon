const express = require("express");
const router = express.Router();

router.post('/', (req, res) => {
    const { x, y } = req.body;
    const distance = Math.sqrt(x * x + y * y);
    res.json({ distance });
});