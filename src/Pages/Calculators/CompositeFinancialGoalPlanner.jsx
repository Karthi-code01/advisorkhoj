import React, { useMemo, useState } from 'react'
import Header from '../Header'
import Breadcrumbs from '../Breadcrumbs'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'
import downloadicon from '../../assets/Images/Frame 1426.png'
import messageicon from '../../assets/Images/Frame 1427 (1).png'
import arrow from "../../assets/Images/Icon.png";
import twoArrows from "../../assets/Images/Vector (1).png";
import aimImage from "../../assets/Images/6418fd258e033e4afc684202f0875f873e862988.png";
import tool9 from "../../assets/Images/Union (2).png"
import tool10 from "../../assets/Images/Union (3).png"
import tool11 from "../../assets/Images/Union (4).png"
import tool12 from "../../assets/Images/advisory tools (6).png"
import tool13 from "../../assets/Images/advisory tools (7).png"
import tool14 from "../../assets/Images/advisory tools (8).png"
import tool15 from "../../assets/Images/advisory tools (9).png"
import tool16 from "../../assets/Images/advisory tools (10).png"
import Footer from '../Footer';
import line from "../../assets/Images/Line 25 (1).png"
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);
const faqs = [
    {
        question: "How can an advisor help me with my investment goals?",
        answer: (
            <>
                <p>
                    A financial advisor can help with investments in a number of ways,
                    including:
                </p>
                <div className="mt-2">
                    <p className="font-semibold">Choosing funds</p>
                    <ul className="list-disc list-inside ml-2">
                        <li>
                            Financial advisors can help you choose the right mutual funds for
                            your needs. They can also help you understand the risks involved.
                        </li>
                    </ul>
                </div>
                <div className="mt-2">
                    <p className="font-semibold">Reviewing your portfolio</p>
                    <ul className="list-disc list-inside ml-2">
                        <li>
                            Financial advisors can help you review your portfolio and adjust
                            it as needed. This can include rebalancing your portfolio,
                            revisiting your risk tolerance, and taking advantage of potential
                            investment or tax opportunities.
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        question: "What is a mutual fund?",
        answer: (
            <p>
                A mutual fund pools money from multiple investors to invest in a
                diversified portfolio of stocks, bonds, or other securities.
            </p>
        ),
    },
    {
        question: "What is SIP (Systematic Investment Plan)?",
        answer: (
            <p>
                A SIP allows you to invest a fixed amount regularly in mutual funds,
                helping you build wealth over time with disciplined investing.
            </p>
        ),
    },
    {
        question: "How much should I invest monthly?",
        answer: (
            <p>
                The right amount depends on your income, expenses, financial goals, and
                risk tolerance. A financial advisor can guide you.
            </p>
        ),
    },
];
const features2 = [
    { id: 1, name: "Crorepati Calculator", icon: tool9 },
    { id: 2, name: "Risk Analyser", icon: tool10 },
    { id: 3, name: "SIP Calculator", icon: tool11 },
    { id: 4, name: "Asset Calculator", icon: tool12 },
    { id: 5, name: "SIP Planner", icon: tool13 },
    { id: 6, name: "Retirement Planning Calculator", icon: tool14 },
    { id: 7, name: "Compounding Calculator", icon: tool15 },
    { id: 8, name: "Lumpsum Calculator", icon: tool16 },
];

function CompositeFinancialGoalPlanner() {

    const [openIndex, setOpenIndex] = useState(null);
    const [education, setEducation] = useState(2500000);
    const [wealth, setWealth] = useState(5000000);
    const [expense, setExpense] = useState(1500000);
    const [activeTab, setActiveTab] = useState("Education"); // default tab

    const tabs = ["Education", "Wealth", "Expense"];


    // Example result values (replace with real calculations)
    const goalData = {
        education: { invested: 2500000, interest: 10309628 - 2500000, total: 10309628 },
        expense: { invested: 1500000, interest: 11632433 - 1500000, total: 11632433 },
        wealth: { invested: 5000000, interest: 62844352 - 5000000, total: 62844352 }
    };

    const chartOptions = {
        chart: {
            type: "column",
            height: 400,
            backgroundColor: "#fff"
        },
        title: { text: null },
        xAxis: {
            categories: ["Education", "Expense", "Wealth"],
            labels: { style: { fontSize: "14px", fontWeight: "500" } }
        },
        yAxis: {
            min: 0,
            title: null,
            labels: {
                formatter: function () {
                    if (this.value >= 10000000) return (this.value / 10000000).toFixed(0) + "Cr";
                    if (this.value >= 100000) return (this.value / 100000).toFixed(0) + "L";
                    return this.value;
                }
            },
            gridLineDashStyle: "Dash"
        },
        legend: {
            align: "center",
            verticalAlign: "bottom",
            layout: "horizontal",
            symbolRadius: 6
        },
        plotOptions: {
            column: {
                stacking: "normal",
                borderRadiusTopLeft: 8,
                borderRadiusTopRight: 8,
                pointPadding: 0.05,
                groupPadding: 0.15
            }
        },
        series: [
            {
                name: "Invested Amount",
                data: [goalData.education.invested, goalData.expense.invested, goalData.wealth.invested],
                color: "#FFA500" // Orange
            },
            {
                name: "Interest",
                data: [goalData.education.interest, goalData.expense.interest, goalData.wealth.interest],
                color: "#008000" // Green
            }
        ],
        credits: { enabled: false }
    };


    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className="min-h-screen bg-[#f8f9f9]">
            {/* Header + Breadcrumbs */}
            <Header />
            <div className="grid grid-cols-6 items-center gap-4 px-4 sm:px-8 md:px-12 py-4 sm:py-6">
                {/* Breadcrumbs */}
                <div className="col-span-6 md:col-span-2">
                    <Breadcrumbs />
                </div>

                {/* Search */}
                <div className="col-span-6 md:col-span-2 md:col-start-5 flex justify-end">
                    <div className="relative w-full sm:w-[200px] md:w-[254px]">
                        <input
                            type="text"
                            placeholder="Search a keyword"
                            className="w-full py-1 pr-10 pl-3 
                border border-gray-300 bg-white text-gray-800 rounded-[12px]
                placeholder:font-bold placeholder:text-[11px] placeholder:text-[#4A4A4A] 
                placeholder:leading-[100%] placeholder:tracking-[0.01em] 
                placeholder:font-[Arial] 
                focus:border-blue-500 outline-none"
                        />
                        <Search
                            size={16}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1D1D1D]"
                        />
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className=" h-[1px] bg-[#111111] mb-6 mx-4 sm:mx-8 md:mx-12"></div>

            {/* Title + Icons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-8 md:px-12 gap-4">
                <div>
                    <h1 className="font-merriweather font-bold text-[20px] sm:text-[24px] leading-[150%] text-gray-900 mb-2 sm:mb-4">
                        Composite Financial Goal Planner Calculator
                    </h1>
                    <p className="font-[Arial] text-[12px] sm:text-[14px] leading-[150%] tracking-[0.5px] text-gray-700 max-w-5xl">
                        Future Value Calculator helps in Retirement Plans, Goals in Life, Personal Goals, Financial Goals and tell you How to Achieve Goals.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <img src={messageicon} alt="share" className="w-8 h-8" />
                    <img src={downloadicon} alt="download" className="w-8 h-8" />
                </div>
            </div>
            <div className="bg-white mx-12 mt-4 p-6 md:p-10">
                {/* Top Tabs */}
                <div className="flex justify-center mb-6">
                    <div className="flex border-b border-gray-200 gap-x-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 font-sans font-bold text-[13px] leading-[21px] tracking-[0%] align-middle transition-colors ${activeTab === tab
                                    ? "border-b-2 border-[#096FFA] text-[#111111]"
                                    : "text-[#848F91] hover:text-blue-600"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>


                {/* Sliders */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                    {[{ label: "Education", value: education, setValue: setEducation, min: 1000000, max: 5000000 },
                    { label: "Wealth", value: wealth, setValue: setWealth, min: 1000000, max: 10000000 },
                    { label: "Expense", value: expense, setValue: setExpense, min: 500000, max: 3000000 }
                    ].map((item) => (
                        <div key={item.label}>
                            <div className='flex justify-between'>
                                <p className="font-medium mb-2">{item.label} Amount (Rs)</p>
                                <div className="text-right font-semibold px-4 py-2 bg-[#F9F9F9] border-b border-[#096FFA] text-sm">
                                    ₹ {item.value.toLocaleString("en-IN")}
                                </div>
                            </div>
                            <input
                                type="range"
                                min={item.min}
                                max={item.max}
                                step={50000}
                                value={item.value}
                                onChange={(e) => item.setValue(Number(e.target.value))}
                                className="w-full h-2 mt-6 rounded-lg cursor-pointer appearance-none"
                                style={{
                                    WebkitAppearance: "none",
                                    background: `linear-gradient(
            to right,
            #B1D2FF,
            #2C85FD ${((item.value - item.min) / (item.max - item.min)) * 100}%,
            #E5E7EB ${((item.value - item.min) / (item.max - item.min)) * 100}%
          )`,
                                }}
                            />

                        </div>
                    ))}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mb-8">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded">Submit</button>
                </div>

                {/* Chart */}
                <div className="flex justify-center mb-8">
                    <div className="w-full md:w-3/4">
                        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                    </div>
                </div>

                {/* Results Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border text-sm text-left">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3"></th>
                                <th className="p-3">Education</th>
                                <th className="p-3">Wealth</th>
                                <th className="p-3">Expense</th>
                                <th className="p-3">TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3">Amount at today’s prices</td>
                                <td className="p-3">₹ 25,00,000</td>
                                <td className="p-3">₹ 50,00,000</td>
                                <td className="p-3">₹ 15,00,000</td>
                                <td className="p-3 text-blue-600">₹ 90,00,000</td>
                            </tr>
                            <tr>
                                <td className="p-3">No. of years to achieve your goals</td>
                                <td className="p-3">20 years</td>
                                <td className="p-3">35 years</td>
                                <td className="p-3">30 years</td>
                                <td className="p-3">-</td>
                            </tr>
                            <tr>
                                <td className="p-3">Expected return rate (% p.a.)</td>
                                <td className="p-3">12.50 %</td>
                                <td className="p-3">12.50 %</td>
                                <td className="p-3">12.50 %</td>
                                <td className="p-3">-</td>
                            </tr>
                            <tr>
                                <td className="p-3">Goal target (Inflation adjusted)</td>
                                <td className="p-3">₹ 1,06,09,628</td>
                                <td className="p-3">₹ 6,28,44,352</td>
                                <td className="p-3">₹ 1,31,32,433</td>
                                <td className="p-3 text-blue-600">₹ 8,65,96,413</td>
                            </tr>
                            <tr>
                                <td className="p-3">Current savings amount</td>
                                <td className="p-3">₹ 1,38,888</td>
                                <td className="p-3">₹ 2,77,777</td>
                                <td className="p-3">₹ 83,333</td>
                                <td className="p-3 text-blue-600">₹ 5,00,000</td>
                            </tr>
                            <tr>
                                <td className="p-3">Monthly Savings required</td>
                                <td className="p-3">₹ 10,263</td>
                                <td className="p-3">₹ 9,549</td>
                                <td className="p-3">₹ 3,644</td>
                                <td className="p-3 text-blue-600">₹ 23,456</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-12 ">
                <div className="lg:col-span-7 px-4">
                    <div className="flex justify-between items-center mt-2 mb-2">
                        <h2
                            className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
                                 text-[#000000] align-middle"
                        >
                            About Asset Allocation Calculator
                        </h2>
                        <button className="flex gap-1 items-center font-[Arial] font-bold text-[11px] leading-[13px] tracking-[1.36px] uppercase text-[#000000] hover:text-blue-800 transition-colors">
                            See More   <img
                                src={arrow}
                                alt="arrow"
                                className="w-[13px] h-[13px] object-contain invert"
                            />
                        </button>
                    </div>
                    <div className="w-full h-[1px] bg-[#111111] mb-6"></div>
                    <div>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-white p-4 cursor-pointer  ${openIndex === index ? "border-l-4 border-blue-500" : "border border-gray-100"
                                    }`}
                                onClick={() => toggleFaq(index)}
                            >
                                {/* Header */}
                                <div className="flex justify-between items-center">
                                    <h3 className="text-base font-medium text-gray-900">
                                        {faq.question}
                                    </h3>
                                    {openIndex === index ? (
                                        <ChevronUp className="w-5 h-5 text-gray-500" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                    )}
                                </div>

                                {/* Body */}
                                {openIndex === index && (
                                    <div className="mt-3 text-sm text-gray-700">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="bg-[linear-gradient(114.55deg,#ECD3BA_15.37%,#CAE5FF_75.11%)] mt-6  flex flex-col sm:flex-row items-center sm:items-start mb-6 ">
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
                <div className=" lg:col-span-5 lg:mr-4">
                    <div className="overflow-hidden mb-6 mt-6">
                        <div className=" h-full flex items-center">
                            <img
                                src={aimImage}
                                alt="Goals"
                                className="w-full h-[130px] object-cover "
                            />
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-10 mb-2">
                        <h2
                            className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
             text-[#000000] align-middle"
                        >
                            Explore More Calculators
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
                        {features2.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-3 p-3 bg-white"
                            >
                                <img src={item.icon} alt={item.name} className="w-[24px] h-[24px]" />
                                <span className="font-[Arial] font-normal text-[12px] leading-[150%] text-gray-700 align-middle">
                                    {item.name}
                                </span>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CompositeFinancialGoalPlanner
