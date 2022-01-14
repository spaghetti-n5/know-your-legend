import React from 'react';
import './Card.css';

const Card = ({ cards }) => (
    <>
        {cards.map((item, i) => (
            <div className='card' key={i}>
              <img src={item.image_preview_url} alt="legendImage" width="100%" />
              {item.traits.map((trait, i) => {
                if (trait.trait_type === "Legend")
                  return <p className="cardTitle" key={i}>{item.token_id} - {trait.value}</p>;
                return null;
              })}
            </div>)
        )}
    </>
);

export default Card;