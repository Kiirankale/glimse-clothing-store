import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../Data/products.json';
import { ProductCards } from '../Shop/ProductCards';

export const CategoryPage = () => {
    const { categoryName } = useParams();
    const [filterProducts, setFilterProducts] = useState([]);
    


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Filter products based on the category name
        const filtered = Products.filter((product) => {
            return product.category.toLowerCase() === categoryName.toLowerCase();
        });

        // Update state with the filtered products
        setFilterProducts(filtered);
    }, [categoryName]);
    const categoryDescriptions = {
        accessories: "Discover stylish and functional accessories to complete any outfit.",
        "dress-collection": "Browse our chic and elegant dress collection for every occasion.",
        jewellery: "Explore our exclusive range of jewellery to add sparkle to your style.",
        cosmetics: "Find quality cosmetics for all your beauty needs and routines.",
        dress:"Explore our elegant dress collection, perfect for every occasion, from casual outings to formal events. This highlights the versatility of the dress collection."
    };

    return (
        <>
            <section className="section__container bg-primary-light">
                <h2 className="section__header uppercase">{categoryName}</h2>
                <p className="section__subheader">{categoryDescriptions[categoryName.toLowerCase()]}</p>
            </section>

            {/* Product card */}
            <div className="section__container">
                <ProductCards products={filterProducts} />
            </div>
        </>
    );
};
