import Link from "next/dist/client/link";

export default function Navbar () {
    return (
        <nav className="bg-gray-900 p-4 fixed w-full top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <img src="/wwe.png"  alt="WWE Logo" className="text-white text-lg font-bold cursor-pointer h-8 md:h-12 w-auto object-contain mix-blend-screen" />
                </Link>
                    <div className="space-x-5 flex justify-end items-center">
                        <a href="/" className="text-gray-300 hover:text-white">Home</a>

                        <a href="/superstars" className="text-gray-300 hover:text-white pl-4">Superstars</a>

                        <a href="/champions" className="text-gray-300 hover:text-white pl-4">Champions</a>

                        <a href="/compare" className="text-gray-300 hover:text-white pl-4">Compare</a>

                        <a href="/login" className="text-gray-300 hover:text-red-500 pr-4 pl-4 font-medium transition-colors">Login</a>

                        <a href="/register" 
                            className="text-white px-5 py-2 font-bold uppercase  border-2 border-red-600 hover:bg-red-600 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]  transition-all duration-300 rounded-sm italic">
                            Register
                        </a>
                    </div>
            </div>
        </nav>
    )
}