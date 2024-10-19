import MonoStack from '../../Algorithms/Stack/MonoStack'
const StackTutorials = () => {
    return (
        <div id="towerOfHanoiPage">
            <style>
                {`
                    /* Global Styles */
                    #towerOfHanoiPage {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        background-color: #f9f9f9;
                        color: #333;
                    }

                    /* Header Section */
                    #tutorialHeader {
                        text-align: center;
                        margin-bottom: 40px;
                    }

                    .mainHeading {
                        font-size: 2.5em;
                        font-weight: bold;
                        color: #222;
                    }

                    .subHeading {
                        font-size: 1.5em;
                        color: #555;
                    }

                    /* Introduction Section */
                    #introSection {
                        margin-bottom: 40px;
                    }

                    .sectionHeading {
                        font-size: 2em;
                        margin-bottom: 10px;
                        color: #444;
                    }

                    .contentText {
                        font-size: 1.2em;
                        line-height: 1.6;
                        margin-bottom: 20px;
                    }

                    .contentList {
                        margin-left: 20px;
                    }

                    .contentList li {
                        font-size: 1.1em;
                        margin-bottom: 10px;
                    }

                    /* Ordered List */
                    .orderedList {
                        list-style-type: decimal;
                        margin-left: 20px;
                    }

                    /* Code Snippet */
                    .codeSnippet {
                        background-color: #2d2d2d;
                        color: #f8f8f2;
                        padding: 15px;
                        border-radius: 5px;
                        margin-bottom: 20px;
                        font-family: 'Courier New', monospace;
                        overflow-x: auto;
                    }

                    .codeSnippet code {
                        font-size: 1em;
                    }

                    /* Visualization Section */
                    #visualizationSection {
                        margin-bottom: 40px;
                        text-align: center;
                    }

                    /* Stack-based Implementation */
                    #codeExampleSection {
                        margin-bottom: 40px;
                    }

                    /* Algorithm Complexity Section */
                    #complexitySection {
                        margin-bottom: 40px;
                    }

                    /* Real-world Applications Section */
                    #realWorldApplicationsSection {
                        margin-bottom: 40px;
                    }

                    #realWorldApplicationsSection ul {
                        margin-left: 20px;
                    }

                    #realWorldApplicationsSection ul li {
                        margin-bottom: 10px;
                    }
                `}
            </style>
            {/* Header Section */}
            <header id="tutorialHeader">
                <h1 className="mainHeading">Understanding Tower of Hanoi with Stacks</h1>
                <h3 className="subHeading">A visual and technical guide to solving Tower of Hanoi using stack data structures.</h3>
            </header>

            {/* Introduction Section */}
            <section id="introSection">
                <h2 className="sectionHeading">What is Tower of Hanoi?</h2>
                <p className="contentText">
                    The Tower of Hanoi is a classic puzzle where a number of disks of different sizes are placed on one tower in decreasing size from bottom to top. The goal is to move the entire stack to another tower while adhering to certain rules.
                </p>
                <h3 className="subHeading">Rules:</h3>
                <ul className="contentList">
                    <li>Only one disk can be moved at a time.</li>
                    <li>A disk can only be placed on top of a larger disk or an empty tower.</li>
                    <li>You can only move the top disk from any tower.</li>
                </ul>
                <h3 className="subHeading">Objective:</h3>
                <p className="contentText">
                    Move all the disks from the source tower to the destination tower using an auxiliary tower, following the puzzle rules.
                </p>
            </section>

            

            {/* How Tower of Hanoi Works with Stacks */}
            <section id="stackExplanationSection">
                <h2 className="sectionHeading">How Tower of Hanoi Works with Stacks</h2>
                <p className="contentText">
                    Each tower in the Tower of Hanoi can be thought of as a stack. The disks follow a
                    <strong> Last In, First Out (LIFO) </strong> principle, where the last disk placed on the tower 
                    (pushed onto the stack) is the first one to be removed (popped from the stack).
                </p>
                <p className="contentText">
                    <strong>Disk Movement:</strong> In terms of stack operations, moving a disk from one tower to another involves:
                </p>
                <ul className="contentList">
                    <li>Pop the top disk from one stack (removes the disk).</li>
                    <li>Push the disk onto another stack (places the disk on top).</li>
                </ul>
                <pre className="codeSnippet">
                    <code>
                        {`function moveDisk(sourceStack, destinationStack) {
                          const disk = sourceStack.pop();
                          destinationStack.push(disk);
                        }`}
                    </code>
                </pre>
            </section>

            {/* Recursive Solution Explanation */}
            <section id="recursiveSection">
                <h2 className="sectionHeading">Recursive Solution</h2>
                <p className="contentText">
                    The Tower of Hanoi problem is often solved using recursion. The key idea is to break down the problem into smaller sub-problems:
                </p>
                <ol className="contentList orderedList">
                    <li>Move the top n-1 disks from the source to the auxiliary tower.</li>
                    <li>Move the largest disk from the source to the destination.</li>
                    <li>Move the n-1 disks from the auxiliary tower to the destination.</li>
                </ol>
                <pre className="codeSnippet">
                    <code>
                        {`function towerOfHanoi(n, source, auxiliary, destination) {
                          if (n === 1) {
                            moveDisk(source, destination);
                            return;
                          }
                          towerOfHanoi(n - 1, source, destination, auxiliary);
                          moveDisk(source, destination);
                          towerOfHanoi(n - 1, auxiliary, source, destination);
                        }`}
                    </code>
                </pre>
            </section>

            {/* Step-by-Step Solution Breakdown */}
            <section id="stepByStepSection">
                <h2 className="sectionHeading">Step-by-Step Solution for 3 Disks</h2>
                <ol className="contentList orderedList">
                    <li>Move disk 1 from Tower A to Tower C.</li>
                    <li>Move disk 2 from Tower A to Tower B.</li>
                    <li>Move disk 1 from Tower C to Tower B.</li>
                    <li>Move disk 3 from Tower A to Tower C.</li>
                    <li>Move disk 1 from Tower B to Tower A.</li>
                    <li>Move disk 2 from Tower B to Tower C.</li>
                    <li>Move disk 1 from Tower A to Tower C.</li>
                </ol>
            </section>

            {/* Mathematics Behind the Problem */}
            <section id="mathSection">
                <h2 className="sectionHeading">Mathematics Behind the Problem</h2>
                <p className="contentText">
                    The minimum number of moves required to solve a Tower of Hanoi puzzle is always <strong>2^n - 1</strong>, where <em>n</em> is the number of disks.
                </p>
                <ul className="contentList">
                    <li>For 3 disks: 2^3 - 1 = 7 moves.</li>
                    <li>For 4 disks: 2^4 - 1 = 15 moves.</li>
                </ul>
                <p className="contentText">The number of moves grows exponentially as the number of disks increases, making larger problems more challenging to solve.</p>
            </section>
            {/* Visualization Section */}
            <section id="visualizationSection">
                <h2 className="sectionHeading">Interactive Tower of Hanoi Simulation</h2>
                <MonoStack />
            </section>

            {/* Code Example for Stack Implementation */}
            <section id="codeExampleSection">
                <h2 className="sectionHeading">Stack-based Tower of Hanoi Implementation</h2>
                <p className="contentText">
                    We can define a stack using an array to represent each tower:
                </p>
                <pre className="codeSnippet">
                    <code>
                        {`class Stack {
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
                        }`}
                    </code>
                </pre>
                <p className="contentText">Here is how we can implement the Tower of Hanoi using these stack objects:</p>
                <pre className="codeSnippet">
                    <code>
                        {`const towerA = new Stack();
                        const towerB = new Stack();
                        const towerC = new Stack();

                        // Initialize towerA with disks
                        for (let i = numberOfDisks; i >= 1; i--) {
                          towerA.push(i);
                        }

                        towerOfHanoi(numberOfDisks, towerA, towerB, towerC);`}
                    </code>
                </pre>
            </section>

            {/* Algorithm Complexity */}
            <section id="complexitySection">
                <h2 className="sectionHeading">Algorithm Complexity</h2>
                <p className="contentText"><strong>Time Complexity:</strong> The Tower of Hanoi algorithm has a time complexity of <strong>O(2^n)</strong>, meaning the time grows exponentially with the number of disks.</p>
                <p className="contentText"><strong>Space Complexity:</strong> The space complexity is <strong>O(n)</strong> due to the recursive call stack.</p>
            </section>

            {/* Real-world Applications */}
            <section id="realWorldApplicationsSection">
                <h2 className="sectionHeading">Real-world Applications</h2>
                <ul className="contentList">
                    <li>Recursive problem-solving: The problem demonstrates the power of recursion.</li>
                    <li>Data backup strategies: The algorithm simulates file movement and data storage on multiple drives.</li>
                    <li>Theoretical studies: Used in network configurations, known as Hanoi Networks.</li>
                </ul>
            </section>
        </div>
    );
}

export default StackTutorials;
