import { useState, useEffect } from 'react';
import styles from '../../Stylesheets/Test.module.css'; // Import the CSS module
const space='          ';
const questionsPool = [
    {
        question: "What is a stack?",
        options: ["A linear data structure", "A collection of nodes", "A non-linear data structure", "None of the above"],
        answer: 0,
    },
    {
        question: "Which operation is performed last in a stack?",
        options: ["Push", "Pop", "Peek", "Insertion"],
        answer: 1,
    },
    {
        question: "What is the time complexity of pushing an element in a stack?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        answer: 0,
    },
    {
        question: "Which of the following uses a stack?",
        options: ["Recursion", "Queue", "Tree Traversal", "Heap"],
        answer: 0,
    },
    {
        question: "What is the principle of a stack?",
        options: ["FIFO", "LIFO", "LILO", "None"],
        answer: 1,
    },
    {
        question: "What is the top of a stack?",
        options: [
            "The element at the front", 
            "The element at the end", 
            "The last pushed element", 
            "None of the above"
        ],
        answer: 2,
    },
    {
        question: "Which method removes the top element in a stack?",
        options: [
            "Pop", 
            "Push", 
            "Peek", 
            "None of the above"
        ],
        answer: 0,
    },
    {
        question: "How do you check if a stack is empty?",
        options: [
            "Check if top is -1", 
            "Check if top is 0", 
            "Check if stack is full", 
            "None of the above"
        ],
        answer: 0,
    },
    {
        question: "Which application does NOT use a stack?",
        options: [
            "Function calls", 
            "Expression evaluation", 
            "Backtracking", 
            "Queues"
        ],
        answer: 3,
    },
    {
        question: "How can you reverse a stack?",
        options: ["Using recursion", "Using loops", "Both", "None"],
        answer: 2,
    },
    {
        question: "What is the main advantage of using a stack?",
        options: [
            "Efficient memory usage", 
            "LIFO order of operations", 
            "FIFO order of operations", 
            "Handles priority-based tasks"
        ],
        answer: 1,
    },
    {
        question: "What is a stack overflow?",
        options: [
            "When a stack becomes full", 
            "When too many elements are popped", 
            "When stack size exceeds memory limit", 
            "When an element is pushed beyond the capacity"
        ],
        answer: 3,
    },
    {
        question: "Which of the following is not a valid stack operation?",
        options: ["Push", "Pop", "Insert", "Peek"],
        answer: 2,
    },
    {
        question: "In a stack, where is the last element pushed stored?",
        options: ["At the bottom", "At the middle", "At the top", "In a queue"],
        answer: 2,
    },
    {
        question: "What is the size of a stack if its capacity is not defined?",
        options: ["Infinity", "Undefined", "Zero", "Depends on system memory"],
        answer: 3,
    },
    {
        question: "Which function adds an element to the stack?",
        options: ["Pop", "Peek", "Push", "Top"],
        answer: 2,
    },
    {
        question: "What does the 'Peek' function do in a stack?",
        options: [
            "Adds an element", 
            "Removes an element", 
            "Returns the top element without removing it", 
            "Checks if the stack is full"
        ],
        answer: 2,
    },
    {
        question: "What is the main feature of a circular stack?",
        options: [
            "Allows overflow", 
            "Top wraps around to the bottom", 
            "Bottom wraps around to the top", 
            "Both insertion and deletion happen at the top"
        ],
        answer: 1,
    },
    {
        question: "What is the minimum number of stacks required to implement a queue?",
        options: ["1", "2", "3", "4"],
        answer: 1,
    },
    {
        question: "What is the auxiliary space complexity of pushing an element onto the stack?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        answer: 0,
    },
    {
        question: "Which of the following can be used to convert infix to postfix expression?",
        options: ["Queue", "Stack", "Tree", "Array"],
        answer: 1,
    },
    {
        question: "What happens if you pop an empty stack?",
        options: [
            "Underflow", 
            "Overflow", 
            "Nothing happens", 
            "Stack becomes negative"
        ],
        answer: 0,
    },
    {
        question: "Which of the following is not a type of stack?",
        options: [
            "Array-based stack", 
            "Dynamic stack", 
            "Linked list-based stack", 
            "Recursive stack"
        ],
        answer: 3,
    },
    {
        question: "Which of the following operations are performed in constant time in a stack?",
        options: ["Pop", "Push", "Peek", "All of the above"],
        answer: 3,
    },
    {
        question: "In stack implementation, which pointer points to the current top element?",
        options: ["Front", "Back", "Top", "Bottom"],
        answer: 2,
    }
];

const StacksTest = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState(Array(10).fill(null));
    const [showFeedback, setShowFeedback] = useState(false);
    const [score, setScore] = useState(null);

    useEffect(() => {
        // Shuffle and select 10 questions from a pool of 25 questions
        const shuffledQuestions = [...questionsPool].sort(() => 0.5 - Math.random()).slice(0, 10);
        setQuestions(shuffledQuestions);
    }, []);

    const handleOptionSelect = (questionIndex, optionIndex) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = optionIndex;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        setShowFeedback(true);
        calculateScore();
    };

    const calculateScore = () => {
        let calculatedScore = 0;
        questions.forEach((question, index) => {
            if (answers[index] === question.answer) {
                calculatedScore++;
            }
        });
        setScore(calculatedScore);
    };

    const getFeedback = (questionIndex) => {
        const correctAnswer = questions[questionIndex].answer;
        const userAnswer = answers[questionIndex];

        if (userAnswer === null) return null;
        if (userAnswer === correctAnswer) {
            return <p className={styles.correct}>Correct!</p>;
        } else {
            return <p className={styles.wrong}>Wrong!</p>;
        }
    };

    return (
        <div className={styles.testContainer}>
            <h2 className={styles.heading}><b>Stacks MCQ Test</b></h2>
            <form onSubmit={(e) => e.preventDefault()}>
                {questions.map((question, questionIndex) => (
                    <div key={questionIndex} className={styles.questionContainer}>
{/* added a space */}
                        <p><b>{questionIndex +1 }.  {question.question}</b></p> 
                        <ul>
                            {question.options.map((option, optionIndex) => (
                                <li key={optionIndex}>
                                    <label>
                                        <input
                                            type="radio"
                                            name={`question-${questionIndex}`}
                                            checked={answers[questionIndex] === optionIndex}
                                            onChange={() => handleOptionSelect(questionIndex, optionIndex)}
                                        />{space}{ option}
                                    </label>
                                </li>
                            ))}
                        </ul>

                        {showFeedback && getFeedback(questionIndex)}
                    </div>
                ))}
                <button className={styles.submitButton} onClick={handleSubmit}>Submit Test</button>

                {showFeedback && score !== null && (
                    <div className={styles.finalScore}>
                        <h2>Your Final Score: {score}/10</h2>
                    </div>
                )}
            </form>
        </div>
    );
};

export default StacksTest;
