import React from 'react';

const ToggleBtn = ({ handleToggle, showCart, cartCount }) => {
    return (
        <div className='py-20'>
            <div className="w-10/12 mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-[#101727] mb-4">Premium Digital Tools</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>
            </div>
            
            <div className="flex justify-center mt-8 bg-gray-50 w-fit mx-auto p-1 rounded-full border border-gray-100">
                <button 
                    onClick={() => handleToggle(false)} 
                    className={`px-8 py-2 rounded-full font-medium transition-all ${!showCart ? 'bg-[#9514FA] text-white shadow-md' : 'text-gray-500'}`}
                >
                    Products
                </button>
                
                <button 
                    onClick={() => handleToggle(true)} 
                    className={`px-8 py-2 rounded-full font-medium transition-all ${showCart ? 'bg-[#9514FA] text-white shadow-md' : 'text-gray-500'}`}
                >
                    Cart (<span>{cartCount}</span>)
                </button>
            </div>
        </div>
    );
};

export default ToggleBtn;