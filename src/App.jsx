import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

function App() {
  return (
    <div className="container">
      <Header title="🎮 Game Collection" />

      <div className="game-list">
        <GameCard title="Minecraft" platform="PC" />
        <GameCard title="Mario Kart" platform="Nintendo Switch" />
        <GameCard title="Rocket League" platform="PlayStation 5" />
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
