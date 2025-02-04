const express = require('express');

const app = express();
require('dotenv').config();

const connectDB = require('./config/db');
const port = process.env.PORT || 3000;

const leaderboardRoute = require('./routes/leaderboardRoute');
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/leaderboard', leaderboardRoute);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);