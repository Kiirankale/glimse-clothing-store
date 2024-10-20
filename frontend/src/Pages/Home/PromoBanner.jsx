import React from 'react'

export const PromoBanner = () => {
    return (
        <section className='section__container banner__container'>
            <div className='banner__card'>
                <span>
                    < i className="ri-truck-line"></i>
                </span>
                <h4>Free Delivery</h4>
                <p>Offers convience and the ability to shop anywhere,anytime </p>

            </div>
            <div className='banner__card'>
                <span><i className="ri-exchange-dollar-fill"></i></span>
                <h4>100% Money Back Guaranty</h4>
                <p>E-commerce have review system where customers can share feedback. </p>

            </div>
            <div className='banner__card'>
                <span><i className="ri-speak-line"></i></span>
                <h4>Strong Support</h4>
                <p>Offers customer support services to assist customers with queries and issues. </p>

            </div>
        </section>
    )
}
