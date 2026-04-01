import React from 'react';
import { FaCheck } from 'react-icons/fa';

import iconWriting from '../assets/products/writing_2327400 1.png';
import iconDesign from '../assets/products/design-tool.png';
import iconCamera from '../assets/products/camera.png';
import iconOperation from '../assets/products/operation.png';
import iconPortfolio from '../assets/products/portfolio.png';
import iconSocial from '../assets/products/social-media.png';
import iconSeo from '../assets/products/seo.png';
import iconVideoicon from '../assets/products/videoicon.png';
                   

const Products = () => {

    const productsData = [
        {
            id: 1,
            title: "AI Writing Pro",
            desc: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
            price: "29",
            duration: "Mo",
            features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"],
            badge: "Best Seller",
            badgeColor: "bg-orange-100 text-orange-600",
            icon: iconWriting
        },

        {
            id: 2,
            title: "Design Templates Pack",
            desc: "2000+ premium templates for social media, presentations, and marketing materials.",
            price: "49",
            duration: "One-Time",
            features: ["2000+ templates", "Monthly updates", "Commercial license"],
            badge: "Popular",
            badgeColor: "bg-purple-100 text-purple-600",
            icon: iconDesign
        },


        {
            id: 3,
            title: "Premium Stock Assets",
            desc: "Access millions of royalty-free photos, videos, and graphics for your projects.",
            price: "19",
            duration: "Mo",
            features: ["10M+ assets", "Commercial use", "No attribution"],
            badge: "New",
            badgeColor: "bg-green-100 text-green-600",
            icon: iconCamera
        },

        {
            id: 4,
            title: "Automation Toolkit",
            desc: "Automate repetitive tasks and streamline your workflow with powerful tools.",
            price: "79",
            duration: "Mo",
            features: ["50+ automations", "API access", "Custom workflows"],
            badge: "Popular",
            badgeColor: "bg-purple-100 text-purple-600",
            icon: iconOperation
        },


        {
            id: 5,
            title: "Resume Builder Pro",
            desc: "Create professional resumes and cover letters that land interviews.",
            price: "15",
            duration: "One-Time",
            features: ["100+ templates", "ATS optimization", "Export to PDF"],
            badge: "New",
            badgeColor: "bg-green-100 text-green-600",
            icon: iconPortfolio
        },


        {
            id: 6,
            title: "Social Media Content Kit",
            desc: "Complete toolkit for creating engaging social media content across all platforms.",
            price: "39",
            duration: "Mo",
            features: ["5000+ assets", "Scheduler included", "Analytics dashboard"],
            badge: "Best Seller",
            badgeColor: "bg-orange-100 text-orange-600",
            icon: iconSocial
        },


        {
            id: 7,
            title: "SEO Optimizer Master",
            desc: "Boost your website's ranking with real-time SEO analysis and keyword suggestions.",
            price: "45",
            duration: "Mo",
            features: ["Site audit report", "Keyword tracking", "Backlink checker"],
            badge: "Top Rated",
            badgeColor: "bg-blue-100 text-blue-600",
            icon: iconSeo
        },


        {
            id: 8,
            title: "Video Editing Assets",
            desc: "Download 500+ premium transitions, overlays, and sound effects for pro editing.",
            price: "59",
            duration: "One-Time",
            features: ["4K Resolution", "Drag & Drop", "No Plugin Required"],
            badge: "Limited",
            badgeColor: "bg-red-100 text-red-600",
            icon: iconVideoicon
        }
    ];

    return (
        <section id='productsSection' className="bg-white py-20">

        
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productsData.map((item) => (<div key={item.id} className="p-8 rounded-3xl border border-gray-100 shadow-sm bg-white relative hover:shadow-xl transition-all duration-300 group">

                    <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.badgeColor}`}>
                        {item.badge}
                    </div>


                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                        <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#101727] mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 h-12">{item.desc}
                    </p>

                    <div className="mb-6">
                        <span className="text-3xl font-bold text-[#101727]">${item.price}</span>
                        <span className="text-gray-400 font-medium"> /{item.duration}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                        {item.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                                <FaCheck className="text-green-500 flex-shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>


                    <button className="w-full rounded-full py-4 bg-[#9514FA] text-white rounded-2xl font-bold hover:bg-[#7a10cc] transition-colors shadow-lg active:scale-95 duration-200">
                        Buy Now
                    </button>
                </div>
                ))}
            </div>
        </section>
    );
};

export default Products;