import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SlSocialInstagram } from 'react-icons/sl';

const Footer = () => {
    return (
        <div className='bg-[#101727] py-20 md:py-30'>
            <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-10">
                
                <div className="col-span-1 sm:col-span-2 md:col-span-3 space-y-4">
                    <h1 className='text-white text-2xl font-bold'>DigiTools</h1>
                    <p className='text-gray-300 leading-relaxed'>
                        Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className='font-semibold text-xl text-white'>Product</h3>
                    <p className='text-gray-400 cursor-pointer hover:text-white transition-colors'>Features</p>
                    <p className='text-gray-400 cursor-pointer hover:text-white transition-colors'>Pricing</p>
                    <p className='text-gray-400 cursor-pointer hover:text-white transition-colors'>Templates</p>
                    <p className='text-gray-400 cursor-pointer hover:text-white transition-colors'>Integrations</p>
                </div>

                <div className="space-y-3">
                    <h3 className='font-semibold text-xl text-white'>Company</h3>
                    <p className='text-gray-400 cursor-pointer hover:text-white transition-colors'>About</p>
                    <p className='text-gray-400 cursor-pointer hover:text-white transition-colors'>Blog</p>
                    <p className='text-gray-400 cursor-pointer hover:text-white transition-colors'>Careers</p>
                    <p className='text-gray-400 cursor-pointer hover:text-white transition-colors'>Press</p>
                </div>

                <div className="space-y-3">
                    <h3 className='font-semibold text-xl text-white'>Resources</h3>
                    <p className='text-gray-400 cursor-pointer hover:text-white transition-colors'>Documentation</p>
                    <p className='text-gray-400 cursor-pointer hover:text-white transition-colors'>Help Center</p>
                    <p className='text-gray-400 cursor-pointer hover:text-white transition-colors'>Community</p>
                    <p className='text-gray-400 cursor-pointer hover:text-white transition-colors'>Contact</p>
                </div>

                <div className="col-span-1 sm:col-span-2 md:col-span-2 space-y-4 md:pl-8">
                    <h3 className='text-white text-xl font-semibold'>Social Links</h3>
                    <div className="flex gap-3">
                        <a className='bg-white p-2 rounded-full hover:bg-gray-200 transition-colors' href="https://www.instagram.com/" target='_blank' rel="noreferrer"><SlSocialInstagram className='text-[#101727]' /></a>
                        <a className='bg-white p-2 rounded-full hover:bg-gray-200 transition-colors' href="https://www.facebook.com/" target='_blank' rel="noreferrer"><FaFacebookSquare className='text-[#101727]' /></a>
                        <a className='bg-white p-2 rounded-full hover:bg-gray-200 transition-colors' href="https://x.com/" target='_blank' rel="noreferrer"><FaXTwitter className='text-[#101727]' /></a>
                    </div>
                </div>
            </div>

            <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-700 mt-16 pt-8 gap-4">
                <div>
                    <p className='text-gray-400'><small>© 2026 Digitools. All rights reserved.</small></p>
                </div>
                <div className="flex gap-5">
                    <p className='text-gray-400 cursor-pointer hover:text-white'><small>Privacy Policy</small></p>
                    <p className='text-gray-400 cursor-pointer hover:text-white'><small>Terms of Service</small></p>
                    <p className='text-gray-400 cursor-pointer hover:text-white'><small>Cookies</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;