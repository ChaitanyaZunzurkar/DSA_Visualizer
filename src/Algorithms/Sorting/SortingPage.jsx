import { Outlet } from 'react-router-dom';
import Sorting from '../Sorting/Sorting'; 
import styles from '../../Stylesheets/HashingPage.module.css'

const SortingPage= () => {
    return (
        <div className={styles.container}>
            <Sorting /> 
            <div className={styles.content}> 
                <Outlet /> 
            </div>
        </div>
    );
}

export default SortingPage;

