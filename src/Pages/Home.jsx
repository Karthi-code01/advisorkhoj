import React, { useState, useEffect } from "react";
import {
  Search,
  Menu,
  X,
  Play,
  Eye,
  MessageCircle,
  Clock,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Users,
  Briefcase,
  Target,
  BarChart3,
  Youtube,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";
import twoArrows from '../assets/Images/Vector (1).png'
import logo from "../assets/Images/logo.png";
import aimImage from "../assets/Images/6418fd258e033e4afc684202f0875f873e862988.png"
import vector2 from '../assets/Images/Vector (2).png'
import vector3 from '../assets/Images/Vector (3).png'
import vector4 from '../assets/Images/Vector (4).png'
import vector5 from '../assets/Images/Vector (5).png'



const stockData = [
  {
    symbol: "CIPLA",
    price: "₹1500.00",
    change: "-49.60 (3.19%)",
    negative: true,
  },
  {
    symbol: "ABGSHIPYARD",
    price: "₹2434.00",
    change: "-39.9 (1.58%)",
    negative: false,
  },
  {
    symbol: "HEROMOTOCO",
    price: "₹2544.00",
    change: "-48.9 (1.13%)",
    negative: false,
  },
  {
    symbol: "COALINDIA",
    price: "₹372.80",
    change: "-5.60 (1.48%)",
    negative: true,
  },
  {
    symbol: "ASHIANIHSG",
    price: "₹234.00",
    change: "37.11 (18.8%)",
    negative: false,
  },
];

const fundData = [
  {
    name: "Quant Tax Gr",
    return1y: "+15.22",
    return3y: "+31.56",
    return5y: "+31.56",
  },
  {
    name: "Mirae Asset Tax Saver Reg Gr",
    return1y: "+1.5",
    return3y: "+26.10",
    return5y: "+31.56",
  },
  {
    name: "Bandhan Tax Advtg Eq-SB Reg Gr",
    return1y: "+9.22",
    return3y: "+25.63",
    return5y: "+31.56",
  },
  {
    name: "Mirae Asset Tax Saver Reg Gr",
    return1y: "+10.34",
    return3y: "+16.10",
    return5y: "+31.56",
  },
  {
    name: "DSP Tax Saver Reg Gr",
    return1y: "+16.22",
    return3y: "+23.23",
    return5y: "+31.56",
  },
];

const StockTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stockData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-2 sm:px-3 py-3 overflow-x-auto">
      <div className="flex space-x-2 sm:space-x-3 min-w-max">
        {stockData.map((stock, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 sm:space-x-4 px-2 sm:px-3 py-2 sm:py-3 rounded-full text-xs sm:text-sm ${stock.negative
              ? "bg-[#FFF4F4] text-red-600"
              : "bg-[#F5FFEE] text-green-600"
              }`}
          >
            <span className="font-semibold text-[#444444]">{stock.symbol}</span>
            <span className="text-[#444444]">{stock.price}</span>
            <span className="flex items-center">

              {stock.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-white">
      <div className="bg-white py-4 sm:py-6 px-4 sm:px-6 flex items-center justify-between">
        <img
          src={logo}
          alt="advisorkhoj logo"
          className="w-24 sm:w-32 h-6 sm:h-8 object-contain"
        />
        <button onClick={toggleMenu} className="sm:hidden text-gray-600">
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <nav
        className={`bg-[#163164] py-4 px-4 sm:px-6 ${isMenuOpen ? "block" : "hidden sm:block"
          }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8">
            <a
              href="#"
              className="text-white hover:text-blue-200 py-2 sm:py-0 flex items-center text-sm sm:text-base"
            >
              <Menu className="w-4 h-4 mr-2" />
              Home
            </a>
            {[
              "MF Research",
              "Articles",
              "Services",
              "Mutual Funds",
              "ETFs",
              "Calculators",
              "Interviews",
              "AMCs",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-blue-200 py-2 sm:py-0 text-sm sm:text-base"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Search className="text-white w-5 h-5" />
            <button className="bg-[#096FFA] text-white px-4 py-1 rounded hover:bg-blue-700 text-sm">
              Login
            </button>
            <button className="bg-[#FFA901] text-white px-4 py-1 rounded hover:bg-orange-600 text-sm">
              Register
            </button>
          </div>
        </div>
      </nav>
      <StockTicker />
    </div>
  );
};

const NewsCard = ({ title, subtitle, readTime, image, isVideo = false }) => (
  <div className="bg-white">
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-[220px] object-cover"
      />
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#096FFA] text-white p-3 rounded-full hover:bg-blue-700 cursor-pointer">
            <Play className="w-5 sm:w-6 h-5 sm:h-6" />
          </div>
        </div>
      )}
    </div>
    <div className="py-4">
      <h3 className="font-merriweather font-bold text-[22px] leading-[28px] text-[#1D1D1D] mb-2">
        {title}
      </h3>

      {subtitle && (
        <p className="text-xs sm:text-sm text-gray-600 mb-2 py-2">
          {subtitle}
        </p>
      )}

      <div className="flex items-center space-x-2  text-xs text-gray-500">
        <button className={`text-xs sm:text-sm px-3 py-1 rounded-sm transition 
      ${isVideo
            ? "bg-[#096FFA] text-white hover:bg-blue-700"
            : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
          }`}>
          {isVideo ? "Watch the video" : "Read the story"}
        </button>
        <span className="flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          {readTime}
        </span>
        <div className="flex space-x-2">
          <button className="hover:text-blue-600">
            <Eye className="w-4 h-4" />
          </button>
          <button className="hover:text-blue-600">
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const FundCard = ({ title, description, readTime }) => (
  <div className="px-4 ">
    <h3 className="font-merriweather font-bold text-[16px] leading-[28px] text-[#1D1D1D] mb-2">
      {title}
    </h3>

    {/* <p className="text-xs sm:text-sm text-gray-600 mb-2">{description}</p> */}
    <div className="flex items-center text-[12px] text-gray-500 leading-[20px]">
      <Clock className="w-3 h-3 mr-1" />
      {readTime}
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, color }) => (
  <div
    className={`bg-${color}-50 p-3 sm:p-4 rounded-lg border border-${color}-200 hover:shadow-md transition-shadow`}
  >
    <Icon className={`w-6 sm:w-8 h-6 sm:h-8 text-${color}-600 mb-2 sm:mb-3`} />
    <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-2">
      {title}
    </h3>
    <p className="text-xs sm:text-sm text-gray-600">{description}</p>
  </div>
);

const PerformanceTable = () => (
  <div className="bg-white  mt-6 sm:mt-8">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
      <h2 className="font-arial font-bold text-[16px] leading-[24px] text-gray-800">
        Top Performing Funds
      </h2>

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 sm:mt-0">
        <select className="font-arial font-bold text-[11px] leading-[13px] tracking-[1.36px] uppercase px-2 sm:px-3 py-1 text-gray-800">
          <option>PAST 5 YEARS</option>
          <option>PAST 3 YEARS</option>
          <option>PAST 1 YEAR</option>
        </select>
        <select className="font-arial font-bold text-[11px] leading-[13px] tracking-[1.36px] uppercase px-2 sm:px-3 py-1 text-gray-800">
          <option>EQUITY-ELSS</option>
          <option>DEBT FUNDS</option>
          <option>HYBRID FUNDS</option>
        </select>
      </div>
    </div>
    <div className="w-full h-[1px] bg-[#111111] mb-6"></div>

    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm">
              SCHEME NAME
            </th>
            <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm">
              1Y RETURN (%)
            </th>
            <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm">
              3Y RETURN (%)
            </th>
            <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm">
              5Y RETURN (%)
            </th>
          </tr>
        </thead>
        <tbody>
          {fundData.map((fund, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-800 text-xs sm:text-sm">
                {fund.name}
              </td>
              <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 font-semibold text-xs sm:text-sm">
                {fund.return1y}
              </td>
              <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 font-semibold text-xs sm:text-sm">
                {fund.return3y}
              </td>
              <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 font-semibold text-xs sm:text-sm">
                {fund.return5y}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const AdvisorCard = ({ name, role, company, image, featured = false }) => (
  <div
    className={`  overflow-hidden ${featured ? "sm:col-span-2" : ""}`}
  >
    {/* Image on top */}
    <div className="w-full h-48 sm:h-56 overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text content */}
    <div className="p-3 sm:p-4">
      <h3 className="font-merriweather font-bold text-[16px] leading-[28px] tracking-[0%] align-middle text-gray-800 mb-1 sm:text-base">
        {name}
      </h3>
      <h3 className="font-merriweather font-bold text-[16px] leading-[28px] tracking-[0%] align-middle text-gray-800 mb-1 sm:text-base">{role}</h3>
      <p className="text-xs sm:text-sm text-gray-500">{company}</p>

      {/* Featured description */}


      {/* Buttons */}
      <div className="flex items-center justify-between mt-3">

        <div className="flex space-x-2">
          <button className="bg-white text-[#111111] font-bold text-[11px] leading-[12px] tracking-[1px] align-middle px-3 sm:px-4 py-1 sm:py-2 rounded border border-black">
            View Interview
          </button>

          <button className="text-gray-500 hover:text-gray-700">
            <MessageCircle className="w-4 h-4" />
          </button>
          <div className="flex items-center  text-xs text-gray-500">
            <Clock className="w-3 h-3 mr-1" />5 min read
          </div>
        </div>
      </div>

      {/* Read time */}

    </div>
  </div>
);


const App = () => {
  return (
    <div className="min-h-screen ">
      <Header />

      <div className="container mx-auto px-4 sm:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8">
          <div className="sm:col-span-7">
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-between mb-4 sm:mb-3">
                <h2 className="text-lg sm:text-xl font-semibold text-[#000000]">
                  Latest From AdvisorKhoj
                </h2>
                <button className="text-base sm:text-lg font-semibold text-[#000000] hover:text-[#444444] flex items-center">
                  MORE <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="w-full h-[1px] bg-[#111111] mb-6"></div>
              <p className="text-[#D99828] font-arial font-bold text-[10px] leading-[24px] tracking-[0.6px] uppercase py-1 inline-block">
                Latest Article
              </p>
              <span className="text-[#4A4A4A] text-[11px] px-2">3h</span>

              <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-16 mb-6">
                {/* Left side: NewsCard */}
                <div>
                  <NewsCard
                    title="SBI Mutual Fund offers Unidiverse: Four funds, four investment styles, one investment solution"
                    subtitle="Diversification refers to building a portfolio with multiple assets to reduce the risk associated with a single asset. For example, a diversified equity fund invests in a portfolio of stocks across different industry sectors and market capitalization segments."
                    readTime="4 min read"
                    image="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800"
                  />
                  <br />
                  <NewsCard
                    title="How badly will the Indian stock market crash affect your investments?"
                    subtitle="Diversification refers to building a portfolio with multiple assets to reduce the risk associated with a single asset. For example, a diversified equity fund invests in a portfolio of stocks across different industry sectors and market capitalization segments."
                    readTime="5 min read"
                    image="https://images.pexels.com/photos/7567456/pexels-photo-7567456.jpeg?auto=compress&cs=tinysrgb&w=800"
                    isVideo={true}
                  />
                </div>

                {/* Right side: FundCards */}
                <div className="relative space-y-2 sm:space-y-4">
                  {/* ✅ Absolutely positioned Fund Review */}
                  <p className="absolute -top-6 left-4 text-[#D99828] font-arial font-bold text-[10px] leading-[24px] tracking-[0.6px] uppercase">
                    Fund Review
                  </p>

                  <FundCard
                    title="Nippon India Mutual Fund has launched a new fund offer, Nippon India Innovation Fund."
                    description="FUND NEWS"
                    readTime="5 min read"
                  />
                  <FundCard
                    title="Nippon India Mutual Fund has launched a new fund offer, Nippon India Innovation Fund."
                    description=""
                    readTime="5 min read"
                  />
                  <FundCard
                    title="Nippon India Mutual Fund has launched a new fund offer, Nippon India Innovation Fund."
                    description=""
                    readTime="5 min read"
                  />

                  <div className="bg-[linear-gradient(114.55deg,#ECD3BA_15.37%,#CAE5FF_75.11%)] relative m-4  p-2 sm:p-6 mb-8 sm:mb-8">
                    <img
                      src={vector5}
                      alt="Flower Decoration"
                      className="absolute top-0 right-0 w-[50px]  opacity-80 rotate-180 "
                    />
                    <h3 className="font-merriweather font-bold text-[16px] leading-[28px] text-gray-800 mb-2 mt-2">
                      Subscribe to AdvisorKhoj Research
                    </h3>

                    <input
                      className="w-full py-2 px-2 rounded-sm border border-gray-300"
                      placeholder="Your email"
                    />
                    <button className="w-full bg-[#096FFA] text-white py-2 sm:py-3 rounded-sm hover:bg-blue-700 text-sm mt-3 sm:mt-4 mb-6">
                      Subscribe Now
                    </button>
                  </div>

                  <FundCard
                    title="Bandan Balanced Advantage Fund: A Good Hybrid Fund in the current market conditions."
                    description=""
                    readTime="5 min read"
                  />
                </div>
              </div>




            </div>

            <PerformanceTable />

            <div className="bg-[linear-gradient(114.55deg,#ECD3BA_15.37%,#CAE5FF_75.11%)] h-[140px]   mt-6 sm:mt-8 flex flex-col sm:flex-row items-center sm:items-start">
              {/* Left arrow image */}
              <div className="flex-shrink-0 mr-4 sm:mr-6 h-full">
                <img
                  src={twoArrows}
                  alt="Double Up Arrow"
                  className="w-[140px] sm:w-[140px] h-full"
                />
              </div>

              {/* Text content */}
              <div className="flex-1 py-8">
                <h3 className="font-serif font-bold text-[16px] leading-[28px] tracking-normal align-middle text-gray-800 mb-1">
                  Portfolio Tracking Simplified
                </h3>

                <p className="font-sans font-normal text-[13px] leading-[18px] tracking-normal align-middle text-gray-700">
                  Track your wealth with the Ultimate Investment Portfolio Tracker
                </p>

              </div>

              {/* Button */}
              <div className="mt-4 sm:mt-0 sm:ml-6 flex-shrink-0 py-10 px-6">
                <button className="bg-[#096FFA] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-sm font-sans font-bold text-[11px] leading-[12px] tracking-[1px] align-middle hover:bg-blue-700">
                  Track Your Portfolio
                </button>

              </div>
            </div>


            <div className="mt-6 sm:mt-8 ">
              <h2 className="font-sans font-bold text-[16px] leading-[19px] tracking-[1px] align-middle text-gray-800 mb-4">
                Benchmark Monitor
              </h2>
              <div className="w-full h-[1px] bg-[#111111] mb-6"></div>


              <div className="flex space-x-3 sm:space-x-4 mb-4">
                <button className="text-blue-600 border-b-2 border-blue-600 pb-2 whitespace-nowrap font-sans font-bold text-[13px] leading-[21px] tracking-normal align-middle">
                  Long Term
                </button>

                <button className="text-gray-600 hover:text-blue-600 pb-2 whitespace-nowrap font-sans font-bold text-[13px] leading-[21px] tracking-normal align-middle">
                  Short Term
                </button>

              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm">
                        SCHEME NAME
                      </th>
                      <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm">
                        1Y RETURN (%)
                      </th>
                      <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm">
                        3Y RETURN (%)
                      </th>
                      <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm">
                        5Y RETURN (%)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm">
                        Nifty Bees TRI
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 text-xs sm:text-sm">
                        +16.22
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 text-xs sm:text-sm">
                        +31.56
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 text-xs sm:text-sm">
                        +31.56
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm">
                        S&P BSE Quality TRI
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 text-xs sm:text-sm">
                        +8.22
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 text-xs sm:text-sm">
                        +20.00
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 text-xs sm:text-sm">
                        +31.56
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm">
                        Nifty Bees TRI
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 text-xs sm:text-sm">
                        +16.22
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 text-xs sm:text-sm">
                        +31.56
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 text-xs sm:text-sm">
                        +31.56
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm">
                        Nifty Bees TRI
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 text-xs sm:text-sm">
                        +16.22
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 text-xs sm:text-sm">
                        +31.56
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 text-xs sm:text-sm">
                        +31.56
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-xs sm:text-sm">
                        Nifty Bees TRI
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 text-xs sm:text-sm">
                        +16.22
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 text-xs sm:text-sm">
                        +31.56
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-600 text-xs sm:text-sm">
                        +31.56
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="sm:col-span-5 bg-[#F8F9F9]">
            <div className="  p-4 sm:p-6 mb-4 sm:mb-4">
              <h2 className="font-arial font-bold text-[16px] leading-[19px] tracking-[1px] text-gray-800 mb-2">
                What we do?
              </h2>

              <div className="w-full h-[1px] bg-[#111111] mb-4"></div>
              <div className="flex space-x-2 sm:space-x-4 mb-4 sm:mb-6 text-xs sm:text-sm overflow-x-auto">
                <button className="text-blue-600 border-b-2 border-blue-600 pb-2 whitespace-nowrap">
                  For Distributors
                </button>
                <button className="text-gray-600 hover:text-blue-600 pb-2 whitespace-nowrap">
                  For Investors
                </button>
                <button className="text-gray-600 hover:text-blue-600 pb-2 whitespace-nowrap">
                  For AMCs
                </button>
                <button className="text-gray-600 hover:text-blue-600 pb-2 whitespace-nowrap">
                  For Dummy Tab
                </button>
              </div>

              <div className="bg-[linear-gradient(114.55deg,#ECD3BA_15.37%,#CAE5FF_75.11%)] h-[250px] relative p-6 sm:p-10">
                <img
                  src={vector4}
                  alt="Flower Decoration"
                  className="absolute top-[10px] right-[10px] w-[68px] sm:w-16 "
                />
                <img
                  src={vector5}
                  alt="Flower Decoration"
                  className="absolute bottom-0 left-0 w-[50px]  opacity-80 "
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-6 p-2">
                  <div className="flex items-start space-x-2">
                    <span className="w-6 h-5 rounded-full bg-white mt-1.5"></span>
                    <p className="font-merriweather font-bold text-[12px] leading-[20px] text-[#1D1D1D]">
                      Websites for MF Distributors & Advisors
                    </p>

                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="w-6 h-5 rounded-full bg-white mt-1.5"></span>
                    <p className="font-merriweather font-bold text-[12px] leading-[20px] text-[#1D1D1D]">
                      Back-Office Software for MF Distributors
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="w-6 h-5 rounded-full bg-white mt-1.5"></span>
                    <p className="font-merriweather font-bold text-[12px] leading-[20px] text-[#1D1D1D]">
                      Mobile App Development for MF Distributors
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="w-6 h-5 rounded-full bg-white mt-1.5"></span>
                    <p className="font-merriweather font-bold text-[12px] leading-[20px] text-[#1D1D1D]">
                      MF Tools & Resources for MF Distributors
                    </p>
                  </div>
                </div>

                <button className="bg-[#163164] text-white px-6 py-2 ms-8 rounded-sm text-[11px] leading-[12px] tracking-[1px] font-arial font-bold hover:bg-[#142F54] transition">
                  Get in touch
                </button>

              </div>


            </div>



            <div className=" p-6 sm:p-4  overflow-hidden">

              <div className=" p-2 h-full flex items-center">
                <img
                  src={aimImage}
                  alt="Goals"
                  className="w-full h-[130px] object-cover rounded-md"
                />
              </div>
            </div>

            <div className="p-6 mb-6 sm:mb-8">
              <h2 className="font-arial font-bold text-[16px] leading-[19px] tracking-[1px] text-gray-800 mb-4">
                Stories from Advisors
              </h2>
              <div className="w-full h-[1px] bg-[#111111] mb-4"></div>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4 ">
                <div>
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Advisor"
                    className="w-full h-28 sm:h-32 object-cover  mb-2"
                  />
                  <p className="text-[#D99828] p-2 font-arial font-bold text-[10px] leading-[24px] tracking-[0.6px] uppercase py-1 inline-block">FEATURED ADVISOR</p>
                  <h4 className="font-merriweather p-2 font-bold text-[16px] leading-[28px] text-gray-800">
                    Active Funds are still a better choice in India...
                  </h4>

                  <p className="text-xs text-gray-500 p-2">Rajiv Singh | Mumbai</p>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Advisor"
                    className="w-full h-28 sm:h-32 object-cover mb-2"
                  />
                  <p className="text-[#D99828] p-2 font-arial font-bold text-[10px] leading-[24px] tracking-[0.6px] uppercase py-1 inline-block">FEATURED ADVISOR</p>
                  <h4 className="font-merriweather p-2 font-bold text-[16px] leading-[28px] text-gray-800">
                    Quant Fund can also be considered for core portfolio
                  </h4>
                  <p className="text-xs text-gray-500 p-2">Supriya Raj | Mumbai</p>
                </div>
              </div>
            </div>

            <div className="mb-6 sm:mb-8 p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                Latest Interview
              </h2>
              <div className="w-full h-[1px] bg-[#111111] mb-6"></div>
              <AdvisorCard
                name="Mr. Gautam Bhupal - Fund Manager"
                role="HSBC Asset Management, India"
                company="Consumption Funds Can be Core of An Investors Portfolio."
                image="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                featured={true}
              />
            </div>

            <div className="relative bg-white m-6 p-6 sm:p-10 overflow-hidden ">
              {/* Decorative flower images */}
              <img
                src={vector2}
                alt="Flower Decoration"
                className="absolute top-[40px] right-[60px] h-[68px] w-[68px] sm:w-16 "
              />
              <img
                src={vector3}
                alt="Flower Decoration"
                className="absolute top-0 right-0 w-[101px] sm:w-16 opacity-80 "
              />

              {/* Heading */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 ">
                Your search for investment
              </h2>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800  mb-6">
                Advisors ends here.
              </h2>

              {/* Advisor Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <img
                    src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Advisor"
                    className="mx-auto mb-3 w-[90px] h-[120px] rounded-[100px] object-cover opacity-100"
                  />
                  <h4 className="font-sans font-bold text-[12px] leading-[14px] tracking-normal align-middle">
                    Pradip Chakraborty
                  </h4>
                </div>

                <div className="text-center">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Advisor"
                    className="mx-auto mb-3 w-[90px] h-[120px] rounded-[100px] object-cover opacity-100"
                  />
                  <h4 className="font-sans font-bold text-[12px] leading-[14px] tracking-normal align-middle">
                    Shyam Sundar
                  </h4>
                </div>

                <div className="text-center">
                  <img
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Advisor"
                    className="mx-auto mb-3 w-[90px] h-[120px] rounded-[100px] object-cover opacity-100"
                  />
                  <h4 className="font-sans font-bold text-[12px] leading-[14px] tracking-normal align-middle">
                    Sonia Jain
                  </h4>
                </div>

                <div className="text-center">
                  <img
                    src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Advisor"
                    className="mx-auto mb-3 w-[90px] h-[120px] rounded-[100px] object-cover opacity-100"
                  />
                  <h4 className="font-sans font-bold text-[12px] leading-[14px] tracking-normal align-middle">
                    Pradip Chakraborty
                  </h4>
                </div>
              </div>


              {/* Button */}
              <div className="text-center">
                <button className="bg-blue-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-blue-700">
                  Find an Advisor
                </button>
              </div>
            </div>

          </div>
        </div>
        
      </div>
      <div className="relative bg-[linear-gradient(114.55deg,#C6DDFB_15.37%,#F7E3D6_75.11%)] rounded-lg p-8 sm:p-12 overflow-hidden">
  {/* Flower Decoration (left side) */}
  <img
    src="/assets/flower.png" // 👉 replace with your flower image path
    alt="Flower Decoration"
    className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 w-[100px] opacity-80"
  />

  {/* Arrow Decoration (top-right) */}
  <img
    src="/assets/arrow.png" // 👉 replace with your arrow image path
    alt="Arrow Decoration"
    className="absolute top-0 right-0 w-[80px] opacity-90"
  />

  {/* Content Section */}
  <div className="relative z-10 max-w-2xl">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Simplify Your Investment Decisions, <br />
      Introducing the Mutual Fund Screener
    </h2>
    <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
      Discover MF Screeners
    </button>
  </div>
</div>

      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">AdvisorKhoj</h3>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-lg font-semibold">Follow Us</span>
                <Youtube className="w-5 h-5" />
                <Twitter className="w-5 h-5" />
                <Linkedin className="w-5 h-5" />
                <Facebook className="w-5 h-5" />
              </div>
              <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 mb-6">
                Find an Advisor
              </button>
              <div>
                <h4 className="font-semibold mb-2">Contact Us</h4>
                <p className="text-sm text-gray-300 mb-1">
                  3rd floor, JK Towers, 719/A, 53-2, 46th Cross Rd, 8th Block,
                </p>
                <p className="text-sm text-gray-300 mb-1">
                  Jayanagar, Bengaluru, Karnataka 560082
                </p>
                <p className="text-sm text-gray-300">Phone: 099005 11400</p>
              </div>
              <div className="mt-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded mr-2 text-sm">
                  WhatsApp Us
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm">
                  Email Us
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">AMCs</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div>
                  360 ONE | Aditya Birla Sun Life | Axis | Bajaj | Finserv |
                  Bandhan | Bank of India | Baroda | BNP | Paribas | Canara |
                  Robeco | DSP | Edelweiss | Franklin |
                </div>
                <div>
                  Templeton | Groww | HDFC | HSBC | ICICI | Prudential | Invesco
                  | ITI | JM Financial | Kotak Mahindra | LIC | Mahindra |
                  Manulife | Mirae Asset | Motilal Oswal | Navi | Nippon India |
                  NJ | PGIM India | PPFAS | Quant | Quantum | Samco | SBI |
                  Shriram Sundaram | Tata | Taurus | TRUST | Union | UTI |
                </div>
                <div>WhiteOak Capital</div>
              </div>
              <h4 className="font-semibold mt-6 mb-4">
                Top Searched Mutual Funds
              </h4>
              <div className="text-sm text-gray-300">
                <div>
                  SBI Small Cap Fund | Nippon India Small Cap Fund | SBI
                  Bluechip Fund | Axis Bluechip Fund | Axis Long Term Equity
                  Fund | SBI Focused Equity Fund | HDFC Mid-Cap Opportunities
                  Fund | Axis Midcap Fund | SBI Contra Fund | HDFC Flexi Cap
                  Fund | Nippon India Growth Fund | SBI Focused 25 Fund | ICICI
                  Prudential Technology Fund | SBI Magnum Midcap Fund | SBI
                  Technology Opportunities Fund | HDFC Top 100 Fund | ICICI
                  Prudential Bluechip Fund | CPSE ETF | SBI Flexicap Fund |
                  Motilal Oswal NASDAQ 100 ETF | Nippon India Multi Cap Fund |
                  SBI Long Term Equity Fund | DSP Tax Saver Fund | SBI Magnum
                  Global Fund
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Popular Research Tools</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div>
                  Top Performing Mutual Funds | Mutual Fund Annual Returns |
                  Benchmark Return | Top Performing Mutual Funds | Mutual Fund
                  Annual Returns | Benchmark Return | Top Performing Mutual
                  Funds | Mutual Fund Annual Returns | Benchmark Return
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                Investing Ideas in your email
              </h4>
              <div className="flex mb-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 p-2 rounded-l text-gray-800"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">
                  Subscribe Now
                </button>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm">Google</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-sm">4.6</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-300">
            <div>
              <h5 className="font-semibold mb-3">Quick Links</h5>
              <div className="space-y-2">
                <div>Track your Investments</div>
                <div>My Watchlist</div>
                <div>My Subscriptions</div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Resources</h5>
              <div className="space-y-2">
                <div>Mutual Fund (AMC) offices</div>
                <div>R & T (MF) Agent offices</div>
                <div>Life Insurance Office</div>
                <div>General Insurance Office</div>
                <div>Glossary</div>
                <div>Form Download</div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Our Offerings</h5>
              <div className="space-y-2">
                <div>Mutual Fund Research</div>
                <div>Tools and Calculators</div>
                <div>Articles</div>
                <div>Interviews</div>
                <div>News</div>
                <div>Post your Queries</div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3">About Us</h5>
              <div className="space-y-2">
                <div>About Us</div>
                <div>Contact Us</div>
                <div>Meet our Team</div>
                <div>Careers</div>
                <div>Newsletters</div>
                <div>Did You Know</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;