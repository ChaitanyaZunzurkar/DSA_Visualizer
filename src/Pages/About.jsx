import React from 'react';
import img4 from '../assets/CourseBoximg/img4.jpg'

const teamMembers = [
  { id: 1, name: 'Alice', position: 'Project Manager', image: img4 },
  { id: 2, name: 'Bob', position: 'Lead Developer', image: 'path/to/image2.jpg' },
  { id: 3, name: 'Charlie', position: 'UI/UX Designer', image: 'path/to/image3.jpg' },
  { id: 4, name: 'Diana', position: 'QA Engineer', image: 'path/to/image4.jpg' },
  { id: 5, name: 'Eve', position: 'DevOps Engineer', image: 'path/to/image5.jpg' },
  { id: 6, name: 'Frank', position: 'Data Scientist', image: 'path/to/image6.jpg' },
];

export default function TeamPage() {
  return (
    <div style={{backgroundColor:'#141414'}}>
      {/* Team Members Section */}
      <div style={styles.teamContainer}>
        {teamMembers.map(member => (
          <div key={member.id} style={styles.card}>
            <img src={member.image} alt={member.name} style={styles.image} />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </div>
        ))}
      </div>

      {/* Text Section Below */}
      <div style={styles.textSection}>
        <h1>Contributors</h1>
        <p>We are a passionate and dedicated team committed to delivering the best solutions for our clients.</p>
      </div>
    </div>
  );
}

// Inline styles for Flexbox and layout
const styles = {
  teamContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: '15px 150px 0px 150px',
  },
  card: {
    width: '28%',
    height: '250px',
    margin: '20px 0px',
    textAlign: 'center',
    backgroundColor: 'grey',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  textSection: {
    marginTop: '10px',
    padding:'10px',
    textAlign: 'center',
  },
};
