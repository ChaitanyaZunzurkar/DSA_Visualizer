import { useState, useEffect } from "react";
import styles from "../../Stylesheets/Test.module.css"; // Import the CSS module

const questionsPool = [
  {
    question: "What is a queue?",
    options: [
      "A linear data structure following LIFO principle",
      "A linear data structure following FIFO principle",
      "A non-linear data structure",
      "A collection of nodes",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is an application of queues?",
    options: ["Recursion", "Stack", "CPU scheduling", "Depth-first search"],
    answer: 2,
  },
  {
    question: "Which operation removes an element from the front of the queue?",
    options: ["Enqueue", "Dequeue", "Peek", "Insert"],
    answer: 1,
  },
  {
    question: "Which operation adds an element to the queue?",
    options: ["Push", "Enqueue", "Pop", "Dequeue"],
    answer: 1,
  },
  {
    question:
      "What is the time complexity of adding an element to a queue using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: 0,
  },
  {
    question: "Which of the following is NOT a type of queue?",
    options: [
      "Priority queue",
      "Circular queue",
      "Double-ended queue",
      "Tree queue",
    ],
    answer: 3,
  },
  {
    question: "What is a circular queue?",
    options: [
      "A queue where elements are arranged in a circular fashion",
      "A queue where the rear element wraps around to the front",
      "A queue where both ends are used for insertion and deletion",
      "A queue with infinite capacity",
    ],
    answer: 1,
  },
  {
    question: "In a normal queue, insertion happens at the:",
    options: ["Front", "Middle", "End", "Both ends"],
    answer: 2,
  },
  {
    question: "In a normal queue, deletion happens at the:",
    options: ["Front", "Middle", "End", "Both ends"],
    answer: 0,
  },
  {
    question:
      "What is the auxiliary space complexity of enqueuing an element in a queue?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: 0,
  },
  {
    question:
      "In a circular queue, if the front and rear are equal, the queue is:",
    options: ["Full", "Empty", "Half full", "Circular"],
    answer: 1,
  },
  {
    question:
      "What happens if you try to dequeue an element from an empty queue?",
    options: [
      "Overflow",
      "Underflow",
      "Nothing happens",
      "It restarts the queue",
    ],
    answer: 1,
  },
  {
    question:
      "Which of the following is an advantage of a circular queue over a normal queue?",
    options: [
      "It saves memory",
      "It allows insertion at both ends",
      "It allows resizing",
      "It eliminates empty spaces in the middle",
    ],
    answer: 3,
  },
  {
    question: "Which data structure can be used to implement a queue?",
    options: [
      "Array",
      "Linked list",
      "Both array and linked list",
      "Binary tree",
    ],
    answer: 2,
  },
  {
    question: "What is a double-ended queue (deque)?",
    options: [
      "A queue where insertion and deletion happen only at the rear",
      "A queue where insertion and deletion happen at both ends",
      "A queue where deletion happens at the front and insertion happens at the rear",
      "A queue where both ends are for deletion only",
    ],
    answer: 1,
  },
  {
    question:
      "Which of the following operations can be performed in O(1) time in a queue?",
    options: [
      "Enqueue",
      "Dequeue",
      "Both enqueue and dequeue",
      "None of the above",
    ],
    answer: 2,
  },
  {
    question:
      "Which type of queue is useful in implementing breadth-first search (BFS)?",
    options: [
      "Circular queue",
      "Double-ended queue",
      "Priority queue",
      "Simple queue",
    ],
    answer: 3,
  },
  {
    question: "In a priority queue, elements are dequeued based on:",
    options: [
      "Arrival order",
      "Priority",
      "Time complexity",
      "Random selection",
    ],
    answer: 1,
  },
  {
    question:
      "What happens when you try to enqueue an element in a full queue?",
    options: ["Overflow", "Underflow", "Nothing happens", "Queue wraps around"],
    answer: 0,
  },
  {
    question:
      "What is the time complexity of deleting an element from a priority queue implemented with a heap?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: 2,
  },
  {
    question:
      "Which of the following real-life scenarios can be modeled as a queue?",
    options: [
      "A stack of plates",
      "A line of people waiting to buy tickets",
      "Sorting numbers",
      "Reversing a string",
    ],
    answer: 1,
  },
  {
    question: "In a queue, the first element to be dequeued is:",
    options: [
      "The most recently added element",
      "The first element added",
      "The middle element",
      "None of the above",
    ],
    answer: 1,
  },
  {
    question: "In a priority queue, which element is dequeued first?",
    options: [
      "The element with the highest priority",
      "The element with the lowest priority",
      "The most recently added element",
      "The first element added",
    ],
    answer: 0,
  },
  {
    question: "Which of the following algorithms uses a queue data structure?",
    options: [
      "Depth-first search (DFS)",
      "Breadth-first search (BFS)",
      "Dijkstra's algorithm",
      "Prim's algorithm",
    ],
    answer: 1,
  },
  {
    question:
      "Which of the following is an advantage of using a linked list over an array to implement a queue?",
    options: [
      "Constant-time access",
      "Dynamic memory allocation",
      "Fixed memory size",
      "Better search time",
    ],
    answer: 1,
  },
];

const StacksTest = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    // Shuffle and select 10 questions from a pool of 25 questions
    const shuffledQuestions = [...questionsPool]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
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
      <h2 className={styles.heading}>
        <b>Queues MCQ Test</b>
      </h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className={styles.questionContainer}>
            <p>
              <b>
                {questionIndex + 1}. {question.question}
              </b>
            </p>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${questionIndex}`}
                      checked={answers[questionIndex] === optionIndex}
                      onChange={() =>
                        handleOptionSelect(questionIndex, optionIndex)
                      }
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>

            {showFeedback && getFeedback(questionIndex)}
          </div>
        ))}
        <button className={styles.submitButton} onClick={handleSubmit}>
          Submit Test
        </button>

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
