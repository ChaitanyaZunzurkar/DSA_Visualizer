import { Link } from 'react-router-dom';
import styles from '../../Stylesheets/Linkedlist.module.css';

const Sorting = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to="Aim_Sort" className={styles.a}>Aim</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="Visualization_Sort" className={styles.a}>Visualization</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="Test_Sort" className={styles.a}>Test</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="Articles_Sort" className={styles.a}>Articles</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="Tutorials_Sort" className={styles.a}>Tutorials</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sorting;
