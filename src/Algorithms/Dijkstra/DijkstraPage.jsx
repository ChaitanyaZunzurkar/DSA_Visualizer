import { Outlet } from 'react-router-dom';
import DijkstraAim from '../DijkstraAim/DijkstraAim'; // Assuming you have created this new component

const DijkstraPage = () => {
    return (
        <div className={styles.container}>
            <DijkstraAim /> 
            <div className={styles.content}> 
                <Outlet /> 
            </div>
        </div>
    );
}

export default DijkstraPage;
