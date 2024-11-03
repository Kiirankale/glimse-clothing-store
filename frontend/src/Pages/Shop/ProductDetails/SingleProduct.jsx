import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { RatingStars } from '../../../Components/RatingStars'

export const SingleProduct = () => {
  const { id } = useParams()
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header uppercase">Single Product Page</h2>
        <div className='section__subheader space-x-2'>
          <span className='hover:text-primary'><Link to={'/'}>home</Link></span>
          <i className="ri-arrow-right-s-line"></i>
          <span className='hover:text-primary'><Link to={'/shop'}>shop</Link></span>
          <i className="ri-arrow-right-s-line"></i>
          <span className='hover:text-primary'>product name</span>


        </div>
      </section>

      <section className="section__container mt-8 ">

        <div className='flex flex-col md:flex-row items-center gap-8'>
          {/* product image */}
          <div className='w-full  md:w-1/2 '>
            <img src="https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='rounded md:w-full h-auto' alt="" />
          </div>
          <div className='w-full md:w-1/2 '>
            <h3 className='text-2xl font-semibold mb-4'>Product name

            </h3>
            <p className='text-xl text-primary mb-4
            '>₹ 250 <s>₹ 150</s></p>
            <p className='text-gray-400 mb-4'>This is product description.
            </p>
            <div>
              <p><strong>Category:</strong> accesories</p>
              <p><strong>Color:</strong> red</p>
              <div className='flex items-center gap-1'>
                <strong>Rating: </strong>
                <RatingStars rating={"4"} />
              </div>
              <button className='mt-6 px-6 py-3 bg-primary text-white rounded-md'>Add to cart</button>

            </div>

          </div>



        </div>
      </section>

      {/* display reviews section */}
      <section className='section_container mt-8'>

      </section>


    </>
  )
}
