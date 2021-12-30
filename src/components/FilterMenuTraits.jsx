import React, { useState } from 'react';

const FilterMenuTraits = ({ content, changeOption, resetFilter }) => {
    const [cardSelected, selectCard] = useState("");

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        selectCard(selectedValue);
        changeOption(selectedValue);
    };

    return (
        <>
            <select className='filterMenu' id="traits" value={resetFilter ? "" : cardSelected} onChange={handleChange}>
            <option value="" disabled selected hidden>Select a Trait</option>
                {content.map((item) => (
                    item.traits.map((trait) => (
                      <option key={trait['value']} value={trait['value']}> {trait['value']} </option>
                    ))
                ))}
            </select>
        </>
    )
};

export default FilterMenuTraits;
