import GameCard from "./gameCard"
import {Link} from "react-router-dom"

function Home(){
    return (
        <>
            <div className="flex justify-center gap-10 pt-10">
                <Link to={"leaderboard"}><div>LeaderBoard</div></Link>
                <a href="">Git Repo</a>
            </div>
            <div className="flex justify-center gap-10 pt-10">
                <GameCard url="/background.jpg"></GameCard>
                <GameCard url="/background.jpg"></GameCard>
                <GameCard url="/background.jpg"></GameCard>
            </div>
        </>
    )
}

export default Home