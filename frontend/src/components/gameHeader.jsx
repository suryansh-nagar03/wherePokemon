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
    <div className="flex flex-wrap xl:flex-nowrap justify-center items-center gap-8 sm:gap-10 md:gap-14 lg:gap-20 bg-white p-2">
      <Link to={"/"} >
            {/* <div className="flex justify-center items-center"> */}
                <div className="flex justify-center items-center gap-4 md:gap-2">
                    <img src="/detective-pikachu.png" className="w-24 h-24 lg:w-32 lg:h-32" />
                    <div className="flex text-md md:text-base lg:text-2xl xl:text-4xl gap-2 sm:gap-3 md:gap-4 lg:gap-5 tracking-tighter">
                        <div className="text-red-500">Where's</div>
                        <div>Pokemon</div> 
                    </div>
                </div>
            {/* </div> */}
        </Link>
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">  
          <div className={`flex flex-col items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 ${isFound(gameMapping[game].name1) ? 'opacity-30' : ''}`}>
            <img src={gameMapping[game].img1} className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
            <div className="text-[0.5rem] sm:text-xs md:text-sm lg:text-base">{gameMapping[game].name1}</div>
          </div>
          <div className={`flex flex-col items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 ${isFound(gameMapping[game].name2) ? 'opacity-30' : ''}`}>
            <img src={gameMapping[game].img2} className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
            <div className="text-[0.5rem] sm:text-xs md:text-sm lg:text-base">{gameMapping[game].name2}</div>
          </div>
          <div className={`flex flex-col items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 ${isFound(gameMapping[game].name3) ? 'opacity-30' : ''}`}>
            <img src={gameMapping[game].img3} className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
            <div className="text-[0.5rem] sm:text-xs md:text-sm lg:text-base">{gameMapping[game].name3}</div>
          </div>
        </div>
    </div>
  );
}

export default GameHeader;