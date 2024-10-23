import { useState, useEffect } from "react";
import styles from "../../Stylesheets/Test.module.css"; // Import the CSS module

const questionsPool = [
  {
    question: "What is a linked list?",
    options: [
      "A linear collection of elements in memory",
      "A data structure where elements are stored in nodes with pointers",
      "A non-linear data structure",
      "A stack-based data structure",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is a type of linked list?",
    options: [
      "Single-ended linked list",
      "Doubly linked list",
      "Priority linked list",
      "Binary linked list",
    ],
    answer: 1,
  },
  {
    question:
      "What is the time complexity of inserting an element at the beginning of a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: 0,
  },
  {
    question: "How do you traverse a singly linked list?",
    options: [
      "From the last node to the first node",
      "From any node in random order",
      "From the first node to the last node",
      "In constant time",
    ],
    answer: 2,
  },
  {
    question: "Which of the following is true about a doubly linked list?",
    options: [
      "Each node has two pointers: next and previous",
      "Each node has only one pointer",
      "It is faster than an array for random access",
      "The memory usage is less compared to a singly linked list",
    ],
    answer: 0,
  },
  {
    question:
      "What is the space complexity of a singly linked list with n nodes?",
    options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
    answer: 0,
  },
  {
    question: "In a circular linked list, where does the last node point to?",
    options: [
      "The first node",
      "The next node in sequence",
      "The middle node",
      "Itself",
    ],
    answer: 0,
  },
  {
    question:
      "What is the advantage of a doubly linked list over a singly linked list?",
    options: [
      "Efficient traversal in both directions",
      "Uses less memory",
      "Better search time",
      "Easier to implement",
    ],
    answer: 0,
  },
  {
    question:
      "In which of the following operations is a linked list more efficient than an array?",
    options: [
      "Accessing elements",
      "Insertion at the beginning",
      "Finding the middle element",
      "Random access",
    ],
    answer: 1,
  },
  {
    question:
      "Which data structure is typically used to implement a linked list?",
    options: ["Queue", "Heap", "Node", "Binary Tree"],
    answer: 2,
  },
  {
    question:
      "Which of the following is a disadvantage of a singly linked list?",
    options: [
      "It requires more memory",
      "It is not dynamic",
      "It does not allow reverse traversal",
      "It cannot be used in real-world applications",
    ],
    answer: 2,
  },
  {
    question: "How do you remove the last node in a singly linked list?",
    options: [
      "By traversing the list and updating the next pointer of the second-last node",
      "By deleting the first node",
      "By deleting the next node",
      "By setting the previous pointer of the last node",
    ],
    answer: 0,
  },
  {
    question:
      "In a doubly linked list, what is the time complexity of deleting a node, given a reference to the node?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
    answer: 2,
  },
  {
    question: "What is a sentinel node in a linked list?",
    options: [
      "A node that does not store any data",
      "A node used as a placeholder to simplify the implementation of the list",
      "A node that stores two elements",
      "The last node in a doubly linked list",
    ],
    answer: 1,
  },
  {
    question: "What is the best use case for a circular linked list?",
    options: [
      "When you want to efficiently access the middle element",
      "When you need to implement a queue that wraps around",
      "When you need to reverse the list",
      "When memory is limited",
    ],
    answer: 1,
  },
  {
    question: "Which of the following can be used to implement a stack?",
    options: [
      "Array",
      "Singly linked list",
      "Doubly linked list",
      "All of the above",
    ],
    answer: 3,
  },
  {
    question:
      "What is the primary difference between a singly linked list and a doubly linked list?",
    options: [
      "A singly linked list uses less memory",
      "A singly linked list cannot store as many elements",
      "A doubly linked list allows traversal in both directions",
      "A doubly linked list is faster for all operations",
    ],
    answer: 2,
  },
  {
    question:
      "In a doubly linked list, what does the 'prev' pointer of the first node point to?",
    options: ["The last node", "Null", "The second node", "Itself"],
    answer: 1,
  },
  {
    question:
      "What is the time complexity of searching for an element in a singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: 2,
  },
  {
    question:
      "Which of the following operations is inefficient in a singly linked list?",
    options: [
      "Insertion at the head",
      "Insertion at the tail",
      "Searching for an element",
      "Traversal",
    ],
    answer: 2,
  },
  {
    question:
      "What happens when you try to access an element at an index in a singly linked list?",
    options: [
      "The element is retrieved in constant time",
      "The list is traversed to find the element",
      "The last element is returned",
      "An error is thrown",
    ],
    answer: 1,
  },
  {
    question:
      "Which of the following is true about a circular doubly linked list?",
    options: [
      "The last node points to the first node, and the first node points to the last node",
      "It can only be traversed in one direction",
      "The 'next' pointer of the last node points to null",
      "It uses more memory than a normal doubly linked list",
    ],
    answer: 0,
  },
  {
    question:
      "What is the main disadvantage of using a doubly linked list over a singly linked list?",
    options: [
      "Uses more memory",
      "Slower to access elements",
      "Difficult to implement",
      "Limited use cases",
    ],
    answer: 0,
  },
  {
    question:
      "Which of the following operations is most efficient in a circular linked list?",
    options: [
      "Insertion at the beginning",
      "Insertion at the end",
      "Traversing the list",
      "Accessing the middle element",
    ],
    answer: 1,
  },
  {
    question: "What is a header node in a linked list?",
    options: [
      "A node that contains data",
      "A dummy node used at the start of the list",
      "A node used for storing the last element",
      "A node used to link two lists",
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
        <b>Linked list MCQ Test</b>
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
