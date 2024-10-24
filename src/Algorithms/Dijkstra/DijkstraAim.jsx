const DijkstraAim = () => {
    const containerStyle = {
    padding: '30px',
    backgroundColor: '#ffffff', // Change to white for a cleaner look
    borderRadius: '12px',
    boxShadow: '0 6px 30px rgba(0, 0, 0, 0.15)', // Deeper shadow for more depth
    maxWidth: '90vw',
    margin: '20px auto',
    fontFamily: "'Roboto', sans-serif", // More modern font
    color: '#444', // Darker text color for better readability
    overflowY: 'auto', // Allow scrolling if content overflows
    };
    const headingStyle = {
    color: '#2980b9', // A slightly darker blue for the heading
    marginBottom: '15px',
    borderBottom: '3px solid #27ae60', // Thicker green border for emphasis
    paddingBottom: '10px',
    textAlign: 'center',
    fontSize: '36px', // Increased font size for prominence
    letterSpacing: '1.5px', // Adding letter spacing for a modern look
    };
    const subHeadingStyle = {
    color: '#27ae60', // Green color for subheading
    margin: '20px 0',
    fontSize: '24px', // Slightly larger font for subheading
    fontWeight: '600',
    };
    const listStyle = {
    marginLeft: '20px',
    listStyleType: 'disc',
    lineHeight: '1.6', // Improved line height for readability
    };
    const listItemStyle = {
    padding: '8px 0', // Added padding for spacing between items
    transition: 'transform 0.3s ease, background-color 0.3s ease', // Smooth transitions for hover effect
    cursor: 'pointer',
    };
    const hoverStyle = {
    ':hover': {
    transform: 'translateY(-2px)', // Slight lift on hover
    backgroundColor: '#ecf0f1', // Light background change on hover
    }
    };
    return (
    <div style={containerStyle}>
    <h1 style={headingStyle}>Dijkstra's Algorithm</h1>
    <h2 style={subHeadingStyle}>Learning Objectives of the Experiment</h2>
    <p>In this experiment on Dijkstra's Algorithm, you will learn the following topics:</p>
    <ul style={listStyle}>
    <li style={{ ...listItemStyle, ...hoverStyle }}>
    Introduction
    <ul style={listStyle}>
    <li style={listItemStyle}>What is Dijkstra's Algorithm?</li>
    <li style={listItemStyle}>How does Dijkstra's Algorithm work?</li>
    </ul>
    </li>
    <li style={{ ...listItemStyle, ...hoverStyle }}>
    Key Concepts
    <ul style={listStyle}>
    <li style={listItemStyle}>Graph representation (adjacency matrix/list)</li>
    <li style={listItemStyle}>Understanding weighted graphs</li>
    <li style={listItemStyle}>Priority queues</li>
    </ul>
    </li>
    <li style={{ ...listItemStyle, ...hoverStyle }}>
    Implementation
    <ul style={listStyle}>
    <li style={listItemStyle}>Step-by-step implementation of Dijkstra's Algorithm</li>
    <li style={listItemStyle}>Time complexity analysis</li>
    <li style={listItemStyle}>Use cases and real-world applications</li>
    </ul>
    </li>
    </ul>
    </div>
    );
    }
    export default DijkstraAim; 
    