import React, { useState, useEffect } from "react";

const TowerOfHanoi = ({ numDisks }) => {
  const [towers, setTowers] = useState([[], [], []]);
  const [moves, setMoves] = useState([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Initialize Towers
  useEffect(() => {
    resetTowers();
  }, [numDisks]);

  // Function to reset the towers to the initial state
  const resetTowers = () => {
    const initialTowers = [[], [], []];
    for (let i = numDisks; i >= 1; i--) {
      initialTowers[0].push(i); // Adding disks to Tower A
    }
    setTowers(initialTowers);
    setMoves([]);
    setCurrentMoveIndex(0);
    generateMoves(numDisks, 0, 2, 1);
  };

  // Tower of Hanoi recursive algorithm to generate move list
  const generateMoves = (n, from, to, aux) => {
    if (n === 1) {
      setMoves((prevMoves) => [...prevMoves, { from, to }]);
    } else {
      generateMoves(n - 1, from, aux, to);
      setMoves((prevMoves) => [...prevMoves, { from, to }]);
      generateMoves(n - 1, aux, to, from);
    }
  };

  // Move Disk function
  const moveDisk = (from, to) => {
    const newTowers = [...towers];
    const disk = newTowers[from].pop();
    newTowers[to].push(disk);
    setTowers(newTowers);
  };

  // Handle move based on current index with animation
  useEffect(() => {
    if (isAnimating && currentMoveIndex < moves.length) {
      const { from, to } = moves[currentMoveIndex];
      moveDisk(from, to);
      setTimeout(() => {
        setCurrentMoveIndex((prev) => prev + 1);
        setIsAnimating(false);
      }, 500); // Adjust timing for smoothness
    }
  }, [currentMoveIndex, isAnimating, moves]);

  // Function to go to the next move with animation
  const nextMove = () => {
    if (currentMoveIndex < moves.length) {
      setIsAnimating(true);
    }
  };

  // Function to go to the previous move with animation
  const previousMove = () => {
    if (currentMoveIndex > 0) {
      const { from, to } = moves[currentMoveIndex - 1];
      const newTowers = [...towers];
      const disk = newTowers[to].pop(); // Move back
      newTowers[from].push(disk); // Put disk back
      setTowers(newTowers);
      setCurrentMoveIndex((prev) => prev - 1);
    }
  };

  // Retry the visualization
  const retry = () => {
    resetTowers(); // Reset the towers and start again
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>Visualization</h2>
      <div style={{ display: "flex", justifyContent: "space-around", width: "80%", height: "300px", marginBottom: "20px", border: "2px solid #ccc", padding: "20px" }}>
        {towers.map((tower, towerIndex) => (
          <div
            key={towerIndex}
            style={{
              width: "120px",
              height: "250px",
              backgroundColor: "#ddd",
              border: "2px solid #333",
              display: "flex",
              flexDirection: "column-reverse",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "10px",
              position: "relative",
            }}
          >
            {tower.map((disk, diskIndex) => (
              <div
                key={diskIndex}
                style={{
                  width: `${disk * 30}px`, // Width based on disk size
                  height: "20px", // Fixed height of the disk
                  backgroundColor: "#61dafb",
                  margin: "0", // No vertical margin
                  textAlign: "center",
                  color: "#333",
                  fontWeight: "bold",
                  transition: "all 0.5s ease-in-out",
                  position: "absolute",
                  bottom: `${diskIndex * 22}px`, // Adjust for height of the disks + margin
                  zIndex: 1, // Ensure disks are on top
                }}
              >
                {disk}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Buttons for control */}
      <div>
        <button onClick={previousMove} disabled={currentMoveIndex === 0} style={{ padding: "10px 20px", backgroundColor: currentMoveIndex === 0 ? "#ccc" : "#333", color: "#fff", border: "none", cursor: currentMoveIndex === 0 ? "not-allowed" : "pointer", marginRight: "10px" }}>
          Previous
        </button>

        <button onClick={nextMove} disabled={currentMoveIndex === moves.length} style={{ padding: "10px 20px", backgroundColor: currentMoveIndex === moves.length ? "#ccc" : "#333", color: "#fff", border: "none", cursor: currentMoveIndex === moves.length ? "not-allowed" : "pointer", marginRight: "10px" }}>
          Next
        </button>

        <button onClick={retry} style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>
          Retry
        </button>
      </div>
    </div>
  );
};

const MonoStack = () => {
  return (

    <div style={{ padding: "20px" }}>
      <h1>Tower of Hanoi</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: 1, marginRight: "20px" }}>
          <h2>Overview</h2>
          <p>
            The Tower of Hanoi is a classic mathematical puzzle that involves three rods and a number of disks of different sizes. The objective is to move the entire stack of disks from one rod to another, following specific rules. This problem is often used to illustrate recursion in programming and algorithm design.
          </p>

          <h2>Problem Description</h2>
          <p>
            <ol>
              <li>
                Initial Setup: The disks are stacked in ascending order on one rod (smallest on top).
              </li>
              <li>
                Objective: Move the stack of disks to another rod, following these rules:
                <ul>
                  <li>Only one disk can be moved at a time.</li>
                  <li>Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack.</li>
                  <li>No larger disk may be placed on top of a smaller disk.</li>
                </ul>
              </li>
            </ol>
          </p>

          <h2>How it Works?</h2>
          <p>The solution to the Tower of Hanoi problem can be achieved using a recursive algorithm. Here’s a step-by-step explanation:</p>
          <ol>
            <li>Move n-1 disks from the source rod to the auxiliary rod, using the destination rod as a temporary holding area.</li>
            <li>Move the nth disk from the source rod to the destination rod.</li>
            <li>Move the n-1 disks that were left on the auxiliary rod to the destination rod, using the source rod as a temporary holding area.</li>
          </ol>

          <h2>Time Complexity</h2>
          <p>The time complexity of the Tower of Hanoi problem is O(2^n) where n is the number of disks. This is because each move doubles the number of moves required for the next disk.</p>

          <h2>Variants</h2>
          <ul>
            <li>Multiple Rods: The puzzle can be modified to include more than three rods, which can change the strategy and potentially reduce the number of moves required to solve the puzzle.</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <TowerOfHanoi numDisks={4} />
        </div>
      </div>
    </div>
    
  );
};

export default MonoStack;
