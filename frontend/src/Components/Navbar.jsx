import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useSelector } from 'react-redux';
import { CartModal } from '../Pages/Shop/ProductDetails/CartModal';

function Navbar() {

    const products =useSelector((state)=>state.cart.products)

    const [isCartOpen,setIsCartOpen]=useState(false);
    const handleCartToggle =()=>{
        setIsCartOpen(!isCartOpen)
    }
    return (
        <header className='fixed-nav-bar w-nav'>
            <nav className='max-w-screen-2xl mx-auto px-4 flex justify-between items-center '>
                <ul className='nav__links'>
                    <li className='link'><Link to={"/"}>Home</Link></li>
                    <li className='link'><Link to={"/shop"}>Shop</Link></li>
                    <li className='link'><Link to={"/pages"}>Pages</Link></li>
                    <li className='link'><Link to={"/contact"}>Contact Us</Link></li>
                </ul>

                {/*  logo */}
                <div className='nav__logo'>
                    <Link to={"/"}>Glimse<span>.</span></Link>
                </div>

                {/* Nav icons */}
                <div className='nav__icons relative'>
                    <span>
                        <Link to={"/search"} >
                            <i className='ri-search-line'></i>
                        </Link>
                    </span>
                    <span>
                        <button onClick={handleCartToggle} className='hover:text-primary'>
                            <i className="ri-shopping-cart-line"></i>
                            <sup className='text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center'>{products.length}</sup>
                        </button>
                    </span>
                    <span>
                        <Link to={"/user"}>
                            <i className="ri-user-smile-line"></i>
                        </Link>
                    </span>

                </div>
            </nav>
            {isCartOpen && (<CartModal products={products} isCartOpen={isCartOpen} onClose={handleCartToggle} />)}
        </header>
    );
}

export default Navbar;
