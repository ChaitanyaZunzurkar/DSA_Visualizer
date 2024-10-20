import React from 'react';

const footerLinks = [
  { id: 1, text: 'Services', href: '#' },
  { id: 2, text: 'FAQ', href: '#' },
  { id: 3, text: 'Careers', href: '#' },
  { id: 4, text: 'Email', href: '#' },
];

export default function Footer() {
  return (
    <footer>
    <div style={styles.footerContainer}>
      <div style={styles.linksContainer}>
        {footerLinks.map(link => (
          <a key={link.id} href={link.href} style={styles.link}>
            {link.text}
          </a>
        ))}
      </div>
      <div style={styles.logoContainer}>
        <img
          src="https://dummyimage.com/100x100" // Replace with your logo URL
          alt="Logo"
          style={styles.logo}
        />
      </div>
    </div>
    <div className="bg-[#000000]">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-400 text-sm text-center sm:text-left">
                        © 2024 Algolens —
                        <a
                            href="https://twitter.com/knyttneve"
                            className="text-gray-500 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            @rcoem
                        </a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-400">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400">
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
    </footer>
  );
}

// Inline styles
const styles = {
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '10px',
    height:'80px',
    backgroundColor: '#000000',
    color: '#fff',
  },
  logoContainer: {
    flex: '0 0 auto',
    margin: '40px',
  },
  logo: {
    width: '55px', // Adjust logo size as needed
    height: '55px', // Set height to match width for a perfect circle
    borderRadius: '50%', // 50% for circular shape
    border: '3px solid #ffcc00', // Add border with desired color and thickness
    objectFit: 'cover', // Ensures the image covers the area without distortion
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flex: '0.8',
  },
  link: {
    color: '#b0b0b0',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '14px',
    fontWeight: '300',
    transition: 'color 0.3s',
  },
};


// Optional: Add hover effect for links
const linkHoverStyle = {
  ':hover': {
    color: '#ffcc00', // Change to your desired hover color
  },
};


// export default function Footer() {
//     return (
//         <footer className="w-screen text-white-400 bg-[#000000] body-font" style={{height:'100px'}}>
//             <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
//                 <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
//                     <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
//                         <img
//                             alt="testimonial"
//                             className="w-12 h-12 mb-3 object-cover object-center rounded-full inline-block border-1 border-gray-800 bg-gray-800 bg-opacity-10"
//                             src="https://dummyimage.com/302x302"
//                         />
//                         <span className="ml-3 text-xl">Algolens</span>
//                     </a>
//                     <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
//                 </div>
//                 <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
//                     {['Water', 'Second Link', 'Third Link', 'Fourth Link'].map((text, index) => (
//                         <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
//                             <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
//                             <nav className="list-none mb-10">
//                                 {/* <li>
//                                     <a className="text-gray-400 hover:text-white">{text}</a>
//                                 </li>
//                                 <li>
//                                     <a className="text-gray-400 hover:text-white">{text}</a>
//                                 </li>
//                                 <li>
//                                     <a className="text-gray-400 hover:text-white">{text}</a>
//                                 </li> */}
//                                 <li>
//                                     <a className="text-gray-400 hover:text-white">{text}</a>
//                                 </li>
//                             </nav>
//                         </div>
//                     ))}
//                 </div>
//             </div>
            // <div className="bg-[#141414] bg-opacity-75">
            //     <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            //         <p className="text-gray-400 text-sm text-center sm:text-left">
            //             © 2024 Algolens —
            //             <a
            //                 href="https://twitter.com/knyttneve"
            //                 className="text-gray-500 ml-1"
            //                 rel="noopener noreferrer"
            //                 target="_blank"
            //             >
            //                 @rcoem
            //             </a>
            //         </p>
            //         <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            //             <a className="text-gray-400">
            //                 <svg
            //                     fill="currentColor"
            //                     strokeLinecap="round"
            //                     strokeLinejoin="round"
            //                     strokeWidth="2"
            //                     className="w-5 h-5"
            //                     viewBox="0 0 24 24"
            //                 >
            //                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            //                 </svg>
            //             </a>
            //             <a className="ml-3 text-gray-400">
            //                 <svg
            //                     fill="currentColor"
            //                     strokeLinecap="round"
            //                     strokeLinejoin="round"
            //                     strokeWidth="2"
            //                     className="w-5 h-5"
            //                     viewBox="0 0 24 24"
            //                 >
            //                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            //                 </svg>
            //             </a>
            //             <a className="ml-3 text-gray-400">
            //                 <svg
            //                     fill="none"
            //                     stroke="currentColor"
            //                     strokeLinecap="round"
            //                     strokeLinejoin="round"
            //                     strokeWidth="2"
            //                     className="w-5 h-5"
            //                     viewBox="0 0 24 24"
            //                 >
            //                     <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            //                     <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            //                 </svg>
            //             </a>
            //             <a className="ml-3 text-gray-400">
            //                 <svg
            //                     fill="currentColor"
            //                     stroke="currentColor"
            //                     strokeLinecap="round"
            //                     strokeLinejoin="round"
            //                     strokeWidth="0"
            //                     className="w-5 h-5"
            //                     viewBox="0 0 24 24"
            //                 >
            //                     <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            //                     <circle cx="4" cy="4" r="2" stroke="none"></circle>
            //                 </svg>
            //             </a>
            //         </span>
            //     </div>
            // </div>
//         </footer>
//     );
// }
