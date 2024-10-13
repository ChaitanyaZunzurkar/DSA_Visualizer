import dummyimages from '../../assets/dummy.webp';

const QueueConcept = () => {
    const headingStyle = {
        color: '#5bbaea',
        marginBottom: '10px',
        borderBottom: '2px solid #4CAF50',
        paddingBottom: '5px',
        textAlign: 'center',
    };

    const subHeadingStyle = {
        color: '#4CAF50',
        margin: '20px 0 20px 0',
    };

    const listStyle = {
        marginLeft: '20px',
        listStyleType: 'disc',
    };

    return (
        <div>
            <h1 style={headingStyle}>Queue Data Structure</h1>

            <h2 style={subHeadingStyle}>What is Queue Data Structure?</h2>
            <p>
                A Queue is a linear data structure that follows FIFO (First In First Out) principle, meaning the first element added to the queue is the first to be removed. It’s commonly used in scheduling, resource management, and buffering.
            </p>

            <h2 style={subHeadingStyle}>Representation of Queue Data Structure:</h2>
            <p>Queue follows FIFO, and the front is the position where elements are dequeued, while the rear is where elements are enqueued.</p>
            <img src={dummyimages} alt="Queue Representation" />

            <h2 style={subHeadingStyle}>Types of Queue Data Structure:</h2>
            <ul style={listStyle}>
                <li><b>Simple Queue</b> - Basic FIFO queue.</li>
                <li><b>Circular Queue</b> - The last position is connected to the first.</li>
                <li><b>Priority Queue</b> - Elements are accessed based on priority.</li>
                <li><b>Double-Ended Queue (Deque)</b> - Insertion/deletion can happen at both ends.</li>
            </ul>

            <h2 style={subHeadingStyle}>Basic Operations in Queue Data Structure:</h2>
            <ul style={listStyle}>
                <li><b>Enqueue</b> - Adds an element to the end of the queue.</li>
                <li><b>Dequeue</b> - Removes the front element.</li>
                <li><b>Front</b> - Returns the front element without removing it.</li>
                <li><b>Rear</b> - Returns the rear element without removing it.</li>
                <li><b>isEmpty</b> - Checks if the queue is empty.</li>
                <li><b>isFull</b> - Checks if the queue is full.</li>
            </ul>

            <h3>1. Enqueue Operation:</h3>
            <p>Enqueue adds an element to the rear of the queue. If the queue is full, an overflow error occurs.</p>
            <h4>Algorithm:</h4>
            <ul style={listStyle}>
                <li>Check if the queue is full.</li>
                <li>If not, increment rear and add the element at the rear.</li>
            </ul>

            <h3>2. Dequeue Operation:</h3>
            <p>Dequeue removes the front element. If the queue is empty, an underflow error occurs.</p>
            <h4>Algorithm:</h4>
            <ul style={listStyle}>
                <li>Check if the queue is empty.</li>
                <li>If not, increment the front and remove the element.</li>
            </ul>

            <h3>3. Front Operation:</h3>
            <p>Returns the front element without removing it.</p>

            <h3>4. Rear Operation:</h3>
            <p>Returns the last element (rear) without removing it.</p>

            <h3>5. isEmpty Operation:</h3>
            <p>Returns true if the queue is empty, false otherwise.</p>

            <h3>6. isFull Operation:</h3>
            <p>Returns true if the queue is full, false otherwise.</p>

            <h2 style={subHeadingStyle}>Advantages of Queue Data Structure:</h2>
            <ul style={listStyle}>
                <li>Helps in scheduling and managing resources efficiently.</li>
                <li>Simple to implement with predictable behavior.</li>
            </ul>

            <h2 style={subHeadingStyle}>Disadvantages of Queue Data Structure:</h2>
            <ul style={listStyle}>
                <li>Limited access, only front and rear elements are directly accessible.</li>
                <li>Fixed size may lead to overflow or under utilization.</li>
            </ul>

            <h2 style={subHeadingStyle}>Applications of Queue Data Structure:</h2>
            <ul style={listStyle}>
                <li>Process scheduling in operating systems.</li>
                <li>Handling of requests in web servers.</li>
                <li>Buffering data streams in media players.</li>
            </ul>
        </div>
    );
};

export default QueueConcept;
