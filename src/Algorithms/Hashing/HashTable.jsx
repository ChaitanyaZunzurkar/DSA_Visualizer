import { useState } from 'react';

const HashTable = ({ size }) => {
  const [table, setTable] = useState(Array(size).fill(null));
  const [colors, setColors] = useState(Array(size).fill('')); // Initial colors for cells
  const [inputValue, setInputValue] = useState('');
  const [collisionMessage, setCollisionMessage] = useState('');
  const [hashCalculation, setHashCalculation] = useState('');
  const [collisionCalculations, setCollisionCalculations] = useState([]);

  const hashFunction = (key, attempt) => {
    return ((key % size) + attempt * attempt) % size;
  };

  const insertValue = (value) => {
    let attempt = 0;
    let index;
    let inserted = false;
    const currentCollisionCalculations = [];

    while (attempt < size && !inserted) {
      index = hashFunction(value, attempt);
      const hashCalc = `${value} % ${size} + (${attempt}^2) = ${index}`;
      setHashCalculation(hashCalc);

      const newColors = [...colors];
      newColors[index] = 'yellow';
      setColors(newColors);

      if (table[index] === null) {
        const newTable = [...table];
        newTable[index] = value;
        newColors[index] = 'green';
        setTable(newTable);
        setColors(newColors);
        setCollisionMessage(`Value ${value} inserted at index ${index}`);
        inserted = true;
      } else {
        const collisionCalc = `Collision at index ${index} for value ${table[index]}`;
        currentCollisionCalculations.push(collisionCalc);
        newColors[index] = 'red';
        setColors(newColors);
        setCollisionMessage(`Collision at index ${index}! Trying the next index...`);
        attempt++;
      }

      setTimeout(() => {
        newColors[index] = ''; // Reset to original color
        setColors(newColors);
      }, 500);
    }

    if (!inserted) {
      setCollisionMessage(`Hash table is full. Could not insert ${value}.`);
    }

    setCollisionCalculations((prev) => [...prev, ...currentCollisionCalculations]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseInt(inputValue, 10);

    if (!isNaN(value) && value >= 0) {
      insertValue(value);
    } else {
      setCollisionMessage('Please enter a non-negative integer.');
    }

    setInputValue('');
  };

  const resetTable = () => {
    setTable(Array(size).fill(null));
    setColors(Array(size).fill(''));
    setInputValue('');
    setCollisionMessage('');
    setHashCalculation('');
    setCollisionCalculations([]);
  };

  const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    form: {
      marginBottom: '20px',
    },
    input: {
      padding: '10px',
      width: '150px',
      marginRight: '10px',
      color: 'white',
      backgroundColor: '#333',
    },
    button: {
      padding: '10px 20px',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      marginRight: '10px',
    },
    insertButton: {
      backgroundColor: '#4caf50',
    },
    resetButton: {
      backgroundColor: '#f44336',
    },
    tableGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
      gap: '10px',
      justifyItems: 'center',
      margin: '20px auto',
      maxWidth: '400px',
    },
    tableCell: {
      width: '50px',
      height: '50px',
      border: '1px solid #ccc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      transition: 'background-color 0.5s, transform 0.5s',
    },
    collisionMessage: {
      marginTop: '20px',
      fontWeight: 'bold',
      color: '#ff0000',
    },
    hashCalculation: {
      marginTop: '20px',
      fontWeight: 'bold',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Hash Table with Quadratic Probing</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type='number'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Enter a non-negative number'
          required
          style={styles.input}
        />
        <button type='submit' style={{ ...styles.button, ...styles.insertButton }}>
          Insert
        </button>
        <button type='button' onClick={resetTable} style={{ ...styles.button, ...styles.resetButton }}>
          Reset
        </button>
      </form>
      <div style={styles.tableGrid}>
        {table.map((value, index) => (
          <div
            key={index}
            style={{
              ...styles.tableCell,
              backgroundColor:
                colors[index] === 'green'
                  ? '#4caf50'
                  : colors[index] === 'yellow'
                  ? '#ffeb3b'
                  : colors[index] === 'red'
                  ? '#f44336'
                  : '#f1f1f1',
              animation:
                colors[index] === 'green'
                  ? 'fadeIn 0.5s'
                  : colors[index] === 'yellow'
                  ? 'pulse 0.5s infinite'
                  : colors[index] === 'red'
                  ? 'shake 0.5s'
                  : 'none',
            }}
          >
            {value !== null ? value : ' '}
          </div>
        ))}
      </div>
      <div style={styles.collisionMessage}>{collisionMessage}</div>
      <div style={styles.hashCalculation}>{hashCalculation}</div>
      <div style={styles.collisionCalculations}>
        {collisionCalculations.map((calc, index) => (
          <div key={index}>{calc}</div>
        ))}
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
          @keyframes shake {
            0% {
              transform: translateX(0);
            }
            25% {
              transform: translateX(-5px);
            }
            50% {
              transform: translateX(5px);
            }
            75% {
              transform: translateX(-5px);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default HashTable;
