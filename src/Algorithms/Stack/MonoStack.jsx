import React, { useState, useEffect } from 'react';

const TowerofHanoi = ({ numDisks = 4 }) => {
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
    <div className="monoStackContainer"> {/* Identifiable container for MonoStack */}
      <div className='cont'>
        <div className="hanoi-container">
          <style>{`
            .cont {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              
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
              margin:20px;
            }

            .hanoi-head{
              font-size: 36px;
              font-weight: 600;
              color: #1f2937;
              margin-bottom: 20px;
              text-align: center;
              letter-spacing: 1px;
              
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

            /* Unique class for MonoStack buttons */
            .monoStackButton {
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

            .monoStackButton:disabled {
              cursor: not-allowed;
              background-color: #555;
              color: #ccc;
            }

            .monoStackButton:not(:disabled):hover {
              transform: scale(1.05);
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            }

            .hanoi-controls .monoStackButton:nth-child(1):not(:disabled):hover {
              background-color: #4caf50; 
            }

            .hanoi-controls .monoStackButton:nth-child(2):not(:disabled):hover {
              background-color: #4caf50; 
            }

            .hanoi-controls .monoStackButton:nth-child(3):not(:disabled):hover {
              background-color: #f44336; 
            }
          `}</style>

          <h2 className="hanoi-head">Tower of Hanoi</h2>
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
            <button className="monoStackButton" onClick={previousMove} disabled={currentMoveIndex === 0}>
              Previous
            </button>
            <button className="monoStackButton" onClick={nextMove} disabled={currentMoveIndex === moves.length}>
              Next
            </button>
            <button className="monoStackButton" onClick={retry}>
              Retry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const headingStyle = {
  marginTop: '0',
  fontWeight: '700',
  fontSize: '40px',
  marginBottom: '10px',
};

const subHeadingStyle = {
  marginTop: '20px',
  fontWeight: '700',
  fontSize: '25px',
  marginBottom: '20px',
  textAlign: 'left',
};

const listStyle = {
  fontWeight: 400,
  lineHeight: '1.6',
  marginBottom: '8px',
  color: '#333',
  listStyleType: 'disc',
  paddingLeft: '20px',
};

const content = {
  paddingLeft: '20px',
  padding: '20px',
  fontSize: '21px'
};

const para = {
  fontWeight: '400',
};

const MonoStack = () => {
  return (
    <div style={content}>
      <h1 style={headingStyle}>Tower of Hanoi</h1>
      <div>
        <div>
          <h2 style={subHeadingStyle}>Overview</h2>
          <p style={para}>
            The <b>Tower of Hanoi</b> is a classic mathematical puzzle that involves three rods and a number of disks of different sizes. The <b>objective</b> is to move the entire stack of disks from one rod to another, following specific rules. This problem is often used to illustrate <b>recursion</b> in programming and <b>algorithm design</b>.
          </p>

          <h2 style={subHeadingStyle}>Problem Description</h2>
          <p>
            <ol style={listStyle}>
              <li>
                <b>Initial Setup</b>: The disks are stacked in ascending order on one rod (smallest on top).
              </li>
              <li>
                <b>Objective</b>: Move the stack of disks to another rod, following these rules:
                <ul style={listStyle}>
                  <li>Only <b>one disk</b> can be moved at a time.</li>
                  <li>Each move consists of taking the <b>upper disk</b> from one of the stacks and placing it on top of another stack.</li>
                  <li>No <b>larger disk</b> may be placed on top of a smaller disk.</li>
                </ul>
              </li>
            </ol>
          </p>

          <h2 style={subHeadingStyle}>How it Works?</h2>
          <p style={para}>The solution to the Tower of Hanoi problem can be achieved using a <b>recursive algorithm</b>. Here’s a step-by-step explanation:</p>
          <ol style={listStyle}>
            <li>Move <b>n-1 disks</b> from the source rod to the auxiliary rod, using the destination rod as a temporary holding area.</li>
            <li>Move the <b>nth disk</b> from the source rod to the destination rod.</li>
            <li>Move the <b>n-1 disks</b> that were left on the auxiliary rod to the destination rod, using the source rod as a temporary holding area.</li>
          </ol>

          <h2 style={subHeadingStyle}>Visualizing Tower of Hanoi</h2>
          <div style={{ flex: 1 }}>
            <TowerofHanoi numDisks={4} />
          </div>

          <h2 style={subHeadingStyle}>Time Complexity</h2>
          <p style={para}>The <b>time complexity</b> of the Tower of Hanoi problem is <b>O(2^n)</b>, where n is the number of disks. This is because each move doubles the number of moves required for the next disk.</p>

          <h2 style={subHeadingStyle}>Variants</h2>
          <ul style={para}>
            <li><b>Multiple Rods</b>: The puzzle can be modified to include more than three rods, which can change the strategy and potentially reduce the number of moves required to solve the puzzle.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MonoStack;
