import React from 'react';
import './Card.css';

const Card = ({ cards }) => (
    <>
        {cards.map((item) => (
            <div className='card' key={item.id}>
              <img src={item.image_preview_url} alt="legendImage" width="100%" />
              {item.traits.map((trait) => {
                if (trait.trait_type === "Legend")
                  return <p key={trait.value}>{trait.value}</p>;
                return null;
              })}
            </div>)
        )}
    </>
);

export default Card;