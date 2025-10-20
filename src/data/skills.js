// Skills.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
  const computerScienceSkills = [
    { name: 'Full Stack Development', level: 95, color: '#667eea' },
    { name: 'Backend Architecture', level: 87, color: '#764ba2' },
    { name: 'System Design', level: 75, color: '#f093fb' },
    { name: 'RESTful APIs', level: 90, color: '#4facfe' },
    { name: 'Microservices', level: 70, color: '#43e97b' },
    { name: 'Database Design', level: 85, color: '#fa709a' },
    { name: 'Data Structures', level: 88, color: '#ff9a9e' },
    { name: 'Algorithms', level: 85, color: '#fecfef' },
    { name: 'Cloud Computing', level: 75, color: '#a8edea' },
    { name: 'DevOps', level: 70, color: '#fed6e3' },
    { name: 'CI/CD Pipelines', level: 75, color: '#ffd1ff' },
    { name: 'Containerization', level: 72, color: '#84fab0' },
    { name: 'Network Security', level: 68, color: '#8fd3f4' },
    { name: 'API Gateway', level: 65, color: '#d4fc79' },
    { name: 'Load Balancing', level: 70, color: '#96e6a1' },
    { name: 'Distributed Systems', level: 65, color: '#fbc2eb' },
    { name: 'Software Engineering', level: 88, color: '#a6c1ee' },
    { name: 'Agile Methodology', level: 90, color: '#fdcbf1' },
    { name: 'Test-Driven Development', level: 80, color: '#e6dee9' },
    { name: 'Code Review', level: 85, color: '#c1dfc4' },
    { name: 'Technical Leadership', level: 75, color: '#fad0c4' },
    { name: 'System Architecture', level: 78, color: '#ff9a9e' },
    { name: 'Performance Optimization', level: 82, color: '#a18cd1' },
    { name: 'Scalability', level: 75, color: '#fbc2eb' },
    { name: 'Machine Learning', level: 60, color: '#ffecd2' },
    { name: 'Artificial Intelligence', level: 55, color: '#fcb69f' },
    { name: 'Data Analytics', level: 70, color: '#a8edea' },
    { name: 'Big Data', level: 65, color: '#fed6e3' },
    { name: 'Cybersecurity', level: 70, color: '#ffd1ff' },
    { name: 'Cryptography', level: 60, color: '#84fab0' },
    { name: 'Blockchain', level: 50, color: '#8fd3f4' },
    { name: 'Internet of Things', level: 65, color: '#d4fc79' },
    { name: 'Mobile Development', level: 75, color: '#96e6a1' },
    { name: 'UI/UX Design', level: 80, color: '#fbc2eb' },
    { name: 'Responsive Design', level: 90, color: '#a6c1ee' },
    { name: 'Progressive Web Apps', level: 75, color: '#fdcbf1' },
    { name: 'Serverless Computing', level: 70, color: '#e6dee9' },
    { name: 'Infrastructure as Code', level: 68, color: '#c1dfc4' },
    { name: 'Linux Administration', level: 80, color: '#fad0c4' },
    { name: 'Shell Scripting', level: 75, color: '#ff9a9e' },
    { name: 'Version Control', level: 90, color: '#a18cd1' },
    { name: 'Code Documentation', level: 85, color: '#fbc2eb' },
    { name: 'Technical Writing', level: 80, color: '#ffecd2' },
    { name: 'Problem Solving', level: 92, color: '#fcb69f' },
    { name: 'Innovation', level: 85, color: '#a8edea' },
    { name: 'Research & Development', level: 80, color: '#fed6e3' },
    { name: 'Project Management', level: 75, color: '#ffd1ff' }
  ];

  const technicalSkills = [
    // Frontend
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'JavaScript', level: 85, color: '#f7df1e' },
    { name: 'TypeScript', level: 75, color: '#3178c6' },
    { name: 'CSS3', level: 85, color: '#264de4' },
    { name: 'HTML5', level: 90, color: '#e34c26' },
    { name: 'Redux', level: 80, color: '#764abc' },
    { name: 'SASS', level: 70, color: '#cc6699' },
    // Backend
    { name: 'Node.js', level: 80, color: '#68a063' },
    { name: 'Python', level: 70, color: '#3776ab' },
    { name: 'Express.js', level: 75, color: '#000000' },
    { name: 'GraphQL', level: 65, color: '#e535ab' },
    { name: 'Java', level: 70, color: '#007396' },
    // Database
    { name: 'MongoDB', level: 80, color: '#47a248' },
    { name: 'MySQL', level: 85, color: '#00758f' },
    { name: 'Firebase', level: 75, color: '#ffca28' },
    // CMS & Platforms
    { name: 'WordPress', level: 75, color: '#21759b' },
    { name: 'Joomla', level: 65, color: '#5091cd' },
    // Tools
    { name: 'Git', level: 80, color: '#f05032' },
    { name: 'Docker', level: 70, color: '#2496ed' },
    { name: 'AWS', level: 65, color: '#ff9900' },
    { name: 'React Native', level: 70, color: '#61dafb' },
    { name: 'Webpack', level: 60, color: '#8ed6fb' },
    { name: 'Android Studio', level: 75, color: '#3ddc84' }
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 90 },
    { name: 'Team Collaboration', level: 85 },
    { name: 'Communication', level: 88 },
    { name: 'Time Management', level: 82 },
    { name: 'Creativity', level: 87 },
    { name: 'Adaptability', level: 90 }
  ];

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'IntelliJ IDEA', icon: '🅰️' },
    { name: 'Android Studio', icon: '🤖' },
    { name: 'Figma', icon: '🎨' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Postman', icon: '📬' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Chrome DevTools', icon: '🔧' },
    { name: 'WordPress', icon: '⚙️' },
    { name: 'Joomla', icon: '🌐' }
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <section style={styles.header}>
          <h1 style={styles.title}>Skills & Expertise</h1>
          <p style={styles.subtitle}>
            A comprehensive overview of my technical abilities, soft skills, and tools I work with
          </p>
        </section>

        {/* Computer Science Skills */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Computer Science & Engineering skills</h2>
          <p style={styles.sectionDescription}>
            Core computer science concepts, software engineering principles, and system design expertise
          </p>
          <div style={styles.skillsGrid}>
            {computerScienceSkills.map((skill, index) => (
              <div key={index} style={styles.skillCard}>
                <div style={styles.skillHeader}>
                  <h3 style={styles.skillName}>{skill.name}</h3>
                  <span style={styles.skillPercentage}>{skill.level}%</span>
                </div>
                <div style={styles.progressBar}>
                  <div 
                    style={{
                      ...styles.progressFill,
                      width: `${skill.level}%`,
                      background: skill.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Technical Skills</h2>
          <p style={styles.sectionDescription}>
            Programming languages, frameworks, and technologies I work with
          </p>
          <div style={styles.skillsGrid}>
            {technicalSkills.map((skill, index) => (
              <div key={index} style={styles.skillCard}>
                <div style={styles.skillHeader}>
                  <h3 style={styles.skillName}>{skill.name}</h3>
                  <span style={styles.skillPercentage}>{skill.level}%</span>
                </div>
                <div style={styles.progressBar}>
                  <div 
                    style={{
                      ...styles.progressFill,
                      width: `${skill.level}%`,
                      background: skill.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Soft Skills</h2>
          <p style={styles.sectionDescription}>
            Personal attributes that enhance my professional performance
          </p>
          <div style={styles.softSkillsGrid}>
            {softSkills.map((skill, index) => (
              <div key={index} style={styles.softSkillCard}>
                <div style={styles.softSkillContent}>
                  <h3 style={styles.softSkillName}>{skill.name}</h3>
                  <div style={styles.circleProgress}>
                    <div style={styles.circleBackground}></div>
                    <div 
                      style={{
                        ...styles.circleFill,
                        background: `conic-gradient(#667eea ${skill.level * 3.6}deg, #e0e0e0 0deg)`
                      }}
                    ></div>
                    <span style={styles.circlePercentage}>{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Tools & Technologies</h2>
          <p style={styles.sectionDescription}>
            Development tools and platforms I use daily
          </p>
          <div style={styles.toolsGrid}>
            {tools.map((tool, index) => (
              <div key={index} style={styles.toolCard}>
                <span style={styles.toolIcon}>{tool.icon}</span>
                <h3 style={styles.toolName}>{tool.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Ready to Work Together?</h2>
          <p style={styles.ctaText}>
            Let's discuss how my skills can help bring your project to life
          </p>
          <Link to="/contact" style={styles.ctaButton}>Get In Touch</Link>
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
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
    background: 'white',
    padding: '3rem 2rem',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: '0 0 1rem 0',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  section: {
    background: 'white',
    borderRadius: '20px',
    padding: '3rem',
    marginBottom: '3rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '2.2rem',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 1rem 0',
    textAlign: 'center',
  },
  sectionDescription: {
    fontSize: '1.1rem',
    color: '#666',
    textAlign: 'center',
    margin: '0 0 3rem 0',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  skillCard: {
    padding: '1.5rem',
  },
  skillHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  skillName: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#333',
    margin: '0',
  },
  skillPercentage: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#667eea',
  },
  progressBar: {
    width: '100%',
    height: '10px',
    background: '#e0e0e0',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: '10px',
    transition: 'width 0.8s ease-in-out',
  },
  softSkillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  softSkillCard: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  softSkillContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  softSkillName: {
    fontSize: '1.2rem',
    fontWeight: '600',
    margin: '0',
  },
  circleProgress: {
    position: 'relative',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.2)',
  },
  circleFill: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  },
  circlePercentage: {
    position: 'relative',
    fontSize: '1rem',
    fontWeight: '600',
    color: 'white',
  },
  toolsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '2rem',
  },
  toolCard: {
    background: 'white',
    border: '2px solid #667eea',
    padding: '2rem 1rem',
    borderRadius: '15px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  toolIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    display: 'block',
  },
  toolName: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
    margin: '0',
  },
  ctaSection: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '4rem 2rem',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    margin: '0 0 1rem 0',
  },
  ctaText: {
    fontSize: '1.2rem',
    margin: '0 0 2rem 0',
    opacity: '0.9',
  },
  ctaButton: {
    background: 'white',
    color: '#667eea',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
  },
};

// Hover effects
Object.assign(styles.softSkillCard, {
  ':hover': {
    transform: 'translateY(-5px)',
  },
});

Object.assign(styles.toolCard, {
  ':hover': {
    background: '#667eea',
    color: 'white',
    transform: 'translateY(-5px)',
  },
});

Object.assign(styles.ctaButton, {
  ':hover': {
    transform: 'translateY(-2px)',
  },
});

export default Skills;