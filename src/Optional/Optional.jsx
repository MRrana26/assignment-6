import React from 'react';

const Optional = () => {
    return (
        <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-20 text-center text-white">

            <div className="w-10/12 mx-auto space-y-6">
                <h2 className="text-4xl font-bold">Ready To Transform Your Workflow?</h2>
                <p className="max-w-2xl mx-auto text-purple-100">
                    Join thousands of professionals who are already using DigiTools to work smarter. <br />Start your free trial today.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <button className="px-8 py-3 bg-white text-[#9514FA] font-bold rounded-full hover:bg-gray-100 transition-all">Explore Products
                    </button>
                    
                    <button className="px-8 py-3 border border-white font-bold rounded-full hover:bg-white hover:text-[#9514FA] transition-all">View Pricing
                    </button>
                </div>
                
                <p className="text-sm text-purple-200 pt-4">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </section>
    );
};

export default Optional;