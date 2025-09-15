import React from 'react'
import Header from '../Header'
import Breadcrumbs from '../Breadcrumbs'
import { Search } from 'lucide-react'
import Footer from '../Footer'
import FundNewsPagination from './FundNewsPagination'

function FundNews() {
  return (
     <div className="min-h-screen bg-[#f8f9f9]">
            {/* Breadcrumbs + Search */}
            <Header />
            <div className="grid grid-cols-6 items-center gap-4 px-12 py-6 ">
                {/* Left side: Breadcrumbs */}
                <div className="col-span-3 sm:col-span-3 md:col-span-2">
                    <Breadcrumbs />
                </div>

                {/* Right side: Input */}
                <div className="col-span-3 sm:col-span-3 md:col-span-2 md:col-start-5 flex justify-end">
                    <div className="relative w-full sm:w-[200px] md:w-[254px]">
                        <input
                            type="text"
                            placeholder="Search a keyword"
                            className="w-full h-[34px] pr-10 pl-3 
                   border border-gray-300 bg-white text-gray-800 rounded-[12px]
                   placeholder:font-bold placeholder:text-[11px] placeholder:text-[#4A4A4A] 
                   placeholder:leading-[100%] placeholder:tracking-[0.01em] 
                   placeholder:font-[Arial] 
                   focus:border-blue-500 outline-none"
                        />
                        {/* Lucide Search Icon */}
                        <Search
                            size={16}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1D1D1D]"
                        />
                    </div>

                </div>

            </div>
            <div className="w-[full] h-[1px] bg-[#111111] mb-6 mx-12"></div>
                <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Articles */}

                <div className="lg:col-span-7 space-y-6">
                    <FundNewsPagination />

                </div>

                {/* Right: Sidebar */}
                <div className=" lg:col-span-5 lg:mr-4"></div>
                </div>
        
         <Footer/>
    </div>
  )
}

export default FundNews