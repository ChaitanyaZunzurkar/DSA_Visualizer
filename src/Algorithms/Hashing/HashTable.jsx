// import  { useState } from 'react';
// import '../../Stylesheets/HashTable.module.css';

// // eslint-disable-next-line react/prop-types
// const HashTable = ({ size }) => {
//   const [table, setTable] = useState(Array(size).fill(null));
//   const [colors, setColors] = useState(Array(size).fill('#f1f1f1')); // Initial colors for cells
//   const [inputValue, setInputValue] = useState('');
//   const [collisionMessage, setCollisionMessage] = useState('');
//   const [hashCalculation, setHashCalculation] = useState(''); // State for hash calculation display
//   const [collisionCalculations, setCollisionCalculations] = useState([]); // State for collision calculations

//   const hashFunction = (key, attempt) => {
//     return ((key % size) + attempt * attempt) % size;
//   };

//   const insertValue = value => {
//     let attempt = 0;
//     let index;
//     let inserted = false;
//     const currentCollisionCalculations = []; // Array to hold collision calculations

//     while (attempt < size && !inserted) {
//       index = hashFunction(value, attempt);

//       // Display hash calculation
//       const hashCalc = `${value} % ${size} + (${attempt}^2) = ${index}`;
//       setHashCalculation(hashCalc);

//       // Set cell color to yellow while checking for collisions
//       const newColors = [...colors];
//       newColors[index] = 'yellow';
//       setColors(newColors);

//       if (table[index] === null) {
//         const newTable = [...table];
//         newTable[index] = value;
//         setTable(newTable);
//         newColors[index] = 'green'; // Change to green if inserted
//         setColors(newColors);
//         setCollisionMessage(`Value ${value} inserted at index ${index}`);
//         inserted = true;
//       } else {
//         // Keep the existing value and indicate a collision
//         const collisionCalc = `Collision at index ${index} for value ${table[index]}`;
//         currentCollisionCalculations.push(collisionCalc);
//         newColors[index] = 'red'; // Change to red if there's a collision
//         setColors(newColors);
//         setCollisionMessage(
//           `Collision at index ${index}! Trying the next index...`
//         );
//         attempt++;
//       }

//       // Reset the cell color back to original after a delay
//       setTimeout(() => {
//         newColors[index] = '#f1f1f1'; // Reset to original color
//         setColors(newColors);
//       }, 500); // Adjust delay as necessary
//     }

//     if (!inserted) {
//       setCollisionMessage(`Hash table is full. Could not insert ${value}.`);
//     }

//     // Update collision calculations state
//     setCollisionCalculations(prev => [
//       ...prev,
//       ...currentCollisionCalculations,
//     ]);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const value = parseInt(inputValue, 10);

//     // Check if the value is a non-negative integer
//     if (!isNaN(value) && value >= 0) {
//       insertValue(value);
//     } else {
//       setCollisionMessage('Please enter a non-negative integer.');
//     }

//     setInputValue('');
//   };

//   // Reset function to clear the table and inputs
//   const resetTable = () => {
//     setTable(Array(size).fill(null));
//     setColors(Array(size).fill('#f1f1f1'));
//     setInputValue('');
//     setCollisionMessage('');
//     setHashCalculation('');
//     setCollisionCalculations([]); // Clear collision calculations
//   };

//   return (
//     <div className='hash-table-container'>
//       <h1>Hash Table with Quadratic Probing</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type='number'
//           value={inputValue}
//           onChange={e => setInputValue(e.target.value)}
//           placeholder='Enter a non-negative number'
//           required
//         />
//         <button type='submit' className='insert-button'>
//           Insert
//         </button>{' '}
//         {/* Insert Button */}
//         <button type='button' onClick={resetTable} className='reset-button'>
//           Reset
//         </button>{' '}
//         {/* Reset Button */}
//       </form>
//       <div className='table-grid'>
//         {table.map((value, index) => (
//           <div
//             key={index}
//             className='table-cell'
//             style={{ backgroundColor: colors[index] }}
//           >
//             {value !== null ? value : ' '}
//             <span className='index-label'></span>
//           </div>
//         ))}
//       </div>
//       <div className='collision-message'>{collisionMessage}</div>
//       <div className='hash-calculation'>{hashCalculation}</div>{' '}
//       {/* Display hash calculation */}
//       <div className='collision-calculations'>
//         {collisionCalculations.map((calc, index) => (
//           <div key={index}>{calc}</div>
//         ))}
//       </div>{' '}
//       {/* Display collision calculations */}
//     </div>
//   );
// };

