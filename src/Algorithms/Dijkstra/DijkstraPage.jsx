import { Outlet } from 'react-router-dom';
import Dijkstra from '../Dijkstra/Dijkstra';
import styles from '../../Stylesheets/HashingPage.module.css'
const DijkstraPage = () => {
    return (
        <div className={styles.container}>
            <Dijkstra /> 
            <div className={styles.content}> 
                <Outlet /> 
            </div>
        </div>
    );
}

export default DijkstraPage;
