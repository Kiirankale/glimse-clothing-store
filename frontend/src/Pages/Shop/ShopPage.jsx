import React, { useEffect, useState } from 'react'

import  {ProductCards } from '../Shop/ProductCards'
import  ShopFiltering  from './ShopFiltering';
import { useFetchAllProductsQuery } from '../../redux/Features/products/productsApi';
const filters = {


    categories: ['all', 'accessories', 'dress', 'jewellery', 'cosmetics'],
    colors: ['all', 'black', 'blue', 'red', 'gold', 'pink', 'silver', 'green'],
    priceRanges: [{ label: 'Under ₹50 ', min: 0, max: 50 }, { label: 'Under ₹50 -₹100', min: 50, max: 100 },
    { label: '₹100-₹200', min: 100, max: 200 },
    { label: '₹200 and above', min: 200, max: Infinity }
    ]


};



export const ShopPage = () => {



    const [filterState, setFilterState] = useState({
        category: 'all',
        color: 'all',
        priceRange: ''
    });
    const [currentPage, setCurrentPage] = useState(1)
    const [productPerPage] = useState(8)

    const { category, color, priceRange } = filterState;
    const [minPrice, maxPrice] = priceRange.split('-').map(Number);
    const { data: { products = [], totalPages, totalProducts } = {}, error, isLoading } = useFetchAllProductsQuery({ category: category !== 'all' ? category : '', color: color !== 'all' ? color : '', minPrice: isNaN(minPrice) ? "" : minPrice, maxPrice: isNaN(maxPrice) ? "" : maxPrice, page: currentPage, limit: productPerPage })













    // handle paginating
    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber)

        }


    }


    // clear filters
    const clearFilter = () => {
        setFilterState(
            {
                category: 'all',
                color: 'all',
                priceRange: ''
            }
        )
    }


    if (isLoading) return <div>
        Loading...
    </div>
    if (error) return <div> Error loading products..</div>
    const startProduct = (currentPage - 1) * productPerPage + 1;
    const endProduct = startProduct + products.length - 1;


    return (
        <>
            <section className="section__container bg-primary-light">
                <h2 className="section__header uppercase">Shop Page</h2>
                <p className="section__subheader">Curated products for your lifestyle. Shop quality, style, and uniqueness effortlessly.</p>
            </section>
            <section className='section__container'>
                <div className='flex flex-col md:flex-row md:gap-12 gap-8 '>
                    {/* left side */}
                    <ShopFiltering filters={filters} filterState={filterState} setFilterState={setFilterState} clearFilter={clearFilter} />


                    {/* right side */}
                    <div className='text-xl font-medium mb-4'>
                        <h3 className='mb-4'> Showing product {startProduct} to {endProduct} of {totalProducts} products </h3>
                        <ProductCards products={products} />
                        {/* pagination controls */}
                        <div className='mt-6 flex justify-center'>
                            <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} className='px-4 bg-gray-300 py-2 text-gray-700 rounded-md mr-2'>Previous</button>
                            {[...Array(totalPages)].map((_, index) => (
                                <button onClick={() => handlePageChange(index + 1)} key={index}
                                    className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} rounded-md mx-1`}>
                                    {index + 1}
                                </button>
                            ))}

                            <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} className='px-4 bg-gray-300 py-2 text-gray-700 rounded-md ml-2'>Next</button>
                        </div>

                    </div>
                </div>


            </section>
        </>
    )
}