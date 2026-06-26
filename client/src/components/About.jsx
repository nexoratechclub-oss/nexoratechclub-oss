import about from "../assets/about/about.avif"

function About() {
    return (
        <section id='about-us' className='w-full px-12 md:px-12 py-20'>
            <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
                <div className='flex-1 space-y-6'>
                    <h1 className='text-3xl md:text-5xl font-bold leading-tight'>
                        About <span className='text-[#FBBD0C]'>NEXORA</span>,
                        <br />
                        Techies Community
                    </h1>
                    <p className='text-gray-500 max-w-lg'>
                        We are a vibrant community of tech enthusiasts, developers, and innovators dedicated to fostering collaboration, learning, and growth in the world of technology. At NEXORA, we believe in the power of connection and shared knowledge to drive innovation and create a supportive environment for all members. Whether you're a seasoned professional or just starting your tech journey, NEXORA is the place to connect, learn, and grow together.
                    </p>
                    <button className="group relative inline-flex items-center cursor-pointer">
                        <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#FBBD0C] transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="relative inline-flex items-center gap-2 border-2 border-current px-6 py-3 font-semibold tracking-wide uppercase">
                            Explore
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
                        src={about}
                        alt="about"
                        className='w-full max-w-md md:max-w-lg'
                    />
                </div>
            </div>
        </section>
    )
}

export default About