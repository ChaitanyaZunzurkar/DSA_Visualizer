import { useState, useEffect } from 'react';

const hashFunction = (value, size) => {
  return value % size; // Simple modulo hash function
};

const HashingChaining = () => {
  const [hashTable, setHashTable] = useState(new Array(10).fill(null).map(() => []));
  const [userInput, setUserInput] = useState(''); // For the user's input
  const [dataItems, setDataItems] = useState([]); // Array to hold entered values
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    if (dataItems.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex < dataItems.length - 1) {
          const nextIndex = prevIndex + 1;
          const value = dataItems[nextIndex];
          const hashedIndex = hashFunction(value, hashTable.length);
          const newTable = [...hashTable];
          newTable[hashedIndex] = [...newTable[hashedIndex], value]; // Insert into chain
          setHashTable(newTable);
          return nextIndex;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 1000); // 1-second delay for each move

    return () => clearInterval(interval);
  }, [dataItems, hashTable]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = Number(userInput);
    if (!isNaN(value)) {
      setDataItems(prevItems => [...prevItems, value]); // Add new value to the array
      setUserInput(''); // Clear the input after submitting
    }
  };

  // Inline styles for the components
  const styles = {
    chainingContainer: {
      textAlign: 'center',
      marginTop: '20px',
    },
    hashTable: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
    },
    hashBucket: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100px',
      border: '2px solid #333',
      padding: '10px',
      borderRadius: '8px',
      backgroundColor: '#f7f7f7',
      transition: 'background-color 0.5s ease',
    },
    bucketIndex: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#444',
    },
    bucketChain: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginTop: '10px',
    },
    emptyBucket: {
      fontSize: '12px',
      color: '#aaa',
    },
    chainItem: isMoving => ({
      backgroundColor: isMoving ? '#ff9800' : '#4caf50',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '8px',
      transform: isMoving ? 'scale(1.2)' : 'scale(1)',
      transition: 'transform 1s ease, background-color 0.5s ease',
    }),
    dataContainer: {
      position: 'relative',
      height: '500px', // Adjust height for vertical layout
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dataItem: isMoving => ({
      position: 'relative',
      width: '40px',
      height: '40px',
      backgroundColor: isMoving ? '#ff9800' : '#4caf50',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      transition: 'top 1s ease, transform 1s ease',
      transform: isMoving ? 'scale(1.2)' : 'scale(1)',
    }),
    input: {
      padding: '8px',
      width: '300px',
      backgroundColor: '#333', // Dark background for the input field
      color: 'white', // White text inside input
      border: 'none',
      borderRadius: '5px',
    },
    button: {
      marginLeft: '10px',
      padding: '8px',
      backgroundColor: '#4caf50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.chainingContainer}>
      <h2>Hashing with Separate Chaining Visualization (Vertical)</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter a number"
          style={styles.input} // Apply the custom input style
        />
        <button type="submit" style={styles.button}>Add</button>
      </form>

      <div style={styles.hashTable}>
        {hashTable.map((bucket, index) => (
          <div style={styles.hashBucket} key={index}>
            <div style={styles.bucketIndex}>{index}</div>
            <div style={styles.bucketChain}>
              {bucket.length > 0 ? (
                bucket.map((item, i) => (
                  <div
                    key={i}
                    style={styles.chainItem(currentIndex === index && i === bucket.length - 1)}
                  >
                    {item}
                  </div>
                ))
              ) : (
                <div style={styles.emptyBucket}>Empty</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={styles.dataContainer}>
        {dataItems.map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.dataItem(currentIndex === index),
              top: `${(index + 1) * 50}px`, // Adjust top for vertical movement
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HashingChaining;
