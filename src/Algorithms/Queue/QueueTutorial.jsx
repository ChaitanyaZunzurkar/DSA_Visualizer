import styles from '../../Stylesheets/Tutorial.module.css';

const Tutorials = () => {
    return (
        <div className={styles.container}> {/* Main container */}
            <div className={styles.videoContainer}> {/* Video container for the first video */}
                <strong className={styles.heading}> {/* Heading for the first video */}
                    Introduction to Queue using Example
                </strong>
                <iframe 
                    src="https://www.youtube.com/embed/yzj0Ch01Exo?si=uupGgVK4VjSH6F-7"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className={styles.videoIframe} // CSS class for styling
                />
            </div>   

            <div className={styles.videoContainer}> {/* Video container for the second video */}
                <strong className={styles.heading}> {/* Heading for the second video */}
                    Queue using Linked List
                </strong>
                <iframe
                    src="https://www.youtube.com/embed/LwYQo8mVPBs?si=oitvwBmc7MBZSwNX"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className={styles.videoIframe} // CSS class for styling
                />

            </div>
            <div className={styles.videoContainer}> {/* Video container for the second video */}
                <strong className={styles.heading}> {/* Heading for the second video */}
                    Queue using Linked List
                </strong>
                <iframe
                    src="https://www.youtube.com/embed/KQsSp_pkZdE?si=8zzDC98WN3rw2XWb"
                    title="YouTube video player"
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
