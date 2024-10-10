import { Outlet } from 'react-router-dom';
import HASHING from '../Hashing/Hashing'; 
import styles from '../../Stylesheets/HashingPage.module.css'

const HashingPage = () => {
    return (
        <div className={styles.container}>
            <HASHING /> 
            <div className={styles.content}> 
                <Outlet /> 
            </div>
        </div>
    );
}

export default HashingPage;

