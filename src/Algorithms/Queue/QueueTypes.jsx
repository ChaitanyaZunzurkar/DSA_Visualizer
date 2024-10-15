import type1 from '../../assets/QueueImages/typesofqueues.jpg';
import deq from '../../assets/QueueImages/doubleended.jpg';
import irq from '../../assets/QueueImages/inputrestrictedqueue.jpg';
import orq from '../../assets/QueueImages/outputrestrictedqueue.jpg';
const QueueTypes = () => {
    const ing = {
        maxWidth: '100%',
        marginBottom: '20px',
        borderRadius: '1px',
        padding: '0px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
        height:'400px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        
    };
    const ing2={
        maxWidth: '100%',
        marginBottom: '20px',
        borderRadius: '1px',
        padding: '0px',
        height:'200px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
    }
    return (
        <div>
            <h1>Different Types of Queues and their Applications</h1>
            <p><strong>Last Updated: 28 Mar, 2023</strong></p>
            <p>
                A Queue is a linear structure that follows a particular order in which operations are performed. 
                The order is First In First Out (FIFO). A good example of a queue is any queue of consumers for a 
                resource where the consumer that came first is served first.
            </p>

            <h2>Types of Queues:</h2>
            <p>There are five different types of queues used in various scenarios:</p>
            <ul>
                <li>Input Restricted Queue (Simple Queue)</li>
                <li>Output Restricted Queue (Simple Queue)</li>
                <li>Circular Queue</li>
                <li>Double Ended Queue (Dequeue)</li>
                <li>Priority Queue</li>
                <ul>
                    <li>Ascending Priority Queue</li>
                    <li>Descending Priority Queue</li>
                </ul>
            </ul>
            <img src={type1} alt="types" style={ing}></img>

            <h3>1. Circular Queue:</h3>
            <p>
                A Circular Queue is a linear data structure where operations follow FIFO, and the last position 
                connects back to the first, forming a circle. It is also known as a 'Ring Buffer'. 
            </p>
            <p>Applications of Circular Queue include:</p>
            <ul>
                <li><strong>Memory Management:</strong> Utilizes unused memory locations in ordinary queues.</li>
                <li><strong>Traffic System:</strong> Controls traffic lights in a cyclic manner.</li>
                <li><strong>CPU Scheduling:</strong> Maintains a queue of processes waiting to execute.</li>
            </ul>
            <p>Time complexity: O(1)</p>

            <h3>2. Input Restricted Queue:</h3>
            <p>
                In this type of queue, input can only be added from one end (rear), while elements can be removed 
                from both ends (front and rear). This type does not strictly follow FIFO.
            </p>
            <img src={irq} alt="irq"style={ing2} />
            <p>Advantages:</p>
            <ul>
                <li>Prevents overflow by limiting the number of items added.</li>
                <li>Maintains system stability and predictable performance.</li>
            </ul>
            <p>Disadvantages:</p>
            <ul>
                <li>May cause resource wastage if restriction is set too low.</li>
                <li>Can lead to blocking if restriction is set too high.</li>
            </ul>

            <h3>3. Output Restricted Queue:</h3>
            <p>
                In this queue, elements can be added from both ends (front and rear), but deletion is allowed only from 
                the front. It is used in scenarios where inputs have priority and need to be executed in order.
            </p>
            <img src={orq} alt="orq"style={ing2} />

            <h3>4. Double Ended Queue (Dequeue):</h3>
            <p>
                A Dequeue allows insertion and deletion from both the front and rear. It supports both stack and queue operations, 
                and rotations can be done in O(1) time, making it suitable for problems requiring operations on both ends.
            </p>
            <img src={deq} alt="deq" style={ing2}/>

            <h3>5. Priority Queue:</h3>
            <p>
                A Priority Queue is a special queue where each element is associated with a priority and served based on it.
                There are two types of Priority Queues:
            </p>
            <ul>
                <li><strong>Ascending Priority Queue:</strong> The smallest element is removed first.</li>
                <li><strong>Descending Priority Queue:</strong> The largest element is removed first.</li>
            </ul>
            <p>Time complexity: O(log n)</p>

            <h2>Applications of Queues:</h2>
            <ul>
                <li>CPU Scheduling and Disk Scheduling.</li>
                <li>Asynchronous data transfer (e.g., IO Buffers, pipes, file IO).</li>
                <li>Breadth First Search (BFS) algorithm.</li>
            </ul>

            <h3>Common Queue Types:</h3>
            <ul>
                <li>
                    <strong>Linear Queue:</strong> Data elements are added at the end and removed from the front 
                    (e.g., printer queues, message queues).
                </li>
                <li>
                    <strong>Circular Queue:</strong> Similar to linear, but the end connects back to the front for 
                    efficient memory use (e.g., CPU scheduling, memory management).
                </li>
                <li>
                    <strong>Priority Queue:</strong> Processes elements based on priority level (e.g., OS task scheduling).
                </li>
                <li>
                    <strong>Double-ended Queue:</strong> Allows flexibility in processing elements from both ends 
                    (e.g., job scheduling, searching algorithms).
                </li>
                <li>
                    <strong>Concurrent Queue:</strong> Handles multiple threads accessing the queue simultaneously 
                    (e.g., database transactions, web server requests).
                </li>
            </ul>

            <h2 >Issues of Queue:</h2>
            <ul>
                <li><strong>Queue Overflow:</strong> Occurs when the queue reaches maximum capacity, leading to data loss.</li>
                <li><strong>Queue Underflow:</strong> Removing an element from an empty queue causes errors.</li>
                <li><strong>Priority Inversion:</strong> A low-priority task holding a resource needed by a high-priority task causes delays.</li>
                <li><strong>Deadlocks:</strong> Occurs when multiple threads wait for each other, causing a system freeze.</li>
                <li><strong>Performance Issues:</strong> Large queues or frequent access can reduce system performance.</li>
                <li><strong>Synchronization Issues:</strong> Multiple threads accessing the same queue can lead to data corruption.</li>
                <li><strong>Memory Management Issues:</strong> Large queues can cause memory leaks, leading to system crashes.</li>
            </ul>

            
        </div>
    );
};

export default QueueTypes;