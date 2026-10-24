import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import games from "./data/games.json";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      <Header title="🎮 Game Collection" />

      <input
        className="search-input"
        type="text"
        placeholder="Zoek een game..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="game-list">
        {games
          .filter((game) =>
            game.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              platform={game.platform}
              genre={game.genre}
              rating={game.rating}
              year={game.year}
              image={game.image}
            />
          ))}
      </div>

      <p className="student">
        Naam: Bayan Alkan <br />
        Studentnummer: 2108558 <br />
        Klas: 25A
      </p>

      <Footer />
    </div>
  );
}

export default App;
