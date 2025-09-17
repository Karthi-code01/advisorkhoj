import React from 'react'
import Header from './Header'
import Breadcrumbs from './Breadcrumbs'
import { Search } from 'lucide-react'
import Footer from './Footer'
import shareicon from '../assets/Images/Frame 1427.png'

function ArticleLandingpage() {
    return (
        <div className="min-h-screen bg-[#f8f9f9]">
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
                                    BFSI Industry
                                </button>
                                <img src={shareicon} alt="share" className="w-[24px] h-[24px]" />
                            </div>
                        </div>


                        {/* Title */}
                        <h1 className="font-merriweather font-bold text-[24px] leading-[150%] tracking-[0] text-gray-900 mb-4">
                            In Conversation with Mr Saurabh Jain Chief Marketing Officer with Union Mutual Fund
                        </h1>


                        <div className="w-full flex justify-center mb-6">
                            <div className="w-full sm:w-1/2 h-[260px] bg-gray-200 overflow-hidden">
                                <img
                                    src="https://via.placeholder.com/600x350"
                                    alt="Interview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>


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
                </div>
                <div className=" lg:col-span-5 lg:mr-4">

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ArticleLandingpage