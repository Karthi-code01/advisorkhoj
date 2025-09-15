import React, { useState } from 'react'

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
    const [active, setActive] = useState("All");
     const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = articles.slice(startIndex, endIndex);

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

    return (
        <div>
            <h2
                className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle mb-2 px-4"
            >
                Most Popular Saving, Investing & Mutual Fund Articles
            </h2>
            <div className="w-full h-[1px] bg-[#111111] mx-4"></div>
            <div className="w-full mt-4 bg-white p-3 ms-4">
                <div className="flex justify-between items-center gap-2 sm:gap-3 overflow-x-auto lg:overflow-visible no-scrollbar">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActive(category)}
                            className={`flex-shrink-0 px-3 py-1.5 text-[12px] font-[Arial] font-normal leading-[150%] rounded-sm border font-[Arial] font-normal text-[10px] leading-[120%] tracking-normal align-middle capitalize text-gray-700
          ${active === category
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                } transition`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default FundNewsPagination