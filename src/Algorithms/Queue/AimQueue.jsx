const QueueStack = () => {
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
            <h1 style={headingStyle}>Queue</h1>
            <h2 style={subHeadingStyle}>Learning Objectives of the Experiment</h2>
            <p>In this experiment, you will be learn about :</p>
            <ul style={listStyle}>
                
                    
                    
                        <li>What is a Queue?</li>
                        <li>Applications, Advantages and Disadvantages of Stack</li>
                    
                
                <li>
                Different types of Queue
                </li>
                <li>
                Understand queue operations associated time complexity through interactive animations.
                </li>
                <li>
                Understand applications of Queues.
                </li>
                <li>Implementation of Queue for Problem Solving </li>
            </ul>
        </div>
    );
}

export default QueueStack;
