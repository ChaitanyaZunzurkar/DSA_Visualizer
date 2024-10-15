import React, { useState } from 'react';

const QueueVisualization = () => {
  const [queue, setQueue] = useState([]);
  const [input, setInput] = useState('');
  const maxSize = 5; // Maximum queue size

  // Enqueue operation: Add element to the rear of the queue
  const handleEnqueue = () => {
    if (queue.length < maxSize && input !== '') {
      setQueue([...queue, input]);
      setInput('');
    }
  };

  // Dequeue operation: Remove element from the front of the queue
  const handleDequeue = () => {
    if (queue.length > 0) {
      const newQueue = [...queue];
      newQueue.shift();
      setQueue(newQueue);
    }
  };

  // Front: Get the element at the front of the queue
  const handleFront = () => {
    if (queue.length > 0) {
      alert(`Front element: ${queue[0]}`);
    }
  };

  // Rear: Get the element at the rear of the queue
  const handleRear = () => {
    if (queue.length > 0) {
      alert(`Rear element: ${queue[queue.length - 1]}`);
    }
  };

  // isEmpty: Check if the queue is empty
  const isEmpty = () => queue.length === 0;

  // isFull: Check if the queue is full
  const isFull = () => queue.length === maxSize;

  // size: Get the size of the queue
  const size = () => queue.length;

  return (
    <div className="queue-container">
      <style>{`
        .queue-container {
          text-align: center;
          margin: 20px;
          
        }

        .queue-operations {
          margin-bottom: 20px;
          
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
          background-color: green;
          transform: scale(1.05);
        }

        .queue-visual-horizontal {
          display: flex;
          justify-content: center;
          border: 2px solid #111827;
          
          padding: 20px;
          width: 600px;
          min-height: 100px;
          background-color: #f3f4f6;
          margin: 0 auto;
        }

        .queue-item-horizontal {
          background-color: #ff9800;
          color: white;
          padding: 10px;
          margin: 0 5px;
          border-radius: 5px;
          font-weight: bold;
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
          font-size: 14px;
        }
      `}</style>

      <h2>Queue Visualization</h2>
      <div className="queue-operations">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter value"
        />
        <button onClick={handleEnqueue} disabled={isFull()}>Enqueue</button>
        <button onClick={handleDequeue} disabled={isEmpty()}>Dequeue</button>
        <button onClick={handleFront} disabled={isEmpty()}>Front</button>
        <button onClick={handleRear} disabled={isEmpty()}>Rear</button>
        <button disabled={true}>isEmpty: {isEmpty() ? 'Yes' : 'No'}</button>
        <button disabled={true}>isFull: {isFull() ? 'Yes' : 'No'}</button>
        <button disabled={true}>Size: {size()}</button>
        <button disabled={true}>Max Size: {5}</button>
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
    </div>
  );
};

export default QueueVisualization;
