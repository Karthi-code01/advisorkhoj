

import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import logo from "../assets/Images/logo.png";
import { Menu, Search, X } from "lucide-react"; // changed Menu → Home for icon (since Menu is already used as toggle)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-white">
      {/* Top Logo + Toggle */}
      <div className="bg-white py-4 lg:py-7 px-4 lg:px-6 flex items-center justify-between">
        <img
          src={logo}
          alt="advisorkhoj logo"
          className="w-24 lg:w-[191px] h-6 lg:h-[32px] object-contain"
        />
        <button onClick={toggleMenu} className="lg:hidden text-gray-600">
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`bg-[#163164] py-4 px-4 lg:px-6 ${
          isMenuOpen ? "block" : "hidden lg:block"
        }`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Left Menu */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
            <Link
              to="/"
              className="text-white hover:text-blue-200 py-2 lg:py-0 flex items-center text-sm lg:text-base"
            >
              <Menu className="w-4 h-4 mr-2" />
              Home
            </Link>
            {[
              { name: "MF Research", path: "/mf-research" },
              { name: "Articles", path: "/articles" },
              { name: "Services", path: "/services" },
              { name: "Mutual Funds", path: "/mutual-funds" },
              { name: "ETFs", path: "/etfs" },
              { name: "Calculators", path: "/calculators" },
              { name: "Interviews", path: "/interviews" },
              { name: "AMCs", path: "/amcs" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-blue-200 py-2 lg:py-0 text-sm lg:text-base"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Search className="text-white w-5 h-5 cursor-pointer" />
            <Link
              to="/login"
              className="bg-[#096FFA] text-white px-4 py-1 rounded hover:bg-blue-700 text-sm"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-[#FFA901] text-white px-4 py-1 rounded hover:bg-orange-600 text-sm"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

