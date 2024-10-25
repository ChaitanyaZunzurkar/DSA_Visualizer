import { useState } from 'react';

const QueueVisualization = () => {
  const [queue, setQueue] = useState([]);
  const [input, setInput] = useState('');
  const maxSize = 5;

  const handleEnqueue = () => {
    if (queue.length < maxSize && input !== '') {
      setQueue([...queue, input]);
      setInput('');
    }
  };

  const handleDequeue = () => {
    if (queue.length > 0) {
      const newQueue = [...queue];
      newQueue.shift();
      setQueue(newQueue);
    }
  };

  const handleFront = () => {
    if (queue.length > 0) {
      alert(`Front element: ${queue[0]}`);
    }
  };

  const handleRear = () => {
    if (queue.length > 0) {
      alert(`Rear element: ${queue[queue.length - 1]}`);
    }
  };

  const isEmpty = () => queue.length === 0;
  const isFull = () => queue.length === maxSize;

  return (
    <div className="queue-container">
       <style>{`
        body {
          margin: 0; /* Reset default body margin */
          font-family: Arial, sans-serif; /* Set a default font */
        }
        .queue-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh; /* Full viewport height */
          width: 80vw; /* Full viewport width */
          background-color: white;
          padding: 20px; /* Reduced padding for better mobile view */
          box-sizing: border-box; /* Include padding in width calculations */
        }

        .queue-head {
          font-size: 36px;
          font-weight: 600;
          color: #1f2937;
          margin: 25px;
          text-align: center;
          letter-spacing: 1px;
          
        }

        .queue-box {
          background-color: #f0f2f5;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
          width: 100%; /* Use full width of the container */
          max-width: 600px; /* Limit max width for larger screens */
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .queue-operations {
          display: flex;
          flex-direction: column;
          gap: 10px;
          justify-content: center;
          margin-bottom: 30px;
          width: 100%;
        }

        .queue-operations input {
          padding: 12px;
          font-size: 16px;
          background-color: #fff;
          color: #111827;
          border: 1px solid #ddd;
          border-radius: 8px;
          transition: border-color 0.3s;
          width: 240px;
          margin: 0 auto;
        }

        .queue-operations div {
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
          margin-top:15px;
          
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

        .queue-visual-horizontal {
          display: flex;
          justify-content: center;
          border: 2px solid #4caf50;
          padding: 20px;
          width: 100%; /* Use full width */
          max-width: 400px; /* Limit max width */
          min-height: 100px;
          background-color: #111827;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          margin-top: 20px;
          overflow: auto; /* Enable scrolling if items exceed the width */
        }

        .queue-item-horizontal {
          background-color: #ff9800;
          color: white;
          padding: 10px; /* Padding for square shape */
          margin: 0 5px;
          border-radius: 8px;
          font-weight: bold;
          width: 50px; /* Fixed width for square shape */
          height: 50px; /* Fixed height for square shape */
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          animation: enqueueItemHorizontal 0.5s forwards;
        }

        @keyframes enqueueItemHorizontal {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .front-item {
          background-color: #2196f3;
        }

        .rear-item {
          background-color: #4caf50;
        }

        .queue-empty {
          color: #999;
          font-size: 16px;
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
    <div className='queue-container'>

      <div className="queue-box">
        <h2 className="queue-head">Queue Visualization</h2>
        <div className="queue-operations">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter value"
          />
          <div>
            <button onClick={handleEnqueue} disabled={isFull()}>Enqueue</button>
            <button onClick={handleDequeue} disabled={isEmpty()}>Dequeue</button>
            <button onClick={handleFront} disabled={isEmpty()}>Front</button>
            <button onClick={handleRear} disabled={isEmpty()}>Rear</button>
          </div>
        </div>

        <div className="queue-visual-horizontal">
          {queue.length > 0 ? (
            queue.map((item, index) => (
              <div
              key={index}
              className={`queue-item-horizontal ${index === 0 ? 'front-item' : ''} ${index === queue.length - 1 ? 'rear-item' : ''}`}
              >
                {item}
              </div>
            ))
          ) : (
            <div className="queue-empty">Queue is empty</div>
          )}
        </div>

        <div className="status-buttons">
          <button disabled>isEmpty: {isEmpty() ? 'Yes' : 'No'}</button>
          <button disabled>isFull: {isFull() ? 'Yes' : 'No'}</button>
          <button disabled>Max Size: 5</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default QueueVisualization;
