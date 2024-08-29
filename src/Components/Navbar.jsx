export default function Navbar() {
    return (
        <>
            <header className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img
                            alt="testimonial"
                            className="w-12 h-12 mb-3 object-cover object-center rounded-full inline-block border-1 border-gray-800 bg-gray-800 bg-opacity-10"
                            src="https://dummyimage.com/302x302"
                        />
                        <span className="ml-3 text-xl">Algolens</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-white">First Link</a>
                        <a className="mr-5 hover:text-white">Second Link</a>
                        <a className="mr-5 hover:text-white">Third Link</a>
                        <a className="mr-5 hover:text-white">Fourth Link</a>
                    </nav>
                    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
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
                    </button>
                </div>
            </header>
        </>
    );
}
