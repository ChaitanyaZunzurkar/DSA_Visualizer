import { Outlet } from 'react-router-dom';
import LinkedList from '../Linkedlist/Linkedlist'; 
import styles from '../../Stylesheets/LInkedlistPage.module.css'

const LinkedlistPage = () => {
    return (
        <div className={styles.container}>
            <LinkedList /> 
            <div className={styles.content}> 
                <Outlet /> 
            </div>
        </div>
    );
}

export default LinkedlistPage;

