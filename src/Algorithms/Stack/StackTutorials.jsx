import styles from '../../Stylesheets/Tutorial.module.css';

const Tutorials = () => {
    return (
        <div className={styles.container}> {/* Main container */}
            <div className={styles.videoContainer}> {/* Video container for the first video */}
                <strong className={styles.heading}> {/* Heading for the first video */}
                    Stack Introduction
                </strong>
                <iframe 
                    
                    
                    src="https://www.youtube.com/embed/lno6Ft0tOZI?si=ZjKUMet4aDy3XhjZ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  
                    className={styles.videoIframe} // CSS class for styling
                />
            </div>   

            <div className={styles.videoContainer}> {/* Video container for the second video */}
                <strong className={styles.heading}> {/* Heading for the second video */}
                    Tower of Hanoi
                </strong>
                <iframe
                    src="https://www.youtube.com/embed/rf6uf3jNjbo?si=SjxyM_2hZ9QLiSGA"
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
