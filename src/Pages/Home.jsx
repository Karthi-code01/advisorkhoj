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
import { Calendar, Calculator, PieChart, Globe, Settings, Smartphone } from 'lucide-react';
import twoArrows from '../assets/Images/Vector (1).png'
import logo from "../assets/Images/logo.png";
import aimImage from "../assets/Images/6418fd258e033e4afc684202f0875f873e862988.png"
import vector2 from '../assets/Images/Vector (2).png'
import vector3 from '../assets/Images/Vector (3).png'
import vector4 from '../assets/Images/Vector (4).png'
import vector5 from '../assets/Images/Vector (5).png'
import Footer from "./Footer";
import arrow from "../assets/Images/Icon.png"
import card1 from "../assets/Images/card1.png"
import card2 from "../assets/Images/card2.png"
import card3 from "../assets/Images/card3.png"
import card4 from "../assets/Images/car4.png"
import flower from "../assets/Images/flower.png"
import vector11 from '../assets/Images/Vector (11).png'
import vector12 from '../assets/Images/Vector (12).png'
import vector13 from '../assets/Images/Vector (13).png'
import phone from '../assets/Images/smartphone.png'
import globe from '../assets/Images/globe.png'
import layout from '../assets/Images/layout.png'
import bank1 from '../assets/Images/image 7.png'
import bank2 from '../assets/Images/image 8.png'
import bank3 from '../assets/Images/image 9.png'
import bank4 from '../assets/Images/image 10.png'
import bank5 from '../assets/Images/image 11.png'
import bank6 from '../assets/Images/image 12.png'
import bank7 from '../assets/Images/image 13.png'
import bank8 from '../assets/Images/image 14.png'
import bank9 from '../assets/Images/image 15.png'
import bank10 from '../assets/Images/image 16.png'
import comma from '../assets/Images/“.png'



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
const fundNews = [
  {
    title: "Mirae Asset Mutual Fund garners more than Rs. 1,393 crore in Mirae Asset Multicap Fund NFO",
    date: "24-Aug-2023"
  },
  {
    title: "WhiteOak Capital Mutual Fund launches WhiteOak Capital Multi Cap Fund",
    date: "24-Aug-2023"
  },
  {
    title: "Quant Mutual Fund launches Quant Teck Fund",
    date: "22-Aug-2023"
  }
];

// Learn with Us Videos Data
const videos = [
  {
    title: "Learn Investment or Improve your skills Online",
    duration: "5 min video",
    thumbnail: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=300",
    category: "LATEST VIDEO"
  },
  {
    title: "How to identify the Best Mutual Funds to invest in?",
    duration: "5 min video",
    thumbnail: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    title: "Know the fund's management style",
    duration: "5 min video",
    thumbnail: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    title: "How to identify the Best Mutual Funds to invest in?",
    duration: "5 min video",
    thumbnail: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    title: "Know the fund's management style",
    duration: "5 min video",
    thumbnail: "https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg?auto=compress&cs=tinysrgb&w=300"
  }
];

// Must Visit Tools Data
const tools = [
  {
    title: "Intuitive Charts & Graphs for decision making",
    description: "Interactive visualizations",
    color: "bg-[#D1ECFF]",
    icon: BarChart3,
    action: "View Charts",
    leftDecoration: flower,
    rightDecoration: card1
  },
  {
    title: "Calculators for planning your Investments",
    description: "Plan your financial future",
    color: "bg-[#FFF3BF]",
    icon: Calculator,
    action: "View Calculators",
    leftDecoration: flower,
    rightDecoration: card2
  },
  {
    title: "Create Free portfolios with AdvisorKhoj",
    description: "Build and track portfolios",
    color: "bg-[#BDEADF]",
    icon: PieChart,
    action: "Create your Portfolio",
    leftDecoration: flower,
    rightDecoration: card3
  },
  {
    title: "Find the right funds with Mutual Fund Screener",
    description: "Advanced fund analysis",
    color: "bg-[linear-gradient(91.46deg,#FFEAE2_17.68%,#EBCECE_101%)]",
    icon: Search,
    action: "Discover MF Screeners",
    leftDecoration: flower,
    rightDecoration: card4
  }
];

