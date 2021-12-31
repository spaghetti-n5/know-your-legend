import React, { useState } from 'react';

const FilterMenuTraits = ({ content, changeOption, currentName, resetFilter }) => {
    const [cardSelected, selectCard] = useState([]);

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        selectCard(selectedValue);
        changeOption(selectedValue);
    };

    const getCardsUniqueTraits = () => {
      let traits = []
      if ( currentName === "") {
        traits = content.map((item) => (
          item.traits.map((a) => {return a['value']})
        ))
      }
      else{
        const filteredDataName = content.filter(x => x.traits.some(y => y.value === currentName));
        traits = filteredDataName.map((item) => (
          item.traits.map((a) => {return a['value']})
        ))
      }
      
      const traitsFlat = traits.flat()
      const uniqueTraits = [...new Set(traitsFlat)]
      return uniqueTraits;
    };

    const uniqueTraits = getCardsUniqueTraits()
    return (
        <>
            <select className='filterMenu' id="traits" value={resetFilter ? "" : cardSelected} onChange={handleChange}>
            <option value="" disabled hidden>Select a Trait</option>
            { uniqueTraits.map((legend => ( <option key={legend} value={legend}>{legend}</option>))) }
            </select>
        </>
    )
};

export default FilterMenuTraits;
