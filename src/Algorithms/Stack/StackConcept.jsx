
const StackConcept = () => {
    

    const headingStyle = {
        color: '#5bbaea',
        marginBottom: '10px',
        borderBottom: '2px solid #4CAF50',
        paddingBottom: '5px',
        textAlign : 'center',
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


            {/* //reference website for this https://www.geeksforgeeks.org/introduction-to-stack-data-structure-and-algorithm-tutorials/?ref=lbp */}
            <h1>Stack Data Structure</h1>
            <h2>What is a Stack?</h2>
            <p>
            A Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). LIFO implies that the element that is inserted last, comes out first and FILO implies that the element that is inserted first, comes out last.
            </p>
            



            <h2>What is Stack Data Structure?</h2>
            <p><ul>
                <li>
                Stack is a linear data structure based on LIFO(Last In First Out) principle in which the insertion of a new element and removal of an existing element takes place at the same end represented as the top of the stack.
                </li>
                <li>
                To implement the stack, it is required to maintain the pointer to the top of the stack , which is the last element to be inserted because we can access the elements only on the top of the stack
                </li>
                
                <li>
                    <h3>
                        LIFO(Last In First Out) Principle in Stack Data Structure:
                        </h3>
                    <p>This strategy states that the element that is inserted last will come out first. You can take a pile of plates kept on top of each other as a real-life example. The plate which we put last is on the top and since we remove the plate that is at the top, we can say that the plate that was put last comes out first.</p>
                </li>

                </ul></p>





            <h2>Representation of Stack Data Structure:</h2>
            <p>Stack follows LIFO (Last In First Out) Principle so the element which is pushed last is popped first.</p>
            
            




            <h2>Types of Stack Data Structure:</h2>
            <ul>
                <li>
                <b>Fixed Size Stack  :</b> As the name suggests, a fixed size stack has a fixed size and cannot grow or shrink dynamically. If the stack is full and an attempt is made to add an element to it, an overflow error occurs. If the stack is empty and an attempt is made to remove an element from it, an underflow error occurs.
                </li>
                <li> <b>Dynamic Size Stack :</b> A dynamic size stack can grow or shrink dynamically. When the stack is full, it automatically increases its size to accommodate the new element, and when the stack is empty, it decreases its size. This type of stack is implemented using a linked list, as it allows for easy resizing of the stack.</li>
            </ul>




            <h2>Basic Operations on Stack Data Structure:</h2>
            <p>In order to make manipulations in a stack, there are certain operations provided to us.</p>.
            <ul>
            <li><b>    push()</b> to insert an element into the stack.</li>
            <li><b>    pop() </b>to remove an element from the stack.</li>
            <li><b>    top() </b>Returns the top element of the stack.</li>
            <li><b>    isEmpty() </b>returns true if stack is empty else false.</li>
            <li><b>    isFull()</b> returns true if the stack is full else false.</li>
            </ul>
            <br/>
            {/* push op */}
            <h3>Push Operation in Stack Data Structure:</h3>
            <p>
            The push operation adds a new element to the top of the stack. The top element of the stack remains unchanged. The time complexity of push operation in a stack is O(1).If the stack is full, then it is said to be an 
            <b> Overflow condition </b>
            </p>
            <h4>Algorithm for Push Operation:</h4>
            <ul>
            <li> Before pushing the element to the stack, we check if the stack is full .</li>
            <li> If the stack is full (top == capacity-1) , then Stack Overflows and we cannot insert the element to the stack.</li>
            <li>Otherwise, we increment the value of top by 1 (top = top + 1) and the new value is inserted at top position .</li>
            <li> The elements can be pushed into the stack till we reach the capacity of the stack.</li>
            </ul>
            {/* image for push */}

            {/* pop op */}
            <h3>Pop Operation in Stack Data Structure:</h3>
            <p>
            Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an 
            <b> Underflow condition </b>.
            </p>
            <h4>Algorithm for Pop Operation:</h4>
            <ul>
            <li> Before popping the element from the stack, we check if the stack is empty .</li>
            <li> If the stack is empty (top == -1), then Stack Underflows and we cannot remove any element from the stack.</li>
            <li>Otherwise, we store the value at top, decrement the value of top by 1 (top = top – 1) and return the stored top value.</li>
            </ul>
            {/* image for pop */}

            {/* peek op */}
            <h3>Top or Peek Operation in Stack Data Structure:</h3>
            <p>
            Returns the top element of the stack.
            </p>
            <h4>Algorithm for Top Operation:</h4>
            <ul>
            <li> Before returning the top element from the stack, we check if the stack is empty.</li>
            <li> If the stack is empty (top == -1), we simply print “Stack is empty”.</li>
            <li>Otherwise, we return the element stored at index = top .</li>
            </ul>
            {/* image for peek */}

            {/* isEmpty op */}
            <h3>isEmpty Operation in Stack Data Structure:</h3>
            <p>
            Returns true if the stack is empty, else false.
            </p>
            <h4>Algorithm for isEmpty Operation:</h4>
            <ul>
            <li>Check for the value of top in stack.</li>
            <li>If (top == -1) , then the stack is empty so return true .</li>
            <li>Otherwise, the stack is not empty so return false .</li>
            </ul>
            {/* image for isEmpty */}

            {/* isFull op */}
            <h3>isFull Operation in Stack Data Structure:</h3>
            <p>
            Returns true if the stack is full, else false.
            </p>
            <h4>Algorithm for isFull Operation:</h4>
            <ul>
            <li>Check for the value of top in stack.</li>
            <li>If (top == capacity-1) , then the stack is full so return true .</li>
            <li>Otherwise, the stack is not full so return false .</li>
            </ul>
            {/* image for isFull */}

            {/* basic op end */}



            <h2>Complexity Analysis of Operations on Stack Data Structure:</h2>
             {/* img of that table     */}


            <h2>Advantages of Stack Data Structure:</h2>
            <ul>
            <li>
            Simplicity: Stacks are a simple and easy-to-understand data structure, making them suitable for a wide range of applications.
            </li>
            <li>
            Efficiency: Push and pop operations on a stack can be performed in constant time (O(1)) , providing efficient access to data.
            </li>
            <li>
            Last-in, First-out (LIFO): Stacks follow the LIFO principle, ensuring that the last element added to the stack is the first one removed. This behavior is useful in many scenarios, such as function calls and expression evaluation.
            </li>
            <li>
            Limited memory usage: Stacks only need to store the elements that have been pushed onto them, making them memory-efficient compared to other data structures.
            </li>
            </ul>

            <h2>Disadvantages of Stack Data Structure:</h2>
            <ul>
            <li>
            Limited access: Elements in a stack can only be accessed from the top, making it difficult to retrieve or modify elements in the middle of the stack.
            </li>
            <li>
            Potential for overflow: If more elements are pushed onto a stack than it can hold, an overflow error will occur, resulting in a loss of data.
            </li>
            <li>
            Not suitable for random access: Stack s do not allow for random access to elements, making them unsuitable for applications where elements need to be accessed in a specific order.
            </li>
            <li>
            Limited capacity: Stacks have a fixed capacity, which can be a limitation if the number of elements that need to be stored is unknown or highly variable.
            </li>
            </ul>

            <h2>Applications of Stack Data Structure:</h2>
            <ul>
            <li>
            Infix to Postfix /Prefix conversion.
            </li>
            <li>
            Redo-undo features at many places like editors, photoshop.
            </li>
            <li>
            Forward and backward features in web browsers.
            </li>
            <li>
            In Memory management, any modern computer uses a stack as the primary management for a running purpose. Each program that is running in a computer system has its own memory allocations.
            </li>
            <li>
            Stack also helps in implementing function call in computers. The last called function is always completed first.
            </li>
            </ul>
        </div>
    );
}

export default StackConcept;