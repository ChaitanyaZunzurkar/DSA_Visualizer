import { useState, useEffect } from "react";
import styles from "../../Stylesheets/Test.module.css"; // Import the CSS module

const questionsPool = [
  {
    question: "What type of algorithm is merge sort?",
    options: [
      "Greedy",
      "Divide and Conquer",
      "Dynamic Programming",
      "Backtracking",
    ],
    answer: 1,
  },
  {
    question: "What is the worst-case time complexity of merge sort?",
    options: ["O(n^2)", "O(n log n)", "O(log n)", "O(n)"],
    answer: 1,
  },
  {
    question: "What is the primary step in merge sort?",
    options: [
      "Divide the array into smaller subarrays",
      "Pick the pivot",
      "Compare all elements",
      "Swap elements",
    ],
    answer: 0,
  },
  {
    question: "What is the best-case time complexity of merge sort?",
    options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
    answer: 1,
  },
  {
    question:
      "Which of the following data structures is most suitable for merge sort?",
    options: ["Stack", "Array", "Linked list", "Heap"],
    answer: 2,
  },
  {
    question: "Which of the following is NOT a characteristic of merge sort?",
    options: [
      "It is stable",
      "It is in-place",
      "It is comparison-based",
      "It has a time complexity of O(n log n)",
    ],
    answer: 1,
  },
  {
    question: "What is the auxiliary space complexity of merge sort?",
    options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
    answer: 0,
  },
  {
    question:
      "How does merge sort handle large datasets compared to quicksort?",
    options: [
      "Merge sort is faster on average",
      "Merge sort uses more memory",
      "Merge sort is always slower",
      "Merge sort cannot handle large datasets",
    ],
    answer: 1,
  },
  {
    question: "Which of the following describes the merge step in merge sort?",
    options: [
      "Dividing the array into halves",
      "Merging two sorted subarrays into one sorted array",
      "Swapping adjacent elements",
      "Partitioning the array",
    ],
    answer: 1,
  },
  {
    question: "In merge sort, when is the array considered sorted?",
    options: [
      "When all elements are merged into a single sorted array",
      "When the first half is sorted",
      "When the last half is sorted",
      "When no more divisions are possible",
    ],
    answer: 0,
  },
  {
    question:
      "Which of the following sorting algorithms has a similar time complexity to merge sort?",
    options: ["Selection sort", "Bubble sort", "Quick sort", "Insertion sort"],
    answer: 2,
  },
  {
    question: "Is merge sort a stable sorting algorithm?",
    options: [
      "Yes",
      "No",
      "Only in certain cases",
      "Depends on implementation",
    ],
    answer: 0,
  },
  {
    question: "Which of the following is true about merge sort?",
    options: [
      "It requires O(1) extra space",
      "It works well with linked lists",
      "It performs poorly on small datasets",
      "It is an in-place sorting algorithm",
    ],
    answer: 1,
  },
  {
    question: "How is the merge sort algorithm classified?",
    options: ["Iterative", "Recursive", "Non-recursive", "Backtracking-based"],
    answer: 1,
  },
  {
    question:
      "What happens if merge sort is applied to an already sorted array?",
    options: [
      "It runs faster",
      "It runs slower",
      "It still takes O(n log n) time",
      "It fails",
    ],
    answer: 2,
  },
  {
    question: "Which step follows the divide step in the merge sort algorithm?",
    options: [
      "Merge the divided arrays",
      "Pick the pivot",
      "Sort the individual subarrays",
      "Rearrange the array",
    ],
    answer: 0,
  },
  {
    question: "Which of the following is a disadvantage of merge sort?",
    options: [
      "It is not stable",
      "It requires extra space",
      "It does not handle large data well",
      "It is difficult to implement",
    ],
    answer: 1,
  },
  {
    question:
      "How many comparisons are needed in the worst case for merge sort?",
    options: ["O(n^2)", "O(n log n)", "O(log n)", "O(n)"],
    answer: 1,
  },
  {
    question:
      "Which of the following scenarios would benefit from using merge sort?",
    options: [
      "Sorting a linked list",
      "Sorting an already sorted array",
      "Sorting small datasets",
      "Sorting with limited memory",
    ],
    answer: 0,
  },
  {
    question:
      "In the merge step of merge sort, how many temporary arrays are used?",
    options: ["One", "Two", "None", "Depends on the implementation"],
    answer: 1,
  },
  {
    question: "What is the key concept behind merge sort?",
    options: [
      "Sorting in-place",
      "Dividing and conquering",
      "Swapping elements",
      "Comparing all elements",
    ],
    answer: 1,
  },
  {
    question:
      "Which of the following best describes the time complexity of merge sort?",
    options: [
      "It is always O(n log n)",
      "It varies between O(n) and O(n log n)",
      "It is always O(n^2)",
      "It is faster than O(n log n)",
    ],
    answer: 0,
  },
  {
    question: "Which of the following is NOT true about merge sort?",
    options: [
      "It requires extra space",
      "It is comparison-based",
      "It is in-place",
      "It can be implemented recursively",
    ],
    answer: 2,
  },
  {
    question: "When using merge sort, how is the array divided?",
    options: [
      "Into two equal parts",
      "Into two parts with different sizes",
      "Randomly",
      "According to the pivot",
    ],
    answer: 0,
  },
  {
    question: "Why is merge sort preferred for linked lists?",
    options: [
      "Because it uses less memory",
      "Because linked lists have no random access",
      "Because it runs faster",
      "Because it is easy to implement",
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
        <b>Merge Sort MCQ Test</b>
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
