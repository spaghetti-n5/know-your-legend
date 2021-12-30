import React, { useState } from 'react';
import './App.css';
import content from './content/content.json';
import FilterMenuNames from './components/FilterMenuNames';
import FilterMenuTraits from './components/FilterMenuTraits';
import Card from './components/Card';
import Pagination from './components/Pagination';

let PageSize = 30;

function App() {
  const [cards, setCards] = useState(content);
  const [resetFilter, setResetFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentName, setCurrentName] = useState("");
  const [filteredDataTrait, setFilterDataTrade] = useState(content);

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
    const filteredDataName = filteredDataTrait.filter(x => x.traits.some(y => y.value === currentName));
    console.log("filteredDataName",filteredDataName)
    const updatedFilteredDataTrait = filteredDataName.filter(x => x.traits.some(y => y.value === val));
    console.log("updatedFilteredDataTrait",updatedFilteredDataTrait);
    setCards(updatedFilteredDataTrait);
    setFilterDataTrade(content)
  };

  const showAllHandler = () => {
    setCards(content);
    setResetFilter(true);
  };
  console.log("filteredDataTrait", filteredDataTrait);
  return (
    <div className='layout'>
      <div className='header'>
        <button className='button' onClick={showAllHandler}>Show all</button>
        <FilterMenuNames content={content} changeOption={handleChangeName} resetFilter={resetFilter} />
        <FilterMenuTraits content={content} changeOption={handleChangeTrait} currentName={currentName} resetFilter={resetFilter} />
      </div>
      <div className='cardWrap'>
        <Card cards={currentTableData} />  
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={cards.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
}

export default App;
