import { Link, useLocation } from 'react-router-dom';
import { useState , useEffect} from 'react'; 
import styles from '../../Stylesheets/Linkedlist.module.css';

const LinkedList = () => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuOpen(!isSubMenuOpen);
    };
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
                        <Link to="articles" className={styles.a}>Concept</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="type" className={styles.a}>Types of Linked Lists</Link>
                    </li>
                    <li className={styles.li} id="SpecialLi" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                        <div className={styles.box}>
                            <button onClick={toggleSubMenu} className={styles.btn}>
                                Visualization
                            </button>
                        </div>
                        {isSubMenuOpen && ( 
                            <ul className={styles.subMenu}>
                                <li className={styles.subLi}>
                                    <Link to="visualization/insertion" className={styles.a}>Insertion</Link>
                                </li>
                                <li className={styles.subLi}>
                                    <Link to="visualization/deletion" className={styles.a}>Deletion</Link>
                                </li>
                                <li className={styles.subLi}>
                                    <Link to="visualization/traversal" className={styles.a}>Traversal</Link>
                                </li>
                            </ul>
                        )}
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

export default LinkedList;
