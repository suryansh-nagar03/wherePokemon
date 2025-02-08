import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Win({ playTime, game }) {
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();
    const timeInSeconds = Math.floor(playTime / 1000);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const playerName = document.getElementById("playerName").value;
        
        if (!playerName) {
            alert("Please enter your name!");
            return;
        }

        try {
            const response = await axios.post('https://wherespokemon.onrender.com/leaderboard', {
                name: playerName,
                time: timeInSeconds,
                game: game
            });

            if (response.status === 200) {
                setSubmitted(true);
                navigate(`/leaderboard?game=${game}`);
            } else {
                alert("Failed to submit score");
            }
        } catch (error) {
            console.error("Error submitting score:", error);
            alert("Error submitting score");    
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-5 fixed inset-0 bg-black/20 backdrop-blur-sm z-50">
            <div className="flex flex-col justify-center items-center gap-5 bg-white p-8 rounded-lg border-2 border-black">
                <div className="text-2xl">Congratulations! </div>
                <div className="flex flex-col gap-2 justify-center items-center"> 
                    <p className="text-xs">You've found all the Pokemon in</p>
                    <p className="text-xs font-semibold">{timeInSeconds}s</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2">
                    <input type="text" placeholder="Enter your name" id="playerName" className="text-xs border-1 border-black rounded-md text-center outline-0"></input>
                    <button type="submit" className="hover:cursor-pointer hover:scale-110">Submit</button>
                </form>
            </div>
        </div>
    )
};

export default Win;