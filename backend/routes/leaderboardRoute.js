const express = require("express");
const router = express.Router();
const Leaderboard = require("../models/leaderboardModel");

router.post('/', async (req, res) => {
    try {
        const { name, time, game } = req.body;

        const newUser = new Leaderboard({
            name,
            time,
            game
        });

        await newUser.save();
        res.status(200).json({
            success: true,
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

router.get('/', async (req, res) => {
    const {game} = req.query;
    const leaderboard = await Leaderboard.find({game}).sort({time: 1});
    console.log(leaderboard);
    res.json(leaderboard);
});

module.exports = router;
