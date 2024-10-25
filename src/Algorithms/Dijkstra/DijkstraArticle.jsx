const resources = [
    {
        title: 'Understanding Dijkstra’s Algorithm',
        description: 'A comprehensive guide to Dijkstra’s algorithm with examples and use cases in real-world applications.',
        link: 'https://example.com/dijkstras-algorithm',
        type: 'Article',
    },
    {
        title: 'Graph Theory Explained',
        description: 'An in-depth video tutorial explaining the basics of graph theory, including key concepts and algorithms.',
        link: 'https://youtube.com/example-video',
        type: 'Video',
    },
    {
        title: 'Optimizing Graph Algorithms',
        description: 'Learn about optimization techniques for graph algorithms in large-scale data sets.',
        link: 'https://example.com/graph-algorithm-optimization',
        type: 'Article',
    },
    {
        title: 'Maze Problem',
        description: 'An in-depth video tutorial of Maze Problems, including key concepts and algorithms.',
        link: 'https://youtube.com/example-video',
        type: 'Video',
    },
    {
        title: 'Other Algorithms',
        description: 'Learn and Explore Other Algorithms.',
        link: 'https://example.com/graph-algorithm-optimization',
        type: 'Article',
    },
    {
        title: 'Why Dijkstra Fails',
        description: 'Learn about Why Dijkstra Fails on negative edges.',
        link: 'https://example.com/graph-algorithm-optimization',
        type: 'Article',
    },
];

const ArticlesAndResources = () => {
    return (
        <div style={{ padding: '1.5rem', fontFamily: 'Arial, sans-serif' , height:'100vh'}}>
            <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem',fontWeight:'bold' }}>Articles and Resources</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                {resources.map((resource, index) => (
                    <li key={index} style={{ marginBottom: '1rem' }}>
                        <strong>{resource.title}</strong> - {resource.description} <br />
                        <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#007bff', textDecoration: 'none' }}
                        >
                            {resource.type === 'Video' ? 'Watch Video' : 'Read Article'}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticlesAndResources;
