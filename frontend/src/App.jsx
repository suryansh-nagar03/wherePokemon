import Header from './components/header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home"; 
import { Outlet } from "react-router-dom";
import Leaderboard from './components/leaderboard';

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/leaderboard' element={<Layout />}>
            <Route index element={<Leaderboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
