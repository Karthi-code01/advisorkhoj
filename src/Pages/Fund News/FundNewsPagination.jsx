import React, { useState } from 'react'
import twoArrows from "../../assets/Images/Vector (1).png";
import { useNavigate } from 'react-router-dom';

function FundNewsPagination() {
    const categories = [
        "All",
        "Mutual Fund",
        "BFSI Industry",
        "General",
        "Share Markets",
        "Income Tax",
        "NFO",
        "Advisorkhoj Team",
    ];

    const articles = Array.from({ length: 36 }, (_, i) => ({
        id: i + 1,
        title: "HDFC Mutual Fund launches HDFC Diversified Equity All Cap Active FOF",
        description:
            "To generate long-term capital appreciation / income by investing in units of domestic equity-oriented schemes based on varied market caps. There is no assurance that the investment objective of the Scheme will be achieved...",
        author: "Eddie Lobanovskiy",
        date: "09 Nov 2023",
    }));
    const [active, setActive] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const ITEMS_PER_PAGE = 12;

    // Pagination logic
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = articles.slice(startIndex, endIndex);

    const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

    const handleclick = () => {
        navigate("/fundnews/Bandan-Mutual-Fund")
    }

    return (
        <div>
            {/* <h2
                className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle mb-2 px-4"
            >
                Most Popular Saving, Investing & Mutual Fund Articles
            </h2>
            <div className=" h-[1px] bg-[#111111] mx-4"></div> */}
            <div className="  bg-white p-3 mx-4 mb-4">
                <div className="flex justify-between items-center gap-2 sm:gap-3 overflow-x-auto lg:overflow-visible no-scrollbar">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActive(category)}
                            className={`flex-shrink-0 px-3 py-1.5 text-[12px] font-[Arial] font-normal leading-[150%] rounded-sm border font-[Arial] font-normal text-[10px] leading-[120%] tracking-normal align-middle capitalize text-gray-700
          ${active === category
                                    ? "bg-[#096FFA] text-white border-blue-600"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                } transition`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 mx-4 sm:grid-cols-2 gap-6">
                {currentItems.map((item, index) => (
                    <React.Fragment key={item.id}>
                        {/* Insert banner after 6th card */}
                        {index === 6 && (
                            <div className="col-span-1 sm:col-span-2 w-full">
                                <div className="bg-[linear-gradient(114.55deg,#ECD3BA_15.37%,#CAE5FF_75.11%)] mt-6 sm:mt-2 flex flex-col sm:flex-row items-center sm:items-start mb-2 ">
                                    <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 w-full sm:w-[140px]">
                                        <img
                                            src={twoArrows}
                                            alt="Double Up Arrow"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0">
                                        <h3 className="font-serif font-bold text-[16px] pt-8 leading-[28px] text-gray-800 mb-1">
                                            Portfolio Tracking Simplified
                                        </h3>
                                        <p className="font-sans text-[13px] leading-[18px] text-gray-700">
                                            Track your wealth with the Ultimate Investment Portfolio Tracker
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <button className="bg-[#096FFA] text-white mb-4 sm:mb-0 px-4 sm:px-6 py-2 mt-10 sm:py-3 mr-8 rounded-sm font-sans font-bold text-[11px] hover:bg-blue-700">
                                            Track Your Portfolio
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Card */}
                        <div className="bg-white border shadow-sm p-5 flex flex-col justify-between">
                            <div>
                                <h3 className="font-merriweather pr-24 font-bold text-[14px] leading-[150%] tracking-normal text-[#333333] mb-2">
                                    {item.title}
                                </h3>

                                <p className="font-[Arial] font-normal text-[12px] leading-[150%] text-[#999999] mb-4 line-clamp-3">
                                    {item.description}
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[12px] font-[Arial] font-bold text-gray-900">
                                        by {item.author}
                                    </p>
                                    <p className="text-[12px] font-[Arial] text-gray-500 mt-2">
                                        {item.date}
                                    </p>
                                </div>
                                <button onClick={() => handleclick()} className="px-3 py-1.5 mt-2 bg-[#096FFA] text-white font-[Arial] font-bold text-[10px] leading-[12px] tracking-[1px] rounded hover:bg-blue-700 transition">
                                    Read Now
                                </button>

                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <div className=" h-[1px] bg-[#111111] mt-8 mx-4"></div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-8 text-sm font-[Arial]">
                {/* Prev */}
                <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-2 text-gray-500 hover:text-blue-600 disabled:text-gray-400 underline"
                >
                    Prev
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-1 text-gray-600 hover:text-blue-600 disabled:text-gray-400"
                    >
                        &lt;
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-1 ${currentPage === i + 1
                                ? "text-blue-600 font-bold underline"
                                : "text-gray-600 hover:text-blue-600"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-1 text-gray-600 hover:text-blue-600 disabled:text-gray-400"
                    >
                        &gt;
                    </button>
                </div>

                {/* Next */}
                <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-2 text-gray-500 hover:text-blue-600 disabled:text-gray-400 underline"
                >
                    Next
                </button>
            </div>

        </div>
    )
}

export default FundNewsPagination