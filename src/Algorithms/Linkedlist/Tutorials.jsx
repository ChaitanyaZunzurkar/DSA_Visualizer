import styles from '../../Stylesheets/Tutorial.module.css';

const Tutorials = () => {
    return (
        <div className={styles.container}> {/* Main container */}
            <div className={styles.videoContainer}> {/* Video container for the first video */}
                <strong className={styles.heading}> {/* Heading for the first video */}
                    Insertion and Deletion at various positions in Linked List
                </strong>
                <iframe 
                    src="https://www.youtube.com/embed/VaECK03Dz-g?si=iUR-N93m9j2YQdpD" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className={styles.videoIframe} // CSS class for styling
                />
            </div>   

            <div className={styles.videoContainer}> {/* Video container for the second video */}
                <strong className={styles.heading}> {/* Heading for the second video */}
                    Traversal through Linked List
                </strong>
                <iframe
                    src="https://www.youtube.com/embed/Nq7ok-OyEpg?si=r_DXgd_8QL8fBDjK"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className={styles.videoIframe} // CSS class for styling
                />
            </div>
        </div>
    );
}

export default Tutorials;
