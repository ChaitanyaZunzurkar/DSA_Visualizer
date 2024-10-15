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
      }, 500); // Match the animation duration
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
          align-items: center;
          justify-content: center;
        }

        .stack-operations {
          margin-bottom: 20px;
        }

        input {
          padding: 10px 12px;
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
          padding: 10px 20px;
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
          background-color: green;
          transform: scale(1.05);
        }

        .stack-visual {
          display: flex;
          flex-direction: column-reverse; /* Flips the visual stack */
          border: 2px solid black;
          padding: 25px;
          width: 200px;
          min-height: 200px;
          position: relative;
          border-radius: 15px;
          background-color: #111827;
        }

        .stack-item {
          background-color: #4caf50;
          color: white;
          padding: 10px;
          margin: 5px 0;
          border-radius: 5px;
          font-weight: bold;
          transition: transform 0.5s, opacity 0.5s;
        }

        /* Highlight the top item */
        .stack-item.top-item {
          background-color: #2196f3;
        }

        /* Animate the newly pushed element */
        .stack-item.new-item {
          opacity: 0;
          animation: pushItem 0.5s forwards;
        }

        @keyframes pushItem {
          0% {
            transform: translateY(-100px); /* Starting from above */
            opacity: 0;
          }
          100% {
            transform: translateY(0px); /* Final position */
            opacity: 1;
          }
        }

        /* Animate the top item when popping */
        .stack-item.pop-item {
          animation: popItem 0.5s forwards;
        }

        @keyframes popItem {
          0% {
            transform: translateY(0px); /* Initial position */
            opacity: 1;
          }
          100% {
            transform: translateY(-100px); /* Move upward */
            opacity: 0;
          }
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
        <button disabled={true}>Maximum Size: {'5'}</button>
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
    </div>
  );
};

export default StackVisualization;
