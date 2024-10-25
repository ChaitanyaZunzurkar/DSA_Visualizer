import { useState } from 'react';
import graph0 from '../../assets/GraphImages/100.drawio.png';
import graph1 from '../../assets/GraphImages/101.drawio.png';
import graph2 from '../../assets/GraphImages/102.drawio.png';
import graph3 from '../../assets/GraphImages/103.drawio.png';
import graph4 from '../../assets/GraphImages/104.drawio.png';
import graph5 from '../../assets/GraphImages/105.drawio.png';
import graph6 from '../../assets/GraphImages/106.drawio.png';
const ContentSwitcher = () => {
  // Define the content and corresponding images for each step
  const data = [
    { content: "Step 0:<br/> Initially Set the Distance of all nodes &infin; and  source node 0. <br/>Nodes: [a,b,c,d,e,f,z] <br/> Distance: [0, &infin;,&infin;,&infin;,&infin;,&infin;,&infin;]", image: graph0 },
    { content: "Step 1:<br/> A is selected (Unvisited node with minimum distance) <br/> Distance of B and D are updated to 22 and 8 respectively.<br/> Nodes: [a,b,c,d,e,f,z] <br/> Distance: [0, 22,&infin;,8,&infin;,&infin;,&infin;]", image: graph1 },
    { content: "Step 2:<br/> D is selected (Unvisited node with minimum distance) <br/> Distance of C and F are updated to 18 (8+10) and 14 (8+6) respectively.<br/> Nodes: [a,b,c,d,e,f,z] <br/> Distance: [0, 22,18,8,&infin;,14,&infin;]", image: graph2},
    { content: "Step 3:<br/> F is selected (Unvisited node with minimum distance) <br/> Distance of C not updated {18<(14+7)} and Z is updated to 23 (14+9).<br/> Nodes: [a,b,c,d,e,f,z] <br/> Distance: [0, 22,18,8,&infin;,14,23]", image: graph3 },
    { content: "Step 4:<br/> C is selected (Unvisited node with minimum distance) <br/> Distance of B not updated {22<(18+20)} and E is updated to 22 (18+4).<br/> Nodes: [a,b,c,d,e,f,z] <br/> Distance: [0, 22,18,8,22,14,23]", image: graph4 },
    { content: "Step 5:<br/> E is selected (Unvisited node with minimum distance) <br/> Distance of B and Z are not updated as {22<(22+2)} and {23<(22+4)} respectively.<br/> Nodes: [a,b,c,d,e,f,z] <br/> Distance: [0, 22,18,8,22,14,23]", image: graph5 },
    { content: "Nodes: [a,b,c,d,e,f,z] <br/> Distance: [0, 22,18,8,22,14,23] <br/>Wohuuu....!<br/> we got the minimum distance to destination node Z as 23 ", image: graph6 }
  ];

  // State to track the current content index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next content
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // Function to handle previous content
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ position: 'relative', padding: '20px', border: '1px solid #ccc', width:'600px' }}>
      {/* Display the current image */}
      <div>
        <img src={data[currentIndex].image} alt="content related" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
      </div>
      
      {/* Display the current content */}
      <div dangerouslySetInnerHTML={{ __html: data[currentIndex].content }} style={{height:'180px'}} />

      {/* Previous button */}
      <button
        style={{ position: 'absolute', bottom: '10px', left: '10px',backgroundColor:'#4CAF50' }}
        onClick={handlePrevious}
      >
        Previous
      </button>

      {/* Next button */}
      <button
        style={{ position: 'absolute', bottom: '10px', right: '10px',backgroundColor:'#4CAF50' }}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default ContentSwitcher;
