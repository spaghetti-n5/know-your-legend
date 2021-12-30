import React, { useState } from 'react';
import './App.css';
import content from './content/content.json';
import FilterMenuNames from './components/FilterMenuNames';
import FilterMenuTraits from './components/FilterMenuTraits';
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState(content);

  const handleChangeName = (val) => {
    var filteredDataName = content.filter(function(item) {
      return item.name === val;
    });
    setCards(filteredDataName);
  };

  const handleChangeTrait = (val) => {
    const filteredDataTrait = cards.filter(x => x.traits.some(y => y.value === val));
    setCards(filteredDataTrait);
  };

  const showAllHandler = () => {
    setCards(content);
  }

  return (
    <div className='layout'>
      <div className='header'>
        <button className='button' onClick={showAllHandler}>Show all</button>
        <FilterMenuNames content={cards} changeOption={handleChangeName} />
        <FilterMenuTraits content={cards} changeOption={handleChangeTrait} />
      </div>
      <div className='cardWrap'>
        <Card cards={cards} />  
      </div>
    </div>
  );
}

export default App;
