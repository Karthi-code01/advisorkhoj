import React from "react";
import youtube from "../assets/Images/Vector (6).png";
import twitter from "../assets/Images/Vector (7).png";
import linkedin from "../assets/Images/Vector (8).png";
import facebook from "../assets/Images/Vector (9).png";
import whatsapp from "../assets/Images/ic_round-whatsapp.png"
import email from "../assets/Images/ic_outline-email.png"
import fullStar from "../assets/Images/fullstar.png"
import halfStar from "../assets/Images/noto_star.png"
import googleLogo from "../assets/Images/Group 46.png"
import arrow from "../assets/Images/Icon.png"
import brand1 from "../assets/Images/ba54b87a00f0ca702bcc03ebbac1bb74ec8d941d.png";
import brand2 from "../assets/Images/90393d78ceda1c1af1530fd6fa4a85f11c95226b.jpg";
import brand3 from "../assets/Images/4945e85c4b05341f9f57272e2117814c25ee3458.png";
import brand4 from "../assets/Images/c097f8caef30a358bb62300f1d9a79643025b68b.png";
import brand5 from "../assets/Images/6805b5825f219d1fc614e6c3cf97fd8ade2c9e7c.jpg";
import brand6 from "../assets/Images/a7543c32da9b90c37b71b290b3e64d8ab7be2dfd.png";

