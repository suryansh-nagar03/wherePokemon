const express = require('express');

const app = express();
require('dotenv').config();
const cors = require('cors');

const connectDB = require('./config/db');
const port = process.env.PORT || 3000;

const leaderboardRoute = require('./routes/leaderboardRoute');
const checkCordRoute = require('./routes/checkCordRoute');

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/leaderboard', leaderboardRoute);
app.use('/api/check-coordinates', checkCordRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);