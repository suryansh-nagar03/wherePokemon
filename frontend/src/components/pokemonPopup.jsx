import { useParams } from "react-router-dom";
import axios from 'axios';

function PokemonPopup({
  x,
  y,
  clicked,
  setClicked,
  pokemonList,
  setPokemonList,
  finished,
  setFinished,
}) {
  const { game } = useParams();

  let codX, codY;
  if (x > window.innerWidth / 2) {
    codX = x - 180;
  } else {
    codX = x + 40;
  }
  if (y > window.innerHeight / 2) {
    codY = y - 140;
  } else {
    codY = y + 20;
  }
  
  const handleSelect = async (e) => {
    // console.log(game);
    const gameImage = document.querySelector('.game-image');
    if (!gameImage) return;

    const centX = (x / window.innerWidth) * 100;
    const imageTop = gameImage.offsetTop;
    const imageHeight = gameImage.offsetHeight;
    const relativeY = y - imageTop;
    const centY = (relativeY / imageHeight) * 100;

    const selectedPokemon = e.target.innerText;
    console.log(centX, centY);

    try {
      const response = await axios.post(
        `https://wherespokemon.onrender.com/api/check-coordinates`,
        {
          pokemonName: selectedPokemon,
          x: centX,
          y: centY,
          game: game
        }
      );

      if (response.data.isCorrect) {
        const updatedList = pokemonList.map(poke => 
          poke.name === selectedPokemon 
            ? {...poke, completed: true}
            : poke
        );
        setPokemonList(updatedList);
        alert(`Correct! You found ${selectedPokemon}`);
      }
    } catch (error) {
      console.error("Error verifying pokemon location:", error);
      alert("Error checking location");
    }

    setClicked(false);
  };

  return (
    <div
      className="flex flex-col absolute top-0 left-0 bg-white justify-center items-center"
      style={{
        top: `${codY}px`,
        left: `${codX}px`,
      }}
    >
      {pokemonList
        .filter(poke => !poke.completed)  
        .map((poke) => (
          <div
            key={poke.name}
            className="flex items-center gap-4 p-1 border w-full hover:cursor-pointer"
            onClick={handleSelect}
          >
            <img src={poke.image} className="h-4 sm:h-7 md:h-10" alt={poke.name} />
            <div className="text-[0.4rem] sm:text-[0.5rem] md:text-[0.7rem]">{poke.name}</div>
          </div>
        ))}
    </div>
  );
}

export default PokemonPopup;
