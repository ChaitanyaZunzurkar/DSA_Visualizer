import React from 'react';

const Articles_Sort= () => {
    // Styles for the dark-themed container, headings, text, and sections
    const containerStyle = {
        padding: '40px',
        backgroundColor: '#1e1e1e',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        maxWidth: '85vw',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif',
        color: '#e0e0e0',
        lineHeight: '1.8',
    };

    const headingStyle = {
        color: '#5bbaea',
        marginBottom: '10px',
        borderBottom: '2px solid #4CAF50',
        paddingBottom: '10px',
        fontSize: '36px',
        textAlign: 'center',
    };

    const sectionHeadingStyle = {
        color: '#4CAF50',
        marginTop: '30px',
        marginBottom: '15px',
        fontSize: '28px',
    };

    const subHeadingStyle = {
        color: '#f9a825',
        marginTop: '20px',
        marginBottom: '10px',
        fontSize: '22px',
    };

    const listStyle = {
        marginLeft: '40px',
        marginBottom: '20px',
        listStyleType: 'disc',
    };

    const textStyle = {
        marginBottom: '20px',
    };

    const codeBlockStyle = {
        backgroundColor: '#2d2d2d',
        padding: '15px',
        borderRadius: '5px',
        color: '#8ae234',
        fontFamily: 'Courier New, monospace',
        marginBottom: '20px',
    };

    const ArticleContent = () => {
        return (
            <div style={{ margin: '20px' }}>
                <h1 style={headingStyle}>Merge Sort: An Efficient Sorting Algorithm</h1>

                <p style={textStyle}>
                    Merge Sort is a sorting algorithm that follows the divide-and-conquer approach. Developed by John von Neumann in 1945, it is known for its efficiency with a time complexity of O(n log n) in all cases.
                </p>

                <section>
                    <h2 style={sectionHeadingStyle}>How Merge Sort Works</h2>
                    <p style={textStyle}>
                        Merge Sort divides an array into smaller sub-arrays, sorts them individually, and merges them back together. The process continues recursively until each sub-array has a single element.
                    </p>
                </section>

                <section>
                    <h2 style={sectionHeadingStyle}>Implementation of Merge Sort</h2>
                    <p style={textStyle}>
                        Below is a simple implementation of Merge Sort in JavaScript:
                    </p>
                    <div style={codeBlockStyle}>
                        <pre>
                            {`function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}`}
                        </pre>
                    </div>
                </section>

                <section>
                    <h2 style={sectionHeadingStyle}>Time and Space Complexity</h2>
                    <p style={textStyle}>
                        Merge Sort consistently has a time complexity of O(n log n), making it efficient for large datasets, but its space complexity is O(n) due to the additional arrays used during merging.
                    </p>
                </section>

                <section>
                    <h2 style={sectionHeadingStyle}>Advantages and Disadvantages</h2>
                    <h3 style={subHeadingStyle}>Advantages</h3>
                    <ul style={listStyle}>
                        <li>Stable sorting algorithm.</li>
                        <li>Predictable O(n log n) time complexity.</li>
                        <li>Efficient for large datasets and external sorting.</li>
                    </ul>

                    <h3 style={subHeadingStyle}>Disadvantages</h3>
                    <ul style={listStyle}>
                        <li>Higher space complexity than in-place algorithms.</li>
                        <li>Not as fast as Quick Sort for smaller datasets.</li>
                    </ul>
                </section>

                <section>
                    <h2 style={sectionHeadingStyle}>Conclusion</h2>
                    <p style={textStyle}>
                        Merge Sort is a reliable sorting algorithm, particularly suited for large datasets and situations requiring stability. Its efficiency and predictable performance make it a popular choice among developers.
                    </p>
                </section>
            </div>
        );
    };

    return (
        <div style={containerStyle}>
            <ArticleContent />
        </div>
    );
};

export default Articles_Sort;
