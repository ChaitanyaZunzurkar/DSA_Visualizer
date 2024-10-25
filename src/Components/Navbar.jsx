import { Link } from "react-router-dom";
import logo from '../assets/logotemp.jpeg';
export default function Navbar() {
    return (
        <>
            <header className="w-screen text-white-400 bg-[#000000] body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img
                            alt="testimonial"
                            className="w-14 h-14 mb-2 object-cover object-center rounded-full inline-block border-1 border-black-800 bg-black-800 bg-opacity-10"
                            src={logo}
                        />
                        <span className="ml-6 text-2xl">Algolens</span>
                    </a>
                    <nav className="md:mr-auto md:ml-7 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                        <ul className="flex space-x-14 text-lg font-medium">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/courses" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    Courses
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    {/* <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"> 
                        Button
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>*/}
                </div>
            </header>
        </>
    );
}
