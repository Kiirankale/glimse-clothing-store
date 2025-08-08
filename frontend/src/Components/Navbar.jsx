import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { CartModal } from '../Pages/Shop/ProductDetails/CartModal';
import avatarImg from '../assets/avatar.png'
import { useLogoutUserMutation } from '../redux/Features/auth/authApi';
import { logout } from '../redux/Features/auth/authSlice';


function Navbar() {

    const products = useSelector((state) => state.cart.products)

    const [isCartOpen, setIsCartOpen] = useState(false);
    const handleCartToggle = () => {
        setIsCartOpen(!isCartOpen)
    }

    // show user if logged in
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth);
    const [logoutUser]= useLogoutUserMutation()
    const navigate = useNavigate()
    

    // dropdown menu
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handleDropDownToggle = () => {
        setIsDropDownOpen(!isDropDownOpen)

    }
    // admin dropdown menus
    const adminDropDownMenus = [
        { label: "Dashboard", path: '/dashboard/admin' },
        { label: "Manage Items", path: '/dashboard/manage-products' },
        { label: "All Orders", path: '/dashboard/manage-orders' },
        { label: "Add Product", path: '/dashboard/add-product' }
    ]
    // userDropDown menus 
    const userDropDownMenus = [
        { label: "Dashboard", path: '/dashboard' },
        { label: "Profile", path: '/dashboard/manage-products' },
        { label: "Payments", path: '/dashboard/manage-orders' },
        { label: "Orders", path: '/dashboard/add-new-post' }

    ]

    const dropDownMenus = user?.role === "admin" ? [...adminDropDownMenus] : [...userDropDownMenus]

    const handleLogout = async () => {
        try {
            const response = await logoutUser().unwrap(); 
            
            dispatch(logout())
            navigate('/login');
        } catch (error) {
            console.error("Failed to logout user:",error);
        }
    };

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
                        {user ? (<>
                            <img onClick={handleDropDownToggle} src={user?.profileImg || avatarImg} alt="" className='size-6 cursor-pointer rounded-full' />
                            {isDropDownOpen && (<div className='absolute mt-3 p-4 w-48 right-0 z-50 bg-white rounded-lg shadow-lg border border-gray-200' >
                                <ul className='font-medium p-2 space-y-4'>
                                    {
                                        dropDownMenus.map((menu, index) => (
                                            <li key={index} >
                                                <Link onClick={()=>setIsDropDownOpen(false)}  className='dropdown-items' to={menu.path}>{menu.label}</Link>
                                            </li>
                                        ))
                                    }
                                    <li><Link onClick={handleLogout} className='dropdown-items'>Logout</Link></li>
                                </ul>

                            </div>)}
                        </>
                        ) : (<Link to='login'>
                            <i className="ri-user-smile-line"></i>
                        </Link>)}

                    </span>

                </div>
            </nav>
            {isCartOpen && (<CartModal products={products} isCartOpen={isCartOpen} onClose={handleCartToggle} />)}
        </header>
    );
}

export default Navbar;
