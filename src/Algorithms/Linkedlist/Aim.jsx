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
            <h1 style={headingStyle}>Linked List</h1>
            <h2 style={subHeadingStyle}>Learning Objectives of the Experiment</h2>
            <p>In this experiment on Linked Lists, you will learn the following topics:</p>
            <ul style={listStyle}>
                <li>
                    Introduction
                    <ul style={listStyle}>
                        <li>What is a linked list?</li>
                        <li>How is a linked list stored in memory?</li>
                    </ul>
                </li>
                <li>
                    Types of Linked Lists (Operations and time complexity analysis of each type)
                    <ul style={listStyle}>
                        <li>Singly Linked List</li>
                        <li>Doubly Linked List</li>
                        <li>Circular Linked List</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Aim;
