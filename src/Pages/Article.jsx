import { Link } from "react-router-dom";
import { ChevronRight, Clock, Eye, MessageCircle, Search } from "lucide-react";
import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";
import ArticlePagination from "./ArticlePagination";
import Footer from "./Footer";
import brand1 from "../assets/Images/ba54b87a00f0ca702bcc03ebbac1bb74ec8d941d.png";
import brand2 from "../assets/Images/90393d78ceda1c1af1530fd6fa4a85f11c95226b.jpg";
import brand3 from "../assets/Images/4945e85c4b05341f9f57272e2117814c25ee3458.png";
import brand4 from "../assets/Images/c097f8caef30a358bb62300f1d9a79643025b68b.png";
import brand5 from "../assets/Images/6805b5825f219d1fc614e6c3cf97fd8ade2c9e7c.jpg";
import brand6 from "../assets/Images/a7543c32da9b90c37b71b290b3e64d8ab7be2dfd.png";

const ArticlesPage = () => {

const brands = [
  { name: "Bandhan Mutual Fund", logo: brand1 },
  { name: "IIFL Mutual Fund", logo: brand2 },
  { name: "LIC Mutual Fund", logo: brand3 },
  { name: "Nippon India Mutual Fund", logo: brand4 },
  { name: "Mirae Asset Mutual Fund", logo: brand5 },
  { name: "HSBC Asset Management", logo: brand6 },
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
                    <ArticlePagination />
                   
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
              <div>
          <section className=" ms-12 mr-12">
            <h2
              className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle mb-2 "
            >
              Brands we work with
            </h2>
            <div className="w-full h-[1px] bg-[#111111] "></div>


          </section>
          <div className="flex flex-wrap items-center justify-center ps-4 md:justify-between gap-4 md:gap-6 py-6 sm:h-[125px] md:py-8 bg-[#F8F9F9]">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center  mx-8 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-[100px] h-[36px] sm:w-[120px] sm:h-[40px] md:w-[150px] md:h-[48px] object-contain"
                />
              </div>
            ))}
          </div>

        </div>
            <Footer/>
        </div>
    );
};

export default ArticlesPage;
