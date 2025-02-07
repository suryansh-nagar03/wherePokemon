import Header from "./components/header";
import GameHeader from "./components/gameHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import { Outlet, useParams } from "react-router-dom";
import Leaderboard from "./components/leaderboard";
import Game from "./components/game";
import { useState } from 'react';

function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

function GameLayout() {
  const { game } = useParams();
  const [pokemonList, setPokemonList] = useState([]);
  
  return (
    <div>
      <GameHeader game={game} foundPokemon={pokemonList} />
      <Game setPokemonList={setPokemonList} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Route>
        <Route path="/game" element={<GameLayout />}>
          <Route path=":game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
