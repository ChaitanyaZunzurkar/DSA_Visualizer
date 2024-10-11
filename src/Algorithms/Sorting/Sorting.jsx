import { Link } from 'react-router-dom';
import styles from '../../Stylesheets/Linkedlist.module.css';

const Sorting = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to="" className={styles.a}>Aim</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="visualization" className={styles.a}>Visualization</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="test" className={styles.a}>Test</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="articles" className={styles.a}>Articles</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="tutorials" className={styles.a}>Tutorials</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sorting;
