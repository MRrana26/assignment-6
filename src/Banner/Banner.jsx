import React from 'react';
import logo from '../assets/banner.png'
import { TbLivePhotoFilled } from 'react-icons/tb';
import { CiPlay1 } from 'react-icons/ci';

const Banner = () => {
    return (
        <section className='w-10/12 mx-auto flex flex-col-reverse md:flex-row justify-between mt-15 gap-15 space-y-4'>

            <div className="flex justify-between items-center space-y-4">
                <div className="">
                    <div className="flex items-center w-fit bg-[#E1E7FF] p-3 rounded-full gap-2">
                        <TbLivePhotoFilled style={{color : '#9514FA'}} />
                        <p className='text-[#9514FA]'>New: AI-Powered Tools Available</p>
                    </div>
                    <h1 className='text-[2.5rem] md:text-[4rem] font-extrabold'>Supercharge Your <br /> Digital Workflow</h1>
                    <p>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products</p>
        
                    <div className="space-x-5 mt-8">
                        <button className="btn rounded-full bg-gradient-to-tr from-[#4F39F6] to-[#9514FA] text-white p-3.5">Explore Products</button>
                        <button className='btn btn-outline rounded-full text-[#4F39F6] border-[#4F39F6] p-3.5'><CiPlay1 /> Watch Demo</button>
                    </div>
                </div> 
            </div>

            <div className="">
                <img className='w-125' src={logo} alt="" />
            </div>
        </section>
    );
};

export default Banner;