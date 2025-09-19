import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    // helper function to prettify names
    const formatName = (str) => {
        return str.replace(/-/g, " "); // replace dashes with spaces
    };

    return (
        <nav>
            <ol className="flex items-center">
                <li>
                    <Link
                        to="/"
                        className="font-['Inter'] font-bold text-[12px] leading-[16px] text-[#333333] hover:underline align-middle"
                    >
                        Home
                    </Link>
                </li>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    const displayName = formatName(name);

                    return (
                        <li key={routeTo} className="flex items-center">
                            <ChevronRight className="w-4 h-4 mt-1 text-gray-400" />
                            {isLast ? (
                                <span className="font-['Inter'] mt-1 font-normal text-[12px] leading-[16px] align-middle text-gray-900 capitalize">
                                    {displayName}
                                </span>
                            ) : (
                                <Link
                                    to={routeTo}
                                    className="font-['Inter'] mt-1 font-normal text-[12px] leading-[16px] align-middle text-gray-900 hover:underline capitalize"
                                >
                                    {displayName}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
