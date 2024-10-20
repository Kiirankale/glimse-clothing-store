import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../../assets/newHeader.png';


function Banner() {
  return (
    <div className='section__container header__container'>
      <div className='header__content'>
        <h4 className='uppercase'>up to 20% discount on</h4>
        <h1>Women's Fashion</h1>
        <p>Discover the latest trends in women's fashion. From bold prints and vibrant colors to timeless classics, this season brings versatile styles for every occasion. Whether it's chic blazers, flowing dresses, or statement pieces, stay stylish and confident with the top picks of the season.</p>
        <button className='uppercase btn'><Link to={"/shop"}
        >Explore now</Link></button>
      </div>
      <div className="header__image">
        <img
          className="md:h-[650px]  h-[400px] sm:h-[330px] "
          src={bannerImg}
          alt="banner image"
        />
      </div>



    </div>
  )
}

export default Banner
