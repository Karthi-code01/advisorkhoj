import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Breadcrumbs from "../Breadcrumbs";
import { ArrowRight, Search } from "lucide-react";
import InterviewsPagination from "./InterviewsPagination";
import aimImage from "../../assets/Images/6418fd258e033e4afc684202f0875f873e862988.png";
import tool1 from "../../assets/Images/advisory tools.png"
import tool2 from "../../assets/Images/advisory tools (1).png"
import tool3 from "../../assets/Images/Union.png"
import tool4 from "../../assets/Images/advisory tools (2).png"
import tool5 from "../../assets/Images/Union (1).png"
import tool6 from "../../assets/Images/advisory tools (3).png"
import tool7 from "../../assets/Images/advisory tools (4).png"
import tool8 from "../../assets/Images/advisory tools (5).png"
import arrow from "../../assets/Images/Icon.png";

// Dummy data (replace with API data)


function Interviews() {

    const features = [
        { id: 1, name: "Trailing Returns", icon: tool1 },
        { id: 2, name: "Top SIP Funds", icon: tool2 },
        { id: 3, name: "Dividend Paying Funds", icon: tool3 },
        { id: 4, name: "SWP Returns", icon: tool4 },
        { id: 5, name: "Consistent Mutual Funds", icon: tool5 },
        { id: 6, name: "Rolling Return vs Category", icon: tool6 },
        { id: 7, name: "Fund Category Returns", icon: tool7 },
        { id: 8, name: "Quartile Ranking", icon: tool8 },
    ];
    const news = [

        { id: 1, name: "HDFC Mutual Fund launches HDFC Diversified Equity All Cap Active FOF", date: "Aug 29, 2019" },
        { id: 2, name: "Groww Mutual Fund launches Groww Multi Asset Allocation Fund", date: "Aug 29, 2019" },
        { id: 3, name: "What we can learn from the masters: A Teacher's Day reflection", date: "Aug 29, 2019" },
        { id: 4, name: "Bandhan Mutual Fund launches Bandhan BSE India Sector Leaders Index Fund", date: "Aug 29, 2019" },
        { id: 5, name: "Baroda BNP Paribas Mutual Fund launches Baroda BNP Paribas Business Conglomerates Fund", date: "Aug 29, 2019" },
    ]

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
                            className="w-full h-[34px] pr-10 pl-3 
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
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Articles */}

                <div className="lg:col-span-7 ">
                    <InterviewsPagination />

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

                    <div className="flex justify-between items-center mt-12 mb-2">
                        <h2
                            className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle"
                        >
                            Mutual Fund Research
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
                        {features.map((item) => (
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
                            Fund News
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
                    <div className="grid grid-cols-1 gap-3 max-w-3xl mx-auto mb-12">
                        {news.map((item) => (
                            <div
                                key={item.id}
                                className=" items-center gap-3 p-3 py-4 bg-white"
                            >
                                <h3 className="font-[Arial] font-bold text-[12px] leading-[150%] text-[#1D1D1D] align-middle">
                                    {item.name}
                                </h3>
                                <p className="font-[Arial] font-normal pt-2 text-[12px] leading-[150%] tracking-normal align-middle text-[#848484]">
                                    {item.date}
                                </p>


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
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Interviews;
