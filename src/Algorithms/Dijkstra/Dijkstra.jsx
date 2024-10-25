import { Link, useLocation } from 'react-router-dom';
import styles from '../../Stylesheets/Linkedlist.module.css';
import { useEffect } from 'react';

const Dijkstra = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    } , [location])
    
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
                        <Link to="tutorials" className={styles.a}>Tutorials</Link>
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
                </ul>
            </nav>
        </div>
    );
}

export default Dijkstra;
