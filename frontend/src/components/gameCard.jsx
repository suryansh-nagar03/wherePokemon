import { Link, useLocation } from "react-router-dom"

export default function GameCard({img,text,url,game,setSelected}) {
    const location = useLocation();
    const isLeaderboard = location.pathname === '/leaderboard';
    
    return (
        <>
            <div className= "flex flex-col justify-center items-center p-2 gap-2 bg-white shadow-lg rounded-lg" onClick={(e) => setSelected(game)}> 
                <img src={img} alt="" className="h-60 w-60"/>
                <div className="tracking-tight text-sm">{text}</div>
                {!isLeaderboard && 
                    <Link to={url}>
                        <button className="bg-[#6929b1] text-white text-sm p-2 pt-1 pb-1 rounded-lg hover:scale-95 hover:cursor-pointer hover:opacity-80">
                            <div>Start</div>
                        </button>
                    </Link>
                }
            </div>
        </>
    )
};