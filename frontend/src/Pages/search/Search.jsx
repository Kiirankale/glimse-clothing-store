import React, { useState } from 'react'
import productData from '../../Data/products.json'
import { ProductCards } from '../Shop/ProductCards';


export const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(productData)
    const handleSearch = () => {
        const query = searchQuery.toLowerCase();
        const filtered = productData.filter((product) => (
            product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
        ))
        setFilteredProducts(filtered)

    }
    if(filteredProducts.length===0){
        return <>
        <section className='section__container'>
            <p className='text-center'>Sorry no products found ..😔</p>
        </section>
        </>

    }



    return (
        <>
            <section className='section__container bg-primary-light'>
                <h4 className='section__header uppercase'>Search</h4>
                <p className='section__subheader'>Your next favorite find awaits! Start searching through our diverse selection to uncover unique products.</p>

            </section>

            <section className='section__container'>
                <div className='w-full mb-12 flex flex-col md:flex-row gap-4 justify-center items-center'>
                    <input type="text" placeholder='Search your product here...' onChange={(e) => setSearchQuery(e.target.value)} className='search-bar w-full max-w-4xl p-2 rounded border ' />
                    <button
                        className="search-btn w-full rounded py-2 px-8 text-white md:w-auto bg-primary transition duration-200 ease-in-out transform hover:scale-105 hover:bg-primary-dark active:scale-95 active:bg-primary-darker shadow-lg"
                        onClick={handleSearch}
                    >
                        Search
                    </button>


                </div>
                {/* Products cards */}
                <ProductCards products={filteredProducts} />

            </section>
        </>
    )
}
