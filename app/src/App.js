import React, { useState } from 'react';
import './App.css';
import content from './content/content.json';
import FilterMenuNames from './components/FilterMenuNames';
import FilterSubMenuGeneric from './components/FilterSubMenuGeneric';
import Card from './components/Card';
import Pagination from './components/Pagination';

const PageSize = 30;
const traits = [ 
  "Background",
  "Clothes",
  "Accessories",
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
  const [currentTraitFilter, setCurrentTraitFilter] = useState("");
  
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentTableData = cards.slice(firstPageIndex, lastPageIndex);

  const handleChangeName = (val) => {
    setResetFilter(false);
    const filteredDataName = content.filter(x => x.traits.some(y => y.value === val));
    setCards(filteredDataName);
    setCurrentName(val);
  };

  // Finds and returns an object containing a keyToFind === valToFind
  const findNestedObj = (entireObj, keyToFind, valToFind) => {
    let foundObj;
    JSON.stringify(entireObj, (_, nestedValue) => {
      if (nestedValue && nestedValue[keyToFind] === valToFind) {
        foundObj = nestedValue;
      }
      return nestedValue;
    });
    return foundObj;
  };

  const handleChangeTrait = (val) => {
    setResetFilter(false);
    let filteredDataName = [];
    if (currentName !== "") {
      filteredDataName = content.filter(x => x.traits.some(y => y.value === currentName));
    } else {
      filteredDataName = content;
    }
    // Useful for resetting the filter. Ideally we don't perform this search
    // because we can probably get this valu from filterID
    const traitType = findNestedObj(filteredDataName, "value", val)['trait_type'];
    setCurrentTraitFilter(traitType);

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
              resetFilter={currentTraitFilter === trait ? false : true}
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
