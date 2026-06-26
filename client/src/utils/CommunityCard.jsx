import { Code } from "lucide-react"

const CommunityCard = ({ title, desc }) => {
    return (
        <a href="#" className="group relative block h-64">
            <span className="absolute inset-0 border-2 border-dashed border-base-content"></span>
            <div className="relative flex h-full transform items-end border-2 border-base-content bg-base-100 transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="px-6 pb-6 transition-opacity group-hover:absolute group-hover:opacity-0">
                    <Code className="w-10 h-10 text-base-content" />
                    <h2 className="mt-4 text-xl font-semibold">
                        {title}
                    </h2>
                </div>
                <div className="absolute p-6 opacity-0 transition-opacity duration-300 group-hover:relative group-hover:opacity-100">
                    <h3 className="text-xl font-semibold">
                        {title}
                    </h3>
                    <p className="mt-4 text-sm text-gray-500">
                        {desc}
                    </p>
                    <p className="mt-8 font-semibold text-[#FBBD0C]">
                        Explore →
                    </p>
                </div>
            </div>
        </a>
    )
}

export default CommunityCard