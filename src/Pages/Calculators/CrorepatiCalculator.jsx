import React, { useState } from 'react'
import Header from '../Header'
import Breadcrumbs from '../Breadcrumbs'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import downloadicon from '../../assets/Images/Frame 1426.png'
import messageicon from '../../assets/Images/Frame 1427 (1).png'
import arrow from "../../assets/Images/Icon.png";
import Footer from '../Footer';


ChartJS.register(ArcElement, Tooltip, Legend);
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
function CrorepatiCalculator() {
    const [wealthTarget, setWealthTarget] = useState(5);
    const [currentAge, setCurrentAge] = useState(25);
    const [targetAge, setTargetAge] = useState(75);
    const [inflation, setInflation] = useState(5);
    const [sipReturn, setSipReturn] = useState(12.5);
    const [currentSavings, setCurrentSavings] = useState(500000);
    const [openIndex, setOpenIndex] = useState(null);

    const inputs = [
        {
            id: "wealthTarget",
            label: "Your wealth target (in crores)",
            min: 1, max: 20, step: 1,
            value: wealthTarget, setValue: setWealthTarget,
            unit: " Crore",
        },
        {
            id: "currentAge",
            label: "Your current age (in years)",
            min: 18, max: 60, step: 1,
            value: currentAge, setValue: setCurrentAge,
            unit: "",
        },
        {
            id: "targetAge",
            label: "Target age for becoming a crorepati",
            min: 30, max: 80, step: 1,
            value: targetAge, setValue: setTargetAge,
            unit: "",
        },
        {
            id: "inflation",
            label: "Expected Inflation Rate (% per annum)",
            min: 1, max: 15, step: 0.5,
            value: inflation, setValue: setInflation,
            unit: "%",
        },
        {
            id: "sipReturn",
            label: "Expected SIP Return (% per annum)",
            min: 5, max: 20, step: 0.5,
            value: sipReturn, setValue: setSipReturn,
            unit: "%",
        },
        {
            id: "currentSavings",
            label: "Current Savings (₹)",
            min: 100000, max: 10000000, step: 100000,
            value: currentSavings, setValue: setCurrentSavings,
            unit: "₹",
            format: (v) => `₹ ${v.toLocaleString()}`,
        },
    ];

    const years = targetAge - currentAge;
    const growthOfSavings = currentSavings * Math.pow(1 + sipReturn / 100, years);
    const inflationAdjusted = wealthTarget * 10000000 * Math.pow(1 + inflation / 100, years / 10);
    const finalTarget = inflationAdjusted - growthOfSavings;
    const requiredSip = Math.round(finalTarget / (years * 12));
    const totalSipInvestment = requiredSip * 12 * years;
    const totalGrowthAmount = finalTarget;

    const chartData = {
        labels: ["Amount Invested", "Total Growth"],
        datasets: [
            {
                data: [totalSipInvestment, totalGrowthAmount],
                backgroundColor: ["#098941", "#FFA901"],
                borderWidth: 0,
            },
        ],
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
                        Become A Crorepati Calculator
                    </h1>
                    <p className="font-[Arial] text-[12px] sm:text-[14px] leading-[150%] tracking-[0.5px] text-gray-700 max-w-xl">
                        Become a Crorepati Calculator helps you calculate how much money you need to save monthly to become a crorepati.
                        Check out the{" "}
                        <a
                            href="https://www.example.com/sip"
                            className="text-[#096FFA] underline hover:text-blue-700"
                        >
                            Top SIP (Systematic Investment Plan)
                        </a>{" "}
                        mutual fund schemes to invest
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <img src={messageicon} alt="share" className="w-8 h-8" />
                    <img src={downloadicon} alt="download" className="w-8 h-8" />
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 p-4 sm:p-6 md:p-8 bg-white mx-4 sm:mx-8 md:mx-12 mt-6 sm:mt-8 rounded-lg shadow-sm">
                {/* Inputs */}
                <div className="space-y-6 md:pr-8 border-b md:border-b-0 md:border-r">
                    {inputs.map((input) => (
                        <div key={input.id}>
                            <div className="flex flex-col sm:flex-row mt-8 items-start sm:items-center justify-between  gap-2 sm:gap-4">
                                <label className="font-[Inter] font-bold text-[13px]  sm:text-[14px] leading-[150%]">
                                    {input.label}
                                </label>
                                <p className="text-right font-semibold px-4 py-2 bg-[#F9F9F9] border-b border-[#096FFA] text-sm">
                                    {input.format ? input.format(input.value) : `${input.value}${input.unit}`}
                                </p>
                            </div>
                            <input
                                type="range"
                                className='mt-6'
                                min={input.min}
                                max={input.max}
                                step={input.step}
                                value={input.value}
                                onChange={(e) => input.setValue(Number(e.target.value))}
                                style={{
                                    WebkitAppearance: "none",
                                    width: "100%",
                                    height: "8px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    background: `linear-gradient(
                    to right,
                    #B1D2FF,
                    #2C85FD ${((input.value - input.min) / (input.max - input.min)) * 100}%,
                    #E5E7EB ${((input.value - input.min) / (input.max - input.min)) * 100}%
                  )`,
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Results + Chart */}
                <div className="">
                    {/* Chart */}
                    <div className="flex justify-center">
                        <div className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[350px] h-[240px]">
                            <Doughnut
                                data={chartData}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: true,
                                    cutout: "50%",
                                    radius: "100%",
                                    rotation: -90,
                                    circumference: 180,
                                    layout: {
                                        padding: {
                                            top: 0,
                                            bottom: 30
                                        }
                                    },
                                    plugins: {
                                        legend: {
                                            display: true,
                                            position: "bottom",
                                            labels: {
                                                usePointStyle: true,
                                                pointStyle: "rect",
                                                padding: 8,
                                                font: { size: 12 },
                                            },
                                        },
                                    },
                                }}
                            />


                        </div>
                    </div>


                    {/* Results Table */}
                    <div className="text-sm">
                        {[
                            { label: "Target Wealth (Inflation-Adjusted)", value: `Rs. ${inflationAdjusted.toLocaleString()}` },
                            { label: `Growth of Savings (${sipReturn}% p.a.)`, value: `Rs. ${growthOfSavings.toLocaleString()}` },
                            { label: "Final Target (Net of Savings Growth)", value: `Rs. ${finalTarget.toLocaleString()}` },
                            { label: "Time to Reach Goal", value: `${years} Years` },
                            { label: "Required Monthly SIP", value: `Rs. ${requiredSip.toLocaleString()}`, highlight: true },
                            { label: `Total SIP Investment (${years} Years)`, value: `Rs. ${totalSipInvestment.toLocaleString()}` },
                            { label: "Total Growth Amount", value: `Rs. ${totalGrowthAmount.toLocaleString()}` },
                        ].map((row, i) => (
                            <div
                                key={i}
                                className={`grid grid-cols-2 gap-2 py-3 sm:py-4 ${i % 2 === 0 ? "bg-[#F9F9F9]" : ""}`}
                            >
                                <span className="px-4 sm:px-6 md:px-8 text-right font-[Merriweather] font-normal text-[12px] text-[#777777] leading-[180%]">
                                    {row.label}
                                </span>
                                <span className={`font-bold ${row.highlight ? "text-blue-600" : ""}`}>
                                    {row.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-12 ">
                <div className="lg:col-span-7 px-4">
                    <div className="flex justify-between items-center mt-2 mb-2">
                        <h2
                            className="font-[Arial] font-bold text-[16px] leading-[19px] tracking-[1px] 
                                 text-[#000000] align-middle"
                        >
                            About Become a Crorepati Calculkator
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
                                className={`bg-white p-4 cursor-pointer transition-all ${openIndex === index ? "border-l-4 border-blue-500" : "border border-gray-100"
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
                </div>
                <div className=" lg:col-span-5 lg:mr-4">

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CrorepatiCalculator
