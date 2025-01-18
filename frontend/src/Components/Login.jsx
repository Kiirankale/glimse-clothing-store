import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../redux/Features/auth/authApi';

export const Login = () => {
    const navigate = useNavigate()
    const [message, setMessage ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const dispatch = useDispatch();
    const [loginUser,{isLoading:loginLoading}]=useLoginUserMutation()
   
    const handleLogin =async(e)=>{
        e.preventDefault()
        const data ={email,password}
        console.log(data);
        
        
     try {
        const response = await loginUser(data).unwrap();
        alert("Login successful")
        navigate('/')
        
     } catch (error) {
        setMessage("Please provide a valid email and password")
        
     }
    }
    return (
        <section className='h-screen flex justify-center items-center'>
            <div className='max-w-sm  border shadow-md bg-white mx-auto p-8 space-y-5 '>
                <h1 className='text-2xl pt-5 font-semibold '>Please Login</h1>
                <form onSubmit={handleLogin} className='max-w-sm mx-auto pt-8 space-y-5'>

                    <input onChange={(e)=>{
                        setEmail(e.target.value)
                    }} className='bg-gray-200 w-full focus:outline-none px-5 py-3 ' type="email" name="email" id="email" placeholder='Email' required />

                    <input onChange={(e)=>{
                     setPassword(e.target.value)
                    }} className='bg-gray-200 w-full focus:outline-none px-5 py-3' type="password" placeholder='Password' required />

                    {message && <p className='text-red-500'>{message}</p>}

                    <button type='submit' className=' w-full mt-5  bg-primary hover:bg-indigo-500 font-medium py-3 rounded-md text-white '>Login</button>

                </form>
                <p className='my-5 italic text-sm text-center'>Don't have an account ? <Link className="text-red-500" to={"/register"}>Register</Link> now.</p>
            </div>
        </section>
    )
}
