import GameCard from "./gameCard"
import useScrollTop from "../hooks/useScrollTop"
import { useState,useEffect } from "react";
import LeaderboardTable from "./leaderboardTable";
import axios from "axios";

export default function Leaderboard(){
    useScrollTop();
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        return parseInt(params.get('game')) || 1;
    });
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:3000/leaderboard?game=${selected}`);
                const modifiedData = response.data
                    .map(item => ({
                        ...item,
                        date: new Date(item.date).toLocaleDateString()
                    }))
                    .sort((a, b) => a.time - b.time);
                setData(modifiedData);
                console.log(modifiedData);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [selected]);

    return (
        <div className="pb-10 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center pt-10 gap-10">        
                <div className="tracking-tight text-sm ">Select the game whose leaderboard you'd like to see</div>
                <div className="flex justify-center gap-10 pb-14">
                    <div className={`${selected===1?"border-yellow-600 border-2 rounded-lg shadow-[0_0px_30px_rgba(480,280,180,0.9)]":""}`}><GameCard img="/first-game.jpg" text="First Generation" game={1} setSelected={setSelected} /></div>
                    <div className={`${selected===2?"border-yellow-600 border-2 rounded-lg shadow-[0_0px_30px_rgba(480,280,180,0.9)]":""}`}><GameCard img="/second-game.jpg" text="Second Generation" game={2} setSelected={setSelected}/></div>
                    <div className={`${selected===3?"border-yellow-600 border-2 rounded-lg shadow-[0_0px_30px_rgba(480,280,180,0.9)]":""}`}><GameCard img="/third-game.png" text="All Generations" game={3} setSelected={setSelected}/></div>
                </div>
            </div>
            {loading && <div className="tracking-tighter">Loading...</div>}
            {(data.length===0) ? <div className="loading">No data available</div>: <LeaderboardTable data={data} />}
        </div>
    )
};