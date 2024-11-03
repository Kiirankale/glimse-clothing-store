import React from 'react'

export const ShopFiltering = ({ filters, filterState, setFilterState, clearFilter, }) => {
    console.log();

    return (
        <div className='space-y-5 flex-shrink-0'>

            <h3>Filters</h3>
            {/* for category */}
            <div className='flex flex-col space-y-2'>
                <h4 className='font-medium text-lg'>Category</h4>
                <hr />
                {
                    filters.categories.map((category) => (
                        <label key={category} className='uppercase cursor-pointer'>
                            <input
                                type="radio"
                                name="category"
                                value={category}
                                onChange={() => setFilterState({ ...filterState, category })}
                                checked={filterState.category === category}
                            />
                            <span className='ml-1'>{category}</span>
                        </label>
                    ))
                }
            </div>
            {/* for color */}
            <div className='flex flex-col space-y-2'>
                <h4 className='font-medium text-lg'>Colors</h4>
                <hr />
                {
                    filters.colors.map((color) => (
                        <label key={color} className='uppercase cursor-pointer'>
                            <input
                                type="radio"
                                name="color"
                                value={color}
                                onChange={() => setFilterState({ ...filterState, color })}
                                checked={filterState.color === color}
                            />
                            <span className='ml-1'>{color}</span>
                        </label>
                    ))
                }
            </div>

            {/* for price range */}
            <div className='flex flex-col space-y-2'>
                <h4 className='font-medium text-lg'>Price Range</h4>
                <hr />
                {
                    filters.priceRanges.map((range) => (
                        <label key={range.label} className='uppercase cursor-pointer'>
                            <input
                                type="radio"
                                name="priceRange"
                                value={`${range.min}-${range.max}`} // Use a unique string identifier for the range
                                onChange={() => setFilterState({ ...filterState, priceRange: range })}
                                checked={filterState.priceRange === range} // Correctly compare the entire range object
                            />
                            <span className='ml-1'>{range.label}</span>
                        </label>
                    ))
                }
            </div>

            {/* for clear filters */}
            <button onClick={clearFilter} className='bg-primary py-1 px-4 text-white rounded'>Clear filters</button>

        </div>




    )
}
