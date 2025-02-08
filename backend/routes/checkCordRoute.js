const express = require("express");
const router = express.Router();

const pokemonCardMapping = {
    1: [
        { "pikachu":[{xl:31.5},{xr:45},{yt:74.1},{yb:84.2}] },
        { "bellspout":[{xl:53.5},{xr:71.6},{yt:50.9},{yb:58.26}] },
        { "seaking":[{xl:25},{xr:33.5},{yt:11.5},{yb:19.5}] },
    ],
    2: [
        { "charmander":[{xl:73.1},{xr:77},{yt:33.5},{yb:38.5}] },
        { "azurill":[{xl:41},{xr:44},{yt:76},{yb:81}] },
        { "jynx":[{xl:67.2},{xr:71},{yt:53.8},{yb:60.3}] },
    ],
    3: [
        { "groudon":[{xl:62.8},{xr:72},{yt:9.7},{yb:15.9}] },
        { "primeape":[{xl:32.35},{xr:39.1},{yt:50.7},{yb:54.7}] },
        { "mr.mime":[{xl:4.6},{xr:10.36},{yt:66.72},{yb:70.6}] },
    ],
};  

router.post('/', (req, res) => {
    const { pokemonName, x, y, game } = req.body;
    console.log(pokemonName, x, y, game);
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

    const isWithinBounds = x >= xl && x <= xr && y >= yt && y <= yb;

    res.json({ 
        isCorrect: isWithinBounds,
        message: isWithinBounds ? "Correct location!" : "Wrong location!"
    });
});

module.exports = router;