const Footer = () => {

  const brands = [
    { name: "Bandhan Mutual Fund", logo: brand1 },
    { name: "IIFL Mutual Fund", logo: brand2 },
    { name: "LIC Mutual Fund", logo: brand3 },
    { name: "Nippon India Mutual Fund", logo: brand4 },
    { name: "Mirae Asset Mutual Fund", logo: brand5 },
    { name: "HSBC Asset Management", logo: brand6 },
  ];
  return (
    <>
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
        <div className="flex flex-wrap items-center justify-center ps-4 md:justify-between gap-4 md:gap-6 py-6 lg:h-[125px] md:py-8 bg-[#F8F9F9]">
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
      <footer className="bg-[#0C1519] text-white pt-12 ">
        <div >
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 ">
            {/* Left Section (7/12) */}
            <div className="lg:col-span-7 space-y-8  ">
              <h3 className="font-merriweather font-bold text-[16px] leading-[22px] ms-12">
                AdvisorKhoj
              </h3>
              <div className="w-full h-[1px] bg-[#24282D] mb-6"></div>
              <div className=" border-r border-[#24282D] px-12">
                <div>
                  <h4 className="font-merriweather font-bold text-[16px] leading-[22px] align-middle mb-2">
                    AMCs
                  </h4>
                  <p className="text-sm text-[#8D9BAE] leading-6">
                    360 ONE | Aditya Birla Sun Life | Axis | Bajaj | Finserv | Bandhan | Bank of India |
                    Baroda | BNP | Paribas | Canara | Robeco | DSP | Edelweiss | Franklin | Templeton |
                    Groww | HDFC | HSBC | ICICI | Prudential | Invesco | ITI | JM Financial | Kotak Mahindra |
                    LIC | Mahindra | Manulife | Mirae Asset | Motilal Oswal | Navi | Nippon India | NJ | PGIM India |
                    PPFAS | Quant | Quantum | Samco | SBI | Shriram Sundaram | Tata | Taurus | TRUST | Union | UTI |
                    WhiteOak Capital
                  </p>

                  <h4 className="font-merriweather font-bold text-[16px] leading-[22px] align-middle mb-2 mt-4">
                    Top Searched Mutual Funds
                  </h4>
                  <p className="text-sm text-[#8D9BAE] leading-6">
                    SBI Small Cap Fund | Nippon India Small Cap Fund | SBI Bluechip Fund | Axis Bluechip Fund |
                    Axis Long Term Equity Fund | SBI Focused Equity Fund | HDFC Mid-Cap Opportunities Fund |
                    Axis Midcap Fund | SBI Contra Fund | HDFC Flexi Cap Fund | Nippon India Growth Fund |
                    Axis Focused 25 Fund | ICICI Prudential Technology Fund | SBI Magnum Midcap Fund |
                    SBI Technology Opportunities Fund | HDFC Top 100 Fund | ICICI Prudential Bluechip Fund |
                    CPSE ETF | SBI Flexicap Fund | Motilal Oswal NASDAQ 100 ETF | Nippon India Multi Cap Fund |
                    SBI Long Term Equity Fund | DSP Tax Saver Fund | SBI Magnum Global Fund
                  </p>
                </div>

                <div>
                  <h4 className="font-merriweather font-bold text-[16px] leading-[22px] align-middle pt-4 mb-2">
                    Popular Research Tools
                  </h4>
                  <p className="text-sm text-[#8D9BAE] leading-6 pb-4">
                    Top Performing Mutual Funds | Mutual Fund Annual Returns | Benchmark Return |
                    Top Performing Mutual Funds | Mutual Fund Annual Returns | Benchmark Return |
                    Top Performing Mutual Funds | Mutual Fund Annual Returns | Benchmark Return
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section (5/12) */}
            <div className="lg:col-span-5 ">
              {/* Social Icons */}
              <div className="flex items-center space-x-4 mb-8">
                <span className="font-merriweather font-bold text-[16px] leading-[22px] px-8">
                  Follow Us
                </span>
                <img src={youtube} alt="YouTube" className="w-[22px] h-[14.63px]" />
                <img src={twitter} alt="Twitter" className="w-[18px] h-[15.25px]" />
                <img src={linkedin} alt="LinkedIn" className="w-[18px] h-[18.81px]" />
                <img src={facebook} alt="Facebook" className="w-[18px] h-[18.81px]" />
              </div>

              {/* Button */}
              <button className="bg-[#FFA901] text-white font-merriweather font-bold text-[16px] leading-[22px] h-[60px] w-full mb-6 flex items-center justify-start px-8 gap-2">
                Find an Advisor
                <img src={arrow} alt="Arrow" className="w-4 h-4" />
              </button>



              {/* Contact */}
              <div className="px-8">
                <h4 className="font-merriweather font-bold text-[16px] leading-[22px] align-middle mb-3">
                  Contact Us
                </h4>

                <p className="text-sm text-[#8D9BAE] mb-1">
                  3rd floor, JK Towers, 719/A, 53-2, 46th Cross Rd, 8th Block,
                </p>
                <p className="text-sm text-[#8D9BAE] mb-1">
                  Jayanagar, Bengaluru, Karnataka 560082
                </p>
                <p className="text-sm text-[#8D9BAE]">Phone: 099005 11400</p>
              </div>

              <div className="m-6 flex flex-col sm:flex-row gap-2 px-3  ">
                <button className="flex items-center gap-2 bg-[#48C857] text-white px-2 py-2 rounded text-[11px] leading-[12px] tracking-[0.65px] font-bold font-[Arial]">
                  <img src={whatsapp} alt="WhatsApp" className="w-[18px] h-[18px]" />
                  WhatsApp Us
                </button>

                <button className="flex items-center gap-2 bg-[#096FFA] text-white px-2 py-2 rounded text-[11px] leading-[12px] tracking-[0.65px] font-bold font-[Arial]">
                  <img src={email} alt="Email" className="w-[18px] h-[18px]" />
                  Email Us
                </button>
              </div>

              {/* Subscribe */}
              <h4 className="font-merriweather font-bold text-[16px] leading-[22px] align-middle  mt-8 mb-2 px-8 pt-8 border-t border-[#24282D]">
                Investing Ideas in your email
              </h4>
              <div className="flex flex-col sm:flex-row mb-4 py-3 px-4 sm:px-8">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full sm:w-[240px] h-[34px] border border-gray-300 rounded-[2px] px-[12px] sm:px-[15px] py-[8px] sm:py-[10px] text-gray-800
    placeholder:text-gray-400 placeholder:text-[12px] placeholder:font-light placeholder:leading-[100%] placeholder:font-inter"
                />

                <button
                  className="bg-[#096FFA] text-white px-4 py-2 sm:ms-2 mt-3 sm:mt-0 rounded hover:bg-blue-700 
    text-[11px] leading-[12px] tracking-[0.65px] font-bold font-[Arial] w-full sm:w-auto"
                >
                  Subscribe Now
                </button>
              </div>



            </div>
          </div>

          {/* Bottom Links */}
          <div className="grid grid-cols-1 md:grid-cols-12 text-sm text-gray-300 border-t border-[#24282D]">
            {/* Left Section (col-span-7) */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {/* Column 1 */}
              <div className="px-6 py-6 ms-6">
                <h5 className="font-merriweather font-bold text-[16px]  leading-[22px] mb-4">Quick Links</h5>
                <div className="space-y-2 text-[#8D9BAE]">
                  <div>Track your Investments</div>
                  <div>My Watchlist</div>
                  <div>My Subscriptions</div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="px-6 py-6">
                <h5 className="font-merriweather font-bold text-[16px] leading-[22px] mb-4">Resources</h5>
                <div className="space-y-2 text-[#8D9BAE]">
                  <div>Mutual Fund (AMC) offices</div>
                  <div>R & T (MF) Agent offices</div>
                  <div>Life Insurance Office</div>
                  <div>General Insurance Office</div>
                  <div>Glossary</div>
                  <div>Form Download</div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="px-6 py-6 lg:border-l border-[#24282D]">
                <h5 className="font-merriweather font-bold text-[16px] leading-[22px] mb-4">Our Offerings</h5>
                <div className="space-y-2 text-[#8D9BAE]">
                  <div>Mutual Fund Research</div>
                  <div>Tools and Calculators</div>
                  <div>Articles</div>
                  <div>Interviews</div>
                  <div>News</div>
                  <div>Post your Queries</div>
                </div>
              </div>

              {/* Column 4 */}
              <div className="px-6 py-6 border-r border-[#24282D]">
                <div className="space-y-2 text-[#8D9BAE] pt-8">
                  <div>Blogs</div>
                  <div>Latest Announcements</div>
                  <div>Term-of-the-week</div>
                  <div>Refund Policies</div>
                  <div>Distributor Search</div>
                </div>
              </div>
            </div>


            {/* Right Section (col-span-5) */}
            <div className="md:col-span-5 grid grid-cols-1 md:grid-cols-2">
              <div className="px-6 py-6 border-r border-[#24282D]">
                <h5 className="font-merriweather font-bold text-[16px] leading-[22px] align-middle mb-4">
                  About Us
                </h5>

                <div className="flex gap-8 text-[#8D9BAE]">
                  <div className="space-y-2">
                    <div>About Us</div>
                    <div>Contact Us</div>
                    <div>Meet our Team</div>
                    <div>Careers</div>
                    <div>Newsletters</div>
                    <div>Did You Know</div>
                  </div>

                  <div className="space-y-2">
                    <div>Privacy policy</div>
                    <div>Disclaimer</div>
                    <div>Terms of use</div>
                    <div>Investors FAQ</div>
                    <div>Distributor FAQ</div>
                    <div>Advertise with us</div>
                  </div>
                </div>
              </div>


              <div className="px-6 py-6 flex flex-col items-center">
                <img src={googleLogo} alt="Google" className="w-[96px] h-[32px] mb-6" />

                {/* Rating Count */}
                <p className="text-[14px] mb-1">Google rating (204)</p>

                {/* Rating Value */}
                <p className="text-[20px] font-bold text-yellow-400 mb-2">4.6</p>

                {/* Stars */}
                <div className="flex gap-1">
                  <img src={fullStar} alt="star" className="w-[25px]" />
                  <img src={fullStar} alt="star" className="w-[25px]" />
                  <img src={fullStar} alt="star" className="w-[25px]" />
                  <img src={fullStar} alt="star" className="w-[25px]" />
                  <img src={halfStar} alt="half star" className="w-[25px]" />
                </div>
              </div>

            </div>
          </div>


          {/* Bottom Copyright */}
          <div className=" text-xs text-gray-400 border-t border-[#24282D] px-12 pb-6 pt-4">
            © 2023 Advisorkhoj - A Gamechanger Business Services (I) Pvt. Ltd. Brand - All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
