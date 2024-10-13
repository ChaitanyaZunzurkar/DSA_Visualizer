// AlertBox.js
import  { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const AlertBox = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 2500); 

        return () => clearTimeout(timer); 
    }, [onClose]);

    const styles = {
        alertBox: {
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '10px 20px',
            backgroundColor: '#f44336',
            color: 'white',
            borderRadius: '5px',
            zIndex: 1000,
        },
    };

    return (
        <div style={styles.alertBox}>
            {message}
        </div>
    );
};

export default AlertBox;
