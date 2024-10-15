import img1 from '../../assets/HashingImages/img1.png';
const HashingConcept = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>HASHING</h1>
            <h2 style={styles.subHeader}>Introduction</h2>
            <p style={styles.paragraph}>
                Hashing is a technique used to uniquely identify a specific object from a group of similar objects. It involves mapping large amounts of data to smaller tables using a mathematical function known as a hash function.
            </p>

            <h2 style={styles.subHeader}>What is Hashing?</h2>
            <p style={styles.paragraph}>
                Hashing is the process of transforming data into a fixed-size string of bytes, typically referred to as a hash value or hash code. This transformation enables efficient data retrieval in a hash table.
            </p>

            <h2 style={styles.subHeader}>Why is Hashing Used?</h2>
            <p style={styles.paragraph}>
                Hashing is used to index and retrieve items efficiently, making it a crucial method for handling large data sets. It allows for quick access to data through its unique hash code, reducing search times significantly.
            </p>

            <h2 style={styles.subHeader}>Hash Functions</h2>
            <p style={styles.paragraph}>
                A hash function is an algorithm that takes an input (or key) and returns a fixed-size string of bytes, typically a hash code. A good hash function should distribute keys evenly across the hash table to minimize collisions.
            </p>

            <h2 style={styles.subHeader}>Properties of a Good Hash Function</h2>
            <ul style={styles.list}>
                <li style={styles.listItem}>Deterministic: The same input should always produce the same output.</li>
                <li style={styles.listItem}>Fast computation: The hash value should be computed quickly.</li>
                <li style={styles.listItem}>Uniform distribution: The output should be uniformly distributed to minimize collisions.</li>
                <li style={styles.listItem}>Pre-image resistance: It should be computationally difficult to reverse the hash function.</li>
            </ul>

            <h2 style={styles.subHeader}>Common Hashing Techniques</h2>
            <ul style={styles.list}>
                <li style={styles.listItem}><strong>Division Method:</strong> Uses the remainder of the division of the key by a prime number.</li>
                <li style={styles.listItem}><strong>Multiplication Method:</strong> Multiplies the key by a constant and takes the fractional part to find the hash index.</li>
            </ul>

            <h2 style={styles.subHeader}>Collision Resolution</h2>
            <p style={styles.paragraph}>
                Collisions occur when two or more keys are mapped to the same index in a hash table. Various methods can handle collisions, including:
            </p>
            <ul style={styles.list}>
                <li style={styles.listItem}>
                    <strong>Open Addressing:</strong> Methods like linear probing, quadratic probing, and double hashing resolve collisions by finding another open slot in the hash table.
                </li>
                <li style={styles.listItem}>
                    <strong>Chaining:</strong> Each index in the hash table points to a linked list of items with the same hash index.
                </li>
            </ul>
            <img src={img1} alt="Mathematical Comparison between open addresing collision methods vs Chaining" />

            <h2 style={styles.subHeader}>Applications of Hashing</h2>
            <p style={styles.paragraph}>
                Hashing has several important applications, including:
            </p>
            <ul style={styles.list}>
                <li style={styles.listItem}>
                    <strong>Hash Tables:</strong> Efficient data storage and retrieval using a key-value pair system.
                </li>
                <li style={styles.listItem}>
                    <strong>Cryptography:</strong> Hash functions are used in security applications to encrypt data.
                </li>
                <li style={styles.listItem}>
                    <strong>Data Deduplication:</strong> Identifying and removing duplicate data using hash codes.
                </li>
            </ul>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#ecf0f1',
        color: '#2c3e50',
    },
    header: {
        textAlign: 'center',
        fontSize: '3.5em',
        marginBottom: '20px',
        fontFamily: 'Times'

    },
    subHeader: {
        fontSize: '1.8em',
        marginTop: '20px',
        marginBottom: '10px',
    },
    paragraph: {
        fontSize: '1.4em',
        lineHeight: '1.6',
        marginBottom: '15px',
        fontFamily: 'Roboto'
    },
    list: {
                fontSize: '1.4em',
        paddingLeft: '20px',
        marginBottom: '15px',
        fontFamily: 'Roboto'
    },
    listItem: {
        fontSize: '1.1em',
        marginBottom: '10px',
    },
};

export default HashingConcept;
