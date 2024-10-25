import { Link } from 'react-router-dom';
import styles from '../../Stylesheets/Linkedlist.module.css';
import { useState } from 'react'
const Hashing = () => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuOpen(!isSubMenuOpen);
    };

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
                        <div className={styles.box}>
                            <button onClick={toggleSubMenu} className={styles.btn}>
                                Collision Implementation
                            </button>
                        </div>
                        {isSubMenuOpen && ( 
                            <ul className={styles.subMenu}>
                                <li className={styles.subLi}>
                                    <Link to="visualization/QuadraticProbing" className={styles.a}>Quadratic Probing</Link>
                                </li>
                                <li className={styles.subLi}>
                                    <Link to="visualization/SeparateChaining" className={styles.a}>Separate Chaining</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className={styles.li}>
                        <Link to="password" className={styles.a}>Password Hashing</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="test" className={styles.a}>Test</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="tutorials" className={styles.a}>Tutorials</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Hashing;