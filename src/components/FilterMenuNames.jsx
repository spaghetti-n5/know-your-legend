import React, { useState, useEffect } from 'react';

const FilterMenuNames = ({ content, changeOption }) => {
    const [cardSelected, selectCard] = useState("");

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        selectCard(selectedValue);
        changeOption(selectedValue);
    };

    return (

        <>
            <select id="name" value={cardSelected} onChange={handleChange}>
            <option value="disabled"> -- pick a Legend -- </option>
                {
                  content.map((item) => (
                    <option key={item.id} value={item.name}
                    >
                      {
                        item.traits.map(a => { 
                          if (a['trait_type'] === "Legend")
                            return a['value']
                        }
                    )}
                    </option>
                ))}
            </select>
            <p>{cardSelected}</p>
        </>
    )
};

export default FilterMenuNames;
