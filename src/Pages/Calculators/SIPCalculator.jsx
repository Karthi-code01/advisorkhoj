import React, { useState } from 'react'
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
import line from "../../assets/Images/Line 25.png"
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend, CategoryScale, LineElement, PointElement, LinearScale, BarElement } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);
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

function SIPCalculator() {
    const [sipAmount, setSipAmount] = useState(25000);
    const [sipDuration, setSipDuration] = useState(12.5);
    const [sipReturn, setSipReturn] = useState(12);
    const [openIndex, setOpenIndex] = useState(null);
    // Basic dummy calculations
    const totalSipInvestment = sipAmount * sipDuration * 12; // total invested
    const growth = totalSipInvestment * (sipReturn / 100); // dummy growth
    const totalFutureValue = totalSipInvestment + growth;

    // Doughnut chart (Gauge style)
    const doughnutData = {
        labels: ["SIP Investment", "Growth"],
        datasets: [
            {
                data: [totalSipInvestment, growth],
                backgroundColor: ["#098941", "#FFA901"],
                borderWidth: 0,
                cutout: "50%",
                rotation: -90,
                circumference: 180,
            },
        ],
    };

    const barLabels = Array.from({ length: 10 }, (_, i) => 2025 + i);

    // cumulative invest each year
    const investValues = barLabels.map((_, i) => totalSipInvestment * (i + 1));

    // growth each year, e.g. 12% of invested
    const annualRate = 0.12;
    const growthValues = investValues.map((inv) => Math.round(inv * annualRate));
    const getPointWidth = () => {
        if (window.innerWidth < 540) return 10;
        if (window.innerWidth < 640) return 30;  // mobile
        if (window.innerWidth < 768) return 25;  // small tablet
        if (window.innerWidth < 1024) return 30; // medium desktop
        return 40;                               // large desktop
    };
    const pointWidth = getPointWidth();
    const isMobile = window.innerWidth < 540;

    const chartOptions = {
        chart: {
            type: 'column',
            height: 400,
            events: {
                render: function () {
                    const chart = this;
                    const xAxis = chart.xAxis[0];
                    const yAxis = chart.yAxis[0];

                    // Remove old custom elements
                    if (chart.customElements) chart.customElements.forEach(el => el.destroy());
                    chart.customElements = [];

                    // ❌ Skip drawing gray background if on mobile
                    if (isMobile) return;

                    barLabels.forEach((cat, i) => {
                        const total = growthValues[i] + investValues[i];
                        const barWidth = 40;
                        const bgPadding = 15;
                        const extraHeight = 10;

                        const barTopY = yAxis.toPixels(total);
                        const barBottomY = yAxis.toPixels(0);

                        // Gray background rectangle
                        const bgHeight = barBottomY - barTopY;
                        const bg = chart.renderer
                            .rect(
                                xAxis.toPixels(i) - barWidth / 2 - bgPadding / 2,
                                barTopY - extraHeight / 2,
                                barWidth + bgPadding,
                                bgHeight + extraHeight / 2,
                                5
                            )
                            .attr({ fill: '#F7F7F7', zIndex: 0 })
                            .add();

                        chart.customElements.push(bg);
                    });
                },
            },
        },
        title: { text: null },
        subtitle: { text: null },

        xAxis: {
            categories: barLabels,
            title: { text: 'Year' },
            crosshair: false,
            gridLineWidth: 0,
            minPadding: 0.2,
            maxPadding: 0.2,
        },
        yAxis: [
            {
                min: 0,
                max: Math.max(...growthValues.map((v, i) => v + investValues[i])) * 1.2,
                title: { text: 'Total SIP Value' },
                lineWidth: 1,
                gridLineWidth: 0,
                labels: { formatter: function () { return (this.value / 1000000) + 'M'; } },
                stackLabels: {
                    enabled: !isMobile,
                    formatter: function () { return '₹' + this.total.toLocaleString(); },
                    style: { fontWeight: 'bold', color: '#000' },
                },
            },
            {
                min: 0,
                title: { text: 'SIP Investment' },
                labels: { formatter: function () { return (this.value / 1000000) + 'M'; } },
                opposite: true,
                linkedTo: 0,
                lineWidth: 1,
                gridLineWidth: 0,
            },
        ],
        tooltip: {
            shared: true,
            useHTML: true,
            formatter: function () {
                let total = 0;

                this.points.forEach(point => {
                    total += point.y;
                });

                // ✅ Start with total at the top
                let s = `<b>Total SIP Value: ₹${total.toLocaleString()}</b><br/>`;

                // ✅ Then list each series
                this.points.forEach(point => {
                    s += `
        <span style="color:${point.series.color}; font-size:12px; margin-right:6px;">●</span>
        ${point.series.name}: ₹${point.y.toLocaleString()}<br/>
      `;
                });

                return s;
            }
        },


        plotOptions: {
            column: {
                stacking: 'normal',
                borderRadius: 5,
                threshold: 0,
                borderWidth: 0,
                groupPadding: 0.2,
                pointPadding: 0.05,
            },
            series: { dataLabels: { enabled: false } },
        },
        series: [
            {
                name: 'Growth',
                data: growthValues.map(v => v * 0.95),
                color: '#FFA901',
                borderRadius: 0,
                pointWidth: pointWidth,
                zIndex: 1,
            },
            {
                name: 'Invested',
                data: investValues,
                color: '#098941',
                borderRadius: 5,
                pointWidth: pointWidth,
                zIndex: 1,
            },
        ],
        legend: { enabled: true },
        credits: { enabled: false },
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
                        Systematic Investment Plan Calculator
                    </h1>
                    <p className="font-[Arial] text-[12px] sm:text-[14px] leading-[150%] tracking-[0.5px] text-gray-700 max-w-5xl">
                        Mutual Fund SIP Calculator is a free online tool to know best SIP Plans and returns on your monthly Mutual Fund SIPs. Get a rough estimate of your final SIP maturity amount | Advisorkhoj
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <img src={messageicon} alt="share" className="w-8 h-8" />
                    <img src={downloadicon} alt="download" className="w-8 h-8" />
                </div>
            </div>

            <div className='bg-white mx-8'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 p-4 sm:p-6 md:p-8 mx-4 sm:mx-8 md:mx-12 mt-6 sm:mt-8 border-b">
                    {/* Inputs */}
                    <div className="space-y-6 md:pr-8 border-b md:border-b-0 md:border-r">
                        {/* SIP Amount */}
                        <div>
                            <div className="flex justify-between mb-2 text-sm font-semibold">
                                <label className="font-[Inter] font-bold text-[13px]  sm:text-[14px] leading-[150%]">Your Monthly SIP Amount (₹)</label>
                                <span className="text-right font-semibold px-4 py-2 bg-[#F9F9F9] border-b border-[#096FFA] text-sm">{sipAmount.toLocaleString()}</span>
                            </div>
                            <input
                                type="range"
                                min={1000}
                                max={100000}
                                step={5000}
                                value={sipAmount}
                                onChange={(e) => setSipAmount(Number(e.target.value))}
                                style={{
                                    WebkitAppearance: "none",
                                    width: "100%",
                                    height: "8px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    background: `linear-gradient(
          to right,
          #B1D2FF,
          #2C85FD ${((sipAmount - 1000) / (100000 - 1000)) * 100}%,
          #E5E7EB ${((sipAmount - 1000) / (100000 - 1000)) * 100}%
        )`,
                                }}
                            />
                        </div>

                        {/* SIP Duration */}
                        <div>
                            <div className="flex justify-between mb-2 text-sm font-semibold">
                                <label className="font-[Inter] font-bold text-[13px]  sm:text-[14px] leading-[150%]">SIP Duration (Years)</label>
                                <span className="text-right font-semibold px-4 py-2 bg-[#F9F9F9] border-b border-[#096FFA] text-sm">{sipDuration}</span>
                            </div>
                            <input
                                type="range"
                                min={5}
                                max={20}
                                step={0.5}
                                value={sipDuration}
                                onChange={(e) => setSipDuration(Number(e.target.value))}
                                style={{
                                    WebkitAppearance: "none",
                                    width: "100%",
                                    height: "8px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    background: `linear-gradient(
          to right,
          #B1D2FF,
          #2C85FD ${((sipDuration - 5) / (20 - 5)) * 100}%,
          #E5E7EB ${((sipDuration - 5) / (20 - 5)) * 100}%
        )`,
                                }}
                            />
                        </div>

                        {/* Rate of Return */}
                        <div>
                            <div className="flex justify-between mb-2 text-sm font-semibold">
                                <label className="font-[Inter] font-bold text-[13px]  sm:text-[14px] leading-[150%]">Expected Rate of Return (% p.a.)</label>
                                <span className="text-right font-semibold px-4 py-2 bg-[#F9F9F9] border-b border-[#096FFA] text-sm">{sipReturn}%</span>
                            </div>
                            <input
                                type="range"
                                min={5}
                                max={20}
                                step={0.5}
                                value={sipReturn}
                                onChange={(e) => setSipReturn(Number(e.target.value))}
                                style={{
                                    WebkitAppearance: "none",
                                    width: "100%",
                                    height: "8px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    background: `linear-gradient(
          to right,
          #B1D2FF,
          #2C85FD ${((sipReturn - 5) / (20 - 5)) * 100}%,
          #E5E7EB ${((sipReturn - 5) / (20 - 5)) * 100}%
        )`,
                                }}
                            />
                        </div>
                    </div>


                    {/* Results & Doughnut */}
                    <div className="flex flex-col items-center">
                        {/* Chart container */}
                        <div className="w-[220px] h-[200px] sm:w-[260px] sm:h-[220px] md:w-[300px] md:h-[240px] lg:w-[300px] lg:h-[200px]">
                            <Doughnut
                                data={doughnutData}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    cutout: 180,
                                    rotation: -90,
                                    circumference: 180,
                                    plugins: { legend: { display: false } },
                                }}
                            />
                        </div>

                        {/* Stats section */}
                        <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start w-full text-center gap-6 lg:gap-4 mt-6">
                            {/* Left: Total SIP */}
                            <div>
                                <p className="text-xs font-merriweather text-[#444444] mb-2 font-normal leading-[100%]">
                                    Total SIP Amount Invested
                                </p>
                                <div className="border py-3 px-4 rounded border-[3px] border-[#098941]">
                                    <p className="font-bold text-[#333333]">
                                        Rs. {totalSipInvestment.toLocaleString()}
                                    </p>
                                </div>
                            </div>

                            {/* Middle: Future Value */}
                            <div>
                                <p className="text-[12px] mt-2 font-merriweather text-[#444444] mb-1 font-normal leading-[100%]">
                                    Total Future Value
                                </p>
                                <p className="text-[10px] font-merriweather text-[#444444] mb-2 font-normal leading-[100%]">
                                    (SIP Investment Amount + Growth)
                                </p>
                                <img src={line} className="hidden lg:block w-full h-[60px]" />
                                <div className="border py-3 px-4 mt-3  sm:w-full bg-[#096FFA] rounded">
                                    <p className="font-bold text-white">
                                        Rs. {totalFutureValue.toLocaleString()}
                                    </p>
                                </div>
                            </div>

                            {/* Right: Growth */}
                            <div>
                                <p className="text-xs font-merriweather text-[#444444] mb-2 font-normal leading-[100%]">
                                    Total Growth
                                </p>
                                <div className="border py-3 px-4 border-[3px] rounded border-[#FFA901]">
                                    <p className="font-bold text-[#333333]">
                                        Rs. {growth.toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div>
                    <h2 className="text-center mb-4 font-bold mt-6 font-[Arial] text-[16px] leading-[19px] tracking-[1px] align-middle">
                        Systematic Investment Plan (SIP) Growth Chart
                    </h2>


                    <div
                        className="
      w-[280px]       /* Mobile: <640px */
      sm:w-[480px] /* Small screens: 640px - 768px */
      md:w-[600px] /* Medium screens: 768px - 1024px */
      lg:w-[900px]   /* Large screens: 1024px - 1280px */
      xl:w-[1200px]  /* Extra large screens: 1280px+ */
      mx-auto
    "
                    >
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={chartOptions}
                        />
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
                            About Systematic Investment Plan Calculator
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

export default SIPCalculator
