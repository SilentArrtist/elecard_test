import React, { memo } from 'react';

const FilterItem = memo(({currentFilter,filterName,filterValue,setFilter}) => {
    return (
        <label>
            <input type="radio" checked={currentFilter === filterValue}
                    onChange={() => setFilter(filterValue)} />
            <span>{filterName}</span>
        </label>
    );
});

export default FilterItem;