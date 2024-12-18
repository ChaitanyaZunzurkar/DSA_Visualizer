import { Link, useLocation } from 'react-router-dom';
import styles from '../../Stylesheets/Linkedlist.module.css';
import { useEffect } from 'react';

const Queue = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    } , [location])

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to="aim" className={styles.a}>Aim</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="articles" className={styles.a}>Concept</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="implementation" className={styles.a}>Implementation</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="visualization" className={styles.a}>Visualization</Link>
                    </li>

                    <li className={styles.li}>
                        <Link to="type" className={styles.a}>Types of Queues</Link>
                    </li>
                    
                    <li className={styles.li}>
                        <Link to="test" className={styles.a}>Test</Link>
                    </li>

                    <li className={styles.li}>
                        <Link to="tutorial" className={styles.a}>Tutorial</Link>
                    </li>
                    
                    
                </ul>
            </nav>
        </div>
    );
}

export default Queue;
