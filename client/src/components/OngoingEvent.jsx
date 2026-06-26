function OngoingEvent() {
    return (
        <section id='events'>
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="group bg-[#F7C42F] transition-all duration-300 hover:bg-transparent border-2 border-[#F7C42F] p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center">
                            <h2 className="text-2xl font-bold text-white group-hover:text-base-content md:text-3xl">
                                Ongoing Tech Events & Workshops
                            </h2>
                            <p className="hidden text-white/90 group-hover:text-base-content sm:mt-4 sm:block">
                                Join our live coding sessions, hackathons, and community
                                workshops designed to help you learn faster and build
                                real-world projects with industry mentors.
                            </p>
                            <div className="mt-8">
                                <button className="group/btn relative inline-flex items-center cursor-pointer">
                                    <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#FBBD0C] transition-transform duration-300 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0"></span>
                                    <span className="relative inline-flex items-center gap-2 border-2 border-current px-6 py-2 font-semibold tracking-wide uppercase">
                                        Explore
                                        <span className="-translate-x-1.5 opacity-0 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
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
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                        <img
                            alt="event"
                            src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f"
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                        />
                        <img
                            alt="event"
                            src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8"
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OngoingEvent