const QueueStack = () => {
    const containerStyle = {
        marginLeft: '20px',
    padding: '20px',
    fontSize: '18px'
    };

    const headingStyle = {
        marginTop: '0',
    fontWeight: '800',
    fontSize: '30px',
    marginBottom: '10px',
    };

    const subHeadingStyle = {
        marginTop: '20px',
    fontWeight: '800',
    fontSize: '20px',
    marginBottom: '10px',
    };

    const listStyle = {
        fontWeight: 400,
        lineHeight: '1.6',            
        marginBottom: '8px',          
        color: '#333',                
        listStyleType: 'disc',        
        paddingLeft: '20px', 
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
