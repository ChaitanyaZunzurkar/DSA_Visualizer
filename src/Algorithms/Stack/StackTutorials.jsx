import React from 'react';
import MonoStack from '../../Algorithms/Stack/MonoStack';
import CodeCopy from '../../Components/Codecopy';

const headingStyle = {
    marginTop: '0',
    fontWeight: '800',
    fontSize: '30px',
    marginBottom: '10px',
};

const subHeadingStyle = {
    marginTop: '20px',
    fontWeight: '800',
    fontSize: '20px',
    marginBottom: '20px',
    textAlign: 'left',  // Align subheadings to the left
};

const listStyle = {
    fontWeight: 400,
    lineHeight: '1.6',
    marginBottom: '8px',
    color: '#333',
    listStyleType: 'disc',
    paddingLeft: '20px',
};



const content = {
    marginLeft: '20px',
    padding: '20px',
    fontSize: '18px',
};

const sub = {
    marginTop: '20px',
    fontWeight: '700',
    fontSize: '19px',
    marginBottom: '10px',
    textAlign: 'left',  // Align subheadings to the left
};

const para = {
    fontWeight: '400',
};

const codeSnippet3 = `function moveDisk(sourceStack, destinationStack) {
    const disk = sourceStack.pop();
    destinationStack.push(disk);
}`;

const codeSnippet4 = `function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
      moveDisk(source, destination);
      return;
    }
    towerOfHanoi(n - 1, source, destination, auxiliary);
    moveDisk(source, destination);
    towerOfHanoi(n - 1, auxiliary, source, destination);
}`;

const codeSnippet5 = `class Stack {
    constructor() {
      this.stack = [];
    }

    push(item) {
      this.stack.push(item);
    }

    pop() {
      return this.stack.pop();
    }

    peek() {
      return this.stack[this.stack.length - 1];
    }

    isEmpty() {
      return this.stack.length === 0;
    }
}`;

const codeSnippet6 = `const towerA = new Stack();
const towerB = new Stack();
const towerC = new Stack();

// Initialize towerA with disks
for (let i = numberOfDisks; i >= 1; i--) {
    towerA.push(i);
}

towerOfHanoi(numberOfDisks, towerA, towerB, towerC);`;

const StackTutorials = () => {
    return (
        <div id="towerOfHanoiPage" style={content}>
            {/* Header Section */}
            <h1 style={headingStyle}>Understanding Tower of Hanoi with Stacks</h1>
            <h3 style={subHeadingStyle}>A visual and technical guide to solving Tower of Hanoi using stack data structures.</h3>

            {/* Introduction */}
            <h2 style={subHeadingStyle}>What is Tower of Hanoi?</h2>
            <p style={para}>
                The Tower of Hanoi is a classic puzzle where a number of disks of different sizes are placed on one tower in decreasing size from bottom to top. The goal is to move the entire stack to another tower while adhering to certain rules.
            </p>
            <h3 style={sub}>Rules:</h3>
            <ul style={listStyle}>
                <li>Only one disk can be moved at a time.</li>
                <li>A disk can only be placed on top of a <strong>larger disk</strong> or an <strong>empty tower</strong>.</li>
                <li>You can only move the <strong>top disk</strong> from any tower.</li>
            </ul>
            <h3 style={sub}>Objective:</h3>
            <p style={para}>
                Move all the disks from the <strong>source tower</strong> to the <strong>destination tower</strong> using an <strong>auxiliary tower</strong>, following the puzzle rules.
            </p>

            {/* How Tower of Hanoi Works with Stacks */}
            <h2 style={subHeadingStyle}>How Tower of Hanoi Works with Stacks</h2>
            <p style={para}>
                Each tower in the Tower of Hanoi can be thought of as a stack. The disks follow a <strong>Last In, First Out (LIFO)</strong> principle, where the last disk placed on the tower (pushed onto the stack) is the first one to be removed (popped from the stack).
            </p>
            <p style={para}>
                <strong>Disk Movement:</strong> In terms of stack operations, moving a disk from one tower to another involves:
            </p>
            <ul style={listStyle}>
                <li>Pop the <strong>top disk</strong> from one stack (removes the disk).</li>
                <li>Push the disk onto another stack (places the disk on top).</li>
            </ul>
            <CodeCopy code={codeSnippet3} />

            {/* Recursive Solution Explanation */}
            <h2 style={subHeadingStyle}>Recursive Solution</h2>
            <p style={para}>
                The Tower of Hanoi problem is often solved using <strong>recursion</strong>. The key idea is to break down the problem into smaller sub-problems:
            </p>
            <ol style={listStyle}>
                <li>Move the top <strong>n-1 disks</strong> from the source to the auxiliary tower.</li>
                <li>Move the <strong>largest disk</strong> from the source to the destination.</li>
                <li>Move the <strong>n-1 disks</strong> from the auxiliary tower to the destination.</li>
            </ol>
            <CodeCopy code={codeSnippet4} />

            {/* Step-by-Step Solution Breakdown */}
            <h2 style={subHeadingStyle}>Step-by-Step Solution for 3 Disks</h2>
            <ol style={listStyle}>
                <li>Move disk 1 from <strong>Tower A</strong> to <strong>Tower C</strong>.</li>
                <li>Move disk 2 from <strong>Tower A</strong> to <strong>Tower B</strong>.</li>
                <li>Move disk 1 from <strong>Tower C</strong> to <strong>Tower B</strong>.</li>
                <li>Move disk 3 from <strong>Tower A</strong> to <strong>Tower C</strong>.</li>
                <li>Move disk 1 from <strong>Tower B</strong> to <strong>Tower A</strong>.</li>
                <li>Move disk 2 from <strong>Tower B</strong> to <strong>Tower C</strong>.</li>
                <li>Move disk 1 from <strong>Tower A</strong> to <strong>Tower C</strong>.</li>
            </ol>

            {/* Mathematics Behind the Problem */}
            <h2 style={subHeadingStyle}>Mathematics Behind the Problem</h2>
            <p style={para}>
                The minimum number of moves required to solve a Tower of Hanoi puzzle is always <strong>2^n - 1</strong>, where <em>n</em> is the number of disks.
            </p>
            <ul style={listStyle}>
                <li>For 3 disks: <strong>2^3 - 1 = 7 moves</strong>.</li>
                <li>For 4 disks: <strong>2^4 - 1 = 15 moves</strong>.</li>
            </ul>
            <p style={para}>The number of moves grows exponentially as the number of disks increases, making larger problems more challenging to solve.</p>

            {/* Visualization Section */}
            <h2 style={subHeadingStyle}>Interactive Tower of Hanoi Simulation</h2>
            <MonoStack /> 

            {/* Code Example for Stack Implementation */}
            <h2 style={subHeadingStyle}>Stack-based Tower of Hanoi Implementation</h2>
            <p style={para}>
                We can define a stack using an array to represent each tower:
            </p>
            <CodeCopy code={codeSnippet5} />
            <p style={para}>Here is how we can implement the Tower of Hanoi using these stack objects:</p>
            <CodeCopy code={codeSnippet6} />

            {/* Algorithm Complexity */}
            <h2 style={subHeadingStyle}>Algorithm Complexity</h2>
            <p style={para}><strong>Time Complexity:</strong> The Tower of Hanoi algorithm has a time complexity of <strong>O(2^n)</strong>, meaning the time grows exponentially with the number of disks.</p>
            <p style={para}><strong>Space Complexity:</strong> The space complexity is <strong>O(n)</strong> due to the recursive function calls.</p>
        </div>
    );
};

export default StackTutorials;
