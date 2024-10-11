import React from 'react';

const Aim_Sort = () => {
    
    const containerStyle = {
        padding: '20px',
        backgroundColor: '#1e1e1e',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        maxWidth: '90vw',
        height: '90vh',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif',
        overflowY: 'auto',
        color: '#e0e0e0',
    };

    const headingStyle = {
        color: '#5bbaea',
        marginBottom: '10px',
        borderBottom: '2px solid #4CAF50',
        paddingBottom: '10px',
        textAlign: 'center',
        fontSize: '28px',
    };

    const subHeadingStyle = {
        color: '#4CAF50',
        margin: '20px 0',
        fontSize: '22px',
    };

    const listStyle = {
        marginLeft: '20px',
        listStyleType: 'disc',
    };

    const textStyle = {
        lineHeight: '1.6',
        marginBottom: '20px',
    };

    const SortingIntro = () => {
        return (
            <div style={{ margin: '20px' }}>
                <h1 style={headingStyle}>Introduction to Sorting</h1>
                <p style={textStyle}>
                    Sorting is one of the most fundamental operations in computer science. It involves arranging data in a specific order, typically either ascending or descending. 
                    The purpose of sorting is to organize information in a way that makes it easier to analyze, search, or display. Sorting plays a key role in algorithms and systems, 
                    enhancing the efficiency of many tasks, including data retrieval, optimization, and processing.
                </p>

                <h2 style={subHeadingStyle}>What is Merge Sort?</h2>
                <p style={textStyle}>
                    <b>Merge Sort</b> is a classic sorting algorithm that follows the <i>divide-and-conquer</i> paradigm. It was first developed by John von Neumann in 1945. 
                    Merge Sort divides the input array into two halves, recursively sorts the two halves, and finally merges them back together. This merge process ensures 
                    the result is in sorted order. Unlike many other algorithms, Merge Sort guarantees a consistent time complexity of O(n log n), regardless of the input configuration.
                </p>

                <p style={textStyle}>
                    What sets Merge Sort apart is its stability, which ensures that records with the same keys appear in the same order in the sorted output as they did in the unsorted input. 
                    This makes it particularly useful in applications where maintaining the relative order of equal elements is crucial, such as database management or task scheduling systems.
                </p>

                <h3 style={subHeadingStyle}>Steps Involved in Merge Sort:</h3>
                <ol style={{ ...listStyle, marginBottom: '20px' }}>
                    <li>Divide the input array into two halves.</li>
                    <li>Recursively sort each half until each sub-array contains only a single element.</li>
                    <li>Merge the two sorted halves into a single sorted array, using a temporary auxiliary array during the merge process.</li>
                </ol>

                <h3 style={subHeadingStyle}>How Does the Merge Process Work?</h3>
                <p style={textStyle}>
                    During the merge process, two sorted arrays are combined into one sorted array. This step takes linear time, or O(n), where n is the total number of elements in the two arrays being merged. 
                    The merging phase compares the smallest unprocessed elements from each array and places the smaller of the two into the result array, continuing this until all elements from both arrays have been processed.
                </p>

                <h3 style={subHeadingStyle}>Key Characteristics of Merge Sort:</h3>
                <ul style={listStyle}>
                    <li><b>Time Complexity:</b> O(n log n) in the worst, best, and average cases. This is due to the log n divisions and linear merging at each level.</li>
                    <li><b>Space Complexity:</b> O(n) because it requires additional space proportional to the size of the array being sorted, due to the auxiliary array used during merging.</li>
                    <li><b>Stability:</b> Merge Sort is stable, meaning it preserves the relative order of elements with equal keys, which can be important in certain applications.</li>
                    <li><b>Efficiency:</b> While Merge Sort guarantees a time complexity of O(n log n), it may not be as efficient as in-place algorithms like Quick Sort for smaller datasets due to its higher space complexity.</li>
                </ul>

                <h3 style={subHeadingStyle}>Advantages and Disadvantages:</h3>
                <p style={textStyle}>
                    <b>Advantages:</b>
                    <ul style={listStyle}>
                        <li>Merge Sort is highly efficient for large datasets due to its O(n log n) complexity.</li>
                        <li>It is stable, making it suitable for applications where the order of equal elements matters.</li>
                        <li>It works well with linked lists, as the merging process can be done without additional space.</li>
                    </ul>
                </p>
                <p style={textStyle}>
                    <b>Disadvantages:</b>
                    <ul style={listStyle}>
                        <li>Merge Sort requires O(n) extra space for arrays, which may not be suitable for memory-constrained environments.</li>
                        <li>It is not an in-place sorting algorithm, which can make it less efficient when space is limited.</li>
                    </ul>
                </p>

                <h3 style={subHeadingStyle}>Real-World Applications:</h3>
                <p style={textStyle}>
                    Merge Sort is used in various real-world applications where stable and predictable sorting is needed. 
                    For example, in external sorting (sorting large datasets that don’t fit into memory), Merge Sort is preferred due to its consistent performance and ability to handle large datasets efficiently. 
                    It is also used in various database systems and file management systems where stable sorting is necessary.
                </p>

                <p style={textStyle}>
                    Overall, Merge Sort remains a key algorithm in the world of computer science, particularly for tasks requiring stable sorting with guaranteed O(n log n) time complexity.
                </p>
            </div>
        );
    };

    return (
        <div style={containerStyle}>
            <SortingIntro />
        </div>
    );
};

export default Aim_Sort;
