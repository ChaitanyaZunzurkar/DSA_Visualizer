import { useState, useEffect } from "react";
import styles from "../../Stylesheets/Test.module.css";

const questionsPool = [
  {
    question: "What is the primary purpose of hashing?",
    options: [
      "Sorting data",
      "Searching data efficiently",
      "Compressing data",
      "Encrypting data",
    ],
    answer: 1,
  },
  {
    question: "What is a hash function?",
    options: [
      "A function that compresses data",
      "A function that maps data to a fixed-size value",
      "A function that sorts data",
      "A function that encrypts data",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is NOT a collision resolution technique?",
    options: ["Linear probing", "Chaining", "Double hashing", "Sorting"],
    answer: 3,
  },
  {
    question: "What is a hash table?",
    options: [
      "A data structure that stores elements in a binary tree",
      "A data structure that maps keys to values using a hash function",
      "A list of sorted data",
      "A way of encrypting data",
    ],
    answer: 1,
  },
  {
    question: "Which collision resolution method uses linked lists?",
    options: [
      "Linear probing",
      "Chaining",
      "Double hashing",
      "Quadratic probing",
    ],
    answer: 1,
  },
  {
    question: "What happens when two keys hash to the same value?",
    options: [
      "A collision occurs",
      "They are sorted",
      "The data is lost",
      "The table is resized",
    ],
    answer: 0,
  },
  {
    question:
      "In linear probing, how is the next slot chosen in case of a collision?",
    options: [
      "At random",
      "By incrementing to the next available slot",
      "Using a linked list",
      "By dividing the key",
    ],
    answer: 1,
  },
  {
    question:
      "Which of the following hashing techniques ensures a uniform distribution of keys?",
    options: [
      "Linear probing",
      "Chaining",
      "Perfect hashing",
      "Quadratic probing",
    ],
    answer: 2,
  },
  {
    question: "What is the load factor in a hash table?",
    options: [
      "The ratio of the number of elements to the size of the table",
      "The number of collisions",
      "The length of the longest chain",
      "The amount of data a hash table can store",
    ],
    answer: 0,
  },
  {
    question:
      "What is the time complexity of searching for an element in a hash table (with no collisions)?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
    answer: 2,
  },
  {
    question: "Which of the following is NOT an advantage of using hashing?",
    options: [
      "Efficient searching",
      "Efficient insertion",
      "Easy to maintain sorted order",
      "Constant time access in average cases",
    ],
    answer: 2,
  },
  {
    question: "In which scenario does double hashing help?",
    options: [
      "When multiple collisions occur",
      "When load factor is low",
      "When rehashing is needed",
      "When memory is full",
    ],
    answer: 0,
  },
  {
    question: "What is a primary issue with linear probing?",
    options: [
      "Long search times",
      "Memory waste",
      "Clustering of keys",
      "Difficulty in finding free slots",
    ],
    answer: 2,
  },
  {
    question:
      "Which of the following is an ideal property of a good hash function?",
    options: [
      "Minimizes collisions",
      "Uses the same key for all data",
      "Maximizes collisions",
      "Uses very large hash values",
    ],
    answer: 0,
  },
  {
    question: "What does rehashing do in a hash table?",
    options: [
      "Resolves a collision by recomputing the hash function",
      "Increases the size of the table and rehashes existing keys",
      "Deletes old keys",
      "Encrypts the data",
    ],
    answer: 1,
  },
  {
    question:
      "In which of the following does quadratic probing differ from linear probing?",
    options: [
      "The hash function used",
      "The way collisions are resolved",
      "The size of the hash table",
      "The way slots are searched",
    ],
    answer: 1,
  },
  {
    question:
      "What is the worst-case time complexity for searching an element in a hash table with collisions?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    answer: 1,
  },
  {
    question: "What is an open addressing method in hash tables?",
    options: [
      "A method where collisions are resolved using linked lists",
      "A method where collisions are resolved by finding another open slot",
      "A method where hash tables are dynamically resized",
      "A method where hash values are encrypted",
    ],
    answer: 1,
  },
  {
    question: "What is the main problem with chaining in hash tables?",
    options: [
      "Too many collisions",
      "Wastes memory",
      "May cause long linked lists",
      "Is slower than linear probing",
    ],
    answer: 2,
  },
  {
    question:
      "Which of the following is an example of a perfect hash function?",
    options: [
      "A function that results in the same hash value for all keys",
      "A function that generates no collisions",
      "A function that generates multiple hash values",
      "A function that uses quadratic probing",
    ],
    answer: 1,
  },
  {
    question:
      "Which of the following is NOT a disadvantage of open addressing?",
    options: [
      "Higher memory usage",
      "Primary clustering",
      "Performance degrades with increasing load factor",
      "Difficulty in deletion",
    ],
    answer: 0,
  },
  {
    question: "What is coalesced hashing?",
    options: [
      "A type of hashing that combines separate chaining with open addressing",
      "A method of deleting elements in a hash table",
      "A method of resolving collisions by using a secondary hash function",
      "A way of storing the hash table on disk",
    ],
    answer: 0,
  },
  {
    question: "What is the difference between a hash table and a hash map?",
    options: [
      "Hash table is synchronized, hash map is not",
      "Hash map is faster than a hash table",
      "Hash map stores key-value pairs",
      "Hash table uses chaining, hash map does not",
    ],
    answer: 0,
  },
  {
    question: "What is a universal hash function?",
    options: [
      "A function that produces the same hash for all keys",
      "A function that minimizes the probability of collisions",
      "A function that encrypts the data",
      "A function that uses multiple hash functions",
    ],
    answer: 1,
  },
  {
    question:
      "What is the time complexity for inserting an element into a hash table with a good hash function?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: 0,
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
        <b>Hashing MCQ Test</b>
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