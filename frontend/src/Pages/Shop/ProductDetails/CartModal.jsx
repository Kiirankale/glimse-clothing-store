import React from "react";
import { OrderSummary } from "./OrderSummary";

export const CartModal = ({ products, isCartOpen, onClose }) => {
  const handleRemove =()=>{
    
    
  }
  return (
    <div
      className={`fixed z-[1000] inset-0 bg-black bg-opacity-80 transition-opacity ${isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      style={{ transition: "opacity 300ms" }}
    >
      {/* Right-Side Cart Container */}
      <div
        className={`fixed top-0 right-0 bg-white h-full md:w-1/3 w-full shadow-lg transform transition-transform duration-1000ms ${isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ transition: 'transform 300ms cubic bezire(0.25,0.46,0.45,0.94)' }}
      >
        <div className="p-4 mt-4 ">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-semibold">Your Cart</h4>
            <button onClick={onClose} className=" text-xl text-gray-600 hover:text-primary font-semibold"><i className="ri-close-large-line p-1 "></i></button>
          </div>
          <div>
            {products.length === 0 ? (<div>Your cart is empty</div>) : (
              products.map((item, index) => (
                <div key={index} className="flex flex-row md:flex-row md:items-center md:justify-between shadow-md md:p-5 mb-4 p-2 ">
                  <div className="flex items-center">
                    <span className="mr-4 px-1 bg-primary text-white rounded-full">0{index + 1}</span>
                    <img src={item.image} alt="product image" className="object-cover mr-4 size-12" />
                    <div>
                      <h5 className="text-lg font-medium">{item.name}</h5>
                      <p className="text-gray-600 text-sm">
                        ₹ {Number(item.price).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row  md:justify-start justify-end items-center mt-2">
                    <button className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white ml-8">+</button>
                    <span className="px-2 text-center mx-1
              ">{item.quantity}</span>
                    <button className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white ">-</button>
                    <div className="ml-5">
                      <button className="text-red-500 hover:text-red-800">
                        <span onClick={handleRemove} className="block md:hidden text-3xl">×</span>
                        <span onClick={handleRemove} className="hidden md:block">Remove</span>
                      </button>
                    </div>
                  </div>

                </div>
              ))
            )}
          </div>


        </div>
        <OrderSummary />
      </div>
      
    </div>
     
  );
};
