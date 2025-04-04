import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../redux/Features/auth/authApi';
import { setUser } from '../redux/Features/auth/authSlice';


export const Login = () => {
    const [message, setMessage ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [showPassword, setShowPassword] =useState(false)
    
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [loginUser,{isLoading:loginLoading}]=useLoginUserMutation()
   
    const handleLogin =async(e)=>{
        e.preventDefault()
        const data ={email,password}
       try {
        const response = await loginUser(data).unwrap();
        console.log('Login API Response:', response);
        const {token,user}= response;
        dispatch(setUser({user}))
        alert("Login succesful");

        navigate("/")

        
       } catch (error) {
        
        setMessage("Please provide a valid email and password.")
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
                     
                     <div className="relative">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 w-full focus:outline-none px-5 py-3 pr-10" 
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              className={`ri-${showPassword ? "eye-off-line" : "eye-line"} absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600`}
            ></i>
          </div>
                    

                    {message && <p className='text-red-500'>{message}</p>}

                    <button type='submit' className=' w-full mt-5  bg-primary hover:bg-indigo-500 font-medium py-3 rounded-md text-white '>Login</button>

                </form>
                <p className='my-5 italic text-sm text-center'>Don't have an account ? <Link className="text-red-500" to={"/register"}>Register</Link> now.</p>
            </div>
        </section>
    )
}
