import styles from '../../Stylesheets/Tutorial.module.css';

const Tutorials = () => {
    return (
        <div className={styles.container} style={{height:'100vh'}}> {/* Main container */}
            <div className={styles.videoContainer}> {/* Video container for the first video */}
                <strong className={styles.heading}> {/* Heading for the first video */}
              Understanding Collisions Resolution in Hashing       
                </strong>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/KEs5UyBJ39g?si=U1t0jJqVO44eKahI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />

            </div>   


        </div>
    );
}

export default Tutorials;
