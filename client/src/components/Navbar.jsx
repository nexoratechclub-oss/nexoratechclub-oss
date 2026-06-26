import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <section className='w-full px-5 py-4 flex justify-between items-center relative '>
            <div className='text-[#F7C42F] font-bold font-mono text-2xl cursor-alias'>
                NEXORA
            </div>
            <div className='hidden md:flex justify-end items-center gap-8 font-mono'>
                <a href="#about-us"><span className='cursor-pointer hover:text-[#F7C42F] transition'>About us</span></a>
                <a href="#events"><span className='cursor-pointer hover:text-[#F7C42F] transition'>Events</span></a>
                <a href="#resources"><span className='cursor-pointer hover:text-[#F7C42F] transition'>Resources</span></a>
                <a href="#who's"><span className='cursor-pointer hover:text-[#F7C42F] transition'>Who's</span></a>
                <button className="group relative inline-flex items-center cursor-pointer"
                    onClick={() => navigate("/join-us")}>
                    <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#FBBD0C] transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="relative inline-flex items-center gap-2 border-2 border-current px-6 py-2 font-semibold tracking-wide uppercase">
                        Apply To Join
                        <span className="-translate-x-1.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                            <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>
                    </span>
                </button>
            </div>
            <div
                className='md:hidden cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </div>
            {
                isOpen && (
                    <div className='absolute top-16 left-0 w-full bg-base-100 shadow-lg flex flex-col items-center gap-5 py-6 font-mono md:hidden z-50'>
                        <a href="#about-us"><span className='cursor-pointer'>About us</span></a>
                        <a href="#events"><span className='cursor-pointer'>Events</span></a>
                        <a href="#resources"><span className='cursor-pointer'>Resources</span></a>
                        <a href="#who's"><span className='cursor-pointer'>Who's</span></a>
                        <button className="group relative inline-flex items-center cursor-pointer"
                            onClick={() => navigate("/join-us")}>
                            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#FBBD0C] transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="relative inline-flex items-center gap-2 border-2 border-current px-6 py-2 font-semibold tracking-wide uppercase">
                                Apply To Join
                                <span className="-translate-x-1.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                    <svg
                                        className="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </span>
                            </span>
                        </button>
                    </div>
                )
            }
        </section>
    )
}

export default Navbar