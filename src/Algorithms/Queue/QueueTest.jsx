import React, { useState } from 'react';
import enq1 from '../../assets/QueueImages/enq1.webp';
import enq2 from '../../assets/QueueImages/enq2.webp';
import enq3 from '../../assets/QueueImages/enq3.webp';
import enq4 from '../../assets/QueueImages/enq4.webp';
import enq5 from '../../assets/QueueImages/enq5.webp';
import enq6 from '../../assets/QueueImages/enq6.webp';

const QueueTest = () => {
    const images = [enq1, enq2, enq3, enq4, enq5, enq6];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        border: '2px solid #333',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '350px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9'
    };

    const imageStyle = {
        width: '300px',
        height: '300px',
        objectFit: 'contain',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '8px',
    };

    const buttonStyle = {
        margin: '5px',
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        fontSize: '16px'
    };

    return (
        <div style={containerStyle}>
            <img src={images[currentIndex]} alt={`enq${currentIndex + 1}`} style={imageStyle} />
            <div>
                <button onClick={prevImage} style={buttonStyle}>Previous</button>
                <button onClick={nextImage} style={buttonStyle}>Next</button>
            </div>
        </div>
    );
};

export default QueueTest;
