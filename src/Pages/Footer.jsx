// Footer.jsx
import React from "react";
import { Youtube, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
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

          {/* Column 2 */}
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

          {/* Column 3 */}
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

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-4">Investing Ideas in your email</h4>
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

        {/* Bottom Links */}
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
  );
};

export default Footer;
