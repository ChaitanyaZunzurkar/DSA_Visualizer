import React, { useEffect } from 'react';

const AimStack = () => {
    const containerStyle = {
        marginLeft: '20px',
        padding: '20px',
        fontSize: '18px',
        height:'100vh',
        
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
        textAlign: 'left',  
    };

    const listStyle = {
        fontWeight: 400,
        lineHeight: '1.6',
        marginBottom: '8px',
        color: '#333',
        listStyleType: 'disc',
        paddingLeft: '20px',
    };

    const contentStyle = {
        marginLeft: '20px',
        padding: '20px',
        fontSize: '18px',
    };

   

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Stack</h1>
            <h2 style={subHeadingStyle}>Learning Objectives of the Experiment</h2>
            <p style={contentStyle}>In this experiment, you will learn about:</p>
            <ul style={listStyle}>
                <li>What is a Stack?</li>
                <li>Applications, Advantages, and Disadvantages of Stack</li>
                <li>Gain a basic understanding of Stacks as an abstract data type.</li>
                <li>Understand stack operations associated with time complexity through interactive animations.</li>
                <li>Understand applications of Stacks.</li>
                <li>Special Implementation of Stack for Problem Solving - Monotonic Implementation</li>
            </ul>
        </div>
    );
}

export default AimStack;
