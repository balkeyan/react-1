import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import games from "./data/games.json";

function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("standaard");

  // zoeken op titel, genre, platform en developer
  const filteredGames = games.filter((game) => {
    const text = search.toLowerCase();
    return (
      game.title.toLowerCase().includes(text) ||
      game.genre.toLowerCase().includes(text) ||
      game.platform.toLowerCase().includes(text) ||
      game.developer.toLowerCase().includes(text)
    );
  });

  // bonus: sorteren
  const sortedGames = [...filteredGames];
  if (sort === "rating") {
    sortedGames.sort((a, b) => b.rating - a.rating);
  }
  if (sort === "jaar") {
    sortedGames.sort((a, b) => b.year - a.year);
  }

  return (
    <div className="container">
      <Header
        title="🎮 Game Collection"
        slogan="Mijn favoriete games op een plek"
      />

      <div className="toolbar">
        <input
          className="search-input"
          type="text"
          placeholder="Zoek op titel, genre, platform of developer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="sort-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="standaard">Sorteren: standaard</option>
          <option value="rating">Hoogste rating eerst</option>
          <option value="jaar">Nieuwste eerst</option>
        </select>
      </div>

      <p className="count">{sortedGames.length} games gevonden</p>

      <div className="game-list">
        {sortedGames.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            platform={game.platform}
            genre={game.genre}
            rating={game.rating}
            year={game.year}
            developer={game.developer}
            multiplayer={game.multiplayer}
            leeftijd={game.leeftijd}
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
