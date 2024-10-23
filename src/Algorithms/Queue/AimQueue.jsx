const AimQueue = () => {
    const containerStyle = {
    padding: '30px',
    backgroundColor: '#ffffff', // Changed to white for a clean look
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Deeper shadow for more depth
    maxWidth: '90vw',
    height: '90vh',
    margin: '20px auto',
    fontFamily: "'Roboto', sans-serif", // Modern font
    color: '#333', // Dark text for better readability
    overflowY: 'auto', // Allow scrolling if content overflows
    };
    const headingStyle = {
    color: '#2980b9', // Bright blue for the heading
    marginBottom: '15px',
    borderBottom: '3px solid #4CAF50', // Thicker green border for emphasis
    paddingBottom: '10px',
    textAlign: 'center',
    fontSize: '36px', // Larger font size for prominence
    letterSpacing: '1.5px', // Added letter spacing for a modern look
    textTransform: 'uppercase', // Makes the heading stand out
    };
    const subHeadingStyle = {
    color: '#4CAF50', // Green color for subheading
    margin: '20px 0',
    fontSize: '26px', // Slightly larger font for subheading
    fontWeight: '600',
    textAlign: 'center', // Center align subheading
    };
    const listStyle = {
    marginLeft: '20px',
    listStyleType: 'disc',
    lineHeight: '1.6', // Improved line height for readability
    };
    const listItemStyle = {
    padding: '12px 0', // Added padding for spacing between items
    transition: 'transform 0.3s ease, background-color 0.3s ease', // Smooth transitions for hover effect
    cursor: 'pointer',
    };
    const hoverStyle = {
    ':hover': {
    transform: 'translateY(-2px)', // Slight lift on hover
    backgroundColor: '#ecf0f1', // Light background change on hover
    borderRadius: '8px', // Slightly rounded corners on hover
    },
    };
    return (
    <div style={containerStyle}>
    <h1 style={headingStyle}>Queue</h1>
    <h2 style={subHeadingStyle}>Learning Objectives of the Experiment</h2>
    <p style={{ textAlign: 'center', fontSize: '18px', color: '#555' }}>
    In this experiment, you will learn about:
    </p>
    <ul style={listStyle}>
    <li style={{ ...listItemStyle, ...hoverStyle }}>What is a Queue?</li>
    <li style={{ ...listItemStyle, ...hoverStyle }}>Applications, Advantages and Disadvantages of Queue</li>
    <li style={{ ...listItemStyle, ...hoverStyle }}>Different types of Queue</li>
    <li style={{ ...listItemStyle, ...hoverStyle }}>Understand queue operations associated with time complexity through interactive animations.</li>
    <li style={{ ...listItemStyle, ...hoverStyle }}>Understand applications of Queues.</li>
    <li style={{ ...listItemStyle, ...hoverStyle }}>Implementation of Queue for Problem Solving</li>
    </ul>
    </div>
    );
    }
    export default AimQueue; 
    