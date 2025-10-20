// AboutMe.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '1', label: 'Projects Completed' },
    { number: '4', label: 'Happy Clients' },
    { number: '10+', label: 'Technologies' }
  ];

  const interests = [
    { icon: '💻', name: 'Coding' },
    { icon: '📚', name: 'Reading' },
    { icon: '🎵', name: 'Music' },
    { icon: '✈️', name: 'Travel' },
    { icon: '🎮', name: 'Gaming' },
    { icon: '🏃‍♂️', name: 'Fitness' }
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <div style={styles.heroText}>
              <h1 style={styles.heroTitle}>About Me</h1>
              <p style={styles.heroSubtitle}>
                Passionate Full-Stack Developer with a love for creating 
                innovative web solutions and beautiful user experiences.
              </p>
              <div style={styles.heroButtons}>
                <a href="/assets/CLEVER_MWANANDIMAI_CV.pdf" download style={styles.primaryBtn}>Download CV</a>
                <Link to="/projects" style={styles.secondaryBtn}>View Projects</Link>
              </div>
            </div>
            <div style={styles.heroImage}>
              <div style={styles.imagePlaceholder}>
                <span style={styles.imageText}>Your Photo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={styles.statsSection}>
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statCard}>
                <h3 style={styles.statNumber}>{stat.number}</h3>
                <p style={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section style={styles.storySection}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>My Story</h2>
            <p style={styles.sectionSubtitle}>
              Journey through my development career and passion for technology
            </p>
          </div>
          <div style={styles.storyContent}>
            <div style={styles.storyText}>
              <p style={styles.storyParagraph}>
                Hello! I'm a passionate full-stack developer with over 3 years of experience 
                creating digital solutions. My journey started with curiosity about how 
                websites work, and it has evolved into a career I truly love.
              </p>
              <p style={styles.storyParagraph}>
                I specialize in modern web technologies including React, Node.js, and 
                cloud platforms. I believe in writing clean, maintainable code and 
                creating user experiences that are both beautiful and functional.
              </p>
              <p style={styles.storyParagraph}>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
            <div style={styles.storyImage}>
              <div style={styles.storyImagePlaceholder}>
                <span style={styles.imageText}>Work Setup</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section style={styles.interestsSection}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>My Interests</h2>
            <p style={styles.sectionSubtitle}>
              Beyond coding, here's what keeps me inspired and motivated
            </p>
          </div>
          <div style={styles.interestsGrid}>
            {interests.map((interest, index) => (
              <div key={index} style={styles.interestCard}>
                <span style={styles.interestIcon}>{interest.icon}</span>
                <h4 style={styles.interestName}>{interest.name}</h4>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  hero: {
    background: 'white',
    borderRadius: '20px',
    padding: '4rem 2rem',
    marginBottom: '3rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  heroContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
  },
  heroText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: '0',
  },
  heroSubtitle: {
    fontSize: '1.3rem',
    color: '#666',
    lineHeight: '1.6',
    margin: '0',
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  },
  primaryBtn: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  secondaryBtn: {
    background: 'transparent',
    color: '#667eea',
    border: '2px solid #667eea',
    padding: '1rem 2rem',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  heroImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '300px',
    height: '300px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: '600',
  },
  imageText: {
    color: 'white',
  },
  statsSection: {
    marginBottom: '4rem',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  },
  statCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#667eea',
    margin: '0 0 0.5rem 0',
  },
  statLabel: {
    fontSize: '1.1rem',
    color: '#666',
    margin: '0',
    fontWeight: '600',
  },
  storySection: {
    background: 'white',
    borderRadius: '20px',
    padding: '4rem',
    marginBottom: '4rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 1rem 0',
  },
  sectionSubtitle: {
    fontSize: '1.2rem',
    color: '#666',
    margin: '0',
  },
  storyContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
  },
  storyText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  storyParagraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#555',
    margin: '0',
  },
  storyImage: {
    display: 'flex',
    justifyContent: 'center',
  },
  storyImagePlaceholder: {
    width: '100%',
    height: '300px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: '600',
  },
  interestsSection: {
    background: 'white',
    borderRadius: '20px',
    padding: '4rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  interestsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '2rem',
  },
  interestCard: {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: 'white',
    padding: '2rem 1rem',
    borderRadius: '15px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  interestIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    display: 'block',
  },
  interestName: {
    fontSize: '1.2rem',
    fontWeight: '600',
    margin: '0',
  },
};

// Hover effects
Object.assign(styles.primaryBtn, {
  ':hover': {
    transform: 'translateY(-2px)',
  },
});

Object.assign(styles.secondaryBtn, {
  ':hover': {
    background: '#667eea',
    color: 'white',
    transform: 'translateY(-2px)',
  },
});

Object.assign(styles.statCard, {
  ':hover': {
    transform: 'translateY(-5px)',
  },
});

Object.assign(styles.interestCard, {
  ':hover': {
    transform: 'translateY(-5px)',
  },
});

export default AboutMe;