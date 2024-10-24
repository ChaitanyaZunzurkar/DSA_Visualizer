import styles from '../../Stylesheets/Tutorial.module.css';

const Tutorials = () => {
    return (
        <div className={styles.container}> {/* Apply the container class */}
            <strong className={styles.heading}> {/* Apply the heading class */}
                Insertion and Deletion at various positions in Linked List
            </strong>
            <div className={styles.videoContainer}> {/* Apply the videoContainer class */}
                <iframe 
                    src="https://www.youtube.com/embed/VaECK03Dz-g?si=iUR-N93m9j2YQdpD" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                />
                
                <strong className={styles.heading}> {/* Reuse the heading class for the second heading */}
                    Traversal through Linked List
                </strong>
                <iframe
                    src="https://www.youtube.com/embed/Nq7ok-OyEpg?si=r_DXgd_8QL8fBDjK"
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