// export default HashTable;



import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const HashTable = ({ size }) => {
  const [table, setTable] = useState(Array(size).fill(null));
  const [colors, setColors] = useState(Array(size).fill('#f1f1f1')); // Initial colors for cells
  const [inputValue, setInputValue] = useState('');
  const [collisionMessage, setCollisionMessage] = useState('');
  const [hashCalculation, setHashCalculation] = useState(''); // State for hash calculation display
  const [collisionCalculations, setCollisionCalculations] = useState([]); // State for collision calculations

  const hashFunction = (key, attempt) => {
    return ((key % size) + attempt * attempt) % size;
  };

  const insertValue = value => {
    let attempt = 0;
    let index;
    let inserted = false;
    const currentCollisionCalculations = []; // Array to hold collision calculations

    while (attempt < size && !inserted) {
      index = hashFunction(value, attempt);

      // Display hash calculation
      const hashCalc = `${value} % ${size} + (${attempt}^2) = ${index}`;
      setHashCalculation(hashCalc);

      // Set cell color to yellow while checking for collisions
      const newColors = [...colors];
      newColors[index] = 'yellow';
      setColors(newColors);

      if (table[index] === null) {
        const newTable = [...table];
        newTable[index] = value;
        newColors[index] = 'green'; // Change to green if inserted
        setTable(newTable);
        setColors(newColors);
        setCollisionMessage(`Value ${value} inserted at index ${index}`);
        inserted = true;
      } else {
        // Keep the existing value and indicate a collision
        const collisionCalc = `Collision at index ${index} for value ${table[index]}`;
        currentCollisionCalculations.push(collisionCalc);
        newColors[index] = 'red'; // Change to red if there's a collision
        setColors(newColors);
        setCollisionMessage(
          `Collision at index ${index}! Trying the next index...`
        );
        attempt++;
      }

      // Reset the cell color back to original after a delay
      setTimeout(() => {
        newColors[index] = '#f1f1f1'; // Reset to original color
        setColors(newColors);
      }, 500); // Adjust delay as necessary
    }

    if (!inserted) {
      setCollisionMessage(`Hash table is full. Could not insert ${value}.`);
    }

    // Update collision calculations state
    setCollisionCalculations(prev => [
      ...prev,
      ...currentCollisionCalculations,
    ]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const value = parseInt(inputValue, 10);

    // Check if the value is a non-negative integer
    if (!isNaN(value) && value >= 0) {
      insertValue(value);
    } else {
      setCollisionMessage('Please enter a non-negative integer.');
    }

    setInputValue('');
  };

  // Reset function to clear the table and inputs
  const resetTable = () => {
    setTable(Array(size).fill(null));
    setColors(Array(size).fill('#f1f1f1'));
    setInputValue('');
    setCollisionMessage('');
    setHashCalculation('');
    setCollisionCalculations([]); // Clear collision calculations
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Hash Table with Quadratic Probing</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type='number'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder='Enter a non-negative number'
          required
          style={{
            padding: '10px',
            width: '150px',
            marginRight: '10px',
            color: 'white',
            backgroundColor: '#333',
          }}
        />
        <button
          type='submit'
          style={{
            padding: '10px 20px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        >
          Insert
        </button>
        <button
          type='button'
          onClick={resetTable}
          style={{
            padding: '10px 20px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </form>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
          gap: '10px',
          justifyItems: 'center',
          margin: '20px auto',
          maxWidth: '400px',
        }}
      >
        {table.map((value, index) => (
          <div
            key={index}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: colors[index],
              border: '1px solid #ccc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {value !== null ? value : ' '}
            <span style={{ position: 'absolute', top: '-10px', left: '0', fontSize: '12px', color: '#777' }}></span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', fontWeight: 'bold', color: '#ff0000' }}>
        {collisionMessage}
      </div>
      <div style={{ marginTop: '20px', fontWeight: 'bold', color: '#333' }}>
        {hashCalculation}
      </div>
      <div style={{ marginTop: '20px', fontWeight: 'bold', color: '#ff0000' }}>
        {collisionCalculations.map((calc, index) => (
          <div key={index}>{calc}</div>
        ))}
      </div>
    </div>
  );
};

export default HashTable;
