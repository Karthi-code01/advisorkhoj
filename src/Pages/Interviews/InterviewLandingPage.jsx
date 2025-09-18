import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Header';
import Breadcrumbs from '../Breadcrumbs';
import Footer from '../Footer';
import { Search } from 'lucide-react';
import shareicon from '../../assets/Images/Frame 1427.png'
import arrow from "../../assets/Images/Icon.png";
import tool9 from "../../assets/Images/Union (2).png"
import tool10 from "../../assets/Images/Union (3).png"
import tool11 from "../../assets/Images/Union (4).png"
import tool12 from "../../assets/Images/advisory tools (6).png"
import tool13 from "../../assets/Images/advisory tools (7).png"
import tool14 from "../../assets/Images/advisory tools (8).png"
import tool15 from "../../assets/Images/advisory tools (9).png"
import tool16 from "../../assets/Images/advisory tools (10).png"
import clock from '../../assets/Images/famicons_time-outline.png'
import eye from '../../assets/Images/eye.png'
import aimImage from "../../assets/Images/6418fd258e033e4afc684202f0875f873e862988.png";


const features2 = [
    { id: 1, name: "Crorepati Calculator", icon: tool9 },
    { id: 2, name: "Risk Analyser", icon: tool10 },
    { id: 3, name: "SIP Calculator", icon: tool11 },
    { id: 4, name: "Asset Calculator", icon: tool12 },
    { id: 5, name: "SIP Planner", icon: tool13 },
    { id: 6, name: "Retirement Planning Calculator", icon: tool14 },
    { id: 7, name: "Compounding Calculator", icon: tool15 },
    { id: 8, name: "Lumpsum Calculator", icon: tool16 },
];

