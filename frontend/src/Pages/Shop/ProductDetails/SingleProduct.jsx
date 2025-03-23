import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { RatingStars } from '../../../Components/RatingStars'
import {  useDispatch} from 'react-redux'
import { useFetchProductsByIdQuery } from '../../../redux/Features/products/productsApi'
import { addToCart } from '../../../redux/Features/cart/cartSlice'
import ReviewsCard from '../reviews/ReviewsCard'

export const SingleProduct = () => {
  const {id}= useParams()
  
  const dispatch = useDispatch()
  const {data,error,isLoading}= useFetchProductsByIdQuery(id);
 

  const  singleProduct = data?.product ||{}
  

  const productReview = data?.reviews || []

  const handleAddToCart = (product)=>{
    dispatch(addToCart(product))
  }

  if(isLoading){
    return <p>Loading...</p>

  }
  if(error){
    return <p>Error loading product details..</p>
  }
  
  
  
 
  
  
  
 

  
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header uppercase">Single Product Page</h2>
        <div className='section__subheader space-x-2'>
          <span className='hover:text-primary'><Link to={'/'}>home</Link></span>
          <i className="ri-arrow-right-s-line"></i>
          <span className='hover:text-primary'><Link to={'/shop'}>shop</Link></span>
          <i className="ri-arrow-right-s-line"></i>
          <span className='hover:text-primary'>{singleProduct.name}</span>


        </div>
      </section>

      <section className="section__container mt-8 ">

        <div className='flex flex-col md:flex-row items-center gap-8'>
          {/* product image */}
          <div className='w-full  md:w-1/2 '>
            <img src={singleProduct.image} className='rounded md:w-full h-auto' alt="" />
          </div>
          <div className='w-full md:w-1/2 '>
            <h3 className='text-2xl font-semibold mb-4'>{singleProduct.name}

            </h3>
            <p className='text-xl text-primary mb-4
            '>₹ {singleProduct.price} {singleProduct?.oldPrice && <s>₹{singleProduct?.oldPrice}</s>}</p>
            <p className='text-gray-400 mb-4'>{singleProduct.description}
            </p>

            <div className='flex flex-col space-y-2 '>
              <p><strong>Category:</strong> {singleProduct?.category}</p>
              <p><strong>Color:</strong> {singleProduct?.color}</p>
              <div className='flex items-center gap-1'>
                <strong>Rating: </strong>
                <RatingStars rating={singleProduct?.rating} />
              </div>
              <button onClick={(e)=>{e.stopPropagation()
                handleAddToCart(singleProduct)
              }} className='mt-6 px-6 py-3 bg-primary text-white rounded-md w-48 '>Add to cart</button>

            </div>

          </div>



        </div>
      </section>

      {/* display reviews section */}
      <section className='section__container mt-8'>
        <ReviewsCard productReview={productReview} />

      </section>


    </>
  )
}
