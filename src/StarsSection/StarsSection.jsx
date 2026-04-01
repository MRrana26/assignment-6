import React from 'react';

const StarsSection = () => {
    return (
        <section className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-5 py-2 md:py-14'>
            <div className="w-10/12 mx-auto grid grid-cols-3">

            <div className="text-center flex flex-col items-center justify-center border-r-2 border-gray-400">
                <h1 className='text-[25px] md:text-[60px] font-extrabold text-white'>50K+</h1>
                <p className='text-white md:text-2xl'>Active Users</p>
            </div>

            <div className="text-center flex flex-col items-center justify-center border-r-2 border-gray-400">
                <h1 className='text-[25px] md:text-[60px] font-extrabold text-white'>200+</h1>
                <p className='text-white md:text-2xl'>Premium Tools</p>
            </div>

            <div className="text-center flex flex-col items-center justify-center">
                <h1 className='text-[25px] md:text-[60px] font-extrabold text-white'>4.9</h1>
                <p className='text-white md:text-2xl'>Rating</p>
            </div>

            </div>
        </section>
    );
};

export default StarsSection;