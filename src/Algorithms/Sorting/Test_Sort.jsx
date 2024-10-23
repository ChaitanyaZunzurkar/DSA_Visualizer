import { useState } from "react";
const Test_Sort = () => {
const questions = [
{
question: "What is the time complexity of Merge Sort in the worst case?",
options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
answer: "O(n log n)",
explanation: "Merge Sort has a worst-case time complexity of O(n log n) due to its divide-and-conquer strategy."
},
{
question: "Which of the following is true about Merge Sort?",
options: ["It is not a stable sort", "It is an in-place sort", "It divides the array in half", "It is faster than Quick Sort for small datasets"],
answer: "It divides the array in half",
explanation: "Merge Sort divides the array into halves recursively until each sub-array contains a single element."
},
{
question: "What is the space complexity of Merge Sort?",
options: ["O(1)", "O(n)", "O(n log n)", "O(log n)"],
answer: "O(n)",
explanation: "Merge Sort requires O(n) additional space for the temporary arrays used during the merge process."
},
{
question: "In which case is Merge Sort preferred over Quick Sort?",
options: ["When memory usage is critical", "When stability is required", "For small datasets", "When data is already sorted"],
answer: "When stability is required",
explanation: "Merge Sort is a stable sorting algorithm, meaning it maintains the relative order of equal elements."
},
{
question: "What is the primary mechanism of Merge Sort?",
options: ["Merging sorted arrays", "Partitioning data", "Insertion into the correct position", "Selecting a pivot"],
answer: "Merging sorted arrays",
explanation: "Merge Sort works by recursively splitting the array into smaller sub-arrays and then merging them back together in sorted order."
},
{
question: "What is the best case time complexity of Merge Sort?",
options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
answer: "O(n log n)",
explanation: "The best case time complexity for Merge Sort is also O(n log n), as it always divides and merges."
}
];
const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
const [submitted, setSubmitted] = useState(false);
const handleOptionChange = (index, value) => {
const updatedAnswers = [...selectedAnswers];
updatedAnswers[index] = value;
setSelectedAnswers(updatedAnswers);
};
const submitAnswers = () => {
setSubmitted(true);
};
const retakeQuiz = () => {
setSelectedAnswers(Array(questions.length).fill(null));
setSubmitted(false);
};
return (
<div style={styles.container}>
<h1 style={styles.title}>Merge Sort Quiz</h1>
<div style={styles.quizContainer}>
{questions.map((q, index) => (
<div key={index} style={styles.question}>
<p style={styles.questionText}>{q.question}</p>
<ul style={styles.options}>
{q.options.map(option => (
<li key={option} style={styles.option}>
<label>
<input
type="radio"
name={`question-${index}`}
value={option}
checked={selectedAnswers[index] === option}
onChange={() => handleOptionChange(index, option)}
disabled={submitted}
style={styles.radio}
/>
{option}
</label>
</li>
))}
</ul>
{submitted && (
<div style={styles.feedback}>
{selectedAnswers[index] === q.answer ? (
<span style={styles.correct}>You are correct!</span>
) : selectedAnswers[index] ? (
<span style={styles.incorrect}>
Incorrect! <strong>Correct answer:</strong> {q.answer}. {q.explanation}
</span>
) : null}
</div>
)}
</div>
))}
</div>
<button style={styles.submitButton} onClick={submitAnswers}>
Submit Answers
</button>
{submitted && (
<button style={styles.retestButton} onClick={retakeQuiz}>
Retest
</button>
)}
</div>
);
};
const styles = {
container: {
backgroundColor: '#f9f9f9', // Light background color
color: '#333333', // Dark text for contrast
fontFamily: 'Arial, sans-serif',
width: '100vw',
maxWidth: '100vw',
padding: '20px',
borderRadius: '8px',
boxSizing: 'border-box',
position: 'relative',
minHeight: '100vh',
overflowY: 'auto', // Add scrollbar if content overflows
maxHeight: '100vh', // Set max height to viewport height
},
title: {
textAlign: 'center',
color: '#4CAF50', // Green for the title
marginBottom: '20px',
},
quizContainer: {
maxHeight: '70vh', // Limit the height of the quiz container
overflowY: 'auto', // Allow scrolling for the quiz container
paddingRight: '10px', // Add padding to avoid content touching scrollbar
},
question: {
margin: '20px 0',
padding: '10px',
border: '1px solid #ddd', // Light gray border for question boxes
borderRadius: '5px',
backgroundColor: '#ffffff', // White background for questions
},
questionText: {
fontWeight: 'bold',
},
options: {
listStyleType: 'none',
padding: 0,
},
option: {
margin: '10px 0',
},
feedback: {
margin: '10px 0',
fontWeight: 'bold',
},
correct: {
color: '#4CAF50', // Green for correct answers
},
incorrect: {
color: '#f44336', // Red for incorrect answers
},
submitButton: {
backgroundColor: '#007bff', // Blue for submit button
color: 'white',
padding: '10px',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
display: 'block',
margin: '10px auto', // Center the button
},
retestButton: {
backgroundColor: '#ff9800', // Orange color for retest
color: 'white',
padding: '10px',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
display: 'block',
margin: '10px auto', // Center the button
},
radio: {
marginRight: '10px', // Space between radio and label
accentColor: '#007bff', // Light theme accent color for radio buttons
},
};
export default Test_Sort; 
