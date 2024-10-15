import img1 from '../../assets/QueueImages/qimp.webp';

const QueueImplementation = () => {
    const img ={
        height: '300px',
        
    };
return (
        <div>
            <h1>Queue Data Structure</h1>
            <p>
                Similar to Stack, Queue is a linear data structure that follows a particular order 
                in which the operations are performed for storing data. The order is First In First Out (FIFO). 
                One can imagine a queue as a line of people waiting to receive something in sequential order which starts 
                from the beginning of the line. It is an ordered list in which insertions are done at one end, 
                known as the rear, and deletions are done from the other end, known as the front. 
                A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first.
            </p>
            <p>
                The difference between stacks and queues is in removing. In a stack, we remove the most recently added item; 
                in a queue, we remove the item that was least recently added.
            </p>
            <img src={img1} style={img}/>

            <h2>Basic Operations on Queue:</h2>
            <ul>
                <li>enqueue(): Inserts an element at the end of the queue (at the rear end).</li>
                <li>dequeue(): Removes and returns an element that is at the front end of the queue.</li>
                <li>front(): Returns the element at the front end without removing it.</li>
                <li>rear(): Returns the element at the rear end without removing it.</li>
                <li>isEmpty(): Indicates whether the queue is empty or not.</li>
                <li>isFull(): Indicates whether the queue is full or not.</li>
                <li>size(): Returns the size of the queue (the total number of elements it contains).</li>
            </ul>

            <h2>Types of Queues:</h2>
            <ul>
                <li><strong>Simple Queue:</strong> The most basic version of a queue. Insertions (enqueue) occur at the rear end, and deletions (dequeue) occur at the front end. However, if items are popped from the front and the rear reaches the capacity of the queue, even if there are empty spaces before the front, the queue will show as full. This can be solved with a circular queue.</li>
                <li><strong>Circular Queue:</strong> In a circular queue, the elements form a circular ring, and the last element connects to the first element. This allows better memory utilization as elements can be inserted into empty spaces left by dequeued elements.</li>
                <li><strong>Priority Queue:</strong> Elements are arranged in a queue based on a priority system. For example, elements with higher values or lower values may get priority, creating a queue in decreasing or increasing order of values, respectively.</li>
                <li><strong>Dequeue (Double Ended Queue):</strong> Allows insertion and deletion from both ends of the queue, unlike other queues that allow operations from only one end.</li>
            </ul>

            <h2>Applications of Queue:</h2>
            <ul>
                <li>When resources are shared among multiple consumers, such as CPU scheduling or disk scheduling.</li>
                <li>For asynchronous data transfer between two processes (e.g., IO Buffers, pipes, file IO).</li>
                <li>As an essential component in other data structures (e.g., Breadth First Search).</li>
            </ul>

            <h2>Array Implementation of Queue:</h2>
            <p>
                For implementing a queue, we need to track two indices: front and rear. We enqueue an item at the rear and dequeue an item from the front. The issue arises when the front reaches the end of the array. The solution is to increase the front and rear in a circular manner.
            </p>

            <h3>Steps for Enqueue:</h3>
            <ul>
                <li>Check if the queue is full.</li>
                <li>If full, print overflow and exit.</li>
                <li>If not full, increment the rear index and add the element.</li>
            </ul>

            <h3>Steps for Dequeue:</h3>
            <ul>
                <li>Check if the queue is empty.</li>
                <li>If empty, print underflow and exit.</li>
                <li>If not empty, return the element at the front and increment the front index.</li>
            </ul>

            {/* Array Implementation Code Block */}
            
            <h3>Complexity Analysis:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Operation</th>
                        <th>Complexity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Enqueue (Insertion)</td>
                        <td>O(1)</td>
                    </tr>
                    <tr>
                        <td>Dequeue (Deletion)</td>
                        <td>O(1)</td>
                    </tr>
                    <tr>
                        <td>Front (Get Front)</td>
                        <td>O(1)</td>
                    </tr>
                    <tr>
                        <td>Rear (Get Rear)</td>
                        <td>O(1)</td>
                    </tr>
                    <tr>
                        <td>isFull (Check Queue Full)</td>
                        <td>O(1)</td>
                    </tr>
                    <tr>
                        <td>isEmpty (Check Queue Empty)</td>
                        <td>O(1)</td>
                    </tr>
                </tbody>
            </table>

            <h3>Advantages of Array Implementation:</h3>
            <ul>
                <li>Easy to implement.</li>
                <li>Efficient management of large amounts of data.</li>
                <li>Follows FIFO rule for ease of insertion and deletion.</li>
            </ul>

            <h3>Disadvantages of Array Implementation:</h3>
            <ul>
                <li>Static data structure with a fixed size.</li>
                <li>Can run into issues with linear increments of front and rear indices without a circular approach.</li>
                <li>Maximum size of the queue must be defined beforehand.</li>
            </ul>

            <h2>Queue – Linked List Implementation:</h2>
            <p>
                In a linked list-based implementation, we maintain two pointers: front and rear. The front points to the first item in the queue, and the rear points to the last item.
            </p>

            <h3>Operations:</h3>
            <ul>
                <li><strong>enQueue():</strong> Adds a new node after the rear and moves the rear to the next node.</li>
                <li><strong>deQueue():</strong> Removes the front node and moves the front to the next node.</li>
            </ul>

            <h3>Steps for Enqueue:</h3>
            <ul>
                <li>Create a new node with the given value.</li>
                <li>If the rear is NULL, set both front and rear to the new node (base case).</li>
                <li>Otherwise, set the rear's next to the new node and move the rear to the new node.</li>
            </ul>

            <h3>Steps for Dequeue:</h3>
            <ul>
                <li>If the front is NULL, return (base case).</li>
                <li>Set the front to the next node and delete the old front node.</li>
                <li>If the front becomes NULL, set the rear to NULL as well.</li>
            </ul>

            {/* Linked List Implementation Code Block */}
            
            <h3>Complexity Analysis:</h3>
            <p>
                Both enqueue() and dequeue() operations have a time complexity of O(1) since they involve simple pointer changes.
            </p>

            <h3>Advantages of Linked List Implementation:</h3>
            <ul>
                <li>Dynamic in size, can grow and shrink at runtime as needed.</li>
                <li>Efficient for cases with frequent enqueue and dequeue operations.</li>
            </ul>

            <h3>Disadvantages of Linked List Implementation:</h3>
            <ul>
                <li>Requires extra memory for pointers.</li>
                <li>Random access is not possible in a linked list-based queue.</li>
            </ul>
        </div>
    );
};

export default QueueImplementation;
