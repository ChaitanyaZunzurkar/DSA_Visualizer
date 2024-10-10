const StackImplementation = () => {
    return (
        <div>
            <h1>Implementation of Stack Data Structure</h1>
            <p>The basic operations that can be performed on a stack include push, pop, and peek. There are two ways to implement a stack – </p>
            <ul>
            Using Array
            </ul>
            <ul>
            Using Linked List
            </ul>


            <h2>Implementation of Stack Data Structure using Array:</h2>
            <p>In an array-based implementation, the push operation is implemented by incrementing the index of the top element and storing the new element at that index. The pop operation is implemented by returning the value stored at the top index and then decrementing the index of the top element.

            </p>
            {/* code block and output */}

            <h3>Advantages of Array Implementation:</h3>
            <ul>
                <li>
                Easy to implement.
                </li>
                <li>
                Memory is saved as pointers are not involved.
                </li>
            </ul>
            
            
            <h3>Disadvantages of Array Implementation:</h3>
            <ul>
                <li>
                It is not dynamic i.e., it doesn’t grow and shrink depending on needs at runtime. [But in case of dynamic sized arrays like vector in C++, list in Python, ArrayList in Java, stacks can grow and shrink with array implementation as well].
                </li>
                <li>The total size of the stack must be defined beforehand.
                </li>
            </ul>




            <h2>Implementation of Stack Data Structure using Linked List:</h2>
            <p>

            In a linked list-based implementation, the push operation is implemented by creating a new node with the new element and setting the next pointer of the current top node to the new node. The pop operation is implemented by setting the next pointer of the current top node to the next node and returning the value of the current top node.</p>
            {/* code block and output */}

            <h3>Advantages of Linked List implementation:</h3>
            <ul>
                <li>
                The linked list implementation of a stack can grow and shrink according to the needs at runtime.
                </li>
                <li>
                It is used in many virtual machines like JVM.
                </li>
            </ul>
            
            
            <h3>Disadvantages of Linked List implementation:</h3>
            <ul>
                <li>
                Requires extra memory due to the involvement of pointers.
                </li>
                <li>Random accessing is not possible in stack.
                </li>
            </ul>
            {/* code and output  */}
            



        </div>
    );
}

export default StackImplementation;