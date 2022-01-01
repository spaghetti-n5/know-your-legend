import React, { useState } from 'react';
import './App.css';
import content from './content/content.json';
import FilterMenuNames from './components/FilterMenuNames';
import FilterSubMenuGeneric from './components/FilterSubMenuGeneric';
import Card from './components/Card';
import Pagination from './components/Pagination';

let PageSize = 30;

function App() {
  const [cards, setCards] = useState(content);
  const [resetFilter, setResetFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentName, setCurrentName] = useState("");
  const [filteredDataBackground, setFilterDataBackground] = useState(content);
  const [filteredDataHair, setFilterDataHair] = useState(content);
  const [filteredDataClothes, setFilterDataClothes] = useState(content);
  const [filteredDataAccessories, setFilterDataAccessories] = useState(content);
  const [filteredDataSpecialClubItem, setFilterDataSpecialClubItem] = useState(content);
  const [filteredDataSpecialEdition, setFilterDataSpecialEdition] = useState(content);
  const [filteredDataSpecialLegendItem, setFilterDataSpecialLegendItem] = useState(content);
  const [filteredDataSpecialVibes, setFilterDataSpecialVibes] = useState(content);
  const [filteredDataVibes, setFilterDataVibes] = useState(content);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentTableData = cards.slice(firstPageIndex, lastPageIndex);

  const handleChangeName = (val) => {
    setResetFilter(false);
    const filteredDataName = content.filter(x => x.traits.some(y => y.value === val));
    setCards(filteredDataName);
    setCurrentName(val);
  };

  const handleChangeBackground = (val) => {
    setResetFilter(false);
    const filteredDataName = filteredDataBackground.filter(x => x.traits.some(y => y.value === currentName));
    const updatedFilteredDataBackground = filteredDataName.filter(x => x.traits.some(y => y.value === val));
    setCards(updatedFilteredDataBackground);
    setFilterDataBackground(content)
  };

  const handleChangeHair = (val) => {
    setResetFilter(false);
    const filteredDataName = filteredDataHair.filter(x => x.traits.some(y => y.value === currentName));
    const updatedFilteredDataHair = filteredDataName.filter(x => x.traits.some(y => y.value === val));
    setCards(updatedFilteredDataHair);
    setFilterDataHair(content)
  };

  const handleChangeClothes = (val) => {
    setResetFilter(false);
    const filteredDataName = filteredDataClothes.filter(x => x.traits.some(y => y.value === currentName));
    const updatedFilteredDataClothes = filteredDataName.filter(x => x.traits.some(y => y.value === val));
    setCards(updatedFilteredDataClothes);
    setFilterDataClothes(content)
  };

  const handleChangeAccessories = (val) => {
    setResetFilter(false);
    const filteredDataName = filteredDataAccessories.filter(x => x.traits.some(y => y.value === currentName));
    const updatedFilteredDataAccessories = filteredDataName.filter(x => x.traits.some(y => y.value === val));
    setCards(updatedFilteredDataAccessories);
    setFilterDataAccessories(content)
  };

  const handleChangeSpecialClubItem = (val) => {
    setResetFilter(false);
    const filteredDataName = filteredDataSpecialClubItem.filter(x => x.traits.some(y => y.value === currentName));
    const updatedFilteredDataSpecialClubItem = filteredDataName.filter(x => x.traits.some(y => y.value === val));
    setCards(updatedFilteredDataSpecialClubItem);
    setFilterDataSpecialClubItem(content)
  };

  const handleChangeSpecialEdition = (val) => {
    setResetFilter(false);
    const filteredDataName = filteredDataSpecialEdition.filter(x => x.traits.some(y => y.value === currentName));
    const updatedFilteredDataSpecialEdition = filteredDataName.filter(x => x.traits.some(y => y.value === val));
    setCards(updatedFilteredDataSpecialEdition);
    setFilterDataSpecialEdition(content)
  };

  const handleChangeSpecialLegendItem = (val) => {
    setResetFilter(false);
    const filteredDataName = filteredDataSpecialLegendItem.filter(x => x.traits.some(y => y.value === currentName));
    const updatedFilteredDataSpecialLegendItem = filteredDataName.filter(x => x.traits.some(y => y.value === val));
    setCards(updatedFilteredDataSpecialLegendItem);
    setFilterDataSpecialLegendItem(content)
  };

  const handleChangeSpecialVibes = (val) => {
    setResetFilter(false);
    const filteredDataName = filteredDataSpecialVibes.filter(x => x.traits.some(y => y.value === currentName));
    const updatedFilteredDataSpecialVibes = filteredDataName.filter(x => x.traits.some(y => y.value === val));
    setCards(updatedFilteredDataSpecialVibes);
    setFilterDataSpecialVibes(content)
  };

  const handleChangeVibes = (val) => {
    setResetFilter(false);
    const filteredDataName = filteredDataVibes.filter(x => x.traits.some(y => y.value === currentName));
    const updatedFilteredDataVibes = filteredDataName.filter(x => x.traits.some(y => y.value === val));
    setCards(updatedFilteredDataVibes);
    setFilterDataVibes(content)
  };

  const showAllHandler = () => {
    setCards(content);
    setResetFilter(true);
  };

  return (
    <div className='layout'>
      <div className='header'>
        <button className='button' onClick={showAllHandler}>Show all</button>
        <FilterMenuNames content={content} changeOption={handleChangeName} resetFilter={resetFilter} />
        <FilterSubMenuGeneric content={content} changeOption={handleChangeBackground} currentName={currentName} resetFilter={resetFilter} traitName="Background" />
        <FilterSubMenuGeneric content={content} changeOption={handleChangeHair} currentName={currentName} resetFilter={resetFilter} traitName="Hair" />
        <FilterSubMenuGeneric content={content} changeOption={handleChangeClothes} currentName={currentName} resetFilter={resetFilter} traitName="Clothes" />
        <FilterSubMenuGeneric content={content} changeOption={handleChangeAccessories} currentName={currentName} resetFilter={resetFilter} traitName="Accessories" />
        <FilterSubMenuGeneric content={content} changeOption={handleChangeSpecialClubItem} currentName={currentName} resetFilter={resetFilter} traitName="Special Club Item" />
        <FilterSubMenuGeneric content={content} changeOption={handleChangeSpecialEdition} currentName={currentName} resetFilter={resetFilter} traitName="Special Edition" />
        <FilterSubMenuGeneric content={content} changeOption={handleChangeSpecialLegendItem} currentName={currentName} resetFilter={resetFilter} traitName="Special Legend Item" />
        <FilterSubMenuGeneric content={content} changeOption={handleChangeSpecialVibes} currentName={currentName} resetFilter={resetFilter} traitName="Special Vibes" />
        <FilterSubMenuGeneric content={content} changeOption={handleChangeVibes} currentName={currentName} resetFilter={resetFilter} traitName="Vibes" />
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
