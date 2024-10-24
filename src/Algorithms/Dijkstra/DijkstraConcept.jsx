const DijkstraConcept = () => {
    return (
        <div>
            <h1>Basic Concepts</h1>
            <h3>Introduction to Graphs</h3>
            <p> Graphs are non-linear data structures representing the "connections" between the elements. These elements are known as the Vertices, and the lines or arcs that connect any two vertices in the graph are known as the Edges. More formally, a Graph comprises a set of Vertices (V) and a set of Edges (E). The Graph is denoted by G(V, E).</p>
            <img src="" alt="Concept1" />
            <h3>Types of Graphs</h3>
            <p><b>Undirected:</b> if for every pair of connected nodes, you can go from one node to the other in both directions.</p> 
              <p><b>Directed:</b> if for every pair of connected nodes, you can only go from one node to another in a specific direction. We use arrows instead of simple lines to represent directed edges.</p>
            <img src="" alt="Concept2" />
            <h3>Weighted Graphs</h3>
            <p>A weight graph is a graph whose edges have a "weight" or "cost". The weight of an edge can represent distance, time, or anything that models the "connection" between the pair of nodes it connects.
            For example, in the weighted graph below you can see a blue number next to each edge. This number is used to represent the weight of the corresponding edge.</p>
            <img src="" alt="Concept3" />
            <h3>Dijkstra Algorithm</h3>
            <p>Dijkstra's algorithm is often considered to be the most straightforward algorithm for solving the shortest path problem.</p>

        </div>
    );
}

export default DijkstraConcept;