import React, { useState } from 'react';
import './App.css';
import content from './content/content.json';
import FilterMenuNames from './components/FilterMenuNames';
import FilterMenuTraits from './components/FilterMenuTraits';
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState(content);

  const handleChange = (val) => {
    setCards(val);
    var filteredData = content.filter(function(item) {
      return item.name === val;
    });
    setCards(filteredData);
  };

  return (
    <div>
      <FilterMenuNames content={content} changeOption={handleChange}/>
      <FilterMenuTraits content={content} changeOption={handleChange}/>
      <div className='cardWrap'>
        <Card cards={cards} />  
      </div>
    </div>
  );
}

export default App;
