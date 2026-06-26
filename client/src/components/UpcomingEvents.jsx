import event1 from "../assets/events/up-event_1.avif";
import event2 from "../assets/events/up_event_2.avif";
import event3 from "../assets/events/up_event_3.avif";
import event4 from "../assets/events/up-event_4.avif";
import { useEffect, useRef, useState } from "react";

function UpcomingEvent() {

    const events = [
        {
            title: "React Bootcamp",
            date: "Coming Soon...",
            type: "Workshop",
            image: event1
        },
        {
            title: "Hackathon 2026",
            date: "Coming Soon...",
            type: "Hackathon",
            image: event2
        },
        {
            title: "DSA Sprint",
            date: "Coming Soon...",
            type: "Coding Event",
            image: event3
        },
        {
            title: "AI Builder Session",
            date: "Coming Soon...",
            type: "Live Session",
            image: event4
        }
    ];

    const scrollRef = useRef(null);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const checkScroll = () => {

        const el = scrollRef.current;

        if (!el) return;

        setShowLeft(el.scrollLeft > 10);

        setShowRight(
            el.scrollLeft + el.clientWidth < el.scrollWidth - 10
        );
    };

    const scroll = (direction) => {

        const el = scrollRef.current;

        if (!el) return;

        const scrollAmount = 300;

        el.scrollBy({
            left: direction === "left"
                ? -scrollAmount
                : scrollAmount,
            behavior: "smooth"
        });
    };

    useEffect(() => {

        checkScroll();

        const el = scrollRef.current;

        if (el) {
            el.addEventListener("scroll", checkScroll);
        }

        window.addEventListener("resize", checkScroll);

        return () => {

            if (el) {
                el.removeEventListener("scroll", checkScroll);
            }

            window.removeEventListener("resize", checkScroll);
        };

    }, []);

    return (
        <section id="upcoming-events">
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Upcoming <span className="text-[#FBBD0C]">Events</span>
                        </h2>
                        <p className="text-base-content/70 max-w-lg">
                            Stay ahead with our upcoming tech events, bootcamps,
                            and community meetups. Learn new technologies,
                            collaborate with developers, and grow your career.
                        </p>
                    </div>
                    <div className="relative">
                        {showLeft && (
                            <button
                                onClick={() => scroll("left")}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-base-300 bg-base-100/80 backdrop-blur-md flex items-center justify-center shadow-lg hover:border-[#FBBD0C] hover:text-[#FBBD0C] transition cursor-pointer"
                            >
                                ←
                            </button>
                        )}
                        {showRight && (
                            <button
                                onClick={() => scroll("right")}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-base-300 bg-base-100/80 backdrop-blur-md flex items-center justify-center shadow-lg hover:border-[#FBBD0C] hover:text-[#FBBD0C] transition cursor-pointer"
                            >
                                →
                            </button>
                        )}
                        <div
                            ref={scrollRef}
                            className="overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
                        >
                            <div className="flex gap-6 w-max pb-4">
                                {events.map((event, index) => (
                                    <div
                                        key={index}
                                        className="w-64 aspect-square border-2 border-base-300 hover:border-[#FBBD0C] transition-all duration-300 group cursor-pointer"
                                    >
                                        <div className="h-40 overflow-hidden">
                                            <img
                                                src={event.image}
                                                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                            />
                                        </div>
                                        <div className="p-4 space-y-2">
                                            <span className="text-xs font-semibold text-[#FBBD0C]">
                                                {event.type}
                                            </span>
                                            <h3 className="font-semibold text-lg">
                                                {event.title}
                                            </h3>
                                            <p className="text-sm text-base-content/60">
                                                {event.date}
                                            </p>
                                            <button className="mt-2 text-sm font-semibold hover:text-[#FBBD0C] transition cursor-pointer">
                                                View Details →
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UpcomingEvent;