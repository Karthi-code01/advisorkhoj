import React, { useState } from "react";
import twoArrows from "../assets/Images/Vector (1).png";
import clock from '../assets/Images/famicons_time-outline.png'
import eye from '../assets/Images/eye.png'
import download from '../assets/Images/mynaui_download.png'
import share from '../assets/Images/Frame 1392 (1).png'
const articles = [
    {
        id: 1,
        title: "Key highlights of new Indian Budget",
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
        title: "How Mutual Fund SIPs have created wealth over the last 15 years",
        image: "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
        category: "Investment",
        readTime: "6 min read",
        views: "1,12,431",
        comments: 512,
        author: "By Jane Doe",
        date: "10 Nov 2023",
        excerpt: "Mutual Fund SIPs have helped investors accumulate wealth over long-term ...",
    },
    {
        id: 3,
        title: "Top 10 Budgeting Tips for Young Professionals",
        image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
        category: "Personal Finance",
        readTime: "4 min read",
        views: "2,45,231",
        comments: 210,
        author: "By John Smith",
        date: "11 Nov 2023",
        excerpt: "Budgeting is essential for financial stability. Here are ten tips to help ...",
    },
    {
        id: 4,
        title: "Understanding Equity vs Debt Funds",
        image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",
        category: "Investment",
        readTime: "5 min read",
        views: "98,432",
        comments: 150,
        author: "By Eddie Lobanovskiy",
        date: "12 Nov 2023",
        excerpt: "Equity funds and debt funds differ in risk and returns. Learn the basics ...",
    },
    {
        id: 5,
        title: "How to Plan Your Retirement in India",
        image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
        category: "Retirement",
        readTime: "7 min read",
        views: "1,02,345",
        comments: 320,
        author: "By Jane Doe",
        date: "13 Nov 2023",
        excerpt: "Retirement planning is crucial. Here's a step-by-step guide to secure your future ...",
    },
    {
        id: 6,
        title: "Top 5 Tax-Saving Investments in India",
        image: "https://images.pexels.com/photos/4386399/pexels-photo-4386399.jpeg",
        category: "Tax",
        readTime: "5 min read",
        views: "75,234",
        comments: 210,
        author: "By John Smith",
        date: "14 Nov 2023",
        excerpt: "The Companies Act 2013 passed by the Parliament received the assent of the President of India on 29th August...",
    },
    {
        id: 7,
        title: "Understanding the Indian Stock Market Basics",
        image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg",
        category: "Stock Market",
        readTime: "6 min read",
        views: "1,22,431",
        comments: 432,
        author: "By Eddie Lobanovskiy",
        date: "15 Nov 2023",
        excerpt: "The Companies Act 2013 passed by the Parliament received the assent of the President of India on 29th August...",
    },
    {
        id: 8,
        title: "Benefits of Investing in Gold in 2023",
        image: "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
        category: "Commodities",
        readTime: "4 min read",
        views: "67,890",
        comments: 120,
        author: "By Jane Doe",
        date: "16 Nov 2023",
        excerpt: "Gold has always been a preferred investment. Here are reasons why ...",
    },
    {
        id: 9,
        title: "How to Build an Emergency Fund",
        image: "https://images.pexels.com/photos/4386394/pexels-photo-4386394.jpeg",
        category: "Personal Finance",
        readTime: "5 min read",
        views: "89,231",
        comments: 95,
        author: "By John Smith",
        date: "17 Nov 2023",
        excerpt: "An emergency fund is essential for unexpected expenses. Learn how to start ...",
    },
    {
        id: 10,
        title: "Understanding Risk in Mutual Funds",
        image: "https://images.pexels.com/photos/4386400/pexels-photo-4386400.jpeg",
        category: "Investment",
        readTime: "6 min read",
        views: "45,678",
        comments: 142,
        author: "By Eddie Lobanovskiy",
        date: "18 Nov 2023",
        excerpt: "Mutual funds carry different levels of risk. Here's how to evaluate them ...",
    },
    {
        id: 11,
        title: "5 Ways to Save More Money Every Month",
        image: "https://images.pexels.com/photos/4386430/pexels-photo-4386430.jpeg",
        category: "Savings",
        readTime: "4 min read",
        views: "98,432",
        comments: 210,
        author: "By Jane Doe",
        date: "19 Nov 2023",
        excerpt: "Saving money requires discipline. Here are five actionable ways to save ...",
    },
    {
        id: 12,
        title: "Guide to Buying Your First Home in India",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        category: "Real Estate",
        readTime: "7 min read",
        views: "1,02,345",
        comments: 320,
        author: "By John Smith",
        date: "20 Nov 2023",
        excerpt: "Buying your first home can be daunting. This guide covers everything ...",
    },
    {
        id: 13,
        title: "Top 5 Investment Mistakes to Avoid",
        image: "https://images.pexels.com/photos/4386440/pexels-photo-4386440.jpeg",
        category: "Investment",
        readTime: "5 min read",
        views: "56,789",
        comments: 165,
        author: "By Eddie Lobanovskiy",
        date: "21 Nov 2023",
        excerpt: "Avoid these common mistakes when investing to maximize your returns ...",
    },
    {
        id: 14,
        title: "Understanding Inflation and Its Impact on You",
        image: "https://images.pexels.com/photos/4386450/pexels-photo-4386450.jpeg",
        category: "Economy",
        readTime: "6 min read",
        views: "78,234",
        comments: 200,
        author: "By Jane Doe",
        date: "22 Nov 2023",
        excerpt: "Inflation affects purchasing power. Learn how it impacts your finances ...",
    },
    {
        id: 15,
        title: "Top 3 Mutual Funds to Watch in 2023",
        image: "https://images.pexels.com/photos/4386460/pexels-photo-4386460.jpeg",
        category: "Investment",
        readTime: "5 min read",
        views: "89,432",
        comments: 210,
        author: "By John Smith",
        date: "23 Nov 2023",
        excerpt: "These mutual funds have shown consistent performance and potential for growth ...",
    },
    {
        id: 16,
        title: "How to Manage Credit Card Debt",
        image: "https://images.pexels.com/photos/4386470/pexels-photo-4386470.jpeg",
        category: "Personal Finance",
        readTime: "4 min read",
        views: "67,890",
        comments: 125,
        author: "By Eddie Lobanovskiy",
        date: "24 Nov 2023",
        excerpt: "Credit card debt can accumulate quickly. Learn strategies to manage it effectively ...",
    },
    {
        id: 17,
        title: "5 Tips for Long-Term Financial Planning",
        image: "https://images.pexels.com/photos/4386480/pexels-photo-4386480.jpeg",
        category: "Finance",
        readTime: "6 min read",
        views: "92,431",
        comments: 198,
        author: "By Jane Doe",
        date: "25 Nov 2023",
        excerpt: "Planning for the long term ensures financial security. Here are five key tips ...",
    },
    {
        id: 18,
        title: "Benefits of Investing in Real Estate",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        category: "Real Estate",
        readTime: "7 min read",
        views: "1,12,431",
        comments: 275,
        author: "By John Smith",
        date: "26 Nov 2023",
        excerpt: "Real estate remains a strong investment. Learn the advantages of investing ...",
    },
    {
        id: 19,
        title: "Understanding Tax Slabs in India 2023",
        image: "https://images.pexels.com/photos/4386490/pexels-photo-4386490.jpeg",
        category: "Tax",
        readTime: "5 min read",
        views: "65,432",
        comments: 145,
        author: "By Eddie Lobanovskiy",
        date: "27 Nov 2023",
        excerpt: "Knowing tax slabs helps in planning finances. Here's what you need to know ...",
    },
    {
        id: 20,
        title: "Top 10 Financial Mistakes to Avoid in Your 20s",
        image: "https://images.pexels.com/photos/4386500/pexels-photo-4386500.jpeg",
        category: "Personal Finance",
        readTime: "6 min read",
        views: "88,234",
        comments: 220,
        author: "By Jane Doe",
        date: "28 Nov 2023",
        excerpt: "Your 20s are crucial for financial habits. Avoid these mistakes to stay on track ...",
    },
];


function ArticlePagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const totalPages = Math.ceil(articles.length / itemsPerPage);

    // Slice 9 items for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentArticles = articles.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            {/* Filter Section */}
            <div className="bg-[#FFFFFF] mx-4">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-4 justify-center text-xs sm:text-sm">
                    <div className="mx-2">
                        <span className="text-[#777777] mr-1 font-[Inter] text-[11px]">
                            Sort by :
                        </span>
                        <select className="bg-[#F6F6F6] border border-gray-300 rounded px-2 py-1 text-[11px] font-[Arial] font-bold text-gray-700 outline-none">
                            <option>Most Recent</option>
                            <option>Popular</option>
                        </select>
                    </div>
                    <div>
                        <span className="text-[#777777] mr-1 font-[Inter] text-[11px]">
                            Category :
                        </span>
                        <select className="bg-[#F6F6F6] border border-gray-300 rounded px-2 py-1 text-[11px] font-[Arial] font-bold text-gray-700 outline-none">
                            <option>All</option>
                        </select>
                    </div>
                    <div>
                        <span className="text-[#777777] mr-1 font-[Inter] text-[11px]">
                            Author :
                        </span>
                        <select className="bg-[#F6F6F6] border border-gray-300 rounded px-2 py-1 text-[11px] font-[Arial] font-bold text-gray-700 outline-none">
                            <option>All</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Articles with Banner in between */}
            <div className=" px-4 sm:px-6 lg:px-4 py-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Layout 1: Big left card + two stacked right */}
                    <div className="md:col-span-1">
                        {currentArticles.slice(0, 1).map((article) => (
                            <ArticleCard key={article.id} article={article} large />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:col-span-2">
                        {currentArticles.slice(1, 3).map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </div>
            </div>



            {/* Layout 2: Two left stacked + one big right */}
            <div className=" px-4 sm:px-6 lg:px-4 py-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="grid grid-cols-1 gap-6 md:col-span-2">
                        {currentArticles.slice(3, 5).map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                    <div className="md:col-span-1">
                        {currentArticles.slice(5, 6).map((article) => (
                            <ArticleCard key={article.id} article={article} large />
                        ))}
                    </div>
                </div>
            </div>

            {/* Banner */}
            <div className="bg-[linear-gradient(114.55deg,#ECD3BA_15.37%,#CAE5FF_75.11%)] mt-6 sm:mt-2 flex flex-col sm:flex-row items-center sm:items-start mb-2 mx-4">
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

            {/* Layout 3: Repeat same as first */}
            <div className=" px-4 sm:px-6 lg:px-4 py-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                        {currentArticles.slice(6, 7).map((article) => (
                            <ArticleCard key={article.id} article={article} large />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:col-span-2">
                        {currentArticles.slice(7, 9).map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-[full] h-[1px] bg-[#111111] mb-6 mt-4 mx-4"></div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2 mt-6 text-sm">
                {/* Prev */}
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className="text-gray-500 hover:underline disabled:opacity-50 disabled:hover:no-underline"
                >
                    Prev
                </button>

                {/* Left Chevron */}
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className="text-gray-600 disabled:opacity-40"
                >
                    ‹
                </button>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentPage(idx + 1)}
                        className={`px-1 ${currentPage === idx + 1
                            ? "text-blue-600 font-semibold"
                            : "text-gray-600 hover:text-blue-600"
                            }`}
                    >
                        {idx + 1}
                    </button>
                ))}

                {/* Right Chevron */}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="text-gray-600 disabled:opacity-40"
                >
                    ›
                </button>

                {/* Next */}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="text-blue-600 hover:underline disabled:opacity-50 disabled:hover:no-underline"
                >
                    Next
                </button>
            </div>

        </div>
    );
}

function ArticleCard({ article, large }) {
    return (
        <div
            className={`bg-[#FFFFFF] p-4 overflow-hidden flex ${large ? "flex-col" : "flex-col  sm:flex-row"
                }`}
        >
            {/* Image */}
            <div className="relative">
                <img
                    src={article.image}
                    alt={article.title}
                    className={`object-cover ${large ? "w-[270px] h-[200px] " : "w-[270px] h-[150px]"
                        }`}
                />
                <div className="flex items-center gap-2 text-[10px] font-inter font-normal mt-4 leading-[120%] text-gray-600">
                    <span className="flex items-center gap-1 align-middle">
                        <img src={clock} alt="clock" className="w-3 h-3" />
                        {article.readTime}
                    </span>
                    <span className="flex items-center gap-1 align-middle">
                        <img src={eye} alt="views" className="w-3 h-3" />
                        {article.views}
                    </span>
                    <span className="flex items-center gap-1 align-middle">
                        <img src={download} alt="likes" className="w-3 h-3" />
                        {article.likes}
                    </span>
                </div>



                <span className="absolute top-2 left-2 bg-white text-gray-700 text-xs px-2 py-1 rounded">
                    {article.category}
                </span>

            </div>

            {/* Content */}
            <div
                className={` pr-4 flex flex-col flex-grow ${!large ? "px-0 sm:px-4 py-4 sm:py-0" : " py-4"}`}>
                <h3 className="font-merriweather font-bold text-[14px] leading-[150%] text-gray-900 ">
                    {article.title}
                </h3>

                <p
                    className={`font-[Arial] py-4 font-normal text-[12px] leading-[150%] align-middle ${large ? "line-clamp-3" : "line-clamp-2"
                        }`}
                >
                    {article.excerpt}
                </p>



                <div className="mt-2 flex items-center justify-between text-[11px] text-gray-700">
                    {/* Author + Date (Left) */}
                    <div className=" items-center">
                        <p className="font-[Arial] font-bold text-[13px] leading-[100%] tracking-[-0.01em] align-middle text-[#333333] rounded">
                            by {article.author}
                        </p>

                        <p className=" pt-2 font-[Arial] font-normal text-[12px] leading-[100%] tracking-[-0.01em] align-middle text-[#999999]">
                            {article.date}
                        </p>
                    </div>

                    {/* Share Icon (Right) */}
                    <img
                        src={share}
                        alt="share"
                        className="w-[32px] h-[32px] cursor-pointer"
                    />
                </div>


            </div>
        </div>
    );
}

export default ArticlePagination;
