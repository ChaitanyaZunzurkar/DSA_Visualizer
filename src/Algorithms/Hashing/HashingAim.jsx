const HashingAim = () => {
    const containerStyle = {
    padding: '30px',
    backgroundColor: '#ffffff', // Change to white for a cleaner look
    borderRadius: '12px',
    boxShadow: '0 6px 30px rgba(0, 0, 0, 0.15)', // Deeper shadow for more depth
    maxWidth: '90vw',
    height: '90vh',
    margin: '20px auto',
    fontFamily: "'Roboto', sans-serif", // Modern font
    color: '#444', // Darker text color for better readability
    overflowY: 'auto', // Allow scrolling if content overflows
    };
    const headingStyle = {
    color: '#2980b9', // A vibrant blue for the heading
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
    <h1 style={headingStyle}>Hashing</h1>
    <h2 style={subHeadingStyle}>Learning Objectives of the Experiment</h2>
    <p>In this experiment on Hashing, you will learn the following topics:</p>
    <ul style={listStyle}>
    <li style={{ ...listItemStyle, ...hoverStyle }}>
    Introduction
    <ul style={listStyle}>
    <li style={listItemStyle}>What is hashing?</li>
    <li style={listItemStyle}>Why is hashing used?</li>
    </ul>
    </li>
    <li style={{ ...listItemStyle, ...hoverStyle }}>
    Hash Functions
    <ul style={listStyle}>
    <li style={listItemStyle}>Properties of a good hash function</li>
    <li style={listItemStyle}>Common hashing techniques (e.g., Division, Multiplication)</li>
    </ul>
    </li>
    <li style={{ ...listItemStyle, ...hoverStyle }}>
    Collision Resolution
    <ul style={listStyle}>
    <li style={listItemStyle}>Open Addressing (Linear probing, Quadratic probing, Double hashing)</li>
    <li style={listItemStyle}>Chaining</li>
    </ul>
    </li>
    <li style={{ ...listItemStyle, ...hoverStyle }}>
    Applications of Hashing
    <ul style={listStyle}>
    <li style={listItemStyle}>Hash tables</li>
    <li style={listItemStyle}>Cryptography</li>
    </ul>
    </li>
    </ul>
    </div>
    );
    }
    export default HashingAim; 
    