const AimStack = () => {
    const containerStyle = {
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 6px 30px rgba(0, 0, 0, 0.15)', // Deeper shadow for more depth
    maxWidth: '90vw',
    height: '90vh',
    margin: '20px auto',
    fontFamily: "'Roboto', sans-serif", // Modern font
    overflowY: 'auto',
    color: '#444', // Slightly lighter text color for better contrast
    };
    const headingStyle = {
    color: '#34495e',
    marginTop: '0',
    fontWeight: '700',
    fontSize: '36px',
    marginBottom: '15px',
    borderBottom: '3px solid #2ecc71', // Thicker green border for emphasis
    paddingBottom: '10px',
    textAlign: 'center',
    letterSpacing: '1.5px',
    };
    const subHeadingStyle = {
    color: '#27ae60',
    marginTop: '20px',
    fontWeight: '600',
    fontSize: '26px',
    marginBottom: '15px',
    textAlign: 'left',
    textTransform: 'uppercase',
    letterSpacing: '1.2px',
    };
    const listStyle = {
    fontWeight: 400,
    lineHeight: '1.6',
    marginBottom: '10px',
    color: '#555',
    listStyleType: 'disc',
    paddingLeft: '20px',
    };
    const contentStyle = {
    marginLeft: '20px',
    padding: '15px',
    fontSize: '18px',
    color: '#333',
    backgroundColor: '#f9f9f9', // Light grey background for content
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Softer shadow
    };
    const listItemStyle = {
    padding: '8px 0',
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
    <h1 style={headingStyle}>Stack</h1>
    <h2 style={subHeadingStyle}>Learning Objectives of the Experiment</h2>
    <p style={contentStyle}>In this experiment, you will learn about:</p>
    <ul style={listStyle}>
    <li style={{ ...listItemStyle, ...hoverStyle }}>What is a Stack?</li>
    <li style={{ ...listItemStyle, ...hoverStyle }}>Applications, Advantages, and Disadvantages of Stack</li>
    <li style={{ ...listItemStyle, ...hoverStyle }}>Gain a basic understanding of Stacks as an abstract data type.</li>
    <li style={{ ...listItemStyle, ...hoverStyle }}>Understand stack operations associated with time complexity through interactive animations.</li>
    <li style={{ ...listItemStyle, ...hoverStyle }}>Understand applications of Stacks.</li>
    <li style={{ ...listItemStyle, ...hoverStyle }}>Special Implementation of Stack for Problem Solving - Monotonic Implementation</li>
    </ul>
    </div>
    );
    }
    export default AimStack; 
    
    