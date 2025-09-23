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

function AssetAllocation() {

    const [openIndex, setOpenIndex] = useState(null);
    const [horizonAge, setHorizonAge] = useState(45); // 21-60
    const [risk, setRisk] = useState(3); // 1-5
    const [years, setYears] = useState(3); // 1-4
    const [frequency, setFrequency] = useState("half-yearly");

    const equityWeight = useMemo(() => {
        return Math.min(60, risk * 10 + years * 5); // 20–60%
    }, [risk, years]);

    const debtWeight = useMemo(() => {
        return 100 - equityWeight; // remaining %
    }, [equityWeight]);

    // Break into sub-allocations (dummy splits)
    const seriesData = [
        { name: "Large Cap", data: [equityWeight * 0.3, 0], color: "#FFDB65" },
        { name: "Mid cap/ Small cap", data: [equityWeight * 0.7, 0], color: "#EE9D00" },
        { name: "Long term fixed income", data: [0, debtWeight * 0.3], color: "#9DD4AF" },
        { name: "Cash/ Bank FD/ Liquid", data: [0, debtWeight * 0.4], color: "#00AB4B" },
        { name: "FMPS and Debt Fund", data: [0, debtWeight * 0.3], color: "#00632B" }
    ];
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const chartOptions = {
        chart: {
            type: "column",
            height: 300,
            events: {
                render: function () {
                    const chart = this;
                    const xAxis = chart.xAxis[0];
                    const yAxis = chart.yAxis[0];

                    if (chart.customElements) chart.customElements.forEach(el => el.destroy());
                    chart.customElements = [];

                    if (isMobile) return; // Skip background on mobile

                    chart.series[0].data.forEach((_, i) => {
                        let total = 0;
                        chart.series.forEach(s => { total += s.data[i]?.y || 0; });
                        if (!total) return;

                        const barTopY = yAxis.toPixels(total);
                        const barBottomY = yAxis.toPixels(0);
                        const barHeight = barBottomY - barTopY;

                        const point = chart.series[0].data[i];
                        let barWidth = point.shapeArgs ? point.shapeArgs.width : 40;
                        const bgExtraWidth = 15;
                        const extraHeight = 10;

                        const bgY = Math.max(barTopY - extraHeight, 0);
                        const bgHeight = Math.min(barHeight + extraHeight * 2, yAxis.toPixels(0) - bgY);

                        // Background rectangle
                        const bg = chart.renderer
                            .rect(
                                xAxis.toPixels(i) - (barWidth + bgExtraWidth) / 2,
                                bgY,
                                barWidth + bgExtraWidth,
                                bgHeight,
                                6
                            )
                            .attr({ fill: '#F7F7F7', zIndex: 0 })
                            .add();
                        chart.customElements.push(bg);

                        // Total label on top
                        const totalLabel = chart.renderer
                            .text(
                                total + '%',
                                xAxis.toPixels(i),
                                bgY - 5 // 5px above the background
                            )
                            .attr({
                                align: 'center',
                                zIndex: 1
                            })
                            .css({
                                fontSize: '12px',
                                fontWeight: '600',
                                color: '#000'
                            })
                            .add();
                        chart.customElements.push(totalLabel);
                    });

                }
            },
        },
        title: { text: null },
        xAxis: { categories: ["Equity", "Debt"] },
        yAxis: { min: 0, max: 100, title: null, labels: { format: "{value}%" } },
        legend: { reversed: true, align: "center", verticalAlign: "bottom" },
        plotOptions: {
            series: {
                stacking: "normal",
                borderRadius: 8
            }
        },
        series: seriesData,
        credits: { enabled: false },
        responsive: {
            rules: [
                {
                    condition: { maxWidth: 768 },
                    chartOptions: {
                        chart: { height: 250 },
                        plotOptions: { series: { borderRadius: 4 } },
                        xAxis: { labels: { style: { fontSize: "12px" } } },
                        yAxis: { labels: { style: { fontSize: "12px" } } }
                    }
                }
            ]
        }
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
                            className="w-full pb-1 pr-10 pl-3 
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
                        Asset Allocation
                    </h1>
                    <p className="font-[Arial] text-[12px] sm:text-[14px] leading-[150%] tracking-[0.5px] text-gray-700 max-w-5xl">
                        Asset Allocation Calculator, Asset Allocation Tool helps investment in Asset Allocation Fund and decide Asset Allocation Startegies.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <img src={messageicon} alt="share" className="w-8 h-8" />
                    <img src={downloadicon} alt="download" className="w-8 h-8" />
                </div>
            </div>

            <div className="bg-white mx-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 p-6 md:p-10 mx-4 sm:mx-8 md:mx-12 mt-6">

                    {/* ---------------- LEFT INPUT SECTION ---------------- */}
                    <div className="space-y-10 md:pr-8 md:border-r">
                        {/* Investment Horizon Age */}
                        <div>
                            <p className="font-semibold mb-2">Your investment Horizon (Years)</p>
                            <input
                                type="range"
                                min={1}
                                max={4}
                                step={1}
                                value={horizonAge}
                                onChange={(e) => setHorizonAge(Number(e.target.value))}
                                style={{
                                    WebkitAppearance: "none",
                                    width: "100%",
                                    height: "8px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    background: `linear-gradient(
          to right,
          #B1D2FF,
          #2C85FD ${(horizonAge - 1) / (4 - 1) * 100}%,
          #E5E7EB ${(horizonAge - 1) / (4 - 1) * 100}%
        )`,
                                }}
                            />
                            <div className="flex justify-between text-xs mt-1">
                                {["21-30", "31-45", "45-60", ">60 years"].map((label, index) => (
                                    <span
                                        key={label}
                                        className={`${horizonAge === index + 1
                                            ? "text-[#096FFA] font-bold"
                                            : "text-gray-600 font-normal"
                                            }`}
                                    >
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Risk Level */}
                        <div>
                            <p className="font-semibold mb-2">Your investment Horizon (Risk)</p>
                            <input
                                type="range"
                                min={1}
                                max={5}
                                step={1}
                                value={risk}
                                onChange={(e) => setRisk(Number(e.target.value))}
                                style={{
                                    WebkitAppearance: "none",
                                    width: "100%",
                                    height: "8px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    background: `linear-gradient(
          to right,
          #B1D2FF,
          #2C85FD ${(risk - 1) / (5 - 1) * 100}%,
          #E5E7EB ${(risk - 1) / (5 - 1) * 100}%
        )`,
                                }}
                            />
                            <div className="flex justify-between text-xs mt-1">
                                {["Very Low", "Low", "Medium", "High", "Very High"].map((label, index) => (
                                    <span
                                        key={label}
                                        className={`${risk === index + 1
                                            ? "text-[#096FFA] font-bold"
                                            : "text-gray-600 font-normal"
                                            }`}
                                    >
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Investment Duration */}
                        <div>
                            <p className="font-semibold mb-2">Your investment Horizon (Years)</p>
                            <input
                                type="range"
                                min={1}
                                max={4}
                                step={1}
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                style={{
                                    WebkitAppearance: "none",
                                    width: "100%",
                                    height: "8px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    background: `linear-gradient(
          to right,
          #B1D2FF,
          #2C85FD ${(years - 1) / (4 - 1) * 100}%,
          #E5E7EB ${(years - 1) / (4 - 1) * 100}%
        )`,
                                }}
                            />
                            <div className="flex justify-between text-xs mt-1">
                                {["<2 years", "2-5 years", "5-10 years", ">10 years"].map(
                                    (label, index) => (
                                        <span
                                            key={label}
                                            className={`${years === index + 1
                                                ? "text-[#096FFA] font-bold"
                                                : "text-gray-600 font-normal"
                                                }`}
                                        >
                                            {label}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Awareness / Compounding */}
                        <div>
                            <p className="font-semibold mb-2">
                                Do you know that mid &amp; small caps generate better return in long term?
                            </p>

                            <div className="mt-4">
                                <input
                                    type="range"
                                    min={1}
                                    max={3}
                                    step={1}
                                    value={frequency}
                                    onChange={(e) => setFrequency(Number(e.target.value))}
                                    style={{
                                        WebkitAppearance: "none",
                                        width: "100%",
                                        height: "8px",
                                        borderRadius: "8px",
                                        cursor: "pointer",
                                        background: `linear-gradient(
            to right,
            #B1D2FF,
            #2C85FD ${(frequency - 1) / (3 - 1) * 100}%,
            #E5E7EB ${(frequency - 1) / (3 - 1) * 100}%
          )`,
                                    }}
                                />

                                <div className="flex justify-between text-xs font-medium mt-2">
                                    {["Yearly", "Half Yearly", "Monthly"].map((label, index) => (
                                        <span
                                            key={label}
                                            className={`${frequency === index + 1
                                                ? "text-[#096FFA] font-bold"
                                                : "text-gray-600 font-normal"
                                                }`}
                                        >
                                            {label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* ---------------- RIGHT RESULT SECTION ---------------- */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[220px] sm:w-[260px] md:w-[300px] xl:w-[600px]">
                            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                        </div>
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

export default AssetAllocation
