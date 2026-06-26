import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ShieldCheck, User, BriefcaseBusiness } from "lucide-react";
const BASE_URL = import.meta.env.VITE_BASE_URL;

function JoinUs() {

    const [activeForm, setActiveForm] = useState("student");

    const [studentVerified, setStudentVerified] = useState(false);
    const [professionalVerified, setProfessionalVerified] = useState(false);

    const [studentOtp, setStudentOtp] = useState("");
    const [professionalOtp, setProfessionalOtp] = useState("");

    const [loadingOtp, setLoadingOtp] = useState(false);

    const [studentData, setStudentData] = useState({
        name: "",
        email: "",
        phone: "",
        college: "",
        city: "",
        domain: ""
    });

    const [professionalData, setProfessionalData] = useState({
        name: "",
        email: "",
        phone: "",
        organization: "",
        currentRole: "",
        city: "",
        domain: ""
    });

    const domains = [
        "Web Development",
        "Mobile App Development",
        "Data Science",
        "UI/UX Design",
        "Artificial Intelligence",
        "Machine Learning"
    ];

    const handleStudentChange = (e) => {
        setStudentData({
            ...studentData,
            [e.target.name]: e.target.value
        });
    };

    const handleProfessionalChange = (e) => {
        setProfessionalData({
            ...professionalData,
            [e.target.name]: e.target.value
        });
    };

    const sendOtp = async (email) => {

        if (!email) {
            toast.error("Enter Email First");
            return;
        }

        setLoadingOtp(true);

        const toastId = toast.loading("Sending OTP...");

        try {

            const response = await fetch(
                `${BASE_URL}/api/users/send-otp`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email })
                }
            );

            const data = await response.json();

            if (response.ok) {

                toast.success("OTP Sent Successfully", {
                    id: toastId
                });
            }

            else {

                toast.error(data.message || "Failed To Send OTP", {
                    id: toastId
                });
            }

        }

        catch (error) {

            toast.error("Server Error", {
                id: toastId
            });
        }

        finally {
            setLoadingOtp(false);
        }
    };

    const verifyOtp = async (email, otp, type) => {

        if (!otp) {
            toast.error("Enter OTP");
            return;
        }

        const toastId = toast.loading("Verifying OTP...");

        try {

            const response = await fetch(
                `${BASE_URL}/api/users/verify-otp`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        otp
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

                toast.success("OTP Verified Successfully", {
                    id: toastId
                });

                if (type === "student") {
                    setStudentVerified(true);
                }

                else {
                    setProfessionalVerified(true);
                }
            }

            else {

                toast.error(data.message || "Invalid OTP", {
                    id: toastId
                });
            }

        }

        catch (error) {

            toast.error("Server Error", {
                id: toastId
            });
        }
    };

    const submitStudentForm = async (e) => {

        e.preventDefault();

        const toastId = toast.loading("Submitting...");

        try {

            const response = await fetch(
                `${BASE_URL}/api/users/join-student`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(studentData)
                }
            );

            const data = await response.json();

            if (response.ok) {

                toast.success("Joined Successfully", {
                    id: toastId
                });

                setStudentData({
                    name: "",
                    email: "",
                    phone: "",
                    college: "",
                    city: "",
                    domain: ""
                });

                setStudentVerified(false);
                setStudentOtp("");
            }

            else {

                toast.error(data.message || "Submission Failed", {
                    id: toastId
                });
            }

        }

        catch (error) {

            toast.error("Server Error", {
                id: toastId
            });
        }
    };

    const submitProfessionalForm = async (e) => {

        e.preventDefault();

        const toastId = toast.loading("Submitting...");

        try {

            const response = await fetch(
                `${BASE_URL}/api/users/join-professional`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(professionalData)
                }
            );

            const data = await response.json();

            if (response.ok) {

                toast.success("Joined Successfully", {
                    id: toastId
                });

                setProfessionalData({
                    name: "",
                    email: "",
                    phone: "",
                    organization: "",
                    currentRole: "",
                    city: "",
                    domain: ""
                });

                setProfessionalVerified(false);
                setProfessionalOtp("");
            }

            else {

                toast.error(data.message || "Submission Failed", {
                    id: toastId
                });
            }

        }

        catch (error) {

            toast.error("Server Error", {
                id: toastId
            });
        }
    };

    return (
        <section
            id="join-us"
            className="max-w-6xl mx-auto px-4 py-24"
        >
            <Toaster position="top-right" />
            <div className="text-center mb-14">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Join <span className="text-[#FBBD0C]">NEXORA</span>
                </h2>
                <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
                    Collaborate with developers, students and professionals
                    through events, mentorship and real-world projects.
                </p>
            </div>
            <div className="flex justify-center mb-12">
                <div className="bg-base-200 p-2 rounded-2xl flex gap-2 border border-base-300">
                    <button
                        onClick={() => setActiveForm("student")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeForm === "student"
                            ? "bg-[#FBBD0C] text-black shadow-lg"
                            : "hover:bg-base-300"
                            }`}
                    >
                        <User size={18} />
                        Student
                    </button>
                    <button
                        onClick={() => setActiveForm("professional")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeForm === "professional"
                            ? "bg-[#FBBD0C] text-black shadow-lg"
                            : "hover:bg-base-300"
                            }`}
                    >
                        <BriefcaseBusiness size={18} />
                        Professional
                    </button>
                </div>
            </div>
            <div className="max-w-3xl mx-auto">
                <div className="border border-base-300 bg-base-100 rounded-[2rem] p-6 md:p-10 shadow-xl">
                    <div className="mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-[#FBBD0C]/20 flex items-center justify-center">
                                {
                                    activeForm === "student"
                                        ? <User className="text-[#FBBD0C]" />
                                        : <BriefcaseBusiness className="text-[#FBBD0C]" />
                                }
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">
                                    {
                                        activeForm === "student"
                                            ? "Student Registration"
                                            : "Professional Registration"
                                    }
                                </h3>
                                <p className="text-sm text-base-content/60 mt-1">
                                    {
                                        activeForm === "student"
                                            ? "Join workshops, hackathons and mentorship programs."
                                            : "Collaborate, mentor and grow with the community."
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    {
                        activeForm === "student" && (
                            <form
                                onSubmit={submitStudentForm}
                                className="space-y-5"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={studentData.name}
                                    onChange={handleStudentChange}
                                    required
                                    className="w-full border border-base-300 bg-transparent px-5 py-4 rounded-2xl outline-none focus:border-[#FBBD0C]"
                                />
                                <div className="flex flex-col md:flex-row gap-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={studentData.email}
                                        onChange={handleStudentChange}
                                        required
                                        className="flex-1 border border-base-300 bg-transparent px-5 py-4 rounded-2xl outline-none focus:border-[#FBBD0C]"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => sendOtp(studentData.email)}
                                        disabled={loadingOtp}
                                        className="px-6 py-4 rounded-2xl bg-[#FBBD0C] text-black font-semibold hover:scale-[1.02] transition"
                                    >
                                        Send OTP
                                    </button>
                                </div>
                                <div className="flex flex-col md:flex-row gap-4">

                                    <input
                                        type="text"
                                        placeholder="Enter OTP"
                                        value={studentOtp}
                                        onChange={(e) => setStudentOtp(e.target.value)}
                                        className="flex-1 border border-base-300 bg-transparent px-5 py-4 rounded-2xl outline-none focus:border-[#FBBD0C]"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            verifyOtp(
                                                studentData.email,
                                                studentOtp,
                                                "student"
                                            )
                                        }
                                        className="px-6 py-4 rounded-2xl border border-[#FBBD0C] font-semibold hover:bg-[#FBBD0C] hover:text-black transition"
                                    >
                                        Verify OTP
                                    </button>

                                </div>
                                {
                                    studentVerified && (
                                        <div className="flex items-center gap-2 text-green-500 bg-green-500/10 border border-green-500/20 px-4 py-3 rounded-2xl">
                                            <ShieldCheck size={18} />
                                            Email Verified Successfully
                                        </div>
                                    )
                                }
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={studentData.phone}
                                    onChange={handleStudentChange}
                                    required
                                    className="w-full border border-base-300 bg-transparent px-5 py-4 rounded-2xl outline-none focus:border-[#FBBD0C]"
                                />
                                <input
                                    type="text"
                                    name="college"
                                    placeholder="College Name"
                                    value={studentData.college}
                                    onChange={handleStudentChange}
                                    required
                                    className="w-full border border-base-300 bg-transparent px-5 py-4 rounded-2xl outline-none focus:border-[#FBBD0C]"
                                />
                                <div className="grid md:grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={studentData.city}
                                        onChange={handleStudentChange}
                                        required
                                        className="w-full border border-base-300 bg-transparent px-5 py-4 rounded-2xl outline-none focus:border-[#FBBD0C]"
                                    />
                                    <select
                                        name="domain"
                                        value={studentData.domain}
                                        onChange={handleStudentChange}
                                        required
                                        className="select select-bordered w-full h-14 rounded-2xl bg-base-100 text-base-content border-base-300 px-4 focus:outline-none focus:border-[#FBBD0C]"
                                    >
                                        <option value="">
                                            Select Domain
                                        </option>
                                        {
                                            domains.map((domain, index) => (
                                                <option
                                                    key={index}
                                                    value={domain}
                                                >
                                                    {domain}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <button
                                    disabled={!studentVerified}
                                    type="submit"
                                    className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${studentVerified
                                        ? "bg-[#FBBD0C] text-black hover:scale-[1.01]"
                                        : "bg-base-300 cursor-not-allowed"
                                        }`}
                                >
                                    {
                                        studentVerified
                                            ? "Join Community"
                                            : "Verify OTP First"
                                    }
                                </button>
                            </form>
                        )
                    }
                    {
                        activeForm === "professional" && (
                            <form
                                onSubmit={submitProfessionalForm}
                                className="space-y-5"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={professionalData.name}
                                    onChange={handleProfessionalChange}
                                    required
                                    className="w-full border border-base-300 bg-transparent px-5 py-4 rounded-2xl outline-none focus:border-[#FBBD0C]"
                                />
                                <div className="flex flex-col md:flex-row gap-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={professionalData.email}
                                        onChange={handleProfessionalChange}
                                        required
                                        className="flex-1 border border-base-300 bg-transparent px-5 py-4 rounded-2xl outline-none focus:border-[#FBBD0C]"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => sendOtp(professionalData.email)}
                                        className="px-6 py-4 rounded-2xl bg-[#FBBD0C] text-black font-semibold hover:scale-[1.02] transition"
                                    >
                                        Send OTP
                                    </button>
                                </div>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <input
                                        type="text"
                                        placeholder="Enter OTP"
                                        value={professionalOtp}
                                        onChange={(e) => setProfessionalOtp(e.target.value)}
                                        className="flex-1 border border-base-300 bg-transparent px-5 py-4 rounded-2xl outline-none focus:border-[#FBBD0C]"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            verifyOtp(
                                                professionalData.email,
                                                professionalOtp,
                                                "professional"
                                            )
                                        }
                                        className="px-6 py-4 rounded-2xl border border-[#FBBD0C] font-semibold hover:bg-[#FBBD0C] hover:text-black transition"
                                    >
                                        Verify OTP
                                    </button>
                                </div>
                                {
                                    professionalVerified && (
                                        <div className="flex items-center gap-2 text-green-500 bg-green-500/10 border border-green-500/20 px-4 py-3 rounded-2xl">
                                            <ShieldCheck size={18} />
                                            Email Verified Successfully
                                        </div>
                                    )
                                }
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={professionalData.phone}
                                    onChange={handleProfessionalChange}
                                    required
                                    className="w-full border border-base-300 bg-transparent px-5 py-4 rounded-2xl outline-none focus:border-[#FBBD0C]"
                                />
                                <input
                                    type="text"
                                    name="organization"
                                    placeholder="Organization"
                                    value={professionalData.organization}
                                    onChange={handleProfessionalChange}
                                    required
                                    className="w-full border border-base-300 bg-transparent px-5 py-4 rounded-2xl outline-none focus:border-[#FBBD0C]"
                                />
                                <input
                                    type="text"
                                    name="currentRole"
                                    placeholder="Current Role"
                                    value={professionalData.currentRole}
                                    onChange={handleProfessionalChange}
                                    required
                                    className="w-full border border-base-300 bg-transparent px-5 py-4 rounded-2xl outline-none focus:border-[#FBBD0C]"
                                />
                                <div className="grid md:grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={professionalData.city}
                                        onChange={handleProfessionalChange}
                                        required
                                        className="w-full border border-base-300 bg-transparent px-5 py-4 rounded-2xl outline-none focus:border-[#FBBD0C]"
                                    />
                                    <select
                                        name="domain"
                                        value={professionalData.domain}
                                        onChange={handleProfessionalChange}
                                        required
                                        className="select select-bordered w-full h-14 rounded-2xl bg-base-100 text-base-content border-base-300 px-4 focus:outline-none focus:border-[#FBBD0C]"
                                    >
                                        <option value="">
                                            Select Domain
                                        </option>
                                        {
                                            domains.map((domain, index) => (
                                                <option
                                                    key={index}
                                                    value={domain}
                                                >
                                                    {domain}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <button
                                    disabled={!professionalVerified}
                                    type="submit"
                                    className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${professionalVerified
                                        ? "bg-[#FBBD0C] text-black hover:scale-[1.01]"
                                        : "bg-base-300 cursor-not-allowed"
                                        }`}
                                >
                                    {
                                        professionalVerified
                                            ? "Join Community"
                                            : "Verify OTP First"
                                    }
                                </button>
                            </form>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default JoinUs;