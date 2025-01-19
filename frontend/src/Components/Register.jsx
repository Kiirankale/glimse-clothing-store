import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../redux/Features/auth/authApi';

export const Register = () => {
    const [message, setMessage ] = useState('');
    const [username, setUserName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] =useState('');
    const navigate = useNavigate()

    const [registerUser,{isLoading}]=useRegisterUserMutation()
   
    const handleRegister =async(e)=>{
        e.preventDefault()
        const data ={username,email,password}
        try {
            await registerUser(data).unwrap();
            alert("Registration successfull.")
            navigate('/login')
        } catch (error) {
            setMessage("Registration failed .")
            console.log('registration error ',error);
            
            
        }

    }
    return (
        <section className='h-screen flex justify-center items-center'>
            <div className='max-w-sm  border shadow-md bg-white mx-auto p-8 space-y-5 '>
                <h1 className='text-2xl pt-5 font-semibold '>Please Register</h1>
                <form onSubmit={handleRegister} className='max-w-sm mx-auto pt-8 space-y-5'>

                    <input onChange={(e)=>{
                        setUserName(e.target.value)
                    }} className='bg-gray-200 w-full focus:outline-none px-5 py-3 ' type="text" name="username" id="username" placeholder='Username' required />

                    <input onChange={(e)=>{
                        setEmail(e.target.value)
                    }} className='bg-gray-200 w-full focus:outline-none px-5 py-3 ' type="email" name="email" id="email" placeholder='Email' required />

                    <input onChange={(e)=>{
                     setPassword(e.target.value)
                    }} className='bg-gray-200 w-full focus:outline-none px-5 py-3' type="password" placeholder='Password' required />

                    {message && <p className='text-red-500'>{message}</p>}

                    <button type='submit' className=' w-full mt-5  bg-primary hover:bg-indigo-500 font-medium py-3 rounded-md text-white '>Register</button>

                </form>
                <p className='my-5 italic text-sm text-center'>Already have an account ? Please <Link className="text-red-500" to={"/login"}>Login</Link> </p>
            </div>
        </section>
    )
}
