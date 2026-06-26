function Resources() {
    return (
        <section id="resources">
            <div className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Learning <span className="text-[#FBBD0C]">Resources</span>
                        </h2>
                        <p className="text-base-content/70 max-w-lg">
                            We're building a powerful resource hub including curated roadmaps,
                            interview prep, coding sheets, and developer toolkits to help you
                            grow faster.
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="px-4 py-2 text-sm font-semibold border-2 border-[#FBBD0C]">
                                Coming Soon
                            </span>
                            <div className="flex gap-2">
                                <span className="w-2 h-2 bg-[#FBBD0C] rounded-full animate-pulse"></span>
                                <span className="w-2 h-2 bg-[#FBBD0C] rounded-full animate-pulse delay-150"></span>
                                <span className="w-2 h-2 bg-[#FBBD0C] rounded-full animate-pulse delay-300"></span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="border-2 border-base-content/20 p-8 space-y-6">
                            <h3 className="text-xl font-semibold">
                                Resources Hub Launching Soon
                            </h3>
                            <ul className="space-y-3 text-base-content/70">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#FBBD0C]"></span>
                                    DSA Roadmaps
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#FBBD0C]"></span>
                                    Interview Preparation
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#FBBD0C]"></span>
                                    Developer Cheat Sheets
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#FBBD0C]"></span>
                                    Project Ideas
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#FBBD0C]"></span>
                                    Learning Playlists
                                </li>
                            </ul>
                            <button className="group relative inline-flex items-center cursor-not-allowed opacity-80">
                                <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#FBBD0C]"></span>
                                <span className="relative inline-flex items-center gap-2 border-2 border-current px-6 py-2 font-semibold uppercase">
                                    Coming Soon
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resources;