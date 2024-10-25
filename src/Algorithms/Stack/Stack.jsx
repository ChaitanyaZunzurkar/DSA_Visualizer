import { Link } from 'react-router-dom';
import styles from '../../Stylesheets/Linkedlist.module.css';

const Stack = () => {
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
                        <Link to="implementation" className={styles.a}>Implementation</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="visualization" className={styles.a}>Visualization</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="mono" className={styles.a}>Tower of Hanoi</Link>
                    </li>
                    
                    <li className={styles.li}>
                        <Link to="tutorial" className={styles.a}>Tutorial</Link>
                    </li>
                    
                    <li className={styles.li}>
                        <Link to="test" className={styles.a}>Test</Link>
                    </li>
                    
                    {/* <li className={styles.li}>
                        <Link to="test" className={styles.a}>Test</Link>
                    </li> */}
                    
                    
                </ul>
            </nav>
        </div>
    );
}

export default Stack;
