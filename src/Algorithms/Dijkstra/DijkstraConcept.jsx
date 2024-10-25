import graph1 from '../../assets/GraphImages/Graph1.png';
import graph2 from '../../assets/GraphImages/Graph2.png';
import graph3 from '../../assets/GraphImages/Graph3.png';

const DijkstraConcept = () => {
    return (
        <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' , height:'100vh'}}>
            {/* Introduction Section */}
            <section style={{ marginBottom: '1rem' }}>
                <h2 style={{ backgroundColor: '#f0f0f0', padding: '1rem', fontSize: '1.5rem',fontWeight:'bold',marginBottom: '10px', }}>Introduction to Graphs</h2>
                <p>
                    Graphs are non-linear data structures representing the connections between elements. These
                    elements are known as Vertices, and the lines or arcs that connect any two vertices in the graph are
                    known as Edges. Formally, a Graph comprises a set of Vertices (V) and a set of Edges (E). The Graph
                    is denoted by G(V, E).
                </p>
                {/* Add imported graph1 image */}
                <img src={graph1} alt="Graph representation example" style={{ maxWidth: '60%', height: 'auto', marginTop: '1rem' }} />
            </section>

            {/* Types of Graphs Section */}
            <section style={{ marginBottom: '2rem' }}>
                <h3 style={{fontSize:'1.3rem', fontWeight:'bold'}}>Types of Graphs</h3>
                <p>
                    <b>Undirected:</b> For every pair of connected nodes, you can go from one node to the other in both
                    directions.
                </p>
                <p>
                    <b>Directed:</b> For every pair of connected nodes, you can only go from one node to another in a
                    specific direction. We use arrows instead of simple lines to represent directed edges.
                </p>
                <img src={graph2} alt="Types of graphs illustration" style={{ maxWidth: '90%', height: 'auto', marginTop: '1rem' }} />
            </section>

            {/* Weighted Graphs Section */}
            <section style={{ marginBottom: '2rem' }}>
                <h3 style={{fontSize:'1.3rem', fontWeight:'bold'}}>Weighted Graphs</h3>
                <p>
                    A weighted graph is a graph whose edges have a weight or cost. The weight of an edge can represent
                    distance, time, or anything that models the connection between the pair of nodes it connects.
                </p>
                <p>
                    For example, in the weighted graph below, you can see a number next to each edge. This number represents
                    the weight of the corresponding edge.
                </p>
                <img src={graph3} alt="Weighted graph example" style={{ maxWidth: '70%', height: 'auto', marginTop: '1rem' }} />
            </section>

            {/* Dijkstra Algorithm Section */}
            <section>
            <h2 style={{ backgroundColor: '#f0f0f0', padding: '1rem', fontSize: '1.5rem',fontWeight:'bold',marginBottom: '10px', }}> Dijkstras Algorithm</h2>
                <p>
                Dijkstras algorithm is often considered to be the most straightforward algorithm for solving the shortest path problem.<br/>
                Dijkstras algorithm is used for solving single-source shortest path problems for directed or undirected paths. Single-source means that one vertex is chosen to be the start, and the algorithm will find the shortest path from that vertex to all other vertices.<br/>
                To find the shortest path, Dijkstras algorithm needs to know which vertex is the source, it needs a way to mark vertices as visited, and it needs an overview of the current shortest distance to each vertex as it works its way through the graph, updating these distances when a shorter distance is found.<br/>
                </p>
                <div style={{ padding: '0.6rem', fontFamily: 'Arial, sans-serif' }}>
                <h3 style={{fontSize:'1.3rem', fontWeight:'bold'}}>Advantages</h3>
                <ul style={{ listStyleType: 'disc' }}>
                <li>It has a linear time complexity so it can be easily used for large problems.</li>
                <li>It is useful in finding the shortest distance, so it is also used in google maps and calculating traffic.</li>
                <li>It has its use in areas such as telephone networks and geographical maps.</li>
                </ul>
                </div>
                
                <div style={{ padding: '0.6rem', fontFamily: 'Arial, sans-serif' }}>
                <h3 style={{fontSize:'1.3rem', fontWeight:'bold'}}>Disadvantages</h3>
                <ul style={{ listStyleType: 'disc' }}>
                <li>It is unable to handle negative weights.</li>
                </ul>
                </div>

                <div style={{ padding: '0.6rem', fontFamily: 'Arial, sans-serif' }}>
                <h3 style={{fontSize:'1.3rem', fontWeight:'bold'}}>Applications of Dijkstras Algorithm</h3>
                     <ul style={{ listStyleType: 'disc' }}>
                      <li>Google maps uses Dijkstra algorithm to show shortest distance between source and destination.</li>
                      <li>In computer networking , Dijkstra’s algorithm forms the basis for various routing protocols, such as OSPF (Open Shortest Path First) and IS-IS (Intermediate System to Intermediate System).</li>
                      <li>Airlines use Dijkstra’s algorithm to plan flight paths that minimize fuel consumption, reduce travel time.</li>
                      <li>Dijkstra’s algorithm is applied in electronic design automation for routing connections on integrated circuits and very-large-scale integration (VLSI) chips.</li>
                    </ul>
               </div>
            </section>
        </div>
    );
}

export default DijkstraConcept;
