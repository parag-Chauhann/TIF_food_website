import React, { useState } from 'react';
import './CardSlider.css';
import img8 from "./IMG/Picture8.png";
import img9 from "./IMG/Picture9.png";

const CardSlider = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const nextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  return (
    <div className="card-slider">
      <h1>Latest Articles</h1>
      <div className="cards-container" style={{ transform: `translateX(-${currentCardIndex * 100}%)` }}>
        {cards.map((card, index) => (
          <div key={index} className={`card ${index === currentCardIndex ? 'active' : ''}`}>
            <div className="sub-cards">
              {card.subCards.map((subCard, subIndex) => (
                <div key={subIndex} className="sub-card">
                  <img src={subCard.image} alt={subCard.title} />
                  <div className='sub-card-info'>
                  <h3>{subCard.title}</h3>
                  <p>{subCard.description}</p>
                  <button type="button" class="btn btn-outline-dark">Read More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


      <div className="pagination">
        <img className="pagination-img" src={img8} onClick={prevCard} disabled={currentCardIndex === 0} alt="previous"/>
        <span>{` ${currentCardIndex + 1}/${cards.length}`}</span>
        <img className="pagination-img"  src={img9} onClick={nextCard} disabled={currentCardIndex === cards.length - 1} alt="next"/>
      </div>
    </div>
  );
};

export default CardSlider;
