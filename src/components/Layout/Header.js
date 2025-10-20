import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Use public/assets for static images
const profileImg = '/assets/Profile.jpg';



const Header = () => {
  const [colorIndex, setColorIndex] = useState(0);
  
  // Color animation between blue and purple shades
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex(prevIndex => (prevIndex + 1) % 4);
    }, 2000); // Change color every 2 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const profileColors = [
    'linear-gradient(45deg, rgba(240, 20, 20, 1), #3807ebff)', // Blue-purple
    'linear-gradient(45deg, #4a6fa5, #6d5ba5)', // Purple-blue
    'linear-gradient(45deg, #1dd426ff, #8f5ba5)', // Light blue-purple
    'linear-gradient(45deg, #8f5ba5, #09cf62ff)'  // Light purple-blue
  ];

  return (
    <div style={styles.container}>
      {/* Profile Picture and Name - Positioned Above Everything */}
      <div style={styles.profileSection}>
        <div 
          style={{
            ...styles.profileFrame,
            background: profileColors[colorIndex],
            transition: 'background 1s ease-in-out'
          }}
        >
          <div style={styles.profilePic}>
              <img src={profileImg} alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
          </div>
        </div>
        <h2 style={styles.name}>CLEVER MWANANDIMAI</h2>
        <p1 style={styles.name}>....................................</p1>
        <h2 style={styles.name}>Full-Stack Developer </h2>
      </div>
      
      {/* Title Bar with Navigation */}
      <div style={styles.titleBar}>
        <nav style={styles.navMenu}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <span style={styles.separator}>|</span>
          <Link to="/projects" style={styles.navLink}>Projects</Link>
          <span style={styles.separator}>|</span>
          <Link to="/achievements-experiences" style={styles.navLink}>Achievements & Experiences</Link>
          <span style={styles.separator}>|</span>
          
          <Link to="/resume" style={styles.navLink}>View Resume</Link>
          <span style={styles.separator}>|</span>
          <Link to="/skills" style={styles.navLink}>Skills</Link>
          <span style={styles.separator}>|</span>
          <Link to="/about" style={styles.navLink}>About</Link>
          <span style={styles.separator}>|</span>
          <Link to="/blog" style={styles.navLink}>Blog</Link>
          <span style={styles.separator}>|</span>
          <Link to="/contact" style={styles.navLink}>Contact</Link>
        </nav>
      </div>

    </div>
  );
};

// Inline styles for the component
const styles = {
  container: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'white',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'center',
    position: 'static',
    marginTop: '60px', // Prevent title bar from covering header
  },
  profileSection: {
    background: 'linear-gradient(135deg, #0e1725ff 0%, #06214dff 100%)',
    padding: '10px 10px 10px 10px',
    textAlign: 'center',
    marginBottom: '0'
  },
  profileFrame: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    padding: '8px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
    margin: '0 auto'
  },
  profilePic: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    background: 'linear-gradient(45deg, #350ee2ff, #cfdef3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6d5ba5',
    fontSize: '60px'
  },
  name: {
    marginTop: '20px',
    color: '#4a6fa5',
    fontSize: '28px',
    fontWeight: '600',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  titleBar: {
    background: 'linear-gradient(to right, #7392c0ff, #6d5ba5)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    zIndex: 2000,
    padding: '15px 0',
    color: 'white',
    fontSize: '18px',
    fontWeight: '600',
    letterSpacing: '1px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  navMenu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    padding: '5px 10px',
    borderRadius: '5px',
    margin: '0 5px'
  },
  separator: {
    margin: '0 5px',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  contentSection: {
    padding: '40px 20px',
    background: 'white',
    minHeight: '300px'
  },
  welcomeText: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  title: {
    color: '#4a6fa5',
    marginBottom: '15px',
    fontSize: '32px'
  },
  description: {
    color: '#0eeb06ff',
    lineHeight: '1.6',
    fontSize: '16px'
  }
};

// Component that includes global styles
const StyledHeader = () => {
  useEffect(() => {
    // Add global styles
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      
      body {
        background: linear-gradient(to right, #7392c0ff, #6d5ba5);
        min-height: 100vh;
      }
      
      a:hover {
        background-color: rgba(255, 255, 255, 0.2) !important;
        transform: translateY(-2px) !important;
      }
      
      @media (max-width: 600px) {
        .nav-menu {
          flex-direction: column;
        }
        
        .separator {
          display: none;
        }
        
        .profile-frame {
          width: 120px;
          height: 120px;
        }
        
        .name {
          font-size: 20px;
        }
        
        .welcome-text h1 {
          font-size: 26px;
        }
      }
    `;
    document.head.appendChild(styleElement);
    
    return () => {
      // Clean up on component unmount
      document.head.removeChild(styleElement);
    };
  }, []);
  
  return <Header />;
};

export default StyledHeader;