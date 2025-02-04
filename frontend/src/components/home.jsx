import GameCard from "./gameCard"
import {Link} from "react-router-dom"

function Home(){
    return (
        <>
            <div className="flex justify-center gap-4 pt-10 tracking-tighter">
                <Link to={"leaderboard"}><div className="bg-white rounded-md p-1 font-bold">Leaderboard</div></Link>
                <a href="https://github.com/suryansh-nagar03/wherePokemon" className="bg-white rounded-md p-1 font-bold">Git Repo</a>
            </div>
            <div className="flex justify-center gap-10 pt-10">
                <GameCard url="/first-game.jpg" text = {"First Generation"}></GameCard>
                <GameCard url="/second-game.jpg" text = {"Second Generation"}></GameCard>
                <GameCard url="/third-game.png" text = {"Third Generation"}></GameCard>
            </div>
        </>
    )
}

export default Home