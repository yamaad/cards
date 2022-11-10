import { useState } from "react";
import Card from "./Card";
const Cards = () => {
  const [cards, setCard] = useState([
    { id: 1, image: "/images/logo192.png" },
    { id: 2, image: "/images/logo192.png" },
    { id: 3, image: "/images/logo192.png" },
    { id: 4, image: "/images/logo192.png" },
    { id: 5, image: "/images/logo192.png" },
    { id: 6, image: "/images/logo192.png" },
  ]);
  const showImage = (id) => {
    setCard(
      cards.map((card) =>
        card.id === id && card.image === "/images/logo192.png"
          ? { ...card, image: "/images/1.png" }
          : card.id === id && card.image === "/images/1.png"
          ? { ...card, image: "/images/logo192.png" }
          : { ...card }
      )
    );
  };
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card key={card.id} card={card} showImage={showImage} />
      ))}
    </div>
  );
};

export default Cards;
