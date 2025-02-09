import GameCard from "./gameCard"
import {Link} from "react-router-dom"
import useScrollTop from "../hooks/useScrollTop"

function Home(){
    useScrollTop();
    return (
        <div className="pb:2 sm:pb-4 lg:pb-10">
            <div className="flex justify-center text-sm lg:text-base gap-4 pt-4 md:pt-6 lg:pt-8 tracking-tighter">
                <Link to={"leaderboard"}><div className="bg-white rounded-md p-1 font-bold">Leaderboard</div></Link>
                <a href="https://github.com/suryansh-nagar03/wherePokemon" className="bg-white rounded-md p-1 font-bold">Git Repo</a>
            </div>
            <div className="flex flex-wrap justify-center gap-10 p-6 md:p-8 lg:p-10">
                <GameCard img="/first-game.jpg" text="First Generation" url="/game/1" />
                <GameCard img="/second-game.jpg" text="Second Generation" url="/game/2" />
                <GameCard img="/third-game.png" text="Third Generation" url="/game/3" />
            </div>
        </div>
    )
}

export default Home