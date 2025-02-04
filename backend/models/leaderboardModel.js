const {Schema,model} = require('mongoose');

const LeaderboardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    game:{
        type: Number,
        required: true
    }
});

const LeaderboardModel = model('Leaderboard',LeaderboardSchema);
module.exports = LeaderboardModel;