import React, { useState } from 'react';

const FilterMenuTraits = ({ content, changeOption }) => {
    const [cardSelected, selectCard] = useState("");

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        selectCard(selectedValue);
        changeOption(selectedValue);
    };

    return (
        <>
            <select id="traits" value={cardSelected} onChange={handleChange}>
            <option value="disabled"> -- pick a Trait -- </option>
                {content.map((item) => (
                    item.traits.map((trait) => (
                      <option key={trait['value']} value={trait['value']}> {trait['value']} </option>
                    ))
                ))}
            </select>
            <p>{cardSelected}</p>
        </>
    )
};

export default FilterMenuTraits;
