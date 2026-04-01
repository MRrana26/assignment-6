import React from 'react';
import userImg from '../assets/user.png';
import packageImg from '../assets/package.png';
import rocketImg from '../assets/rocket.png';

const StepsAction = () => {
    return (
        <section className="py-20 bg-white">

            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#101727] mb-4">Get Started In 3 Steps</h2>
                <p className="text-gray-500">Start using premium digital tools in minutes, not hours.</p>
            </div>


            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="relative p-10 bg-white border border-gray-100 rounded-3xl text-center shadow-sm hover:shadow-md transition-shadow group">
                    <span className="absolute top-6 right-6 bg-[#6366f1] text-white w-8 h-8 flex items-center justify-center rounded-full text-[12px] font-bold">01
                    </span>

                    <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform p-4">

                        <img src={userImg} alt="" className="w-full h-full object-contain" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#101727] mb-4">Create Account</h3>
                    
                    <p className="text-gray-500 text-[14px] leading-relaxed">
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                </div>

                
                <div className="relative p-10 bg-white border border-gray-100 rounded-3xl text-center shadow-sm hover:shadow-md transition-shadow group">

                    <span className="absolute top-6 right-6 bg-[#6366f1] text-white w-8 h-8 flex items-center justify-center rounded-full text-[12px] font-bold">02
                    </span>

                    <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform p-4">

                        <img src={packageImg} alt="" className="w-full h-full object-contain" />

                    </div>

                    <h3 className="text-2xl font-bold text-[#101727] mb-4">Choose Products</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Browse our catalog and select the tools that fit your needs.
                    </p>

                </div>

              
                <div className="relative p-10 bg-white border border-gray-100 rounded-3xl text-center shadow-sm hover:shadow-md transition-shadow group">

                    <span className="absolute top-6 right-6 bg-[#6366f1] text-white w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold">03
                    </span>

                    <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform p-4">

                        <img src={rocketImg} alt="Rocket" className="w-full h-full object-contain" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#101727] mb-4">Start Creating</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Download and start using your premium tools immediately.
                    </p>

                </div>
            </div>
            
        </section>
    );
};

export default StepsAction;