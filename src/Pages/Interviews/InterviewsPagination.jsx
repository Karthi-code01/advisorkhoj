import React, { useState } from "react";
import arrow from "../../assets/Images/arrow.png";
import twoArrows from "../../assets/Images/Vector (1).png";

const cards = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    image:
        "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
    quote: "Lorem Ipsum some quoted text lalalala",
    name: "Mrs. Madhu Lunawat",
    position: "Founder, CEO & MD (The Wealth Company)",
}));

export default function InterviewsPagination() {
    const [activeTab, setActiveTab] = useState("financial");
    const [currentPage, setCurrentPage] = useState(1);

    const cardsPerPage = 15;
    const startIdx = (currentPage - 1) * cardsPerPage;
    const endIdx = startIdx + cardsPerPage;
    const currentCards = cards.slice(startIdx, endIdx);

    // white bottom with diagonal cut
    const bottomClip = "polygon(0 0, 88% 0, 100% 100%, 0% 100%)";

    const Card = ({ item }) => (
        <article className="relative h-[300px] shadow  overflow-hidden">
            {/* full background image */}
            <img
                src={item.image}
                alt={item.quote}
                className="absolute inset-0 w-full h-[300px] object-cover"
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* quote */}
            <p
                className={`absolute bottom-20 left-4 right-4 text-white font-merriweather font-bold text-[14px] leading-[150%] z-20 ${activeTab === "bfsi" ? "pr-12" : ""
                    }`}
            >
                “{item.quote}”
            </p>

            {/* play button */}
            {activeTab === "bfsi" && (
                <button className="absolute bottom-20 right-8 bg-[#FF5252] w-9 h-9 flex items-center justify-center rounded-full text-white z-20">
                    <img src={arrow} alt="play" className="w-3 h-3" />
                </button>
            )}

            {/* white info bar with diagonal cut */}
            <div
                className="absolute bottom-0 left-0 w-full bg-white p-4"
                style={{ clipPath: bottomClip, WebkitClipPath: bottomClip }}
            >

                <p className="font-[Arial] font-bold text-[12px] text-[#111111]">
                    {item.name}
                </p>
                <p className="font-[Arial] text-[10px] text-[#777777] truncate">
                    {item.position}
                </p>
            </div>
        </article>
    );

    return (
        <div className="max-w-screen-xl mx-auto px-4">
            {/* Tabs */}
            <div className="mb-8">
                <div className="flex w-full border border-gray-300 overflow-hidden">
                    <button
                        onClick={() => setActiveTab("financial")}
                        className={`flex-1 px-6 py-4 font-[Arial] font-bold text-[12px] leading-[22px] text-center transition ${activeTab === "financial"
                            ? "bg-[#096FFA] text-white"
                            : "bg-white text-[#111111]"
                            }`}
                    >
                        Financial Advisors Interview
                    </button>
                    <button
                        onClick={() => setActiveTab("bfsi")}
                        className={`flex-1 px-6 py-4 font-[Arial] font-bold text-[12px] leading-[22px] text-center transition ${activeTab === "bfsi"
                            ? "bg-[#096FFA] text-white"
                            : "bg-white text-[#111111]"
                            }`}
                    >
                        BFSI Industry Interview
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* first 6 */}
                {currentCards.slice(0, 6).map((item) => (
                    <Card key={item.id} item={item} />
                ))}

                {/* banner */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                    <div className="bg-[linear-gradient(114.55deg,#ECD3BA_15.37%,#CAE5FF_75.11%)] mt-6 sm:mt-2 flex flex-col sm:flex-row items-center sm:items-start mb-2">
                        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 w-full sm:w-[140px] ">
                            <img
                                src={twoArrows}
                                alt="Double Up Arrow"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0 px-4">
                            <h3 className="font-serif font-bold text-[16px] pt-8 leading-[28px] text-gray-800 mb-1">
                                Portfolio Tracking Simplified
                            </h3>
                            <p className="font-sans text-[13px] leading-[18px] text-gray-700">
                                Track your wealth with the Ultimate Investment Portfolio
                                Tracker
                            </p>
                        </div>
                        <div className="flex-shrink-0 px-4">
                            <button className="bg-[#096FFA] text-white mb-4 sm:mb-0 px-4 sm:px-6 py-2 mt-10 sm:py-3 mr-8 rounded-sm font-sans font-bold text-[11px] hover:bg-blue-700">
                                Track Your Portfolio
                            </button>
                        </div>
                    </div>
                </div>

                {/* remaining */}
                {currentCards.slice(6, 15).map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
            <div className=" h-[1px] bg-[#111111] mb-6 mt-12"></div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-2 items-center">
                {/* Prev Button */}
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    Prev
                </button>

                {/* Page Numbers */}
                {Array.from({ length: Math.ceil(cards.length / cardsPerPage) }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-1 border rounded ${currentPage === page ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                            }`}
                    >
                        {page}
                    </button>
                ))}

                {/* Next Button */}
                <button
                    disabled={currentPage === Math.ceil(cards.length / cardsPerPage)}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
