import React, { useState, useEffect } from "react";
const Visualization_Sort = () => {
const [array, setArray] = useState([]);
const [isSorting, setIsSorting] = useState(false);
const [delay, setDelay] = useState(1000);
const [hasPressedStop, setHasPressedStop] = useState(false);
const [sortedIndexes, setSortedIndexes] = useState(new Set()); // Track sorted indexes
const [comparedIndexes, setComparedIndexes] = useState([]); // Track compared indexes
useEffect(() => {
createNewArray(20); // Set initial number of bars to 20
}, []);
const createNewArray = (noOfBars = 20) => {
const newArray = Array.from({ length: noOfBars }, () =>
Math.floor(Math.random() * 251)
);
setArray(newArray);
setSortedIndexes(new Set()); // Reset sorted indexes
setComparedIndexes([]); // Reset compared indexes
setIsSorting(false); // Reset sorting state when creating a new array
};
const delayTime = (milisec) => {
return new Promise((resolve) => setTimeout(resolve, milisec));
};
const merge = async (low, mid, high) => {
const left = array.slice(low, mid + 1);
const right = array.slice(mid + 1, high + 1);
let i = 0;
let j = 0;
let k = low;
while (i < left.length && j < right.length) {
if (hasPressedStop) return;
setComparedIndexes([k, j + mid + 1]); // Track the compared bars
await delayTime(delay);
if (left[i] <= right[j]) {
array[k] = left[i];
sortedIndexes.add(k); // Mark as sorted
i++;
} else {
array[k] = right[j];
sortedIndexes.add(k); // Mark as sorted
j++;
}
setSortedIndexes(new Set(sortedIndexes)); // Re-render with updated sorted indexes
setArray([...array]); // Update array for rendering
k++;
}
while (i < left.length) {
if (hasPressedStop) return;
setComparedIndexes([k, i + low]); // Track compared bars
await delayTime(delay);
array[k] = left[i];
sortedIndexes.add(k); // Mark as sorted
setSortedIndexes(new Set(sortedIndexes)); // Re-render with updated sorted indexes
setArray([...array]); // Update array for rendering
i++;
k++;
}
while (j < right.length) {
if (hasPressedStop) return;
setComparedIndexes([k, j + mid + 1]); // Track compared bars
await delayTime(delay);
array[k] = right[j];
sortedIndexes.add(k); // Mark as sorted
setSortedIndexes(new Set(sortedIndexes)); // Re-render with updated sorted indexes
setArray([...array]); // Update array for rendering
j++;
k++;
}
// Clear the comparedIndexes after merging is done
setComparedIndexes([]);
};
const mergeSort = async (l, r) => {
if (l < r) {
const m = Math.floor((l + r) / 2);
await mergeSort(l, m);
await mergeSort(m + 1, r);
await merge(l, m, r);
}
};
const handleSort = async () => {
setIsSorting(true);
setHasPressedStop(false);
await mergeSort(0, array.length - 1);
setIsSorting(false);
};
return (
<div className="app" style={{ backgroundColor: "#283747", borderRadius: "20px",
height: "100vh", color: "#e0e0e0" }}>
<div className="controls">
<button onClick={handleSort} disabled={isSorting}>
Merge Sort
</button>
<input
type="range"
min="100"
max="5000"
value={delay}
onChange={(e) => setDelay(e.target.value)}
disabled={isSorting}
/>
<span>Speed: {delay} ms</span>
</div>
<div className="flex-container">
{array.map((value, index) => (
<div
key={index}
className="bar"
style={{
background: comparedIndexes.includes(index)
? "green" // Green color for bars being compared
: sortedIndexes.has(index)
? "brown" // Brown color for sorted bars
: "#f43f5a", // Default red color for unsorted bars
height: `${value * 2}px`,
}}
>
<span className="bar-value">{value}</span> {/* Show the bar's value */}
</div>
))}
</div>
<style>
{`
/* General App Styles */
body {
margin: 0;
padding: 0;
font-family: Arial, sans-serif;
background-color: #0d0d0d; /* Dark theme background */
color: #e0e0e0; /* Light text color */
}
.app {
text-align: center;
padding: 20px;
}
/* Controls Styling */
.controls {
margin-bottom: 20px;
}
button {
background-color: #1f4068;
color: white;
border: none;
padding: 10px 20px;
margin-right: 10px;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease;
}
button:disabled {
background-color: #2b2e4a;
cursor: not-allowed;
}
button:hover:not(:disabled) {
background-color: #1b6ca8;
}
input[type="range"] {
width: 200px;
margin-left: 10px;
}
span {
margin-left: 10px;
color: #1b6ca8;
font-size: 20px;
font-weight:700;
}
/* Flex Container and Bar Styling */
.flex-container {
display: flex;
justify-content: center;
align-items: flex-end;
height: 600px;
padding: 10px;
}
.bar {
position: relative; /* Set relative positioning */
width: 2em;
margin: 0 2px;
min-height: 20px;
transition: height 0.5s ease, background 0.5s ease;
background-color: #f65f5c;
border-radius: 3px 3px 0 0;
}
.bar:hover {
opacity: 0.8;
}
/* Bar value styling */
.bar-value {
position: absolute;
top: 50%; /* Center the text vertically */
left: 20%; /* Center the text horizontally */
transform: translate(-50%, -50%); /* Adjust position to center */
color: black; /* Change color to black for better visibility */
font-weight: bold;
font-size: 18px; /* Increase font size for visibility */
}
/* Dark theme accent colors */
.bar {
background-color: #e43f5a;
}
`}
</style>
</div>
);
};
export default Visualization_Sort; 

