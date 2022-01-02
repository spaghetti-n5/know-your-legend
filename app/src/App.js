import React, { useState } from 'react';
import './App.css';
import content from './content/content.json';
import FilterMenuNames from './components/FilterMenuNames';
import FilterSubMenuGeneric from './components/FilterSubMenuGeneric';
import Card from './components/Card';
import Pagination from './components/Pagination';

const PageSize = 30;
const traits = [ 
  "Accessories",
  "Background",
  "Clothes",
  "Club",
  "Hair",
  "Special Club Item",
  "Special Edition",
  "Special Legend Item",
  "Special Vibes",
  "Tattoos",
  "Vibes",
];

function App() {
  const [cards, setCards] = useState(content);
  const [resetFilter, setResetFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentName, setCurrentName] = useState("");
  
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentTableData = cards.slice(firstPageIndex, lastPageIndex);

  const handleChangeName = (val) => {
    setResetFilter(false);
    const filteredDataName = content.filter(x => x.traits.some(y => y.value === val));
    setCards(filteredDataName);
    setCurrentName(val);
  };

  const handleChangeTrait = (val) => {
    setResetFilter(false);
    let filteredDataName = [];
    if (currentName !== "") {
      filteredDataName = content.filter(x => x.traits.some(y => y.value === currentName));
    } else {
      filteredDataName = content;
    }
    const filteredTraits = filteredDataName.filter(x => x.traits.some(y => y.value === val));
    setCards(filteredTraits);  
  };

  const showAllHandler = () => {
    setCards(content);
    setResetFilter(true);
  };

  return (
    <>
      <div className='header'>
        <h1>Know your Legend</h1>
        <p className='headerSubtitle'>A site for House of Legends collectors</p>
      </div>
      <div className='filterBlock'>
        <div className='nameFilter'>
          <button className='button' onClick={showAllHandler}>Show all</button>
          <FilterMenuNames content={content} changeOption={handleChangeName} resetFilter={resetFilter} />
        </div>
        <div className='traitsFilters'>
          {traits.map((trait) => (
            <FilterSubMenuGeneric
              content={content}
              changeOption={handleChangeTrait}
              currentName={currentName}
              resetFilter={resetFilter}
              traitName={trait}
            />
          ))}
        </div>
      </div>
      <div className='cardWrap'>
        <Card cards={currentTableData} />  
      </div>
      <Pagination
        className='pagination-bar'
        currentPage={currentPage}
        totalCount={cards.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
}

export default App;
