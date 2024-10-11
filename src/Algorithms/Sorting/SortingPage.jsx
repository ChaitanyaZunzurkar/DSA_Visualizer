import { Outlet } from 'react-router-dom';
import LinkedList from '../Sorting/Sorting'; 

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

