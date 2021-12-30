import React, { useState } from 'react';
import './App.css';
import content from './content/content.json';
import FilterMenuNames from './components/FilterMenuNames';
import FilterMenuTraits from './components/FilterMenuTraits';
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState(content);
  const [resetFilter, setResetFilter] = useState(false);

  const handleChangeName = (val) => {
    setResetFilter(false);
    const filteredDataName = cards.filter(x => x.traits.some(y => y.value === val));
    setCards(filteredDataName);
  };

  const handleChangeTrait = (val) => {
    setResetFilter(false);
    const filteredDataTrait = cards.filter(x => x.traits.some(y => y.value === val));
    setCards(filteredDataTrait);
  };

  const showAllHandler = () => {
    setCards(content);
    setResetFilter(true);
  };

  return (
    <div className='layout'>
      <div className='header'>
        <button className='button' onClick={showAllHandler}>Show all</button>
        <FilterMenuNames content={cards} changeOption={handleChangeName} resetFilter={resetFilter} />
        <FilterMenuTraits content={cards} changeOption={handleChangeTrait} resetFilter={resetFilter} />
      </div>
      <div className='cardWrap'>
        <Card cards={cards} />  
      </div>
    </div>
  );
}

export default App;
