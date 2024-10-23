import React from 'react';
import styled from 'styled-components';
import img4 from '../assets/CourseBoximg/img4.jpg'; // Sample image import

// Team members array with social media links
const teamMembers = [
  { 
    id: 1, 
    name: 'Aashwath', 
    position: 'Project Manager', 
    about: "I’m Alice, a project manager dedicated to leading teams towards success and ensuring smooth project delivery.",
    image: img4, 
    linkedin: 'https://www.linkedin.com/in/alice', 
    github: 'https://github.com/alice', 
    twitter: 'https://twitter.com/alice',
    message: 'https://twitter.com/alice'
  },
  { 
    id: 2, 
    name: 'Amit', 
    position: 'Lead Developer', 
    about: "I’m Bob, a passionate developer focused on creating scalable and efficient web applications.",
    image: img4, 
    linkedin: 'https://www.linkedin.com/in/bob', 
    github: 'https://github.com/bob', 
    twitter: 'https://twitter.com/bob' ,
    message: 'https://twitter.com/bob'
  },
  { 
    id: 3, 
    name: 'Aryan', 
    position: 'Lead Developer', 
    about: "I’m Bob, a passionate developer focused on creating scalable and efficient web applications.",
    image: img4, 
    linkedin: 'https://www.linkedin.com/in/bob', 
    github: 'https://github.com/bob', 
    twitter: 'https://twitter.com/bob' ,
    message: 'https://twitter.com/bob'
  },
  { 
    id: 4, 
    name: 'Chaitanya', 
    position: 'Lead Developer', 
    about: "I’m Bob, a passionate developer focused on creating scalable and efficient web applications.",
    image: img4, 
    linkedin: 'https://www.linkedin.com/in/bob', 
    github: 'https://github.com/bob', 
    twitter: 'https://twitter.com/bob' ,
    message: 'https://twitter.com/bob'
  },
  { 
    id: 5, 
    name: 'Ashish', 
    position: 'Lead Developer', 
    about: "I’m Bob, a passionate developer focused on creating scalable and efficient web applications.",
    image: img4, 
    linkedin: 'https://www.linkedin.com/in/bob', 
    github: 'https://github.com/bob', 
    twitter: 'https://twitter.com/bob' ,
    message: 'https://twitter.com/bob'
  },
  
  // Add more team members as needed
];

export default function TeamPage() {
  return (
    <StyledWrapper>
      <div className="teamContainer">
        {teamMembers.map(member => (
          <div key={member.id} className="card">
            <div className="img" style={{ backgroundImage: `url(${member.image})` }} />
            <span><h3>{member.name}</h3></span>
            <p className="info">{member.about}</p>
            <div className="share">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 16 16" className="bi bi-linked" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                ></path>
                </svg>
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 16 16" className="bi bi-twitter" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                </svg>
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 16 16" className="bi bi-instagram" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        ></path>
                </svg>
              </a>
            </div>
            <a href={member.message} target="_blank" rel="noopener noreferrer">
            <StyledButton>Send Message</StyledButton> {/* Button to link to the message */}
          </a>

            
            
            
          </div>
          
        ))}
      </div>
    </StyledWrapper>
  );
}

// Styled button component
const StyledButton = styled.button`
  padding: 0.8em 1.8em;
  display: block;
  margin: auto;
  border-radius: 25px;
  border: none;
  font-weight: bold;
  background: #ffffff;
  color: rgb(0, 0, 0);
  transition: .3s cubic-bezier(0.25, 1.5, 0.5, 1);


  &:hover {
  background: #6f42c1;
  color: white;
  cursor: pointer;
  }

  &:focus {
    outline: none; // Remove outline on focus
  }

  &:active {
    transform: scale(0.95); // Slightly shrink on click
  }
`;

// Styled component
const StyledWrapper = styled.div`
  font-family: Arial, sans-serif;
  
   background: #212121;
  --gap: 5em;
  --line:1px;
  --color: rgba(255, 255, 255, 0.2);

  background-image: linear-gradient(
      -90deg,
      transparent calc(var(--gap) - var(--line)),
      var(--color) calc(var(--gap) - var(--line) + 1px),
      var(--color) var(--gap)
    ),
    linear-gradient(
      0deg,
      transparent calc(var(--gap) - var(--line)),
      var(--color) calc(var(--gap) - var(--line) + 1px),
      var(--color) var(--gap)
    );
  background-size: var(--gap) var(--gap);
}
  
  .teamContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px 10px; // Increased padding for spacing
  }
  .card {
    width: 20em;
    margin:20px;
    
    height: 30em;
    background: black;
    padding:30px;

    transition: 0.3s ease-in-out;
    clip-path: polygon(
    30px 0%,
    100% 0,
    100% calc(100% - 30px),
    calc(100% - 30px) 100%,
    0 100%,
    0% 30px
    
  );

    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    flex-direction: column;
    padding:20px;
    &:hover {
    transform: scale(1.03); /* Scale up effect */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0); /* Shadow effect */
  }
  }
  .card span{
    font-weight: bold;
    color: white;
    text-align: center;
    display: block;
    font-size: 1em;
  }
  .img {
    width: 9em;
    height: 9em;
    background: white; // to show properly
    border-radius: 15px;
    margin: auto;
  }
  .info {
    font-weight: 400;
    color: white;
    display: block;
    text-align: center;
    font-size: 0.95em;
    margin: 1em;
    border: white;
  }
  .share {
     margin-top: 1em;
    display: flex;
    justify-content: center;
    gap: 1em;
    min-height:1em;
    margin-bottom: 1em;
  }
    
  h3 {
    margin: 0; // Remove default margin
    font-size: 1.25rem; // Larger font size for names
  }
  h4 {
    margin: 5px 0 15px; // Margin for spacing
    font-size: 1rem; // Font size for position
    color: #888; // Lighter color for position
  }
  .card a {
    color: white;
    transition: 0.2s ease-in-out;
  }

  .card a:hover {
  color: #28a745;
  }
`;
