import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../../redux/Features/cart/cartSlice';
import {loadStripe} from '@stripe/stripe-js';
import { getBaseUrl } from '../../../utils/baseUtils';

export const OrderSummary = () => {
    const dispatch = useDispatch();
    const {user}= useSelector((state)=>state.auth);
  

    const handleClearCart = () => {
        dispatch(clearCart())
    }
  
  

    // payment integration 
    const makePayment = async (e)=>{
        const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PK)
        const body =  {
            products:products,
            userId:user?._id

        }
        const headers = {
            "Content-Type":"application/json"
        }
        const response = await fetch(`${getBaseUrl()}/api/orders/create-checkout-session`,{method:"POST",
            headers:headers,
            body:JSON.stringify(body)
        })
       
        const session = await response.json()
        
        const result = stripe.redirectToCheckout({
            sessionId:session.id
        })
        console.log("Result",result);

        if(result.error){
            console.log("Error",error)
        }
        


    }

    const products = useSelector((store) => store.cart.products);
    
    const { selectedItems,
        totalPrice,
        tax,
        taxRate,
        grandTotal } = useSelector((store) => store.cart)
    
    return (
        <div className='bg-primary-light mt-5 text-base'>
            <div className='px-6 py-4 space-y-5'>
                <h2 className='text-xl  text-text-dark'>Order summary</h2>
                <p>Selected items : {selectedItems}</p>
                <p>Total price : ₹ {totalPrice.toFixed(2)}</p>
                <p>Tax ({taxRate * 100}%) : ₹ {tax.toFixed(2)}</p>
                <p>Grand total : ₹ {grandTotal.toFixed(2)}</p>
                <div className=' mb-6 flex flex-col justify-center items-start'>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        handleClearCart()

                    }} className='bg-primary px-3 py-1.5   rounded-md mt-2 mb-4 text-white'><span className='mr-2'>Clear cart</span><i className="ri-delete-bin-line"></i></button>
                    <button
                    onClick={(e)=>{
                     e.stopPropagation();
                     makePayment();
                    }}
                    className='bg-green-600 px-3 py-1.5   rounded-md mt-2 mb-4 text-white'><span className='mr-2'>Proceed to buy</span><i className="ri-bank-line"></i></button>
                </div>
            </div>
        </div>
    )
}
