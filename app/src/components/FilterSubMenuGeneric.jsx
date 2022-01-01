import React, { useState } from 'react';

const FilterSubMenuGeneric = ({ content, changeOption, currentName, resetFilter, traitName }) => {
    const [cardSelected, selectCard] = useState([]);

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        selectCard(selectedValue);
        changeOption(selectedValue);
    };

    const getCardsUniqueValues = () => {
      let values = []
      if ( currentName === "") {
        values = content.map((item) => (
          item.traits.map((a) => {if (a['trait_type'] === traitName) {return a['value']} else {return null}})
        ))
      }
      else{
        const filteredDataName = content.filter(x => x.traits.some(y => y.value === currentName));
        values = filteredDataName.map((item) => (
          item.traits.map((a) => {if (a['trait_type'] === traitName) {return a['value']} else {return null}})
        ))
      }
  
      const valuesFlat = values.flat()
      const uniqueValues = [...new Set(valuesFlat)]
      console.log("values", uniqueValues)
      return uniqueValues;
    };

    const uniqueValues = getCardsUniqueValues()
    return (
        <>
            <select className='filterMenu' id={traitName} value={resetFilter ? "" : cardSelected} onChange={handleChange}>
            <option value="" disabled hidden>Select a {traitName}</option>
            { uniqueValues.map((legend => ( <option key={legend} value={legend}>{legend}</option>))) }
            </select>
        </>
    )
};

export default FilterSubMenuGeneric;
