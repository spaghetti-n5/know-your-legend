import React, { useState } from 'react';
import './FilterMenu.css';

const FilterMenuNames = ({ content, changeOption, resetFilter }) => {
    const [cardSelected, selectCard] = useState("");

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        selectCard(selectedValue);
        changeOption(selectedValue);
    };

    const getLegendNames = () => {
      const names = content.map((item) => (
        item.traits.map((a) => {
          if (a['trait_type'] === "Legend") {
                  return a['value']
              }
              return null;
            }).join('')
      ))
      const uniqueNames = [...new Set(names)]
      return uniqueNames;
    };

    const legendNamess = getLegendNames()
    return (
        <>
            <select className='filterMenu' id="name" value={resetFilter ? "" : cardSelected} onChange={handleChange}>
            <option value="" disabled selected hidden>Select a Legend</option>
            { legendNamess.map((legend => ( <option key={legend} value={legend}>{legend}</option>))) }
            </select>
        </>
    )
};

export default FilterMenuNames;
