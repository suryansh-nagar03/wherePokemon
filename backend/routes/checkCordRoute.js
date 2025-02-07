const express = require("express");
const router = express.Router();

const pokemonCardMapping = {
    1: [
        { "pikachu":[{xl:31.5},{xr:45},{yt:125},{yb:140}] },
        { "bellspout":[{xl:54},{xr:66},{yt:84.5},{yb:97}] },
        { "seaking":[{xl:25},{xr:33.5},{yt:19},{yb:31.5}] },
    ],
    2: [
        { "charmander":[{xl:73.1},{xr:77},{yt:27},{yb:31.5}] },
        { "azurill":[{xl:41.5},{xr:44},{yt:62},{yb:66}] },
        { "jynx":[{xl:67.2},{xr:71},{yt:43.5},{yb:49}] },
    ],
    3: [
        { "groudon":[{xl:62.8},{xr:72},{yt:16.8},{yb:27.8}] },
        { "primeape":[{xl:32.35},{xr:39.1},{yt:90.4},{yb:97.6}] },
        { "mr.mime":[{xl:4.6},{xr:10.36},{yt:118.5},{yb:126.5}] },
    ],
};  

router.post('/', (req, res) => {
    const { pokemonName, x, y, game } = req.body;

    if (!pokemonCardMapping[game]) {
        return res.status(400).json({ isCorrect: false, message: "Invalid game ID" });
    }

    const pokemonData = pokemonCardMapping[game].find(p => 
        Object.keys(p)[0].toLowerCase() === pokemonName.toLowerCase()
    );
    
    if (!pokemonData) {
        return res.json({ isCorrect: false, message: "Pokemon not found" });
    }

    const coordinates = pokemonData[Object.keys(pokemonData)[0]];
    const xl = coordinates[0].xl;
    const xr = coordinates[1].xr;
    const yt = coordinates[2].yt;
    const yb = coordinates[3].yb;

    // Check if clicked coordinates are within the boundary box
    const isWithinBounds = x >= xl && x <= xr && y >= yt && y <= yb;

    res.json({ 
        isCorrect: isWithinBounds,
        message: isWithinBounds ? "Correct location!" : "Wrong location!"
    });
});

module.exports = router;