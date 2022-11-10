import { useState } from "react";

const Card = ({ card, showImage }) => {
  return (
    <div className="card" onClick={() => showImage(card.id)}>
      <img src={card.image} alt={"image "} />
    </div>
  );
};

export default Card;
