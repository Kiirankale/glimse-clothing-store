import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useLogoutUserMutation } from '../../redux/Features/auth/authApi';
import { logout } from '../../redux/Features/auth/authSlice';

const navItems = [
    { path: '/dashboard/admin', label: 'Dashboard' },
    { path: '/dashboard/add-new-post', label: 'Add New Products' },
    { path: '/dashboard/manage-products', label: 'Manage Products' },
    { path: '/dashboard/users', label: 'Users' },
    { path: '/dashboard/manage-orders', label: 'Manage Orders' },
];

const AdminDashboard = () => {

    const [logoutUser] = useLogoutUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logoutUser().unwrap();
            dispatch(logout())
            alert('Logged out successfully');
            navigate('/')



        } catch (error) {
            console.error('Failed to log out', error)

        }


    }
    return (
        <div className="space-y-5 bg-white md:h-screen p-8 flex flex-col justify-between">
            <div>

                <div className="nav__logo">
                    <Link to="/" className="text-2xl font-bold">
                        Glimse<span className="text-red-600">.</span>
                    </Link>
                    <p className="text-xs italic">Admin dashboard</p>
                </div>

                <hr className="mt-5" />

                {/* Navigation Links */}
                <ul className="space-y-5 pt-5">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.path}
                                end
                                className={({ isActive }) =>
                                    isActive ? "text-blue-600 font-bold" : "text-black"
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='mb-3'>
                <hr className='mb-3' />
                <button onClick={handleLogout} className='text-white bg-primary font-medium py-1 px-5 rounded-sm'>Logout</button>
            </div>
        </div>
    )
}

export default AdminDashboard
