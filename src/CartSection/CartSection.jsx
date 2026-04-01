import React from 'react';

const CartSection = ({ cart, handleRemove, handleCheckout }) => {
    const totalPrice = cart.reduce((total, item) => total + parseInt(item.price), 0);
    return (
        <section className="py-20 bg-gray-50">

            <div className="w-10/12 mx-auto">

                <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

                    <h3 className="text-xl font-bold text-[#101727] mb-6">Your Cart</h3>

                    <div className="space-y-4">

                        {cart.length === 0 ? <p>Your cart is empty!</p> : cart.map((item) => ( <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">

                                    <div className="flex items-center gap-4">

                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">

                                            <img src={item.icon} alt="" className="w-full h-full object-contain" />
                                        </div>


                                        <div>
                                            <h4 className="font-bold text-[#101727]">{item.title}</h4>
                                            <p className="text-gray-400 text-sm">${item.price}</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => handleRemove(item.id)}

                                        className="text-pink-500 font-semibold hover:text-pink-600">Remove</button>
                                </div>
                            ))
                        }
                    </div>

                    <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between mb-8">
                        <h3 className="text-gray-400 font-medium">Total:</h3>
                        <h3 className="text-3xl font-bold text-[#101727]">${totalPrice}</h3>
                    </div>

                    <button 
                        onClick={handleCheckout} className="w-full py-4 bg-[#9514FA] text-white rounded-2xl font-bold text-lg hover:bg-[#7a10cc] disabled:bg-gray-400 transition-all shadow-lg active:scale-[0.98]"
                    >Proceed To Checkout </button>
                </div>
            </div>
        </section>
    );
};

export default CartSection;