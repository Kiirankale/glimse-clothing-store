import React from 'react'
import instaImg1 from '../assets/instagram-1.jpg'
import instaImg2 from '../assets/instagram-2.jpg'
import instaImg3 from '../assets/instagram-3.jpg'
import instaImg4 from '../assets/instagram-4.jpg'
import instaImg5 from '../assets/instagram-5.jpg'
import instaImg6 from '../assets/instagram-6.jpg'

export const Footer = () => {
    return (
        <>
            <footer className='section__container footer__container'>
                <div className='footer__col'>
                    <h4>CONTACT INFO</h4>
                    <p> <span><i className="ri-map-pin-line"></i></span>
                        123,Andheri stadium street, Mumbai
                    </p>
                    <p>
                        <span><i className="ri-mail-line"></i></span>
                        support@glimse.com
                    </p>
                    <p><span><i className="ri-phone-fill"></i></span>
                        (+91)-3456789991</p>
                </div>
                <div className='footer__col'>
                    <h4>COMPANY</h4>
                    <a href="/">Home</a>
                    <a href="/">About us</a>
                    <a href="/">Work with us</a>
                    <a href="/">Our blogs</a>
                    <a href="/">Terms and condition</a>
                </div>
                <div className='footer__col'>
                    <h4>USEFUL LINKS</h4>
                    <a href="/">Help</a>
                    <a href="/">Track my order</a>
                    <a href="/">Men </a>
                    <a href="/">Women </a>
                    <a href="/">Dresses </a>

                </div>
                <div className='footer__col'>
                    <h4>INSTAGRAM</h4>

                    <div className='instagram__grid'>
                        <img src={instaImg1} alt="" />
                        <img src={instaImg2} alt="" />
                        <img src={instaImg3} alt="" />
                        <img src={instaImg4} alt="" />
                        <img src={instaImg5} alt="" />
                        <img src={instaImg6} alt="" />

                    </div>
                </div>



            </footer>
            <div className='footer__bar'>
                <h3 className='uppercase'>Glimse Clothing Store</h3>
                <p>All your styles are here.</p>

                <p>Developed by <a href="#">Kiran</a>
                </p>
                <p className='mb-2'>copyright ©2024 <a href="#">Glimse.</a>
                </p>



            </div>
        </>
    )
}
