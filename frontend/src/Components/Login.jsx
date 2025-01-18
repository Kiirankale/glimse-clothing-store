import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    const [message, setMessage ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
   
    const handleLogin =async(e)=>{
        e.preventDefault()
        const data ={email,password}
        console.log(data)

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
