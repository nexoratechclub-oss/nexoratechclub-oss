import { useNavigate } from "react-router-dom";
import hero from "../assets/main/hero.avif";

function Main() {
    const navigate = useNavigate()

    return (
        <section className='w-full px-14 md:px-12 py-20'>
            <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
                <div className='flex-1 space-y-6'>
                    <h1 className='text-3xl md:text-5xl font-bold leading-tight'>
                        Empowering <span className='text-[#FBBD0C]'>Tech Innovators</span>,
                        <br />
                        Building the Future Together
                    </h1>
                    <p className='text-gray-500 max-w-lg'>
                        Join NEXORA's thriving tech community to learn, connect,
                        and create impactful solutions across development,
                        data science, and emerging technologies.
                    </p>
                    <button className="group relative inline-flex items-center cursor-pointer"
                        onClick={() => navigate("/join-us")}>
                        <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#FBBD0C] transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="relative inline-flex items-center gap-2 border-2 border-current px-6 py-3 font-semibold tracking-wide uppercase">
                            Join The Community
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
                <div className='flex-1 flex justify-center'>
                    <img
                        src={hero}
                        alt="hero"
                        className='w-full max-w-md md:max-w-lg'
                    />
                </div>
            </div>
            <div className='mt-20'>
                <h2 className='text-xl md:text-2xl font-semibold mb-8'>
                    Who's on <span className='text-[#FBBD0C]'>NEXORA</span>
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div>
                        <h3 className='font-semibold'>Learners</h3>
                        <p className='text-sm text-gray-500'>
                            Dive into community forums and competitions
                        </p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>Developers</h3>
                        <p className='text-sm text-gray-500'>
                            Build innovative projects and collaborate
                        </p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>Researchers</h3>
                        <p className='text-sm text-gray-500'>
                            Explore AI, data science and innovation
                        </p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>Creators</h3>
                        <p className='text-sm text-gray-500'>
                            Share knowledge and build community
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main