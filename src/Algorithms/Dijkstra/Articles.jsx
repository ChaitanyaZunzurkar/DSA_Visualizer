const Articles = () => {
    return (
        <div>
        <h1>Dijkstra's Algorithm</h1>
        <h2>Definition of Dijkstra's Algorithm</h2>
        <p>
            Dijkstra's Algorithm is a graph search algorithm that finds the shortest path between nodes in a weighted graph. It operates by assigning a tentative distance value to every node, starting with zero for the initial node and infinity for all other nodes. The algorithm iteratively selects the node with the smallest tentative distance, explores its neighbors, and updates their distances based on the current node's value. This process continues until the shortest path to the target node is found.
        </p>
    </div>
    
    );
}

export default Articles;