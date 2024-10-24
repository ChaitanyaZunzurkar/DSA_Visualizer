import { Link } from 'react-router-dom';
import styles from '../../Stylesheets/Linkedlist.module.css';

const Dijkstra = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to="" className={styles.a}>Aim</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="concept" className={styles.a}>Concept</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="Algorithm" className={styles.a}>Algorithm</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="visualization" className={styles.a}>Visualization</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="test" className={styles.a}>Test Your Knowledge</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="articles" className={styles.a}>Articles & Resources</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="tutorials" className={styles.a}>Tutorials & Guides</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Dijkstra;
