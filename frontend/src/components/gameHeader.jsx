import { Link } from "react-router-dom";

const gameMapping = {
  "1": {
      img1: "/game1-p1.jpeg",
      name1: "Pikachu",
      img2: "/game1-p2.jpeg",
      name2: "Bellspout",
      img3: "/game1-p3.png",
      name3: "Magikarp"
  },
  "2": {
      img1: "/game2-p1.jpeg",
      name1: "Charmander",
      img2: "/game2-p2.jpeg",
      name2: "Azurill",
      img3: "/game2-p3.jpeg",
      name3: "Jynx"
  },
  "3": {
      img1: "/game3-p1.jpeg",
      name1: "Groudon",
      img2: "/game3-p2.jpeg",
      name2: "Primeape",
      img3: "/game3-p3.jpeg",
      name3: "Mr.Mime"
  },
}

function GameHeader({ game, foundPokemon }) {
  const isFound = (pokemonName) => {
    return foundPokemon.some(p => p.name === pokemonName && p.completed);
  };

  return (
    <div className="flex justify-around items-center gap-20 bg-white">
      <Link to={"/"} >
            <div className=" flex justify-center items-center p-2">
                <div className="flex items-center">
                    <img src="/detective-pikachu.png" className="h-36" />
                    <div className="flex text-2xl gap-5 tracking-tighter">
                        <div className="text-red-500">Where's</div>
                        <div>Pokemon</div> 
                    </div>
                </div>
            </div>
        </Link>
        <div className="flex justify-center gap-10">  
          <div className={`flex flex-col items-center gap-4 ${isFound(gameMapping[game].name1) ? 'opacity-30' : ''}`}>
            <img src={gameMapping[game].img1} className="h-15"></img>
            <div className="text-[0.7rem]">{gameMapping[game].name1}</div>
          </div>
          <div className={`flex flex-col items-center gap-4 ${isFound(gameMapping[game].name2) ? 'opacity-30' : ''}`}>
            <img src={gameMapping[game].img2} className="h-15"></img>
            <div className="text-[0.7rem]">{gameMapping[game].name2}</div>
          </div>
          <div className={`flex flex-col items-center gap-1 ${isFound(gameMapping[game].name3) ? 'opacity-30' : ''}`}>
            <img src={gameMapping[game].img3} className="h-18"></img>
            <div className="text-[0.7rem]">{gameMapping[game].name3}</div>
          </div>
        </div>
    </div>
  );
}

export default GameHeader;