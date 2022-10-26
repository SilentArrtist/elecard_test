import React, { memo } from 'react';
import { useState } from 'react';
import FilterItem from './FilterItem';
const FilterList = memo(({filter,setFilter}) => {
    const [filters,setFilters] = useState([
        {filterName:"По категории",filterValue:"category"},
        {filterName:"По дате",filterValue:"timestamp"},
        {filterName:"По имени",filterValue:"image"},
        {filterName:"По размеру файла",filterValue:"filesize"},
        
    ])

    return (
        <div className='filterList'>
            {
                filters.map((mapFilter,index)=>(
                    <FilterItem key = {index} currentFilter = {filter} filterName={mapFilter.filterName} filterValue= {mapFilter.filterValue} setFilter = {setFilter}/>
                ))
            }
        </div>
    );
});

export default FilterList;