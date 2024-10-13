import { useState } from 'react';
import AlertBox from './AlertBox'; // Adjust the path accordingly

const Insertion = () => {
    const [list, setList] = useState([]);
    const [value, setValue] = useState('');
    const [position, setPosition] = useState('head'); // 'head', 'kth', 'tail'
    const [kth, setKth] = useState(0);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleInsert = () => {
        if (!value) {
            showAlertWithMessage("Node value cannot be empty");
            return;
        }

        // Validation for k-th position
        if (position === 'kth' && (kth < 0 || kth > list.length)) {
            showAlertWithMessage("Invalid position");
            return;
        }

        let newList = [...list];
        const node = { value: value };

        if (position === 'head') {
            newList.unshift(node); // Insert at head
        } else if (position === 'tail') {
            newList.push(node); // Insert at tail
        } else if (position === 'kth') {
            newList.splice(kth, 0, node); // Insert at k-th position
        }

        setList(newList);
        setValue(''); // Reset input field
        setKth(0); // Reset k-th position
    };

    const showAlertWithMessage = (message) => {
        setAlertMessage(message);
        setShowAlert(true);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
        setAlertMessage('');
    };

    // Inline CSS styles
    const styles = {
        container: {
            padding: '20px',
            textAlign: 'center',
        },
        visualization: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            position: 'relative', // Relative positioning for connecting lines
        },
        node: {
            padding: '10px 20px',
            margin: '0 5px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative', // Position for absolute child elements
        },
        line: {
            position: 'absolute',
            height: '2px',
            backgroundColor: '#007bff',
            top: '50%',
            transform: 'translateY(-50%)', // Center the line vertically
        },
        input: {
            padding: '10px',
            margin: '0 5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            color:"white"
        },
        button: {
            padding: '10px 15px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
        },
        select: {
            padding: '10px',
            margin: '0 5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            color: 'white'
        },
    };

    return (
        <div style={styles.container}>
            <h2>Linked List Insertion Visualization</h2>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter node value"
                    style={styles.input}
                />
                <select value={position} onChange={(e) => setPosition(e.target.value)} style={styles.select}>
                    <option value="head">Insert at Head</option>
                    <option value="tail">Insert at Tail</option>
                    <option value="kth">Insert at K-th Position</option>
                </select>
                {position === 'kth' && (
                    <input
                        type="number"
                        value={kth}
                        onChange={(e) => setKth(Number(e.target.value))}
                        min={0}
                        placeholder="Enter position"
                        style={styles.input}
                    />
                )}
                <button onClick={handleInsert} style={styles.button}>Insert Node</button>
            </div>
            <div style={styles.visualization}>
                {list.map((node, index) => (
                    <div key={index} style={styles.node}>
                        {node.value}
                        {/* Render a connecting line after every node except the last */}
                        {index < list.length - 1 && (
                            <div
                                style={{
                                    ...styles.line,
                                    width: '50px', // Adjust width as needed
                                    left: '100%', // Start from the right of the current node
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
            {showAlert && <AlertBox message={alertMessage} onClose={handleCloseAlert} />}
        </div>
    );
};

export default Insertion;
