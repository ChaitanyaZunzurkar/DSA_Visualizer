import React, { useState, useEffect } from 'react';

// Merge Sort Visualization Component
const MergeSortVisualization = () => {
    const [array, setArray] = useState([]);
    const [sorting, setSorting] = useState(false);

    // Generate a random array of numbers
    const generateArray = () => {
        const newArray = [];
        for (let i = 0; i < 20; i++) {
            newArray.push(Math.floor(Math.random() * 100));
        }
        setArray(newArray);
    };

    // Merge function to combine two sorted arrays
    const merge = (left, right) => {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;

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
    };

    // Recursive function to perform merge sort
    const mergeSort = async (arr) => {
        if (arr.length <= 1) return arr;

        const middle = Math.floor(arr.length / 2);
        const left = await mergeSort(arr.slice(0, middle));
        const right = await mergeSort(arr.slice(middle));

        const merged = merge(left, right);
        setArray(merged);
        return merged;
    };

    // Handle sort button click
    const handleSort = async () => {
        setSorting(true);
        await mergeSort(array);
        setSorting(false);
    };

    useEffect(() => {
        generateArray(); // Generate the initial array when component mounts
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                {array.map((value, index) => (
                    <div
                        key={index}
                        style={{
                            height: `${value * 2}px`,
                            width: '20px',
                            backgroundColor: '#4caf50',
                            margin: '0 2px',
                            transition: 'height 0.5s',
                        }}
                    />
                ))}
            </div>
            <button onClick={handleSort} disabled={sorting}>
                {sorting ? 'Sorting...' : 'Sort'}
            </button>
            <button onClick={generateArray} disabled={sorting}>
                Generate New Array
            </button>
        </div>
    );
};

export default MergeSortVisualization;