// Performing Funds Data
const funds = [
  {
    name: "Quant Large & Mid Cap Fund",
    aum: "+18.22",
    launch: "+31.56",
    oneYear: "+31.56",
    threeYear: "+31.56",
    fiveYear: "+31.56",
    tenYear: "+31.56"
  },
  {
    name: "Mirae Asset Emerging Bluechip Fund",
    aum: "+8.22",
    launch: "+25.00",
    oneYear: "+31.56",
    threeYear: "+31.56",
    fiveYear: "+31.56",
    tenYear: "+31.56"
  },
  {
    name: "HDFC Large and Mid Cap Fund",
    aum: "+9.22",
    launch: "+25.63",
    oneYear: "+31.56",
    threeYear: "+31.56",
    fiveYear: "+31.56",
    tenYear: "+31.56"
  },
  {
    name: "SBI Large and Midcap Fund",
    aum: "+18.22",
    launch: "+31.56",
    oneYear: "+31.56",
    threeYear: "+31.56",
    fiveYear: "+31.56",
    tenYear: "+31.56"
  },
  {
    name: "ICICI Prudential Large & Mid Cap Fund",
    aum: "+8.22",
    launch: "+25.00",
    oneYear: "+31.56",
    threeYear: "+31.56",
    fiveYear: "+31.56",
    tenYear: "+31.56"
  }
];

// Queries Data
const queries = [
  {
    title: "Nippon India Mutual Fund has launched a new fund offer, Nippon India Innovation Fund.",
    date: "24-Aug-2023"
  },
  {
    title: "What would be the post tax return on different investments",
    date: "24-Aug-2023"
  },
  {
    title: "Which Principal Mutual Fund scheme will be suitable for my retirement corpus",
    date: "24-Aug-2023"
  },
  {
    title: "What is the minimum holding period for availing NCD interest",
    date: "24-Aug-2023"
  }
];

// Distributor Services Data
const services = [
  {
    title: "Your Gateway to Expertly Crafted Websites for MF Distributors and advisors",
    description: "Professional web solutions",
    icon: vector11,
    icon2: globe,
    action: "Learn More",
    color: "bg-[#FFFCF1]"
  },
  {
    title: "Master Your MF Operation. Back-Office Software for Distributors",
    description: "Streamline your operations",
    icon: vector12,
    icon2: layout,
    action: "Enquire Now",
    color: "bg-[#FFFCF1]"
  },
  {
    title: "Accelerate Your Reach. Mobile App Development for MF Distributors",
    description: "Mobile solutions for growth",
    icon: vector13,
    icon2: phone,
    action: "Get in touch",
    color: "bg-[#FFFCF1]"
  }
];

// AMCs Data
const amcs = [
  { name: "Axis MF", logo: bank1 },
  { name: "Aditya Birla Sun Life MF", logo: bank2 },
  { name: "Baroda BNP Paribas MF", logo: bank3 },
  { name: "Bajaj Finserv MF", logo: bank4 },
  { name: "Bank of India MF", logo: bank5 },
  { name: "Canara Robeco MF", logo: bank6 },
  { name: "DSP MF", logo: bank7 },
  { name: "PGIM India MF", logo: bank8 },
  { name: "Quant MF", logo: bank9 },
  { name: "Edelweiss MF", logo: bank10 },
  { name: "Axis MF", logo: bank1 },
  { name: "Aditya Birla Sun Life MF", logo: bank2 },
  { name: "Baroda BNP Paribas MF", logo: bank3 },
  { name: "Bajaj Finserv MF", logo: bank4 },
  { name: "Bank of India MF", logo: bank5 },
  { name: "Canara Robeco MF", logo: bank6 },
  { name: "DSP MF", logo: bank7 },
  { name: "PGIM India MF", logo: bank8 },
  { name: "Quant MF", logo: bank9 },
  { name: "Edelweiss MF", logo: bank10 },
];

