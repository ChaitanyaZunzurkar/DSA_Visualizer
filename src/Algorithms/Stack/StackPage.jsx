import { Outlet } from 'react-router-dom';
import Stack from '../Stack/Stack'; 
import styles from '../../Stylesheets/LinkedlistPage.module.css'

const StackPage = () => {
    return (
        <div className={styles.container}>
            <Stack /> 
            <div className={styles.content}> 
                <Outlet /> 
            </div>
        </div>
    );
}

export default StackPage;

