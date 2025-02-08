import { useParams } from "react-router-dom";
import useScrollTop from "../hooks/useScrollTop";
import Rules from "./rules";
import { useState, useEffect } from "react";
import PokemonPopup from "./pokemonPopup";
import Win from "./win";

const gameMapping = {
  1: {
    name: "First Generation",
    image: "/first-game.jpg",
  },
  2: {
    name: "Second Generation",
    image: "/second-game.jpg",
  },
  3: {
    name: "Third Generation",
    image: "/third-game.png",
  },
};

const pokemon = {
  1: [
    {
      name: "Pikachu",
      image: "/game1-p1.jpeg",
    },
    {
      name: "Bellspout",
      image: "/game1-p2.jpeg",
    },
    {
      name: "Magikarp",
      image: "/game1-p3.png",
    },
  ],
  2: [
    {
      name: "Charmander",
      image: "/game2-p1.jpeg",
    },
    {
      name: "Azurill",
      image: "/game2-p2.jpeg",
    },
    {
      name: "Jynx",
      image: "/game2-p3.jpeg",
    },
  ],
  3: [
    {
      name: "Groudon",
      image: "/game3-p1.jpeg",
    },
    {
      name: "Primeape",
      image: "/game3-p2.jpeg",
    },
    {
      name: "Mr.Mime",
      image: "/game3-p3.jpeg",
    },
  ],
};

function Game({ setPokemonList: setParentPokemonList }) {
  useScrollTop();
  const { game } = useParams();
  const [showRules, setShowRules] = useState(true);
  const [{ x, y }, setCoordinates] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [pokemonList, setPokemonList] = useState(
    pokemon[game].map(poke => ({...poke, completed: false}))
  );
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [finished, setFinished] = useState(false);
  const [playTime, setPlayTime] = useState(0);

  useEffect(() => {
    const allCompleted = pokemonList.every(poke => poke.completed);
    if (allCompleted && !finished) {
      const endTime = new Date().getTime();
      const totalTime = endTime - startTime;
      setPlayTime(totalTime);
      setFinished(true);
    }
  }, [pokemonList, finished, startTime]);

  useEffect(() => {
    setParentPokemonList(pokemonList);
  }, [pokemonList, setParentPokemonList]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
      setCoordinates({ x, y });
      console.log(x, y);
    }
  };

  return (
    <div className="relative">
      {showRules && <Rules setShowRules={setShowRules} />}
      <img
        src={gameMapping[game].image}
        className="game-image w-full hover:cursor-pointer"
        onClick={handleClick}
      />
      {clicked && (
        <>
          <div
            className="absolute rounded-full w-10 h-10 bg-blue-500/20 border-1 border-black"
            style={{
              top: `${y - 20}px`,
              left: `${x - 20}px`,
            }}
          />
          <PokemonPopup
            x={x}
            y={y}
            clicked={clicked}
            setClicked={setClicked}
            pokemonList={pokemonList}
            setPokemonList={setPokemonList}
            finished={finished}
            setFinished = {setFinished}
          />
        </>
      )}
      {finished && <Win playTime={playTime} game={game}/>}
    </div>
  );
}

export default Game;