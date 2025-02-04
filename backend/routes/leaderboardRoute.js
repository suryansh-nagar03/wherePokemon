const express = require("express");
const router = express.Router();
const Leaderboard = require("../models/leaderboardModel");

router.post('/', async (req, res) => {
    const { name, time, game } = req.body;

    const newUser = new Leaderboard({
        name,
        time,
        game
    });

    await newUser.save()

    res.json(newUser);
});

router.get('/', async (req, res) => {
    const {game} = req.query;
    const leaderboard = await Leaderboard.find({game}).sort({time: 1});
    res.json(leaderboard);
});

module.exports = router;
