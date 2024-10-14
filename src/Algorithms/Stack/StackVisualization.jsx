import React, { useState } from 'react';

const StackVisualization = () => {
  const [stack, setStack] = useState([]);
  const [input, setInput] = useState('');
  const maxSize = 5;

  const handlePush = () => {
    if (stack.length < maxSize && input !== '') {
      setStack([...stack, input]);
      setInput('');
    }
  };

  const handlePop = () => {
    if (stack.length > 0) {
      const newStack = [...stack];
      newStack.pop();
      setStack(newStack);
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
          text-align: center;
          margin: 20px;
          
        }
      
        .stack-operations {
          margin-bottom: 20px;
          border-radius: 50% !important;
        }
      
        input {
          padding: 8px 12px;
          margin-right: 10px;
          cursor: pointer;
          font-size: 14px;
          background-color: #111827;
          color: white;
          border: none;
          border-radius: 5px;
          transition: background-color 0.3s, transform 0.2s;
        }
      
        button {
          padding: 8px 12px;
          margin-right: 10px;
          cursor: pointer;
          font-size: 14px;
          background-color: #111827;
          color: white;
          border: none;
          border-radius: 5px;
          transition: background-color 0.3s, transform 0.2s;
        }
      
        button:disabled {
          cursor: not-allowed;
          background-color: #ccc;
          color: #666;
        }
      
        button:not(:disabled):hover {
          background-color: #374151;
          transform: scale(1.05);
        }
      
        .stack-visual {
          display: inline-block;
          border: 2px solid #111827;
          padding: 20px;
          width: 100px;
          min-height: 200px;
          position: relative;
          border-radius:16px radius;
          background-color: #111827;
        }
      
        .stack-item {
          background-color: #4caf50;
          color: white;
          padding: 10px;
          margin: 5px 0;
          border-radius: 5px;
          font-weight: bold;
          opacity: 0;
          animation: pushItem 0.5s forwards;
        }
      
        @keyframes pushItem {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      
        .stack-item:last-child {
          background-color: #2196f3;
        }
      
        .stack-empty {
          color: #999;
          font-size: 14px;
        }
      `}</style>

      <h2>Stack Visualizer</h2>
      <div className="stack-operations">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter value"
        />
        <button onClick={handlePush} disabled={isFull()}>Push</button>
        <button onClick={handlePop} disabled={isEmpty()}>Pop</button>
        <button onClick={handlePeek} disabled={isEmpty()}>Peek</button>
        <button disabled={true}>isEmpty: {isEmpty() ? 'Yes' : 'No'}</button>
        <button disabled={true}>isFull: {isFull() ? 'Yes' : 'No'}</button>
      </div>

      <div className="stack-visual">
        {stack.length > 0 ? (
          [...stack].reverse().map((item, index) => (
            <div key={index} className="stack-item">
              {item}
            </div>
          ))
        ) : (
          <div className="stack-empty">Stack is empty</div>
        )}
      </div>
    </div>
  );
};

export default StackVisualization;
