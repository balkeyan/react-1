import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

function App() {
  const games = [
    { id: 1, title: "Minecraft", platform: "PC" },
    { id: 2, title: "Mario Kart", platform: "Nintendo Switch" },
    { id: 3, title: "Rocket League", platform: "PlayStation 5" },
    { id: 4, title: "🚀 ROC Amstelland Dev Challenge", platform: "ESP32, Raspberry Pi, Arduino" },
  ];

  return (
    <div className="container">
      <Header title="🎮 Game Collection" />

      <div className="game-list">
        {games.map((game) => (
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
