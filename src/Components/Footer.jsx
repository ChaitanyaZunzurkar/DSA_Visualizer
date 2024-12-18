import logo from '../assets/logotemp.jpeg';

export default function Footer() {
  return (
    <footer>
    <div style={styles.footerContainer}>
      <div style={styles.logoContainer}>
        <img
          src={logo} 
          alt="Logo"
          style={styles.logo}
        />
        <span className="ml-6 text-2xl">Algolens</span>
        <div className="p-10">|</div> 
        <div>
            <p className="text-gray-400 text-sm text-center sm:text-left">
                            © 2024 Algolens —
                            <a
                                href="https://www.rbunagpur.in/"
                                className="text-gray-500 ml-1"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                @rcoem
                          </a>
              </p>
        </div>
      </div>

      <div className="bg-[#000000]">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row" style={{padding: '5px'}}>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-400 p-5">
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
                        <a className="ml-3 text-gray-400  p-5">
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
                        <a className="ml-3 text-gray-400  p-5">
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
                        <a className="ml-3 text-gray-400  p-5">
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
      </div>
    
    </footer>
  );
}

const styles = {
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    height:'80px',
    backgroundColor: '#000000',
    color: '#fff',
  },
  logoContainer: {
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    flex: '0 0 auto',
    margin: '40px',
  },
  logo: {
    width: '55px', 
    height: '55px', 
    borderRadius: '50%', 
    border: '1px solid white', 
    objectFit: 'cover', 
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
