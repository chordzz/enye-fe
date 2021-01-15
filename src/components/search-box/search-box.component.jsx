import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange, handleChangeFilter}) => (
    <div>
        <input className = 'search' type = 'search' 
            placeholder = {placeholder} 
            onChange = {handleChange}
        >

        </input>
    </div>
)

export default SearchBox;