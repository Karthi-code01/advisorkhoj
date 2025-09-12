import { Link } from "react-router-dom";
import { ChevronRight, Clock, Eye, MessageCircle, Search } from "lucide-react";
import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";
import ArticlePagination from "./ArticlePagination";
import Footer from "./Footer";


const ArticlesPage = () => {
    const articles = [
        {
            id: 1,
            title: "Key highlights of new Indian Budget",
            image:
                "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
            category: "Category name",
            readTime: "5 min read",
            views: "12,32,431",
            comments: 778,
            author: "By Eddie Lobanovskiy",
            date: "09 Nov 2023",
            excerpt:
                "Systematic Investment Plans (SIPs) were introduced in India almost ...",
        },
        {
            id: 2,
            title:
                "How Mutual Fund SIPs have created wealth over the last 15 years: Large Cap and Diversified Equity",
            image:
                "https://images.pexels.com/photos/163255/hot-air-balloon-ballooning-adventure-travel-163255.jpeg",
            category: "Category name",
            readTime: "5 min read",
            views: "12,32,431",
            comments: 778,
            author: "By Eddie Lobanovskiy",
            date: "09 Nov 2023",
            excerpt:
                "Systematic Investment Plans (SIPs) were introduced in India almost ...",
        },
        {
            id: 3,
            title: "Key highlights of new Indian Budget",
            image:
                "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
            category: "Category name",
            readTime: "5 min read",
            views: "12,32,431",
            comments: 778,
            author: "By Eddie Lobanovskiy",
            date: "09 Nov 2023",
            excerpt:
                "Systematic Investment Plans (SIPs) were introduced in India almost ...",
        },
        {
            id: 4,
            title: "Key highlights of new Indian Budget",
            image:
                "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
            category: "Category name",
            readTime: "5 min read",
            views: "12,32,431",
            comments: 778,
            author: "By Eddie Lobanovskiy",
            date: "09 Nov 2023",
            excerpt:
                "Systematic Investment Plans (SIPs) were introduced in India almost ...",
        },
        {
            id: 5,
            title: "Key highlights of new Indian Budget",
            image:
                "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
            category: "Category name",
            readTime: "5 min read",
            views: "12,32,431",
            comments: 778,
            author: "By Eddie Lobanovskiy",
            date: "09 Nov 2023",
            excerpt:
                "Systematic Investment Plans (SIPs) were introduced in India almost ...",
        },
        {
            id: 6,
            title: "Key highlights of new Indian Budget",
            image:
                "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
            category: "Category name",
            readTime: "5 min read",
            views: "12,32,431",
            comments: 778,
            author: "By Eddie Lobanovskiy",
            date: "09 Nov 2023",
            excerpt:
                "Systematic Investment Plans (SIPs) were introduced in India almost ...",
        },
        {
            id: 7,
            title: "Key highlights of new Indian Budget",
            image:
                "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
            category: "Category name",
            readTime: "5 min read",
            views: "12,32,431",
            comments: 778,
            author: "By Eddie Lobanovskiy",
            date: "09 Nov 2023",
            excerpt:
                "Systematic Investment Plans (SIPs) were introduced in India almost ...",
        },
        {
            id: 8,
            title: "Key highlights of new Indian Budget",
            image:
                "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
            category: "Category name",
            readTime: "5 min read",
            views: "12,32,431",
            comments: 778,
            author: "By Eddie Lobanovskiy",
            date: "09 Nov 2023",
            excerpt:
                "Systematic Investment Plans (SIPs) were introduced in India almost ...",
        },
    ];

    const fundNews = [
        {
            id: 1,
            title:
                "HDFC Mutual Fund launches HDFC Diversified Equity All Cap Active FOF",
            date: "Aug 29, 2019",
        },
    ];

    return (
        <div className="min-h-screen bg-[#f8f9f9]">
            {/* Breadcrumbs + Search */}
            <Header />
            <div className="grid grid-cols-6 items-center gap-4 px-8 py-6 ">
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
            <div className="w-[full] h-[1px] bg-[#111111] mb-6 mx-8"></div>
            {/* Filters */}
            

            {/* Content grid */}
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Articles */}
                
                <div className="lg:col-span-7 space-y-6">
                    <ArticlePagination articles={articles}/>
                    {/* {articles.map((article) => (
                        <div
                            key={article.id}
                            className="bg-white rounded-lg shadow-sm p-4 sm:flex gap-4"
                        >
                            <div className="sm:w-1/3">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-40 sm:h-32 object-cover rounded"
                                />
                                <span className="inline-block mt-2 px-3 py-1 text-xs bg-gray-100 rounded-full">
                                    {article.category}
                                </span>
                            </div>
                            <div className="sm:w-2/3 mt-3 sm:mt-0">
                                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-2">
                                    {article.excerpt}
                                </p>
                                <p className="text-gray-500 text-xs mb-1">{article.author}</p>
                                <p className="text-gray-400 text-xs">{article.date}</p>
                                <div className="flex items-center text-xs text-gray-500 mt-2 space-x-4">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {article.readTime}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Eye className="w-3 h-3" /> {article.views}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MessageCircle className="w-3 h-3" /> {article.comments}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))} */}
                </div>

                {/* Right: Sidebar */}
                <div className="space-y-6 lg:col-span-5">
                    {/* Banner */}
                    <div className="bg-orange-100 p-4 rounded-lg text-center">
                        <h4 className="text-gray-800 font-bold">
                            Aim to achieve your{" "}
                            <span className="text-blue-600">SHORT TERM GOALS</span>
                        </h4>
                    </div>

                    {/* Fund News */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-gray-900">Fund News</h4>
                            <Link
                                to="#"
                                className="text-xs uppercase tracking-wide font-semibold hover:underline"
                            >
                                View All
                            </Link>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm space-y-2">
                            {fundNews.map((news) => (
                                <div key={news.id}>
                                    <p className="font-medium text-sm text-gray-900">
                                        {news.title}
                                    </p>
                                    <p className="text-xs text-gray-500">{news.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default ArticlesPage;
