const Aim = () => {
    const containerStyle = {
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '100vw',
        height:'90vh',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif'
    };

    const headingStyle = {
        color: '#5bbaea',
        marginBottom: '10px',
        borderBottom: '2px solid #4CAF50',
        paddingBottom: '5px',
        textAlign : 'center',
    };

    const subHeadingStyle = {
        color: '#4CAF50',
        margin: '20px 0 20px 0',
    };

    const listStyle = {
        marginLeft: '20px',
        listStyleType: 'disc',
    };

    return (
        <div style={containerStyle}>
        <h1 style={headingStyle}>Dijkstra's Algorithm</h1>
        <h2 style={subHeadingStyle}>Learning Objectives of the Experiment</h2>
        <p>In this experiment on Dijkstra's Algorithm, you will learn the following topics:</p>
        <ul style={listStyle}>
            <li>
                Introduction
                <ul style={listStyle}>
                    <li>What is Dijkstra's Algorithm?</li>
                    <li>How does Dijkstra's Algorithm work?</li>
                </ul>
            </li>
            <li>
                Key Concepts
                <ul style={listStyle}>
                    <li>Graph Representation</li>
                    <li>Priority Queue Usage</li>
                    <li>Time Complexity Analysis</li>
                </ul>
            </li>
            <li>
                Applications of Dijkstra's Algorithm
                <ul style={listStyle}>
                    <li>Shortest Path Finding</li>
                    <li>Network Routing</li>
                    <li>Geographic Mapping</li>
                </ul>
            </li>
        </ul>
    </div>    
    );
}

export default Aim;
