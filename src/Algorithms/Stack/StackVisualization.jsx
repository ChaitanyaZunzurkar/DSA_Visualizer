import React, { useState } from 'react';

const StackVisualization = () => {
  const [stack, setStack] = useState([]);
  const [input, setInput] = useState('');
  const [isPopping, setIsPopping] = useState(false);
  const maxSize = 5;

  const handlePush = () => {
    if (stack.length < maxSize && input !== '') {
      setStack([...stack, input]);
      setInput('');
    }
  };

  const handlePop = () => {
    if (stack.length > 0) {
      setIsPopping(true);
      setTimeout(() => {
        const newStack = [...stack];
        newStack.pop();
        setStack(newStack);
        setIsPopping(false);
      }, 500);
    }
  };

  const handlePeek = () => {
    if (stack.length > 0) {
      alert(`Top element: ${stack[stack.length - 1]}`);
    }
  };

  const isEmpty = () => stack.length === 0;
  const isFull = () => stack.length === maxSize;

  return (
    <div className="stack-container">
      <style>{`
        .stack-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #f0f2f5;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
        }

        h2 {
        font-size: 36px; /* Increased font size */
        font-weight: 600; /* Semi-bold for better emphasis */
        color: #1f2937; /* Darker shade for good contrast */
        margin-bottom: 25px; /* Adjusted margin for better spacing */
        text-align: center; /* Center-align the title */
        letter-spacing: 1px; /* Slight letter-spacing for clarity */
        text-transform: uppercase; /* Optional: Make the text uppercase */
        
}


        .stack-box {
          background-color: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stack-operations {
          display: flex;
          flex-direction: column;
          gap: 10px;
          justify-content: center;
          margin-bottom: 30px;
          width: 100%;
        }

        .stack-operations input {
          padding: 12px;
          font-size: 16px;
          background-color: #fff;
          color: #111827;
          border: 1px solid #ddd;
          border-radius: 8px;
          transition: border-color 0.3s;
          width: 100%;
          width: 240px;
          margin: 0 auto;
        }

        .stack-operations div {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        input:focus {
          outline: none;
          border-color: #4caf50;
        }

        button {
          padding: 12px 20px;
          font-size: 16px;
          background-color: #111827;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;
        }

        button:disabled {
          cursor: not-allowed;
          background-color: #555;
          color: #ccc;
        }

        button:not(:disabled):hover {
          transform: scale(1.05);
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }

        .stack-operations button:nth-child(1):not(:disabled):hover {
          background-color: #4caf50; /* Green for Push */
        }

        .stack-operations button:nth-child(2):not(:disabled):hover {
          background-color: #f44336; /* Red for Pop */
        }

        .stack-operations button:nth-child(3):not(:disabled):hover {
          background-color: #2196f3; /* Blue for Peek */
        }

        .stack-visual {
          display: flex;
          flex-direction: column-reverse; /* This ensures the top is visually at the top */
          justify-content: flex-start; 
          width: 250px;
          height: 333px;
          padding: 20px;
          border: 2px solid #4caf50;
          border-radius: 15px;
          background-color: #111827;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .stack-item {
          background-color: #4caf50;
          color: white;
          padding: 12px;
          margin: 5px 0;
          border-radius: 8px;
          font-weight: bold;
          transition: transform 0.5s, opacity 0.5s;
        }

        .stack-item.top-item {
          background-color: #2196f3;
        }

        .stack-item.new-item {
          opacity: 0;
          animation: pushItem 0.5s forwards;
        }

        @keyframes pushItem {
          0% {
            transform: translateY(-100px); /* Items appear to come in from above */
            opacity: 0;
          }
          100% {
            transform: translateY(0px);
            opacity: 1;
          }
        }

        .stack-item.pop-item {
          animation: popItem 0.5s forwards;
        }

        @keyframes popItem {
          0% {
            transform: translateY(0px);
            opacity: 1;
          }
          100% {
            transform: translateY(-100px); /* Items appear to go up when popped */
            opacity: 0;
          }
        }

        .stack-empty {
          color: #999;
          font-size: 16px;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .status-buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
        }

        .status-buttons button {
          padding: 8px 15px;
          background-color: black;
          color: white;
        }
      `}</style>

      <h2>Stack Visualizer</h2>
      <div className="stack-box">
        <div className="stack-operations">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter value"
          />
          <div>
            <button onClick={handlePush} disabled={isFull()}>Push</button>
            <button onClick={handlePop} disabled={isEmpty() }>Pop</button>
            <button onClick={handlePeek} disabled={isEmpty()}>Peek</button>
          </div>
        </div>

        <div className="stack-visual">
          {stack.length > 0 ? (
            stack.map((item, index) => (
              <div
                key={index}
                className={`stack-item ${
                  index === stack.length - 1 ? 'top-item' : ''
                } ${
                  index === stack.length - 1 && isPopping ? 'pop-item' : 'new-item'
                }`}
              >
                {item}
              </div>
            ))
          ) : (
            <div className="stack-empty">Stack is empty</div>
          )}
        </div>

        <div className="status-buttons">
          <button disabled>isEmpty: {isEmpty() ? 'Yes' : 'No'}</button>
          <button disabled>isFull: {isFull() ? 'Yes' : 'No'}</button>
          <button disabled>Max Size: 5</button>
        </div>
      </div>
    </div>
  );
};

export default StackVisualization;
