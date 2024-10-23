import React, { useEffect } from 'react';

const AimStack = () => {

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
    
    