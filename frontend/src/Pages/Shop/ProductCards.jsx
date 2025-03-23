import React from 'react'
import { Link } from 'react-router-dom';
import { RatingStars } from '../../Components/RatingStars';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/Features/cart/cartSlice';

export const ProductCards = ({ products }) => {
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
                products.map((product, index) => (
                    <div key={index} className='product__card'>
                        <div className='relative'>
                            <Link to={`/shop/${product._id}`}>
                                <img src={product.image} alt="product image" className='max-h-96 md:h-64 w-full object-cover  hover:scale-110 transition-transform duration-300' />
                            </Link>
                            <button onClick={(e) => {
                                e.stopPropagation()
                                handleAddToCart(product)
                            }} className=' hover:block absolute top-3 right-3 '><i className="ri-shopping-cart-line  bg-primary text-xl text-white hover:bg-primary-dark"></i></button>
                        </div>
                        {/* product details */}
                        <div className='product__card__content'>
                            <h4>{product.name}</h4>
                            <p>
                                ₹ {product.price}
                                {product.oldPrice ? <s>  ₹ {product.oldPrice}</s> : null}
                            </p>
                            <RatingStars rating={product.rating} />

                        </div>
                    </div>
                ))
            }

        </div>
    )
}
