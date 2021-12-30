import React, { useState } from 'react';
import './App.css';
import content from './content/content.json';
import FilterMenuNames from './components/FilterMenuNames';
import FilterMenuTraits from './components/FilterMenuTraits';
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState(content);

  const handleChangeName = (val) => {
    var filteredData = content.filter(function(item) {
      return item.name === val;
    });
    setCards(filteredData);
  };

  const handleChangeTrait = (val) => {
    const res = cards.filter(x =>
                x.traits.some(y =>
                    y.value === val)
                )
    setCards(res);
  };

  return (
    <div>
      <FilterMenuNames content={content} changeOption={handleChangeName}/>
      <FilterMenuTraits content={content} changeOption={handleChangeTrait}/>
      <div className='cardWrap'>
        <Card cards={cards} />  
      </div>
    </div>
  );
}

export default App;
