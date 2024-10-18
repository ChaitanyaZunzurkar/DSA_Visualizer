import { useState, useEffect } from 'react';

const hashFunction = (value, size) => {
  return value % size; // Simple modulo hash function
};

const HashingChaining = () => {
  const [hashTable, setHashTable] = useState(new Array(10).fill(null).map(() => []));
  const [userInput, setUserInput] = useState(''); // For the user's input
  const [dataItems, setDataItems] = useState([]); // Array to hold entered values
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [latestValue, setLatestValue] = useState(null); // Track the most recently added value

  useEffect(() => {
    if (dataItems.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < dataItems.length - 1) {
          const nextIndex = prevIndex + 1;
          const value = dataItems[nextIndex];
          const hashedIndex = hashFunction(value, hashTable.length);
          const newTable = [...hashTable];
          newTable[hashedIndex] = [...newTable[hashedIndex], value]; // Insert into chain
          setHashTable(newTable);
          setLatestValue(value); // Update the latest value
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
      setDataItems((prevItems) => [...prevItems, value]); // Add new value to the array
      setUserInput(''); // Clear the input after submitting
    }
  };

  const handleReset = () => {
    setHashTable(new Array(10).fill(null).map(() => [])); // Reset the hash table
    setDataItems([]); // Clear all data items
    setCurrentIndex(-1); // Reset current index
    setLatestValue(null); // Reset latest value
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
    hashBucket: (bucketSize) => ({
      display: 'flex',
      flexDirection: 'row', // Extend in row direction
      alignItems: 'center',
      width: `${100 + bucketSize * 60}px`, // Dynamically adjust width based on the bucket size
      border: '2px solid #333',
      padding: '10px',
      borderRadius: '8px',
      backgroundColor: '#f7f7f7',
      transition: 'width 0.5s ease', // Smooth extension of width
      marginBottom: '20px', // Added margin between hash buckets
    }),
    bucketIndex: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#444',
    },
    bucketChain: {
      display: 'flex',
      flexDirection: 'row', // Row layout for chaining
      gap: '8px',
      marginLeft: '10px', // Add spacing between the index and the chain
    },
    emptyBucket: {
      fontSize: '12px',
      color: '#aaa',
    },
    chainItem: (item) => ({
      backgroundColor: item === latestValue ? '#ffeb3b' : '#4caf50', // Yellow for latest, green for others
      color: 'white',
      padding: '10px 20px', // Adjusted for oval shape
      borderRadius: '50px', // Oval shape
      transition: 'transform 1s ease, background-color 0.5s ease',
    }),
    input: {
      padding: '8px',
      width: '300px',
      backgroundColor: '#333', // Dark background for the input field
      color: 'white', // White text inside input
      border: 'none',
      borderRadius: '5px',
      marginBottom: '8px',
    },
    button: {
      marginLeft: '10px',
      padding: '8px',
      backgroundColor: '#4caf50',
      color: 'white',
      border: 'none',
      borderRadius: '140px',
      cursor: 'pointer',
    },
    resetButton: {
      marginTop: '2px',
      marginLeft: '10px',
      padding: '8px',
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      borderRadius: '140px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.chainingContainer}>
      <h2>Hashing with Separate Chaining Visualization</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter a number"
          style={styles.input} // Apply the custom input style
        />
        <button type="submit" style={styles.button}>
          Add
        </button>

        <button style={styles.resetButton} onClick={handleReset}>
          Reset
        </button>
      </form>

      <div style={styles.hashTable}>
        {hashTable.map((bucket, index) => (
          <div style={styles.hashBucket(bucket.length)} key={index}>
            <div style={styles.bucketIndex}>{index}</div>
            <div style={styles.bucketChain}>
              {bucket.length > 0 ? (
                bucket.map((item, i) => (
                  <div
                    key={i}
                    style={styles.chainItem(item)}
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
    </div>
  );
};

export default HashingChaining;
