import React from 'react';

const Tutorials_Sort = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Merge Sort Tutorial</h1>
            <div style={styles.videoContainer}>
                <iframe
                    title="Merge Sort Tutorial"
                    width="800"
                    height="450"
                    src="https://www.youtube.com/embed/4VqmGXwpLqc?si=xGMRuFafxABlI0Sr"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div style={styles.explanation}>
                <h2 style={styles.subTitle}>What is Merge Sort?</h2>
                <p style={styles.paragraph}>
                    Merge Sort is a sorting algorithm that employs the divide-and-conquer strategy. It divides the input array into two halves, 
                    recursively sorts both halves, and then merges the sorted halves back together. The steps are as follows:
                </p>
                <ol style={styles.list}>
                    <li>
                        <strong>Divide:</strong> Split the array into two halves until each sub-array contains a single element. A single element is considered sorted.
                    </li>
                    <li>
                        <strong>Conquer:</strong> Recursively sort both sub-arrays. This is achieved by calling the Merge Sort function on both halves.
                    </li>
                    <li>
                        <strong>Merge:</strong> Combine the two sorted sub-arrays into a single sorted array. This is done by comparing the elements of both arrays 
                        and arranging them in order.
                    </li>
                </ol>
                <p style={styles.paragraph}>
                    The algorithm has a time complexity of <strong>O(n log n)</strong> in the average and worst cases, which makes it efficient for large datasets. 
                    Merge Sort is also a stable sort, meaning that it maintains the relative order of records with equal keys (i.e., equal elements).
                </p>
                <p style={styles.paragraph}>
                    One of the key features of Merge Sort is its auxiliary space requirement, which is <strong>O(n)</strong>. This means it requires additional memory 
                    proportional to the size of the input array to store the merged output. This can be a disadvantage in memory-constrained environments.
                </p>
                <p style={styles.paragraph}>
                    Merge Sort is often preferred over other sorting algorithms (like Quick Sort) when dealing with linked lists or large datasets 
                    that don't fit into memory, as it performs consistently well regardless of the initial order of elements.
                </p>
            </div>
            <a href="/" style={styles.button}>Back to Home</a>
        </div>
    );
};

const styles = {
    container: {
        background: 'linear-gradient(to right, #1e1e1e, #3e3e3e)', // Gradient background
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        width: '100%',
        maxWidth: '100vw',
        padding: '20px',
        boxSizing: 'border-box',
        position: 'relative',
        minHeight: '100vh',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)', // Shadow for depth
        overflow: 'hidden',
    },
    title: {
        textAlign: 'center',
        fontSize: '2.5em',
        marginBottom: '20px',
    },
    videoContainer: {
        margin: '20px 0',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', // Shadow for video
    },
    explanation: {
        marginTop: '20px',
    },
    subTitle: {
        fontSize: '2em',
        marginBottom: '10px',
        borderBottom: '2px solid #ffffff', // Underline for subtitle
        paddingBottom: '5px',
    },
    paragraph: {
        lineHeight: '1.6',
        fontSize: '1.1em',
        margin: '10px 0',
    },
    list: {
        marginLeft: '20px',
        marginBottom: '20px',
    },
    button: {
        display: 'inline-block',
        margin: '20px auto',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
        textAlign: 'center',
        transition: 'background-color 0.3s, transform 0.3s', // Animation effects
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    },
};

export default Tutorials_Sort;
