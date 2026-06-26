import Dev from "../assets/people/Dev.jpg";
import Shivaji from "../assets/people/Shivaji.jpg";


const avatars = [
    Dev,
    Shivaji,
];

const positions = [
    "top-0 left-6 md:left-10",
    "top-8 left-24 md:left-40",
    "top-0 right-6 md:right-16",
    "top-20 left-12 md:left-20",
    "top-20 right-2 md:right-8",
    "bottom-16 left-2 md:left-8",
    "bottom-10 left-20 md:left-32",
    "bottom-0 right-6 md:right-16",
    "bottom-12 right-20 md:right-32",
];

function CommunityShowcase() {
    return (
        <section id="who's" className="px-4 md:px-6 py-16">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border bg-base-100 p-6 md:p-10 shadow-sm">
                <div className="absolute right-0 top-0 h-16 w-16 md:h-28 md:w-28 bg-[#FBBD0C] rounded-bl-3xl opacity-90 z-0"></div>
                <div className="absolute bottom-0 right-0 h-14 w-14 md:h-24 md:w-24 bg-base-content rounded-tl-3xl opacity-90 z-0"></div>
                <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                            Who’s on{" "}
                            <span className="text-[#FBBD0C]">NEXORA</span>
                        </h2>
                        <p className="mt-4 text-base-content/60 max-w-md">
                            People on NEXORA come from different walks of life.
                            Students, learners, seasoned professionals and
                            executives all committed with one purpose —
                            learn, innovate and collaborate.
                        </p>
                    </div>
                    <div className="relative h-64 md:h-72">
                        {avatars.map((avatar, i) => (
                            <img
                                key={i}
                                src={avatar}
                                alt="community"
                                className={`absolute ${positions[i]} 
                w-24 h-24 md:w-36 md:h-36 
                rounded-full object-cover 
                border-4 border-base-100 
                shadow-md 
                transition-all duration-300 
                hover:scale-110 hover:-translate-y-1`}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default CommunityShowcase;