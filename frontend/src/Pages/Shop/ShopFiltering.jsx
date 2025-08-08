import React from 'react';

const ShopFiltering = ({ filters, filterState, setFilterState, clearFilter }) => {
    return (
        <div className='space-y-5 flex-shrink-0'>
            <h3>Filters</h3>

            <div className='flex flex-col space-y-2'>
                <h4 className='font-medium text-lg'>Category</h4>
                <hr />
                {filters.categories.map((category) => (
                    <label key={category} className='capitalize cursor-pointer'>
                        <input type="radio" name="category" value={category}
                            checked={filterState.category === category}
                            onChange={(e) => setFilterState({ ...filterState, category: e.target.value })}
                        />
                        <span className='ml-1'>{category}</span>
                    </label>
                ))}
            </div>

            <div className='flex flex-col space-y-2'>
                <h4 className='font-medium text-lg'>Color</h4>
                <hr />
                {filters.colors.map((color) => (
                    <label key={color} className='capitalize cursor-pointer'>
                        <input type="radio" name="color" value={color}
                            checked={filterState.color === color}
                            onChange={(e) => setFilterState({ ...filterState, color: e.target.value })}
                        />
                        <span className='ml-1'>{color}</span>
                    </label>
                ))}
            </div>

            <button onClick={clearFilter} className='bg-primary py-1 px-4 text-white rounded'>
                Clear All Filters
            </button>
        </div>
    );
}

export default ShopFiltering;
