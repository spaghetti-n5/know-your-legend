import React, { useState } from 'react';

const FilterMenu = ({ content, changeOption }) => {
    const [cardSelected, selectCard] = useState("");

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        selectCard(selectedValue);
        changeOption(selectedValue);
    };

    return (
        <>
            <select id="name" value={cardSelected} onChange={handleChange}>
                {content.map((item) => (
                    <option key={item.id} value={item.name}>{item.name}</option>
                ))}
            </select>
            <p>{cardSelected}</p>
        </>
    )
};

export default FilterMenu;