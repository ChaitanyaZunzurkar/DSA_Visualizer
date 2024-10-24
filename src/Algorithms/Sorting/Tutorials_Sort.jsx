import comp from "../../assets/SortingImages/mergesort.png";
const Tutorials_Sort = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Merge Sort Tutorial</h1>
      <div style={styles.content}>
        <div style={styles.videoContainer}>
          <iframe
            title="Merge Sort Tutorial"
            width="100%" // Take 100% of the container width
            height="100%" // Take 100% of the container height
            src="https://www.youtube.com/embed/4VqmGXwpLqc?si=xGMRuFafxABlI0Sr"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div style={styles.explanation}>
        <h2 style={styles.subTitle}>What is Merge Sort?</h2>
        <p style={styles.paragraph}>
          Merge Sort is a sorting algorithm that employs the divide-and-conquer
          strategy. It divides the input array into two halves, recursively
          sorts both halves, and then merges the sorted halves back together.
          The steps are as follows:
        </p>
        <ol style={styles.list}>
          <li>
            <strong>Divide:</strong> Split the array into two halves until each
            sub-array contains a single element. A single element is considered
            sorted.
          </li>
          <li>
            <strong>Conquer:</strong> Recursively sort both sub-arrays. This is
            achieved by calling the Merge Sort function on both halves.
          </li>
          <li>
            <strong>Merge:</strong> Combine the two sorted sub-arrays into a
            single sorted array. This is done by comparing the elements of both
            arrays and arranging them in order.
          </li>
        </ol>
        <img
          src={comp} // Use the imported image variable
          alt="Merge Sort Visualization"
          style={styles.image} // Use the same image style
        />
        <p style={styles.paragraph}>
          The algorithm has a time complexity of <strong>O(n log n)</strong> in
          the average and worst cases, which makes it efficient for large
          datasets. Merge Sort is also a stable sort, meaning that it maintains
          the relative order of records with equal keys (i.e., equal elements).
        </p>
        <p style={styles.paragraph}>
          One of the key features of Merge Sort is its auxiliary space
          requirement, which is <strong>O(n)</strong>. This means it requires
          additional memory proportional to the size of the input array to store
          the merged output. This can be a disadvantage in memory-constrained
          environments.
        </p>
        <p style={styles.paragraph}>
          Merge Sort is often preferred over other sorting algorithms (like
          Quick Sort) when dealing with linked lists or large datasets that do
          not fit into memory, as it performs consistently well regardless of
          the initial order of elements.
        </p>
      </div>
      <a href="/" style={styles.button}>
        Back to Home
      </a>
    </div>
  );
};
const styles = {
  container: {
    background: "#ffffff", // White background for light theme
    color: "#333333", // Dark text for better contrast
    fontFamily: "Arial, sans-serif",
    width: "100%",
    maxWidth: "100vw",
    padding: "20px",
    boxSizing: "border-box",
    position: "relative",
    minHeight: "100vh",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Lighter shadow for depth
    overflow: "hidden",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5em",
    marginBottom: "20px",
    color: "#007bff", // Blue color for title
  },
  content: {
    display: "flex",
    justifyContent: "center", // Centering the video container
    marginBottom: "20px",
  },
  videoContainer: {
    flex: "0 0 70%", // 70% width
    height: "450px", // Set a fixed height for the video
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7)", // Light shadow for video
  },
  image: {
    maxWidth: "50%", // Set max width of image to 80% of the container
    height: "auto",
    borderRadius: "8px",
    marginTop: "10px", // Add some space above the image
    display: "block", // Centering the image
    marginLeft: "auto",
    marginRight: "auto",
  },
  explanation: {
    marginTop: "20px",
  },
  subTitle: {
    fontSize: "2em",
    marginBottom: "10px",
    borderBottom: "2px solid #007bff", // Blue underline for subtitle
    paddingBottom: "5px",
  },
  paragraph: {
    lineHeight: "1.6",
    fontSize: "1.1em",
    margin: "10px 0",
  },
  list: {
    marginLeft: "20px",
    marginBottom: "20px",
  },
  button: {
    display: "inline-block",
    margin: "20px auto",
    padding: "10px 20px",
    backgroundColor: "#007bff", // Blue button background
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
    textAlign: "center",
    transition: "background-color 0.3s, transform 0.3s", // Animation effects
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Lighter shadow for button
  },
};
export default Tutorials_Sort;
