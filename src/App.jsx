import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

function App() {
  const [search, setSearch] = useState("");

  const games = [
    { id: 1, title: "Minecraft", platform: "PC" },
    { id: 2, title: "Mario Kart", platform: "Nintendo Switch" },
    { id: 3, title: "Rocket League", platform: "PlayStation 5" },
    { id: 4, title: "🚀 ROC Amstelland Dev Challenge", platform: "ESP32, Raspberry Pi, Arduino" },
    { id: 5, title: "The Legend of Zelda", platform: "Nintendo Switch" },
    { id: 6, title: "Fortnite", platform: "PC" },
    { id: 7, title: "EA Sports FC 26", platform: "PlayStation 5" },
  ];

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
