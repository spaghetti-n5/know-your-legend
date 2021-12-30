import React, { useState } from 'react';
import './FilterMenu.css';

const FilterMenuNames = ({ content, changeOption }) => {
    const [cardSelected, selectCard] = useState("");

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        selectCard(selectedValue);
        changeOption(selectedValue);
    };

    return (
        <>
            <select className='filterMenu' id="name" value={cardSelected} onChange={handleChange}>
            <option value="disabled"> Select a Legend </option>
                {content.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.traits.map((a) => { 
                        if (a['trait_type'] === "Legend") {
                            return a['value']
                        }
                        return null;
                      })}
                    </option>
                ))}
            </select>
        </>
    )
};

export default FilterMenuNames;
