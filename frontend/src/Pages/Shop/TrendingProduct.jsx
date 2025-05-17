import React, { useState } from 'react';
import { ProductCards } from './ProductCards';
import { useFetchAllProductsQuery } from '../../redux/Features/products/productsApi';

export const TrendingProduct = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);
    const loadMoreProducts = () => setVisibleProducts(prev => prev + 4);

    const { data, error, isLoading } = useFetchAllProductsQuery({
        page: 1,
        limit: 1000, // fetch a large number, we'll slice manually
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products...</div>;

    const products = data?.products || [];

    return (
        <section className='section__container product__container'>
            <h2 className='section__header'>Trending Products</h2>
            <p className='section__subheader'>
                Discover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Women's Fashion Products.
            </p>

            <div className='mt-12'>
                <ProductCards products={products.slice(0, visibleProducts)} />
            </div>

            <div className='product__btn'>
                {visibleProducts < products.length && (
                    <button className='btn' onClick={loadMoreProducts}>
                        Load more
                    </button>
                )}
            </div>
        </section>
    );
};
