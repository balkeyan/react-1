import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />

      <div className="games">
        <h2>Welkom bij mijn eerste React-applicatie!</h2>
        <p>
          Naam: Bayan Alkan <br />
          Studentnummer: 2108558 <br />
          Klas: 25A
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default App;
