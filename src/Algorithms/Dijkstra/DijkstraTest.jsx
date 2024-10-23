import { useState, useEffect } from "react";
import styles from "../../Stylesheets/Test.module.css"; // Import the CSS module

const questionsPool = [
  {
    question: "What is Dijkstra's algorithm primarily used for?",
    options: [
      "Finding the shortest path in a graph",
      "Finding the longest path in a graph",
      "Sorting elements",
      "Balancing a tree",
    ],
    answer: 0,
  },
  {
    question: "Dijkstra's algorithm works with graphs that have:",
    options: [
      "Negative edge weights",
      "Non-negative edge weights",
      "Directed acyclic graphs",
      "Only undirected graphs",
    ],
    answer: 1,
  },
  {
    question:
      "What data structure is commonly used in Dijkstra’s algorithm to pick the next node?",
    options: ["Stack", "Queue", "Priority Queue", "Hash Map"],
    answer: 2,
  },
  {
    question:
      "What is the time complexity of Dijkstra’s algorithm using a simple linear search?",
    options: ["O(V^2)", "O(E log V)", "O(V log E)", "O(V + E)"],
    answer: 0,
  },
  {
    question:
      "What type of graph can Dijkstra's algorithm NOT handle properly?",
    options: [
      "Graphs with positive weights",
      "Graphs with zero weights",
      "Graphs with negative weights",
      "Directed graphs",
    ],
    answer: 2,
  },
  {
    question:
      "Which data structure is optimal to use for storing distances in Dijkstra's algorithm for better performance?",
    options: ["Array", "Linked List", "Priority Queue", "Binary Search Tree"],
    answer: 2,
  },
  {
    question:
      "What is the initial distance value of the source vertex in Dijkstra's algorithm?",
    options: ["Infinity", "Zero", "One", "Negative Infinity"],
    answer: 1,
  },
  {
    question:
      "In Dijkstra’s algorithm, what happens when a shorter path to a node is found?",
    options: [
      "The distance is updated and the node is re-added to the queue",
      "The algorithm ignores it",
      "It stops execution",
      "The graph is reweighted",
    ],
    answer: 0,
  },
  {
    question:
      "Dijkstra's algorithm is a variant of which general algorithm design paradigm?",
    options: [
      "Divide and conquer",
      "Greedy",
      "Dynamic programming",
      "Backtracking",
    ],
    answer: 1,
  },
  {
    question:
      "In Dijkstra’s algorithm, what is updated after visiting each node?",
    options: [
      "The weight of all edges",
      "The distance of the source node",
      "The shortest known distance to neighboring nodes",
      "The priority queue size",
    ],
    answer: 3,
  },
  {
    question:
      "What is the worst-case time complexity of Dijkstra's algorithm using a priority queue with a binary heap?",
    options: ["O(E log V)", "O(V^2)", "O(V log V)", "O(E)"],
    answer: 0,
  },
  {
    question: "What type of algorithm is Dijkstra’s algorithm classified as?",
    options: ["Exact", "Heuristic", "Approximation", "Randomized"],
    answer: 0,
  },
  {
    question:
      "Which of the following applications can use Dijkstra's algorithm?",
    options: [
      "Finding the shortest driving route",
      "Sorting an array",
      "Detecting cycles in a graph",
      "Balancing a binary search tree",
    ],
    answer: 0,
  },
  {
    question: "Dijkstra's algorithm does NOT work on graphs with:",
    options: [
      "Directed edges",
      "Negative edge weights",
      "Positive edge weights",
      "Undirected edges",
    ],
    answer: 1,
  },
  {
    question:
      "If you use a Fibonacci heap to implement Dijkstra's algorithm, what is the time complexity?",
    options: ["O(E log V)", "O(V log V)", "O(V + E log V)", "O(V log E)"],
    answer: 2,
  },
  {
    question: "Which of the following is NOT a step in Dijkstra’s algorithm?",
    options: [
      "Update the distance of the neighboring vertices",
      "Remove the vertex with the shortest distance from the priority queue",
      "Add all the unvisited nodes to a stack",
      "Mark the current node as visited",
    ],
    answer: 2,
  },
  {
    question:
      "When is a node added to the priority queue in Dijkstra's algorithm?",
    options: [
      "When it is visited for the first time",
      "When its distance is updated",
      "When it becomes the source node",
      "When all neighbors are explored",
    ],
    answer: 1,
  },
  {
    question: "What is the main goal of Dijkstra's algorithm?",
    options: [
      "To minimize the distance of all nodes from the source",
      "To maximize the distance of all nodes from the source",
      "To find all paths in a graph",
      "To sort the edges of the graph",
    ],
    answer: 0,
  },
  {
    question: "What kind of graphs does Dijkstra's algorithm work on?",
    options: [
      "Graphs with only positive weights",
      "Graphs with negative cycles",
      "Graphs with directed or undirected edges",
      "Graphs with disconnected components",
    ],
    answer: 3,
  },
  {
    question:
      "Which of the following algorithms does Dijkstra’s algorithm resemble in behavior?",
    options: ["Bellman-Ford", "Prim’s", "Kruskal’s", "A*"],
    answer: 1,
  },
  {
    question: "What happens when Dijkstra’s algorithm reaches the target node?",
    options: [
      "It stops and returns the shortest path",
      "It continues until all nodes are visited",
      "It starts over",
      "It marks the graph as cyclic",
    ],
    answer: 0,
  },
  {
    question: "What is a key limitation of Dijkstra's algorithm?",
    options: [
      "It cannot find the shortest path in a weighted graph",
      "It cannot handle negative edge weights",
      "It uses more memory than Bellman-Ford",
      "It is slower than DFS",
    ],
    answer: 1,
  },
  {
    question:
      "Which of the following modifications allows Dijkstra's algorithm to work with negative weights?",
    options: [
      "Using a different graph traversal",
      "Using Bellman-Ford algorithm",
      "Inverting the weights",
      "Using a stack instead of a queue",
    ],
    answer: 1,
  },
  {
    question:
      "Which of the following does Dijkstra’s algorithm use to track the shortest path?",
    options: ["Priority Queue", "Binary Search Tree", "Array", "Stack"],
    answer: 0,
  },
  {
    question:
      "In Dijkstra's algorithm, what do we do if a shorter path to a node is found through a neighbor?",
    options: [
      "Update the distance and re-add the node to the priority queue",
      "Ignore the new path",
      "End the algorithm",
      "Swap the node with its neighbor",
    ],
    answer: 0,
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
        <b>Dijkshtra MCQ Test</b>
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