// Testimonials Data
const testimonials = [
  {
    name: "Pradip Chakrabarty",
    role: "AMFI Contributor | Mumbai",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "This platform not only simplified the process but also gave me access to invaluable resources and support. I highly recommend it to fellow advisors!"
  },
  {
    name: "Mohit Singh",
    role: "Group Fund House | Mumbai",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "The tools and insights provided have made my mutual fund advisory services more efficient and effective than ever before. It's a true game-changer!"
  }
];

// Statistics Data
const stats = [
  {
    number: "40,353",
    label: "Active Distributors"
  },
  {
    number: "8,00,000",
    label: "Monthly Active Views"
  },
  {
    number: "805+",
    label: "Mutual Fund & Finance Articles"
  },
  {
    number: "62+",
    label: "Mutual Fund Research Tools"
  }
];

// Brand Partners Data
const brands = [
  { name: "Bandhan Mutual Fund", logo: "🔴" },
  { name: "IIFL Mutual Fund", logo: "🟥" },
  { name: "LIC Mutual Fund", logo: "💛" },
  { name: "Nippon India Mutual Fund", logo: "🔺" },
  { name: "Mirae Asset Mutual Fund", logo: "📈" },
  { name: "HSBC Asset Management", logo: "🏦" }
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
const VideoCard = ({ title, imageUrl }) => (
  <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
    <div className="relative">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-4xl">▶</span>
      </div>
    </div>
    <p className="mt-2 text-gray-700 text-sm">{title}</p>
    <p className="text-gray-500 text-xs">○ 5 min video</p>
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
                <button className="flex items-center font-[Arial] font-bold text-[11px] leading-[13px] tracking-[1.36px] uppercase text-[#000000] hover:text-blue-800 transition-colors">
                  MORE {arrow}
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

            <div className="bg-[linear-gradient(114.55deg,#ECD3BA_15.37%,#CAE5FF_75.11%)] mt-6 sm:mt-8 flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 rounded-lg">
              {/* Left arrow image */}
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 w-full sm:w-[140px]">
                <img
                  src={twoArrows}
                  alt="Double Up Arrow"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Text content */}
              <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0">
                <h3 className="font-serif font-bold text-[16px] sm:text-[16px] leading-[28px] tracking-normal text-gray-800 mb-1">
                  Portfolio Tracking Simplified
                </h3>

                <p className="font-sans font-normal text-[13px] sm:text-[13px] leading-[18px] text-gray-700">
                  Track your wealth with the Ultimate Investment Portfolio Tracker
                </p>
              </div>

              {/* Button */}
              <div className="flex-shrink-0">
                <button className="bg-[#096FFA] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-sm font-sans font-bold text-[11px] sm:text-[11px] leading-[12px] tracking-[1px] hover:bg-blue-700">
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
              <div >
                <button className="bg-[#096FFA] text-white px-5 py-2 sm:px-5 sm:py-3 rounded-md font-semibold hover:bg-blue-700">
                  Find an Advisor
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="relative bg-[linear-gradient(271.47deg,#EED5BC_17.79%,#CAE5FF_82.21%)] p-6 sm:p-10 lg:p-12 overflow-hidden flex flex-col lg:flex-row items-start lg:items-center mb-8">
        {/* Flower Decoration (left side) */}
        <img
          src={vector2}
          alt="Flower Decoration"
          className="absolute left-[-28px] top-1/2 transform -translate-y-1/2 w-[50px] sm:w-[60px] lg:w-[70px] opacity-80"
        />

        {/* Left Content */}
        <div className="relative z-10 flex-1 max-w-2xl mb-6 lg:mb-0 px-0 lg:px-[80px] text-center lg:text-left">
          <h2 className="font-['Merriweather'] font-bold text-[20px] sm:text-[22px] lg:text-[26px] leading-[28px] sm:leading-[32px] lg:leading-[36px] text-gray-900 mb-6">
            Simplify Your Investment Decisions, <br className="hidden sm:block" />
            Introducing the Mutual Fund Screener
          </h2>

          <button className="bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            Discover MF Screeners
          </button>
        </div>

        {/* Right Side Card */}
        <div className="relative z-10 bg-white shadow-md p-5 sm:p-6 rounded-md w-full sm:max-w-[400px] lg:w-[350px] lg:absolute lg:right-[230px] lg:top-[50px] lg:h-[237px]">
          <h3 className="font-['Merriweather'] font-bold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[28px] text-gray-900 mb-4">
            200+ Screening Filters
          </h3>

          <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <h4 className="font-['Inter'] font-semibold text-[11px] leading-[20px] text-gray-700 mb-2">
                Select AMC
              </h4>
              <ul className="space-y-2">
                <li className="font-['Inter'] font-normal text-[11px] leading-[20px] text-gray-800 bg-blue-50 px-2 py-1 rounded">
                  Top 10 AMCs
                </li>
                <li className="font-['Inter'] font-normal text-[11px] leading-[20px] text-gray-700 hover:text-gray-900 cursor-pointer">
                  Axis Mutual Fund
                </li>
                <li className="text-gray-400 font-['Inter'] text-[11px]">DSP Mutual Fund</li>
                <li className="text-gray-400 font-['Inter'] text-[11px]">HDFC Mutual Fund</li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Inter'] font-semibold text-[11px] leading-[20px] text-gray-700 mb-2">Select Category</h4>
              <ul className="space-y-2">
                <li className="font-['Inter'] font-normal text-[11px] leading-[20px] text-gray-700 hover:text-gray-900 cursor-pointer">Debt Corporate Bond</li>
                <li className="font-['Inter'] font-normal text-[11px] leading-[20px] text-gray-800 bg-blue-50 px-2 py-1 rounded">Equity Flexi Cap</li>
                <li className="text-gray-400 font-['Inter'] text-[11px]">Equity ELSS</li>
                <li className="text-gray-400 font-['Inter'] text-[11px]">Equity Large Cap</li>
              </ul>
            </div>
          </div>

          {/* Arrow corner effect */}
          <img
            src={vector4}
            alt="Arrow Decoration"
            className="absolute top-[-10px] right-[-10px] w-[70px] sm:w-[90px] lg:w-[114px]"
          />
        </div>
      </div>

      <div className="container mx-auto p-4">
        {/* Fund News Section */}
        <div className="grid grid-cols-12 gap-12 mb-6">
          {/* Fund News (col-span-7) */}
          <div className="col-span-12 md:col-span-7 pr-4">
            <div className="mb-1 flex justify-between items-center">
              <h2
                className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle"
              >
                Fund News
              </h2>

              <button className="flex items-center font-[Arial] font-bold text-[11px] leading-[13px] tracking-[1.36px] uppercase text-[#000000] hover:text-blue-800 transition-colors">
                MORE <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="w-full h-[1px] bg-[#111111] mb-6"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="font-serif font-bold text-[16px] leading-[28px] tracking-[0%]"
                  style={{ fontFamily: "Merriweather" }}>Mirae Asset Mutual Fund garners more than Rs. 1,393 crore in Mirae Asset Multicap Fund NFO</p>
                <p className="text-gray-500 text-xs">24-Aug-2023</p>
              </div>
              <div>
                <p className="font-serif font-bold text-[16px] leading-[28px] tracking-[0%]"
                  style={{ fontFamily: "Merriweather" }}>WhiteOak Capital Mutual Fund launches WhiteOak Capital Multi Cap Fund</p>
                <p className="text-gray-500 text-xs">24-Aug-2023</p>
              </div>
              <div>
                <p className="font-serif font-bold text-[16px] leading-[28px] tracking-[0%]"
                  style={{ fontFamily: "Merriweather" }}>Quant Mutual Fund launches Quant Teck Fund</p>
                <p className="text-gray-500 text-xs">22-Aug-2023</p>
              </div>
            </div>
          </div>

          {/* Advisors Forum (col-span-5) */}
          <div className="col-span-12 md:col-span-5">
            <h2 className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle"
            >Advisors Forum</h2>
            <div className="w-full h-[1px] bg-[#111111] mb-6"></div>

            <div className="bg-yellow-50 p-4 rounded-lg h-full">

              <p>Start a discussion or Ask us a question.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                Join the community
              </button>
            </div>
          </div>
        </div>

        {/* Learn with us Section */}
        {/* <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Learn with us</h2>
          <a href="#" className="text-blue-500 text-sm">MORE</a>
        </div> */}
        {/* <div className="grid grid-cols-4 gap-4">
          <VideoCard
            title="Learn Investment or improve your skills online"
            imageUrl="https://via.placeholder.com/200x150"
          />
          <VideoCard
            title="How to Identify the Best Mutual Funds to Invest in?"
            imageUrl="https://via.placeholder.com/200x150"
          />
          <VideoCard
            title="Know the fund's management style"
            imageUrl="https://via.placeholder.com/200x150"
          />
          <VideoCard
            title="How to Identify the Best Mutual Funds to Invest in?"
            imageUrl="https://via.placeholder.com/200x150"
          />
        </div> */}
      </div>
      <div className=" mx-auto px-4 sm:px-8 lg:px-4 py-8">

        <div className="mb-2 px-8">
          <section className="bg-white">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle"
              >Learn with us</h2>
              <button className="flex items-center font-[Arial] font-bold text-[11px] leading-[13px] tracking-[1.36px] uppercase text-[#000000] hover:text-blue-800 transition-colors">
                MORE <ArrowRight className="ml-1 h-4 w-4" />
              </button>

            </div>
            <div className="w-full h-[1px] bg-[#111111] mb-6"></div>

            <p className="text-[#D99828] font-arial font-bold text-[10px] leading-[24px] tracking-[0.6px] uppercase py-1 inline-block">
              Latest Video
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="group cursor-pointer bg-[#F9F5E8]">
                  <div className="relative mb-3">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-32 object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors">
                        <Play className="h-4 w-4" />
                      </div>
                    </div>
                    {/* {video.category && (
                      <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        {video.category}
                      </div>
                    )} */}
                  </div>

                  <h3 className="px-4 py-2 font-['Merriweather'] font-bold text-[14px] leading-[22px] text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h3>


                  <div className="pb-3 ps-4 flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {video.duration}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Must visit section */}
        <div className="mb-12 px-8">
          <section className="bg-white">
            <div className="flex justify-between items-center mt-12 mb-2">
              <h2 className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle"
              >Must visit on AdvisorKhoj</h2>
              <button className="flex items-center font-[Arial] font-bold text-[11px] leading-[13px] tracking-[1.36px] uppercase text-[#000000] hover:text-blue-800 transition-colors">
                MORE <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="w-full h-[1px] bg-[#111111] mb-6"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className={`${tool.color} relative p-6  overflow-hidden`}
                >
                  {/* Decorative Images (Background) */}
                  <img
                    src={tool.leftDecoration}
                    alt="Decoration Left"
                    className="absolute bottom-[18px] left-[15px] w-[45px] h-[45px] sm:w-10 sm:h-10 opacity-80 z-0"
                  />
                  <img
                    src={tool.rightDecoration}
                    alt="Decoration Right"
                    className="absolute top-[60px] right-[25px] transform -translate-y-1/2 w-[45px] h-[45px] sm:w-10 sm:h-10 opacity-80 z-0"
                  />

                  {/* Foreground Content */}
                  <div className="relative z-10">
                    <h3 className="font-['Merriweather'] font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] text-gray-900 mb-2 pr-12 px-3 pt-2">
                      {tool.title}
                    </h3>


                    <button
                      className="bg-[#096FFA] mt-4 mb-4 hover:bg-blue-700 ms-3 text-white 
             px-3 py-2 sm:px-4 sm:py-2 rounded 
             font-[Arial] font-bold text-[11px] leading-[12px] tracking-[1px] 
             align-middle transition-colors"
                    >
                      {tool.action}
                    </button>

                  </div>
                </div>
              ))}

            </div>

          </section>
        </div>

        {/* Performance and Queries section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 px-8">
          <div className="lg:col-span-7">
            {/* Performing Funds Section */}
            <section className="bg-white">
              <div className="flex justify-between items-center mb-2">
                <h2
                  className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle"
                >
                  Most Consistent Performing Funds
                </h2>

                <button className="flex items-center font-[Arial] font-bold text-[11px] leading-[13px] tracking-[1.36px] uppercase text-[#000000] hover:text-blue-800 transition-colors">
                  MORE <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="w-full h-[1px] bg-[#111111] mb-6"></div>

              <p
                className="font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0] 
             text-gray-600 align-middle mb-4"
              >
                Most consistent funds have been chosen based on average rolling returns
                and consistency with which funds have beaten category average returns.
              </p>


              <div className="flex flex-wrap gap-2 mb-2 border-b border[#DCEAEC]">
                <button
                  className="font-[Arial] font-bold text-[13px] leading-[21px] tracking-[0] 
             text-[#111111] border-b-2 border-blue-600 pb-2 
             whitespace-nowrap align-middle"
                >
                  Large & Mid
                </button>

                <button
                  className="font-[Arial] font-bold text-[13px] leading-[21px] tracking-[0] 
             text-[#848F91] hover:text-blue-600 pb-2 whitespace-nowrap align-middle"
                >
                  Large Cap
                </button>

                <button className="font-[Arial] font-bold text-[13px] leading-[21px] tracking-[0] 
             text-[#848F91] hover:text-blue-600 pb-2 whitespace-nowrap align-middle">
                  Mid Cap
                </button>
                <button className="font-[Arial] font-bold text-[13px] leading-[21px] tracking-[0] 
             text-[#848F91] hover:text-blue-600 pb-2 whitespace-nowrap align-middle">
                  ELSS
                </button>
                <button className="font-[Arial] font-bold text-[13px] leading-[21px] tracking-[0] 
             text-[#848F91] hover:text-blue-600 pb-2 whitespace-nowrap align-middle">
                  Hybrid: Aggressive
                </button>
                <button className="font-[Arial] font-bold text-[13px] leading-[21px] tracking-[0] 
             text-[#848F91] hover:text-blue-600 pb-2 whitespace-nowrap align-middle">
                  Debt: Low Duration
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 text-sm text-[#4A4A4A]">
                      <th
                        className="text-left py-2 pr-4 font-[Arial] font-bold text-[11px] leading-[13px] 
             tracking-[0] align-middle uppercase "
                      >
                        SCHEME NAME
                      </th>

                      <th className="text-left py-3 pr-4 font-[Arial] font-bold text-[11px] leading-[13px] 
             tracking-[0] align-middle uppercase"
                      >AUM (in CR)</th>
                      <th className="text-left py-3 pr-4 font-[Arial] font-bold text-[11px] leading-[13px] 
             tracking-[0] align-middle uppercase"
                      >LAUNCH DATE</th>
                      <th className="text-left py-3 pr-4 font-[Arial] font-bold text-[11px] leading-[13px] 
             tracking-[0] align-middle uppercase"
                      >1Y RTN (%)</th>
                      <th className="text-left py-3 pr-4 font-[Arial] font-bold text-[11px] leading-[13px] 
             tracking-[0] align-middle uppercase"
                      >3Y RTN (%)</th>
                      <th className="text-left py-3 pr-4 font-[Arial] font-bold text-[11px] leading-[13px] 
             tracking-[0] align-middle uppercase"
                      >5Y RTN (%)</th>
                      <th className="text-left py-3 pr-4 font-[Arial] font-bold text-[11px] leading-[13px] 
             tracking-[0] align-middle uppercase"
                      >10Y RTN (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {funds.map((fund, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }`}
                      >
                        <td
                          className="py-3 pr-3 font-[Arial] font-bold text-[12px] leading-[18px] 
             tracking-[0] text-gray-900 align-middle"
                        >
                          {fund.name}
                        </td>

                        <td
                          className="py-1 px-2 font-[Arial] font-normal text-[13px] leading-[18px] 
             tracking-[0] align-middle text-[#098941]"
                        >
                          {fund.aum}
                        </td>
                        <td
                          className="py-1 px-2 font-[Arial] font-normal text-[13px] leading-[18px] 
             tracking-[0] align-middle text-[#098941]"
                        >
                          {fund.launch}
                        </td>
                        <td
                          className="py-1 px-2 font-[Arial] font-normal text-[13px] leading-[18px] 
             tracking-[0] align-middle text-[#098941]"
                        >
                          {fund.oneYear}
                        </td>
                        <td
                          className="py-1 px-2 font-[Arial] font-normal text-[13px] leading-[18px] 
             tracking-[0] align-middle text-[#098941]"
                        >
                          {fund.threeYear}
                        </td>
                        <td
                          className="py-1 px-2 font-[Arial] font-normal text-[13px] leading-[18px] 
             tracking-[0] align-middle text-[#098941]"
                        >
                          {fund.fiveYear}
                        </td>
                        <td
                          className="py-1 px-2 font-[Arial] font-normal text-[13px] leading-[18px] 
             tracking-[0] align-middle text-[#098941]"
                        >
                          {fund.tenYear}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <div className="lg:col-span-5">
            {/* Queries Section */}
            <section className="bg-white">
              <h2 className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle mb-2"
              >Queries</h2>
              <div className="w-full h-[1px] bg-[#111111] mb-6"></div>

              <div className="space-y-4">
                {queries.map((query, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-b-0"
                  >
                    <h3
                      className="font-['Merriweather'] font-bold text-[16px] leading-[28px] 
             tracking-[0] text-gray-900 hover:text-blue-600 
             cursor-pointer transition-colors align-middle mb-2"
                    >
                      {query.title}
                    </h3>

                    <p className="text-sm text-gray-500">{query.date}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Services and Tracker section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 px-8">
          <div className="lg:col-span-7">
            {/* Distributor Services Section */}
            <section className="bg-white">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle">
                  Mutual Fund Distributor Services
                </h2>
                <button className="flex items-center font-[Arial] font-bold text-[11px] leading-[13px] tracking-[1.36px] uppercase text-[#000000] hover:text-blue-800 transition-colors">
                  MORE <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="w-full h-[1px] bg-[#111111] mb-6"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className={`${service.color} p-6 rounded-lg hover:shadow-md transition-shadow`}
                    >
                      <div className="relative w-[60px] h-[60px]">
                        {/* Background Image */}
                        <img
                          src={service.icon}
                          alt="bg1"
                          className="absolute inset-0 w-full h-full object-cover rounded-full"
                        />

                        {/* Centered Small Image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img
                            src={service.icon2}
                            alt="bg2"
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                      </div>

                      <h3
                        className="font-['Merriweather'] font-bold text-[14px] leading-[22px] 
             tracking-[0] text-gray-900 align-middle mt-3 mb-3"
                      >
                        {service.title}
                      </h3>


                      <p className="text-sm text-gray-600 mb-4">
                        {service.description}
                      </p>

                      <button
                        className="bg-[#096FFA] hover:bg-blue-700 text-white px-4 py-3 rounded 
             font-[Arial] font-bold text-[11px] leading-[12px] tracking-[1px] 
             align-middle transition-colors"
                      >
                        {service.action}
                      </button>

                    </div>
                  );
                })}
              </div>
            </section>
            <section className="bg-white mt-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle">
                  Hear from the people who love us
                </h2>
                <button className="flex items-center font-[Arial] font-bold text-[11px] leading-[13px] tracking-[1.36px] uppercase text-[#000000] hover:text-blue-800 transition-colors">
                  VIEW ALL <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="w-full h-[1px] bg-[#111111] mb-6"></div>

              <div className="flex flex-wrap gap-6 justify-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-[#E8F0FF] p-6 w-full sm:w-[360px] min-h-[367px] relative rounded-lg flex flex-col"
                  >
                    {/* Quote mark above profile image */}
                    <img
                      src={comma}
                      alt="quote"
                      className="w-6 h-6 absolute top-[40px] left-[27px]"
                    />

                    {/* Top Section with Image + Name/Role */}
                    <div className="flex items-center mb-4 mt-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full object-cover"
                      />

                      <div className="ml-4">
                        <h4 className="font-[Arial] font-bold text-[14px] sm:text-[16px] text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="font-[Inter] text-[12px] sm:text-[14px] text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Quote Text */}
                    <p className="font-[Merriweather] font-bold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-gray-700">
                      {testimonial.quote}
                    </p>
                  </div>
                ))}
              </div>


            </section>
          </div>

          <div className="lg:col-span-5">
            {/* Fund Tracker Section */}
            <section className="bg-white border-b border-[#DCEAEC] pb-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle">
                  Fund Performance Tracker of AMCs
                </h2>
                <button className="flex items-center font-[Arial] font-bold text-[11px] leading-[13px] tracking-[1.36px] uppercase text-[#000000] hover:text-blue-800 transition-colors">
                  VIEW ALL <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="w-full h-[1px] bg-[#111111] mb-6"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column */}
                <div className="space-y-3">
                  {amcs.slice(0, 10).map((amc, index) => (
                    <div
                      key={index}
                      className="flex items-center py-1 hover:bg-gray-50 rounded px-2 transition-colors cursor-pointer"
                    >
                      <img
                        src={amc.logo}
                        alt={amc.name}
                        className="w-6 h-6 mr-3 object-contain"
                      />

                      <span className="font-[Arial] font-normal text-[12px] leading-[32px] text-gray-900 align-middle">
                        {amc.name}
                      </span>

                    </div>
                  ))}
                </div>

                {/* Second Column */}
                <div className="space-y-3">
                  {amcs.slice(10, 20).map((amc, index) => (
                    <div
                      key={index}
                      className="flex items-center py-1 hover:bg-gray-50 rounded px-2 transition-colors cursor-pointer"
                    >
                      <img
                        src={amc.logo}
                        alt={amc.name}
                        className="w-6 h-6 mr-3 object-contain"
                      />
                      <span className="font-[Arial] font-normal text-[12px] leading-[32px] text-gray-900 align-middle">
                        {amc.name}
                      </span>

                    </div>
                  ))}
                </div>
              </div>
            </section>
            <div className="bg-[#F8F9F9] rounded-lg p-8 mt-4 flex items-center relative">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full ">
                {stats.map((stat, index) => (
                  <div key={index} className="">
                     <img
                  src={vector4}
                  alt="Flower Decoration"
                  className="absolute top-[20px] right-[15px] w-[78px] h-[78] sm:w-16 "
                />
                    <div className="font-sans font-bold text-[24px] leading-[28px] text-gray-900 mb-2">
                      {stat.number}
                    </div>

                    <div className="font-sans font-normal text-[11px] leading-[14px] text-gray-700">
                      {stat.label}
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Testimonials section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 px-8">
          {/* Testimonials Section */}
          <div className="lg:col-span-7">
            {/* <section className="bg-white">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle">
                  Hear from the people who love us
                </h2>
                <button className="flex items-center font-[Arial] font-bold text-[11px] leading-[13px] tracking-[1.36px] uppercase text-[#000000] hover:text-blue-800 transition-colors">
                  VIEW ALL <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="w-full h-[1px] bg-[#111111] mb-6"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg"
                  >
                    <div className="flex items-start mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>
                ))}
              </div>
            </section> */}
          </div>

          {/* Statistics Section */}
          <div className="lg:col-span-5">

          </div>
        </div>


        {/* Brand Partners section */}
        <div className=" ">
          <section className="bg-white">
            <h2  className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle mb-2 ms-8">Brands we work with</h2>
              <div className="w-full h-[1px] bg-[#111111] "></div>

            <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 py-8 bg-[#F8F9F9]">
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                  <span className="text-2xl">{brand.logo}</span>
                  <span className="font-medium text-sm">{brand.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default App;