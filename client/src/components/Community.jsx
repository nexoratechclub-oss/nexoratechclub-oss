import CommunityCard from '../utils/CommunityCard';
import community from "../assets/main/community.avif";

function Community() {
    return (
        <section className='w-full px-12 md:px-12 py-20'>
            <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
                <div className='flex-1 space-y-6'>
                    <h1 className='text-3xl md:text-5xl font-bold leading-tight'>
                        Our <span className='text-[#FBBD0C]'>Communities</span>
                    </h1>
                    <p className='text-gray-500 max-w-lg'>
                        Nexora is building a space where students, developers, and tech
                        enthusiasts can connect, learn from one another, collaborate on
                        ideas, and grow together.
                    </p>
                    <div className="flex flex-wrap gap-10 pt-4">
                        <div>
                            <h2 className="text-xl font-bold text-[#FBBD0C]">Students</h2>
                            <p className="text-base-content/60 text-sm">Learn Together</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#FBBD0C]">Developers</h2>
                            <p className="text-base-content/60 text-sm">Build Together</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#FBBD0C]">Mentors</h2>
                            <p className="text-base-content/60 text-sm">Guide Together</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#FBBD0C]">Community</h2>
                            <p className="text-base-content/60 text-sm">Grow Together</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex justify-center'>
                    <img
                        src={community}
                        alt="community"
                        className='w-full max-w-md md:max-w-lg'
                    />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16'>
                <CommunityCard
                    title="Frontend Developers"
                    desc="Build modern UI using React, Tailwind and animations"
                />
                <CommunityCard
                    title="Backend Developers"
                    desc="Build APIs, servers and scalable systems"
                />
                <CommunityCard
                    title="AI & Data Science"
                    desc="Explore machine learning and AI innovation"
                />
                <CommunityCard
                    title="Open Source"
                    desc="Contribute to real world open source projects"
                />
            </div>
        </section>
    )
}

export default Community