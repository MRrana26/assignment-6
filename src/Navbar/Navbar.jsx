import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="w-10/12 mx-auto flex justify-between items-center relative">

                <div className="py-2">
                    <h3 className="py-2 font-bold text-3xl md:text-4xl bg-gradient-to-tr from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h3>
                </div>

                <div>
                    <ul className="hidden md:flex gap-4 navbar-li-style">

                        <li><a className='hover:bg-[#998df8] px-2 py-1 rounded-full hover:text-white hover:font-semibold' href="#productsSection">Products</a></li>

                        <li><a className='hover:bg-[#998df8] px-2 py-1 rounded-full hover:text-white hover:font-semibold' href="#pricingSection">Features</a></li>

                        <li><a className='hover:bg-[#998df8] px-2 py-1 rounded-full hover:text-white hover:font-semibold' href="#Navbar">Pricing</a></li>

                        <li><a className='hover:bg-[#998df8] px-2 py-1 rounded-full hover:text-white hover:font-semibold' href="#Navbar">Testimonials</a></li>

                        <li><a className='hover:bg-[#998df8] px-2 py-1 rounded-full hover:text-white hover:font-semibold' href="#Navbar">FAQ</a></li>
                    </ul>
                </div>

                <div className="flex justify-between items-center gap-1 md:gap-3">

                    <div className="hover:shadow-2xl hover:bg-[#ebeaee] p-2 rounded-full">
                        <FaCartPlus className='cursor-pointer' /> </div>

                    <button className='cursor-pointer hover:bg-[#ebeaee] px-2 py-1 rounded-full hover:text-black hover:font-semibold'>Login</button>

                    <button className="hidden sm:block btn rounded-full bg-gradient-to-tr from-[#4F39F6] to-[#9514FA] text-white">Get Started</button>
                    
                    <div className="block md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <IoClose className='cursor-pointer' /> : <IoMenu className='cursor-pointer' />}
                    </div>
                </div>

                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-xl p-5 md:hidden z-50">
                        
                        <ul className='flex flex-col gap-4'>
                            <li><a onClick={() => setIsOpen(false)} href="#productsSection">Products</a></li>

                            <li><a onClick={() => setIsOpen(false)} href="#pricingSection">Features</a></li>

                            <li><a onClick={() => setIsOpen(false)} href="#Navbar">Pricing</a></li>

                            <li><a onClick={() => setIsOpen(false)} href="#Navbar">Testimonials</a></li>

                            <li><a onClick={() => setIsOpen(false)} href="#Navbar">FAQ</a></li>

                            <li><button className="btn w-full rounded-full bg-gradient-to-tr from-[#4F39F6] to-[#9514FA] text-white">Get Started</button></li>

                        </ul>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Navbar;