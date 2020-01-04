import React from 'react';

import './search-box.styles.css';

const SearchBox = ({ placeholder, handleChange, searchInputValue }) => (
	<input
		type="search"
		className="search"
		placeholder={ placeholder }
		value={ searchInputValue }
		onChange={ handleChange }
	/>
);

export default SearchBox;
