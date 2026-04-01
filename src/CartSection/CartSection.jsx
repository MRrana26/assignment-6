import React from 'react';

const CartSection = () => {
    return (
        <section className="py-20 bg-gray-50 hidden">
            <div className="w-10/12 mx-auto">
                
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#101727] mb-4">Premium Digital Tools</h2>
                    <p className="text-gray-500 mb-8">Choose from our curated collection of premium digital products.</p>
                    
                    
                    <div className="flex justify-center items-center bg-white border border-gray-200 w-fit mx-auto rounded-full p-1 shadow-sm">
                        <button className="px-8 py-2 rounded-full text-gray-500 font-medium">Products</button>
                        <button className="px-8 py-2 rounded-full bg-[#9514FA] text-white font-medium shadow-md">Cart (2)</button>
                    </div>
                </div>

               
                <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-[#101727] mb-6">Your Cart</h3>

                    
                    <div className="space-y-4">
                       
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">
                                    📝
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#101727]">AI Writing Pro</h4>
                                    <p className="text-gray-400 text-sm">$29</p>
                                </div>
                            </div>
                            <button className="text-pink-500 font-semibold hover:text-pink-600 transition-colors">Remove</button>
                        </div>

                        
                    </div>

                   
                    <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between mb-8">
                        <span className="text-gray-400 font-medium">Total:</span>
                        <span className="text-3xl font-bold text-[#101727]">$29</span>
                    </div>

                    
                    <button className="w-full py-4 bg-[#9514FA] text-white rounded-2xl font-bold text-lg hover:bg-[#7a10cc] transition-all shadow-lg active:scale-[0.98]">
                        Proceed To Checkout
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CartSection;