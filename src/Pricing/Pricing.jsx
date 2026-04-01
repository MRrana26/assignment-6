import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
    return (
        <section id='pricingSection' className="py-20 bg-white">

            <div className="w-10/12 mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold text-[#101727] mb-4">Simple, Transparent Pricing</h2>
                <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>


            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                
                <div className="p-8 rounded-2xl border bg-gray-50 border-gray-100 text-[#101727]">

                    <h3 className="text-2xl font-bold">Starter</h3>
                    <p className="text-sm mb-6 text-gray-500">Perfect for getting started</p>

                    <div className="mb-8 flex items-baseline">
                        <p className="text-4xl font-bold">$0</p>
                        <p className="text-gray-500">/Month</p>
                    </div>

                    <ul className="space-y-4 mb-10">
                        <li className="flex items-center gap-3 text-sm"><FaCheck className="text-green-500" /> Access to 10 free tools</li>

                        <li className="flex items-center gap-3 text-sm"><FaCheck className="text-green-500" /> Basic templates</li>

                        <li className="flex items-center gap-3 text-sm"><FaCheck className="text-green-500" /> Community support</li>

                        <li className="flex items-center gap-3 text-sm"><FaCheck className="text-green-500" /> 1 project per month</li>

                    </ul>

                    <button className="w-full py-3 rounded-full font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">
                        Get Started Free
                    </button>

                </div>

            
                <div className="relative p-8 rounded-2xl bg-[#9514FA] text-white shadow-2xl scale-105 z-10">

                    <h3 className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-black text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</h3>

                    <h3 className="text-2xl font-bold">Pro</h3>
                    <p className="text-sm mb-6 text-purple-100">Best for professionals</p>

                    <div className="mb-8 flex items-baseline">
                        <h1 className="text-4xl font-bold">$29</h1>
                        <p className="text-purple-100">/Month</p>
                    </div>

                    <ul className="space-y-4 mb-10">
                        <li className="flex items-center gap-3 text-sm"><FaCheck className="text-white" /> Access to all premium tools</li>
                        <li className="flex items-center gap-3 text-sm"><FaCheck className="text-white" /> Unlimited templates</li>
                        <li className="flex items-center gap-3 text-sm"><FaCheck className="text-white" /> Priority support</li>
                        <li className="flex items-center gap-3 text-sm"><FaCheck className="text-white" /> Unlimited projects</li>
                        <li className="flex items-center gap-3 text-sm"><FaCheck className="text-white" /> Cloud sync</li>
                    </ul>

                    <button className="w-full py-3 rounded-full font-semibold bg-white text-[#9514FA] hover:bg-gray-100 transition-all"> Start Pro Trial</button>
                </div>

                <div className="p-8 rounded-2xl border bg-gray-50 border-gray-100 text-[#101727]">

                    <h3 className="text-2xl font-bold">Enterprise</h3>
                    <p className="text-sm mb-6 text-gray-500">For teams and businesses</p>

                    <div className="mb-8 flex items-baseline">
                        <h2 className="text-4xl font-bold">$99</h2>
                        <h2 className="text-gray-500">/Month</h2>
                    </div>

                    <ul className="space-y-4 mb-10">
                        <li className="flex items-center gap-3 text-sm"><FaCheck className="text-green-500" /> Team collaboration</li>
                        <li className="flex items-center gap-3 text-sm"><FaCheck className="text-green-500" /> Custom integrations</li>
                        <li className="flex items-center gap-3 text-sm"><FaCheck className="text-green-500" /> Dedicated support</li>
                        <li className="flex items-center gap-3 text-sm"><FaCheck className="text-green-500" /> Custom branding</li>
                    </ul>

                    <button className="w-full py-3 rounded-full font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">Contact Sales </button>
                </div>

            </div>
        </section>
    );
};

export default Pricing;