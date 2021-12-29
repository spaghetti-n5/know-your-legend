import React, { useState } from 'react';
import './App.css';
import content from './content/content.json';
import FilterMenu from './components/FilterMenu';
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
      <FilterMenu content={content} changeOption={handleChange} />
      <div className='cardWrap'>
        <Card cards={cards} />  
      </div>
    </div>
  );
}

export default App;