const article = [
    {
        id: 1,
        title: "How Mutual Fund SIPs have created wealth over the last 15 years: Large Cap and Diversified Equity",
        image: "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
        category: "Finance",
        readTime: "5 min read",
        views: "12,32,431",
        comments: 778,
        author: "By Eddie Lobanovskiy",
        date: "09 Nov 2023",
        excerpt: "The Companies Act 2013 passed by the Parliament received the assent of the President of India on 29th August...",
    },
    {
        id: 2,
        title: "Key highlights of new Indian Companies Act 2013",
        image: "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
        category: "Investment",
        readTime: "6 min read",
        views: "1,12,431",
        comments: 512,
        author: "By Jane Doe",
        date: "10 Nov 2023",
        excerpt: "Mutual Fund SIPs have helped investors accumulate wealth over long-term ...",
    },
]
function InterviewLandingPage() {
    const location = useLocation();
    const cardData = location.state;
    console.log('cardData', location)
    return (
        <div className="min-h-screen bg-[#f8f9f9]">
            <Header />

            {/* Top Section: Breadcrumbs + Search */}
            <div className="grid grid-cols-6 items-center gap-4 px-12 py-6">
                {/* Breadcrumbs */}
                <div className="col-span-3 sm:col-span-3 md:col-span-2">
                    <Breadcrumbs />
                </div>

                {/* Search */}
                <div className="col-span-3 sm:col-span-3 md:col-span-2 md:col-start-5 flex justify-end">
                    <div className="relative w-full sm:w-[200px] md:w-[254px]">
                        <input
                            type="text"
                            placeholder="Search a keyword"
                            className="w-full py-1 pr-10 pl-3 
                border border-gray-300 bg-white text-gray-800 rounded-[12px]
                placeholder:font-bold placeholder:text-[11px] placeholder:text-[#4A4A4A] 
                placeholder:leading-[100%] placeholder:tracking-[0.01em] 
                placeholder:font-[Arial] 
                focus:border-blue-500 outline-none"
                        />
                        <Search
                            size={16}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1D1D1D]"
                        />
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className=" h-[1px] bg-[#111111] mb-6 mx-12"></div>
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-12 ">
                {/* Left: Articles */}

                <div className="lg:col-span-7 px-4">
                    <div className='bg-white p-4'>
                        <div className="sm:flex items-center sm:justify-between text-[12px]  leading-[150%] tracking-[0] font-normal font-inter text-[#848484] mb-6">
                            {/* Left Text */}
                            <p>
                                By <span className="font-semibold text-[#333333]">Advisorkhoj Research Team</span> | 25 Jan 2022
                            </p>

                            {/* Right Actions */}
                            <div className="flex items-end gap-2 pt-2 sm:pt-0">
                                <button className="bg-[#8D9BAE] text-white text-[10px] px-4 py-1 font-bold rounded">
                                    {cardData.activeTab === "bfsi"
                                        ? "BFSI Industry Interview"
                                        : "Financial Advisors Interview"}
                                </button>
                                <img src={shareicon} alt="share" className="w-[24px] h-[24px]" />
                            </div>
                        </div>


                        {/* Title */}
                        <h1 className="font-merriweather font-bold text-[24px] leading-[150%] tracking-[0] text-gray-900 mb-4">
                            In Conversation with Mr Saurabh Jain Chief Marketing Officer with Union Mutual Fund
                        </h1>


                        {/* Video/Image Section */}
                        {cardData.activeTab === "bfsi" ? (
                            // BFSI → Full width video with play button
                            <div className="w-full h-[260px]  overflow-hidden mb-6 relative 2xl:px-32">
                                <video
                                    src="https://www.w3schools.com/html/mov_bbb.mp4" // replace with your BFSI video
                                    className="w-full h-full object-cover"
                                    controls={false}
                                />

                                {/* Play button overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="white"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            // Financial → Half width image without play button
                            <div className="w-full sm:w-1/2 h-[260px] bg-gray-200 overflow-hidden mb-6">
                                <img
                                    src="https://via.placeholder.com/600x350"
                                    alt="Interview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Description */}
                        <p className="text-sm text-gray-700 mb-6">
                            Mr. Saurabh Jain is the Chief Marketing Officer at Union Asset Management Company Private
                            Limited. Mr. Saurabh Jain is a B.Com and MBA. In his professional career of more than 24
                            years, he has worked with IDFC Investment Advisors Ltd as Associate Director, Standard
                            Chartered AMC Pvt. Ltd. as Assistant Vice President - Institutional Sales and Birla Sunlife
                            Distribution Limited in their Institutional sales team.
                        </p>

                        {/* Other Interviews Section */}

                    </div>
                    <h2
                        className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle mb-2 mt-12"
                    >
                        Check Other Interviews
                    </h2>
                    <div className="w-full h-[1px] bg-[#111111] "></div>
                    <div className="flex gap-4 mt-6">
                        <button className="flex-1 bg-[#096FFA] text-white py-3 font-[Arial] rounded text-[12px] font-semibold">
                            Financial Advisors Interview
                        </button>
                        <button className="flex-1 bg-[#096FFA] text-white py-3 font-[Arial] rounded text-[12px] font-semibold">
                            BFSI Industry Interview
                        </button>
                    </div>
                </div>

                {/* Right: Sidebar */}
                <div className=" lg:col-span-5 lg:mr-4">
                    <div className="  overflow-hidden mb-6">
                        <div className=" h-full flex items-center">
                            <img
                                src={aimImage}
                                alt="Goals"
                                className="w-full h-[200px] object-fill "
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-12 mb-2">
                        <h2
                            className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
                                 text-[#000000] align-middle"
                        >
                            Tools and Calculators
                        </h2>
                        <button className="flex gap-1 items-center font-[Arial] font-bold text-[11px] leading-[13px] tracking-[1.36px] uppercase text-[#000000] hover:text-blue-800 transition-colors">
                            VIEW ALL   <img
                                src={arrow}
                                alt="arrow"
                                className="w-[13px] h-[13px] object-contain invert"
                            />
                        </button>
                    </div>
                    <div className="w-full h-[1px] bg-[#111111] mb-6"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
                        {features2.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-3 p-3 bg-white"
                            >
                                <img src={item.icon} alt={item.name} className="w-[24px] h-[24px]" />
                                <span className="font-[Arial] font-normal text-[12px] leading-[150%] text-gray-700 align-middle">
                                    {item.name}
                                </span>

                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center mt-12 mb-2">
                        <h2
                            className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
                                 text-[#000000] align-middle"
                        >
                            Top Articles
                        </h2>
                        <button className="flex gap-1 items-center font-[Arial] font-bold text-[11px] leading-[13px] tracking-[1.36px] uppercase text-[#000000] hover:text-blue-800 transition-colors">
                            VIEW ALL   <img
                                src={arrow}
                                alt="arrow"
                                className="w-[13px] h-[13px] object-contain invert"
                            />
                        </button>
                    </div>
                    <div className="w-full h-[1px] bg-[#111111] mb-6"></div>
                    <div>
                        {/* Grid Wrapper */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {article.map((item, index) => (
                                <div key={index} className="bg-[#FFFFFF] overflow-hidden flex flex-col">
                                    <div className="relative p-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="object-cover w-full h-[160px] "
                                        />
                                        <p className="pt-4 font-[Arial] font-normal text-[12px] tracking-[-0.01em] text-[#999999]">
                                            {item.date}
                                        </p>

                                        {/* Meta Info */}


                                        {/* Category Badge */}
                                        <span className="absolute top-6 left-6 bg-white text-gray-700 text-xs px-2 py-1 rounded">
                                            {item.category}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="pr-4 flex flex-col flex-grow px-4 ">
                                        <h3 className="font-merriweather font-bold text-[14px] leading-[150%] text-gray-900">
                                            {item.title}
                                        </h3>



                                        <div className="mt-2 pb-4 flex items-center flex  flex-grow text-[11px] text-gray-700">
                                            {/* Author + Date */}
                                            <div className="flex items-center gap-2 text-[10px] font-inter font-normal mt-4 leading-[120%] text-gray-600">
                                                <span className="flex items-center gap-1">
                                                    <img src={clock} alt="clock" className="w-3 h-3" />
                                                    {item.readTime}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <img src={eye} alt="views" className="w-3 h-3" />
                                                    {item.views}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="overflow-hidden mb-6 mt-8">
                        <div className=" h-full flex items-center">
                            <img
                                src={aimImage}
                                alt="Goals"
                                className="w-full h-[130px] object-cover "
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default InterviewLandingPage