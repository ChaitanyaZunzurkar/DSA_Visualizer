import { useState } from 'react';
import CryptoJS from 'crypto-js';
import { MdLock } from 'react-icons/md'; 

const PasswordHashingVisualization = () => {
    const [password, setPassword] = useState('');
    const [hashedPassword, setHashedPassword] = useState('');

    const hashPassword = (text) => {
        return CryptoJS.SHA256(text).toString(); 
    };

    const handleInputChange = (e) => {
        const text = e.target.value;
        setPassword(text);
        setHashedPassword(hashPassword(text)); 
    };

    const clearInput = () => {
        setPassword('');
        setHashedPassword('');
    };

    const styles = {
        container: {
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ffffff',
            fontFamily: 'Arial, sans-serif',
            animation: 'fadeIn 0.5s',
            overflow: 'hidden',
            height:'100vh'
        },
        fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
        },
        title: {
            textAlign: 'center',
            color: '#333',
            marginBottom: '20px',
        },
        inputContainer: {
            position: 'relative',
            marginBottom: '20px',
        },
        lockIcon: {
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#555',
            fontSize: '20px',
        },
        input: {
            width: '100%',
            padding: '10px 10px 10px 40px',
            border: '2px solid #4CAF50',
            borderRadius: '4px',
            transition: 'border-color 0.3s',
            boxSizing: 'border-box',
            color:'white'
        },
        inputFocus: {
            borderColor: '#3e8e41',
        },
        clearButton: {
            width: '100%',
            padding: '10px',
            backgroundColor: '#ff5722',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            marginBottom: '20px',
        },
        clearButtonHover: {
            backgroundColor: '#e64a19',
        },
        output: {
            marginTop: '20px',
            backgroundColor: '#f1f1f1',
            padding: '15px',
            borderRadius: '4px',
            boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
        },
        subheading: {
            marginBottom: '5px',
            color: '#4CAF50',
        },
        passwordDisplay: {
            backgroundColor: '#eaeaea',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '10px',
        },
        note: {
            marginTop: '20px',
            backgroundColor: '#e8f4e5',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #c8e6c9',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Password Hashing Visualization</h1>
            <div style={styles.inputContainer}>
                <MdLock style={styles.lockIcon} />
                <input
                    type="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    style={styles.input}
                />
            </div>
            <button
                style={styles.clearButton}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.clearButtonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.clearButton.backgroundColor)}
                onClick={clearInput}
            >
                Clear
            </button>
            <div style={styles.output}>
                <h2 style={styles.subheading}>Original Password:</h2>
                <p style={styles.passwordDisplay}>{password ? password : 'No password entered'}</p>
                <h2 style={styles.subheading}>Hashed Password:</h2>
                <p style={styles.passwordDisplay}>{hashedPassword || 'Hash will appear here'}</p>
            </div>
            <div style={styles.note}>
                <h3>Why Hash Passwords?</h3>
                <p>
                    Hashing ensures that even if someone gains access to the database,
                    they wont see your actual password, only its hashed representation.
                </p>
            </div>
        </div>
    );
};

export default PasswordHashingVisualization;
