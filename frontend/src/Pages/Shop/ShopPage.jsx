import React, { useEffect, useState } from 'react'
import productionData from '../../Data/products.json'
import {ProductCards} from '../Shop/ProductCards'
import { ShopFiltering } from './ShopFiltering';
const filters = {

    categories: ['all', 'accessories', 'dress', 'jewellery', 'cosmetics'],
    colors: ['all', 'black', 'blue', 'red', 'gold', 'pink', 'silver', 'green'],
    priceRanges: [{ label: 'Under ₹50 ', min: 0, max: 50 }, { label: 'Under ₹50 -₹100', min: 50, max: 100 },
    { label: '₹100-₹200', min: 100, max: 200 },
    { label: '₹200 and above', min: 200, max: Infinity }
    ]

};



export const ShopPage = () => {
    
    
    const [products, setProducts] = useState(productionData);
    const [filterState, setFilterState] = useState({
        category: 'all',
        color: 'all',
        priceRange: ''
    });

    // filtering function
    const applyFilter = () => {
        let filteredProducts = productionData;


        //filter by category
        if (filterState.category && filterState.category !== 'all') {
            filteredProducts = filteredProducts.filter((product) => (product.category === filterState.category))

        }
        if (filterState.color && filterState.color !== 'all') {
            filteredProducts = filteredProducts.filter((product) => (product.color === filterState.color))

        }
        if (filterState.priceRange) {
            const { min, max } = filterState.priceRange;
            filteredProducts = filteredProducts.filter(
                (product) => product.price >= min && product.price <= max
            );
        }
        setProducts(filteredProducts);

    }
    useEffect(() => {
        applyFilter();

    }, [filterState])

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

    return (
        <>
            <section className="section__container bg-primary-light">
                <h2 className="section__header uppercase">Shop Page</h2>
                <p className="section__subheader">Curated products for your lifestyle. Shop quality, style, and uniqueness effortlessly.</p>
            </section>
            <section className='section__container'>
                <div className='flex flex-col md:flex-row md:gap-12 gap-8 '>
                    {/* left side */}
                    <ShopFiltering  filters={filters} filterState={filterState} setFilterState={setFilterState} clearFilter ={clearFilter} />
                    

                    {/* right side */}
                    <div className='text-xl font-medium mb-4'>
                        <h3 className='mb-4'>Products Available {products.length}</h3>
                        <ProductCards  products={products} />
                    </div>
                </div>


            </section>
        </>
    )
}
