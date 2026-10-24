import { useState } from "react";

function GameCard(props) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="game-card">
      {props.image && (
        <img
          src={`/images/${props.image}`}
          alt={props.title}
          className="game-image"
        />
      )}

      <h2>{props.title}</h2>
      <p className="rating">⭐ {props.rating}</p>

      <p>Platform: {props.platform}</p>
      <p>Genre: {props.genre}</p>
      <p>Jaar: {props.year}</p>
      <p>Developer: {props.developer}</p>
      <p>Multiplayer: {props.multiplayer ? "Ja" : "Nee"}</p>
      <p>Leeftijd: {props.leeftijd}+</p>

      <button
        className="favorite-button"
        onClick={() => setFavorite(!favorite)}
      >
        {favorite ? "❤️ Favoriet" : "🤍 Favoriet"}
      </button>
    </div>
  );
}

export default GameCard;
