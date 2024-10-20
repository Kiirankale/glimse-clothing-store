import React from 'react'
import dealsPng from "../../assets/deals.png"

export const DealsSection = () => {
  return (
    <section className='section__container deals__container'>
        <div><img src={dealsPng} alt="deals png" /></div>
        <div className='deals__content'>
            <h5> Get upto 20% discont on latest deals</h5>
            <h4>Deals Of This Month</h4>
            <p>Our Women's Fashion Deals of the Month are here to bring your style dreams to life! From trendy outfits to timeless pieces, elevate your wardrobe with exclusive discounts on the season’s must-haves. Don’t miss out—shop now and upgrade your look without breaking the bank!</p>
            <div className='deals__countdown flex-wrap'>
                <div className='deals__countdown__card'>
                    <h4>14</h4>
                    <p>Days</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>20</h4>
                    <p>Hours</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>32</h4>
                    <p>Mins</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>5</h4>
                    <p>secs</p>
                </div>
            </div>
        </div>
        
        
    </section>
  )
}
