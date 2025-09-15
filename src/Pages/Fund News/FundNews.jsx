import React from 'react'
import Header from '../Header'
import Breadcrumbs from '../Breadcrumbs'
import { ArrowRight, Search } from 'lucide-react'
import Footer from '../Footer'
import FundNewsPagination from './FundNewsPagination'
import aimImage from "../../assets/Images/6418fd258e033e4afc684202f0875f873e862988.png";
import image3 from '../../assets/Images/3153823c1f81f2fe586e4b9dae485b114e674bd4.png'
import image4 from '../../assets/Images/a704b8a182e131059a12b4ffc0d55fffe2bb89fc.png'
import tool9 from "../../assets/Images/Union (2).png"
import tool10 from "../../assets/Images/Union (3).png"
import tool11 from "../../assets/Images/Union (4).png"
import tool12 from "../../assets/Images/advisory tools (6).png"
import tool13 from "../../assets/Images/advisory tools (7).png"
import tool14 from "../../assets/Images/advisory tools (8).png"
import tool15 from "../../assets/Images/advisory tools (9).png"
import tool16 from "../../assets/Images/advisory tools (10).png"

function FundNews() {
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
    return (
        <div className="min-h-screen bg-[#f8f9f9]">
            {/* Breadcrumbs + Search */}
            <Header />
            <div className="grid grid-cols-6 items-center gap-4 px-12 py-6 ">
                {/* Left side: Breadcrumbs */}
                <div className="col-span-3 sm:col-span-3 md:col-span-2">
                    <Breadcrumbs />
                </div>

                {/* Right side: Input */}
                <div className="col-span-3 sm:col-span-3 md:col-span-2 md:col-start-5 flex justify-end">
                    <div className="relative w-full sm:w-[200px] md:w-[254px]">
                        <input
                            type="text"
                            placeholder="Search a keyword"
                            className="w-full h-[34px] pr-10 pl-3 
                   border border-gray-300 bg-white text-gray-800 rounded-[12px]
                   placeholder:font-bold placeholder:text-[11px] placeholder:text-[#4A4A4A] 
                   placeholder:leading-[100%] placeholder:tracking-[0.01em] 
                   placeholder:font-[Arial] 
                   focus:border-blue-500 outline-none"
                        />
                        {/* Lucide Search Icon */}
                        <Search
                            size={16}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1D1D1D]"
                        />
                    </div>

                </div>

            </div>
            <div className="w-[full] h-[1px] bg-[#111111] mb-6 mx-12"></div>
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Articles */}

                <div className="lg:col-span-7 ">
                    <FundNewsPagination />

                </div>

                {/* Right: Sidebar */}
                <div className=" lg:col-span-5 lg:mr-4">
                    <div className="  overflow-hidden mb-6">
                        <div className=" h-full flex items-center">
                            <img
                                src={aimImage}
                                alt="Goals"
                                className="w-full h-[200px] object-cover "
                            />
                        </div>
                    </div>
                    <div className="p-6">
                        <h2 className="font-arial font-bold text-[16px] leading-[19px] tracking-[1px] text-gray-800 mb-4">
                            Stories from Advisors
                        </h2>
                        <div className="w-full h-[1px] bg-[#111111] mb-4"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8  ">
                            <div>
                                <img
                                    src={image3}
                                    alt="Advisor"
                                    className="w-full h-28 sm:h-32 object-cover  mb-2"
                                />
                                <p className="text-[#D99828] p-2 font-arial font-bold text-[10px] leading-[24px] tracking-[0.6px] uppercase py-1 inline-block">
                                    FEATURED ADVISOR
                                </p>
                                <h4 className="font-merriweather p-2 font-bold text-[16px] leading-[28px] text-gray-800">
                                    Active Funds are still a better choice in India...
                                </h4>

                                <p className="text-xs text-gray-500 p-2">
                                    Rajiv Singh | Mumbai
                                </p>
                            </div>
                            <div>
                                <img
                                    src={image4}
                                    alt="Advisor"
                                    className="w-full h-28 sm:h-32 object-cover mb-2"
                                />
                                <p className="text-[#D99828] p-2 font-arial font-bold text-[10px] leading-[24px] tracking-[0.6px] uppercase py-1 inline-block">
                                    FEATURED ADVISOR
                                </p>
                                <h4 className="font-merriweather p-2 font-bold text-[16px] leading-[28px] text-gray-800">
                                    Quant Fund can also be considered for core portfolio
                                </h4>
                                <p className="text-xs text-gray-500 p-2">
                                    Supriya Raj | Mumbai
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-2 mb-2">
                        <h2
                            className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle"
                        >
                            Tools and Calculators
                        </h2>
                        <button className="flex items-center font-[Arial] font-bold text-[11px] leading-[13px] tracking-[1.36px] uppercase text-[#000000] hover:text-blue-800 transition-colors">
                            VIEW ALL <ArrowRight className="ml-1 h-4 w-4" />
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
                    <div className="overflow-hidden mb-6 mt-6">
                        <div className=" h-full flex items-center">
                            <img
                                src={aimImage}
                                alt="Goals"
                                className="w-full h-[130px] object-cover "
                            />
                        </div>
                    </div>
                     <div className="flex justify-between items-center mt-2 mb-2">
                        <h2
                            className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle"
                        >
                            Top Articles
                        </h2>
                        <button className="flex items-center font-[Arial] font-bold text-[11px] leading-[13px] tracking-[1.36px] uppercase text-[#000000] hover:text-blue-800 transition-colors">
                            VIEW ALL <ArrowRight className="ml-1 h-4 w-4" />
                        </button>
                    </div>
                    <div className="w-full h-[1px] bg-[#111111] mb-6"></div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default FundNews