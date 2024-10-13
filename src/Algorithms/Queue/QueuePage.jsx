import { Outlet } from 'react-router-dom';
import styles from '../../Stylesheets/LinkedlistPage.module.css'
import Queue from './Queue';

const QueuePage = () => {
    return (
        <div className={styles.container}>
            <Queue /> 
            <div className={styles.content}> 
                <Outlet /> 
            </div>
        </div>
    );
}

export default QueuePage;

