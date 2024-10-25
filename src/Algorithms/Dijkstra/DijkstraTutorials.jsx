import Failure from '../../assets/GraphImages/Failure.jpg';
const DijkstraTutorial = () => {
    return (
        <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.3rem' }}>
            {/* YouTube Video Section */}
            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' ,fontWeight:'bold'}}>Dijkstras Algorithm Tutorial</h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <iframe
                        width="800px"
                        height="420px"
                        src="https://www.youtube.com/embed/smHnz2RHJBY?start=505"
                        title="Dijkstra's Algorithm Tutorial"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ maxWidth: '100%',  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                    ></iframe>
                </div>
            </section>


            {/* Explanation Section */}
            <section>
                <h3 style={{fontWeight:'bold',fontSize:'1.5rem',marginBottom:'10px'}}>Why Dijkstras Algorithms fails for the Graphs having Negative Edges ?</h3>
                <p style={{lineHeight:'2rem', fontSize:'1.1rem'}}>
                The problem with negative weights arises from the fact that Dijkstras algorithm assumes that once a node is added to the set of visited nodes, its distance is finalized and will not change. However, in the presence of negative weights, this assumption can lead to incorrect results.
                </p>
                <img src={Failure} alt="Dijkstra Failure" style={{ maxWidth: '70%', height: 'auto', marginTop: '1rem' }} />
                <p style={{lineHeight:'2rem', fontSize:'1.1rem'}}>
                    In the above graph, A is the source node, among the edges A to B and A to C , A to B is the smaller weight and Dijkstra assigns the shortest distance of B as 2, but because of existence of a negative edge from C to B , the actual shortest distance reduces to 1 which Dijkstra fails to detect.
                </p>
            </section>
        </div>
    );
}


export default DijkstraTutorial;



