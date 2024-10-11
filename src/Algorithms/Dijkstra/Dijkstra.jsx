import { Link } from 'react-router-dom';

const Dijkstra = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to="DijkstraAim" className={styles.a}>Aim</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="DijkstraVisualization" className={styles.a}>Visualization</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="DjikstraTest" className={styles.a}>Test Your Knowledge</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="DjikstraArticle" className={styles.a}>Articles & Resources</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="DijkstraTutorials" className={styles.a}>Tutorials & Guides</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Dijkstra;
