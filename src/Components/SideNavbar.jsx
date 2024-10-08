import React, { useState } from 'react';
import styles from '../Stylesheets/SideNavbar.module.css';

const SideNavbar = () => {
    const [content, setContent] = useState(''); // State to hold the content

    // Functions to update content based on click
    const handleAimClick = () => {
        setContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.');
    };

    const handleVisualizationClick = () => {
        setContent('Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum.');
    };

    const handleTestClick = () => {
        setContent('Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod.');
    };

    const handleArticlesClick = () => {
        setContent('Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.');
    };

    const handleTutorialsClick = () => {
        setContent('Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod.');
    };

    return (
        <div className={styles.layout}>
            {/* Sidebar */}
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <a href="#" className={styles.a} onClick={handleAimClick}>Aim</a>
                    </li>
                    <li className={styles.li}>
                        <a href="#" className={styles.a} onClick={handleVisualizationClick}>Visualization</a>
                    </li>
                    <li className={styles.li}>
                        <a href="#" className={styles.a} onClick={handleTestClick}>Test</a>
                    </li>
                    <li className={styles.li}>
                        <a href="#" className={styles.a} onClick={handleArticlesClick}>Articles</a>
                    </li>
                    <li className={styles.li}>
                        <a href="#" className={styles.a} onClick={handleTutorialsClick}>Tutorials</a>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className={styles.mainContent}>
                <h1>Main Content</h1>
                <p>{content ? content : 'Click on the options in the sidebar to view content here.'}</p>
            </div>
        </div>
    );
};

export default SideNavbar;
