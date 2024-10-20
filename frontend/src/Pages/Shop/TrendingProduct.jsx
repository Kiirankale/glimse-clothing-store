import React from 'react'
import { ProductCards } from './ProductCards'
import { useState } from 'react'
import products from '../../Data/products.json'

export const TrendingProduct = () => {
    const [visibleProducts, setVisibleProducts] = useState(8)
    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4)
    }
    return (
        <section className='section__container product__container'>
            <h2 className='section__header'>Trending Products</h2>
            <p className='section__subheader '>Discover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Womens's Fashion Products.</p>
            {/* Products cards */}
            <div className='mt-12'><ProductCards products={products.slice(0,visibleProducts)} /></div>
            {/* Load more button*/}
           <div className='product__btn'>
           {visibleProducts<products.length && <button className='btn' onClick={loadMoreProducts}>Load more</button>}

           </div>

        </section>
    )
}

