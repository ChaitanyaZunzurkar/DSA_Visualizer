import React, { useState, useEffect } from 'react';

const MonoStack = ({ numDisks = 4 }) => {
  const [towers, setTowers] = useState([[], [], []]);
  const [moves, setMoves] = useState([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    resetTowers();
  }, [numDisks]);

  const resetTowers = () => {
    const initialTowers = [[], [], []];
    for (let i = numDisks; i >= 1; i--) {
      initialTowers[0].push(i);
    }
    setTowers(initialTowers);
    setMoves([]);
    setCurrentMoveIndex(0);
    generateMoves(numDisks, 0, 2, 1);
  };

  const generateMoves = (n, from, to, aux) => {
    if (n === 1) {
      setMoves((prevMoves) => [...prevMoves, { from, to }]);
    } else {
      generateMoves(n - 1, from, aux, to);
      setMoves((prevMoves) => [...prevMoves, { from, to }]);
      generateMoves(n - 1, aux, to, from);
    }
  };

  const moveDisk = (from, to) => {
    const newTowers = [...towers];
    const disk = newTowers[from].pop();
    newTowers[to].push(disk);
    setTowers(newTowers);
  };

  useEffect(() => {
    if (isAnimating && currentMoveIndex < moves.length) {
      const { from, to } = moves[currentMoveIndex];
      moveDisk(from, to);
      setTimeout(() => {
        setCurrentMoveIndex((prev) => prev + 1);
        setIsAnimating(false);
      }, 700);
    }
  }, [currentMoveIndex, isAnimating, moves]);

  const nextMove = () => {
    if (currentMoveIndex < moves.length) {
      setIsAnimating(true);
    }
  };

  const previousMove = () => {
    if (currentMoveIndex > 0) {
      const { from, to } = moves[currentMoveIndex - 1];
      const newTowers = [...towers];
      const disk = newTowers[to].pop();
      newTowers[from].push(disk);
      setTowers(newTowers);
      setCurrentMoveIndex((prev) => prev - 1);
    }
  };

  const retry = () => {
    resetTowers();
  };

  const totalMoves = Math.pow(2, numDisks) - 1;

  return (
    
    <div className='cont'>
      
      <div className="hanoi-container">
        <style>{`
          .cont {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: white;
            border-radius: 16px;
          }
          .hanoi-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #f0f2f5;
            border-radius: 16px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
            padding: 30px;
            width: 100%;
            max-width: 550px; 
          }

          h2 {
            font-size: 36px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 20px;
            text-align: center;
            letter-spacing: 1px;
            text-transform: uppercase;
          }

          .hanoi-towers {
            display: flex;
            justify-content: space-between; 
            width: 100%;
            margin-bottom: 20px;
          }

          .hanoi-tower {
            width: 150px;
            height: 300px;
            background-color: #111827;
            display: flex;
            flex-direction: column-reverse;
            justify-content: flex-start;
            align-items: center;
            padding: 10px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            margin: 0 10px;
          }

          .hanoi-disk {
            background-color: #4caf50;
            color: white;
            padding: 12px;
            margin: 5px 0;
            border-radius: 8px;
            font-weight: bold;
            text-align: center;
            width: 100%;
            box-sizing: border-box;
            display: flex; 
            justify-content: center; 
            align-items: center; 
          }

          .hanoi-info {
            color: #999;
            font-size: 16px;
            margin-bottom: 20px;
          }

          .hanoi-controls {
            display: flex;
            justify-content: space-between; 
            width: 100%; 
            margin-top: 10px;
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
            flex: 1; 
            margin: 0 5px;
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

          .hanoi-controls button:nth-child(1):not(:disabled):hover {
            background-color: #4caf50; 
          }

          .hanoi-controls button:nth-child(2):not(:disabled):hover {
            background-color: #4caf50; 
          }

          .hanoi-controls button:nth-child(3):not(:disabled):hover {
            background-color: #f44336; 
          }
        `}</style>

        <h2>Tower of Hanoi</h2>
        <div className="hanoi-towers">
          {towers.map((tower, towerIndex) => (
            <div key={towerIndex} className="hanoi-tower">
              {tower.map((disk, diskIndex) => (
                <div
                  key={diskIndex}
                  className="hanoi-disk"
                  style={{ width: `${disk * 30}px` }} // Dynamic width based on disk size
                >
                  {disk}
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="hanoi-info">
          Total steps required to solve: {totalMoves}
        </p>
        <p className="hanoi-info">
          Steps left: {totalMoves - currentMoveIndex}
        </p>

        <div className="hanoi-controls">
          <button onClick={previousMove} disabled={currentMoveIndex === 0}>
            Previous
          </button>
          <button onClick={nextMove} disabled={currentMoveIndex === moves.length}>
            Next
          </button>
          <button onClick={retry}>
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonoStack;
