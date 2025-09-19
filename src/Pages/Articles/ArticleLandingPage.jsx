import React from 'react'
import Header from '../Header'
import Breadcrumbs from '../Breadcrumbs'
import { Search } from 'lucide-react'
import clock from '../../assets/Images/famicons_time-outline.png'
import eye from '../../assets/Images/eye.png'
import download from '../../assets/Images/mynaui_download.png'
import shareicon from '../../assets/Images/Frame 1427.png'
import downloadicon from '../../assets/Images/Frame 1426.png'
import messageicon from '../../assets/Images/Frame 1427 (1).png'
import aimImage from "../../assets/Images/6418fd258e033e4afc684202f0875f873e862988.png";
import image3 from '../../assets/Images/3153823c1f81f2fe586e4b9dae485b114e674bd4.png'
import image4 from '../../assets/Images/a704b8a182e131059a12b4ffc0d55fffe2bb89fc.png'
import arrow from "../../assets/Images/Icon.png";
import Footer from '../Footer'


const news = [

    { id: 1, name: "HDFC Mutual Fund launches HDFC Diversified Equity All Cap Active FOF", date: "Aug 29, 2019" },
    { id: 2, name: "Groww Mutual Fund launches Groww Multi Asset Allocation Fund", date: "Aug 29, 2019" },
    { id: 3, name: "What we can learn from the masters: A Teacher's Day reflection", date: "Aug 29, 2019" },
    { id: 4, name: "Bandhan Mutual Fund launches Bandhan BSE India Sector Leaders Index Fund", date: "Aug 29, 2019" },
    { id: 5, name: "Baroda BNP Paribas Mutual Fund launches Baroda BNP Paribas Business Conglomerates Fund", date: "Aug 29, 2019" },
]
const quries = [

    { id: 1, name: "What is the benefit of mutual fund STP", date: "Aug 29, 2019" },
    { id: 2, name: "How much to invest to meet target amount of Rs 2 Crores", date: "Aug 29, 2019" },
    { id: 3, name: "Can I achieve my financial goals with my current mutual fund investments", date: "Aug 29, 2019" },
    { id: 4, name: "Can you tell me return of various indices", date: "Aug 29, 2019" },
    { id: 5, name: "What would be the post tax return on different investments", date: "Aug 29, 2019" },
]


function ArticleLandingPage() {
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
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-12 ">
                <div className="lg:col-span-7 px-4">
                    <div className='bg-white p-4'>
                        <div className="sm:flex items-center sm:justify-between text-[12px]  leading-[150%] tracking-[0] font-normal font-inter text-[#848484] mb-6">
                            {/* Left Text */}
                            <div>
                                <div className="flex items-center gap-4 text-[10px] font-inter font-normal mt-4 leading-[120%] text-gray-600">
                                    <span className="flex items-center gap-1 align-middle">
                                        <img src={clock} alt="clock" className="w-3 h-3" />
                                        2 min read
                                    </span>
                                    <span className="flex items-center gap-1 align-middle">
                                        <img src={eye} alt="views" className="w-3 h-3" />
                                        2,431
                                    </span>
                                    <span className="flex items-center gap-1 align-middle">
                                        <img src={download} alt="likes" className="w-3 h-3" />
                                        08
                                    </span>
                                </div>
                                <p className='mt-2'>
                                    By <span className="">Advisorkhoj Research Team</span> | 25 Jan 2022
                                </p>
                            </div>
                            {/* Right Actions */}
                            <div className="flex items-end gap-2 pt-2 sm:pt-0">
                                <img src={messageicon} alt="share" className="w-[24px] h-[24px]" />
                                <img src={downloadicon} alt="share" className="w-[24px] h-[24px]" />
                                <img src={shareicon} alt="share" className="w-[24px] h-[24px]" />
                            </div>
                        </div>


                        {/* Title */}
                        <h1 className="font-merriweather font-bold text-[24px] leading-[150%] tracking-[0] text-gray-900 mb-4">
                            How Mutual Fund SIPs have created wealth over the last 15 years: Large Cap and Diversified Equity
                        </h1>


                        <div className="w-full flex justify-center mb-6">
                            <div className="w-full h-[250px] lg:h-[400px] bg-gray-200 overflow-hidden xl:px-8">
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
                    </div>

                </div>
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
                    <div className="">
                        <h2 className="font-arial font-bold text-[16px] leading-[19px] tracking-[1px] text-gray-800 mb-4">
                            Stories from Advisors
                        </h2>
                        <div className="w-full h-[1px] bg-[#111111] mb-4"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8  ">
                            <div className='bg-white'>
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
                            <div className='bg-white'>
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
                    <div className="flex justify-between items-center mt-6 mb-2">
                        <h2
                            className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
                                 text-[#000000] align-middle"
                        >
                            Queries
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
                        {quries.map((item) => (
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
                    <div className="flex justify-between items-center mt-6 mb-2">
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
    )
}

export default ArticleLandingPage