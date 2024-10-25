import React, { useState, useEffect } from "react";

const Visualization_Sort = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [delay, setDelay] = useState(1000);
  const [hasPressedStop, setHasPressedStop] = useState(false);
  const [sortedIndexes, setSortedIndexes] = useState(new Set());
  const [comparedIndexes, setComparedIndexes] = useState([]);

  useEffect(() => {
    createNewArray(20);
  }, []);

  const createNewArray = (noOfBars = 20) => {
    const newArray = Array.from({ length: noOfBars }, () =>
      Math.floor(Math.random() * 251)
    );
    setArray(newArray);
    setSortedIndexes(new Set());
    setComparedIndexes([]);
    setIsSorting(false);
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
      setComparedIndexes([k, j + mid + 1]);
      await delayTime(delay);
      if (left[i] <= right[j]) {
        array[k] = left[i];
        sortedIndexes.add(k);
        i++;
      } else {
        array[k] = right[j];
        sortedIndexes.add(k);
        j++;
      }
      setSortedIndexes(new Set(sortedIndexes));
      setArray([...array]);
      k++;
    }

    while (i < left.length) {
      if (hasPressedStop) return;
      setComparedIndexes([k, i + low]);
      await delayTime(delay);
      array[k] = left[i];
      sortedIndexes.add(k);
      setSortedIndexes(new Set(sortedIndexes));
      setArray([...array]);
      i++;
      k++;
    }

    while (j < right.length) {
      if (hasPressedStop) return;
      setComparedIndexes([k, j + mid + 1]);
      await delayTime(delay);
      array[k] = right[j];
      sortedIndexes.add(k);
      setSortedIndexes(new Set(sortedIndexes));
      setArray([...array]);
      j++;
      k++;
    }

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
    <div
      className="app"
      style={{
        backgroundColor: "#c3f3f3",
        borderRadius: "20px",
        height: "100vh",
        color: "#00695c",
      }}
    >
      <div className="controls">
        <button onClick={handleSort} disabled={isSorting}>
          Merge Sort
        </button>
        <button onClick={() => createNewArray(20)} disabled={isSorting}>
          Reset Bars
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
                ? "#ff7043" // Coral color for bars being compared
                : sortedIndexes.has(index)
                ? "#4caf50" // Calming sea green for sorted bars
                : "#279EFF", // Light teal for unsorted bars
              height: `${value * 2}px`,
            }}
          >
            <span className="bar-value">{value}</span>
          </div>
        ))}
      </div>
      <style>
        {`
        /* General App Styles */
        body {
          margin: 0;
          padding: 0;
          font-family: 'Roboto', sans-serif;
          background-color: #e0f2f1;
          color: #00695c;
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
          background-color: #00897b;
          color: white;
          border: none;
          padding: 10px 20px;
          margin-right: 10px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:disabled {
          background-color: #80cbc4;
          cursor: not-allowed;
        }
        button:hover:not(:disabled) {
          background-color: #00796b;
        }
        input[type="range"] {
          width: 200px;
          margin-left: 10px;
        }
        span {
          margin-left: 10px;
          color: #00796b;
          font-size: 20px;
          font-weight: 700;
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
          position: relative;
          width: 2em;
          margin: 0 2px;
          min-height: 20px;
          transition: height 0.5s ease, background 0.5s ease;
          background-color: #145a32;
          border-radius: 3px 3px 0 0;
        }
        .bar:hover {
          opacity: 0.8;
        }
        .bar-value {
          position: absolute;
          top: 50%;
          left: 20%;
          transform: translate(-50%, -50%);
          color: #004d40;
          font-weight: bold;
          font-size: 18px;
        }
      `}
      </style>
    </div>
  );
};

export default Visualization_Sort;
