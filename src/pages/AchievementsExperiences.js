// AchievementsExperiences.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AchievementsExperiences = () => {
  const [activeTab, setActiveTab] = useState('experiences');

  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "University of Zimbabwe.",
      period: "2021 - 2025",
      location: "Harare, Zimbabwe",
      type: "Full-time",
      achievements: [
        "Led a team of developers in building a scalable software platforms serving large user base",
        "Reduced application load time by 40% through performance optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored by 3 developers and conducted technical interviews"
      ],
      technologies: ["React", "Node.js", "AWS", "MySQL", "Express"],
      category: "education"
    },
  
   
  ];

  const achievements = [
   
    {
      id: 2,
      title: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      date: "August 2023",
      description: "Certified in designing distributed systems on AWS cloud platform",
      category: "certification",
      icon: "📜",
      link: "#"
    },
    {
      id: 3,
      title: "Open Source Contributor of the Month",
      issuer: "React Community",
      date: "June 2023",
      description: "Recognized for significant contributions to React open-source projects",
      category: "recognition",
      icon: "⭐",
      link: "#"
    },
    {
      id: 4,
      title: "Tech Conference Speaker",
      issuer: "DevCon 2023",
      date: "March 2023",
      description: "Presented 'Modern Web Development Trends' to 500+ attendees",
      category: "speaking",
      icon: "🎤",
      link: "#"
    },
    {
      id: 5,
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "January 2023",
      description: "Certified in cloud concepts and Azure services",
      category: "certification",
      icon: "☁️",
      link: "#"
    },
    {
      id: 6,
      title: "Code Quality Excellence Award",
      issuer: "Tech Innovations Inc.",
      date: "November 2022",
      description: "Awarded for maintaining highest code quality standards in the team",
      category: "award",
      icon: "💎",
      link: "#"
    }
  ];

  const skills = [
    { name: "Frontend Development", level: 95 },
    { name: "Backend Development", level: 88 },
    { name: "Database Design", level: 85 },
    { name: "Cloud Architecture", level: 80 },
    { name: "DevOps & CI/CD", level: 75 },
    { name: "Team Leadership", level: 90 }
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header Section */}
        <section style={styles.header}>
          <h1 style={styles.title}>Journey & Milestones</h1>
          <p style={styles.subtitle}>
            A timeline of my professional experiences, achievements, and continuous growth in the tech industry
          </p>
        </section>

        {/* Tab Navigation */}
        <section style={styles.tabSection}>
          <div style={styles.tabContainer}>
            <button
              style={{
                ...styles.tab,
                ...(activeTab === 'experiences' ? styles.activeTab : {})
              }}
              onClick={() => setActiveTab('experiences')}
            >
              💼 Work & Education
            </button>
            <button
              style={{
                ...styles.tab,
                ...(activeTab === 'achievements' ? styles.activeTab : {})
              }}
              onClick={() => setActiveTab('achievements')}
            >
              🏆 Achievements
            </button>
            <button
              style={{
                ...styles.tab,
                ...(activeTab === 'skills' ? styles.activeTab : {})
              }}
              onClick={() => setActiveTab('skills')}
            >
              📊 Skills Overview
            </button>
          </div>
        </section>

        {/* Content Sections */}
        {activeTab === 'experiences' && (
          <section style={styles.experiencesSection}>
            <h2 style={styles.sectionTitle}>Professional Journey</h2>
            <div style={styles.timeline}>
              {experiences.map((exp, index) => (
                <div key={exp.id} style={styles.timelineItem}>
                  <div style={styles.timelineMarker}>
                    <div style={styles.markerIcon}>
                      {exp.category === 'work' ? '💼' : '🎓'}
                    </div>
                    {index !== experiences.length - 1 && <div style={styles.timelineLine}></div>}
                  </div>
                  <div style={styles.timelineContent}>
                    <div style={styles.experienceHeader}>
                      <h3 style={styles.experienceTitle}>{exp.title}</h3>
                      <span style={styles.experiencePeriod}>{exp.period}</span>
                    </div>
                    <div style={styles.experienceCompany}>
                      <span style={styles.companyName}>{exp.company}</span>
                      <span style={styles.experienceType}>{exp.type}</span>
                    </div>
                    <p style={styles.experienceLocation}>{exp.location}</p>
                    
                    <div style={styles.achievementsList}>
                      <h4 style={styles.achievementsTitle}>Key Achievements:</h4>
                      <ul style={styles.achievements}>
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} style={styles.achievementItem}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div style={styles.technologies}>
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} style={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'achievements' && (
          <section style={styles.achievementsSection}>
            <h2 style={styles.sectionTitle}>Notable Achievements</h2>
            <div style={styles.achievementsGrid}>
              {achievements.map((achievement) => (
                <div key={achievement.id} style={styles.achievementCard}>
                  <div style={styles.achievementHeader}>
                    <span style={styles.achievementIcon}>{achievement.icon}</span>
                    <div style={styles.achievementInfo}>
                      <h3 style={styles.achievementTitle}>{achievement.title}</h3>
                      <p style={styles.achievementIssuer}>{achievement.issuer}</p>
                    </div>
                  </div>
                  <p style={styles.achievementDescription}>{achievement.description}</p>
                  <div style={styles.achievementFooter}>
                    <span style={styles.achievementDate}>{achievement.date}</span>
                    <span style={{
                      ...styles.achievementCategory,
                      ...styles[achievement.category]
                    }}>
                      {achievement.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'skills' && (
          <section style={styles.skillsSection}>
            <h2 style={styles.sectionTitle}>Skills Progression</h2>
            <div style={styles.skillsContainer}>
              {skills.map((skill, index) => (
                <div key={index} style={styles.skillItem}>
                  <div style={styles.skillHeader}>
                    <span style={styles.skillName}>{skill.name}</span>
                    <span style={styles.skillPercentage}>{skill.level}%</span>
                  </div>
                  <div style={styles.progressBar}>
                    <div 
                      style={{
                        ...styles.progressFill,
                        width: `${skill.level}%`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <h3 style={styles.statNumber}>4+</h3>
                <p style={styles.statLabel}>Years Experience</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNumber}>50+</h3>
                <p style={styles.statLabel}>Projects Completed</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNumber}>15+</h3>
                <p style={styles.statLabel}>Technologies</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNumber}>10+</h3>
                <p style={styles.statLabel}>Certifications</p>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Let's Build Something Amazing Together</h2>
          <p style={styles.ctaText}>
            Interested in working together or learning more about my journey? 
            I'm always open to discussing new opportunities and collaborations.
          </p>
          <div style={styles.ctaButtons}>
            <Link to="/projects" style={styles.primaryCta}>View My Projects</Link>
            <Link to="/contact" style={styles.secondaryCta}>Get In Touch</Link>
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
    padding: '2rem 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
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
  tabSection: {
    marginBottom: '3rem',
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  tab: {
    background: 'white',
    border: '2px solid #e0e0e0',
    padding: '1rem 2rem',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  activeTab: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderColor: '#667eea',
  },
  experiencesSection: {
    background: 'white',
    borderRadius: '20px',
    padding: '3rem',
    marginBottom: '3rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 3rem 0',
    textAlign: 'center',
  },
  timeline: {
    position: 'relative',
  },
  timelineItem: {
    display: 'flex',
    marginBottom: '3rem',
    position: 'relative',
  },
  timelineMarker: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '2rem',
    position: 'relative',
  },
  markerIcon: {
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    color: 'white',
    zIndex: '2',
  },
  timelineLine: {
    width: '2px',
    height: 'calc(100% + 3rem)',
    background: '#e0e0e0',
    position: 'absolute',
    top: '60px',
    zIndex: '1',
  },
  timelineContent: {
    flex: '1',
    background: '#f8f9ff',
    padding: '2rem',
    borderRadius: '15px',
    borderLeft: '4px solid #667eea',
  },
  experienceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '0.5rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  experienceTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#333',
    margin: '0',
  },
  experiencePeriod: {
    background: '#667eea',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600',
  },
  experienceCompany: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '0.5rem',
    flexWrap: 'wrap',
  },
  companyName: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#667eea',
  },
  experienceType: {
    background: '#e0e7ff',
    color: '#667eea',
    padding: '0.25rem 0.75rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  experienceLocation: {
    color: '#666',
    margin: '0 0 1.5rem 0',
    fontSize: '1rem',
  },
  achievementsList: {
    marginBottom: '1.5rem',
  },
  achievementsTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
    margin: '0 0 1rem 0',
  },
  achievements: {
    paddingLeft: '1.5rem',
    margin: '0',
  },
  achievementItem: {
    marginBottom: '0.5rem',
    color: '#555',
    lineHeight: '1.6',
  },
  technologies: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  techTag: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '0.4rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  achievementsSection: {
    background: 'white',
    borderRadius: '20px',
    padding: '3rem',
    marginBottom: '3rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  achievementsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
  },
  achievementCard: {
    background: 'linear-gradient(135deg, #f8f9ff 0%, #e0e7ff 100%)',
    padding: '2rem',
    borderRadius: '15px',
    border: '2px solid #e0e7ff',
    transition: 'all 0.3s ease',
  },
  achievementHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },
  achievementIcon: {
    fontSize: '2.5rem',
    width: '60px',
    height: '60px',
    background: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
  },
  achievementInfo: {
    flex: '1',
  },
  achievementTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 0.25rem 0',
  },
  achievementIssuer: {
    fontSize: '1rem',
    color: '#667eea',
    fontWeight: '600',
    margin: '0',
  },
  achievementDescription: {
    color: '#555',
    lineHeight: '1.6',
    margin: '0 0 1.5rem 0',
  },
  achievementFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  achievementDate: {
    color: '#666',
    fontWeight: '600',
  },
  achievementCategory: {
    padding: '0.4rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  award: {
    background: '#fff3cd',
    color: '#856404',
  },
  certification: {
    background: '#d1ecf1',
    color: '#0c5460',
  },
  recognition: {
    background: '#d4edda',
    color: '#155724',
  },
  speaking: {
    background: '#e2e3e5',
    color: '#383d41',
  },
  skillsSection: {
    background: 'white',
    borderRadius: '20px',
    padding: '3rem',
    marginBottom: '3rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  skillsContainer: {
    marginBottom: '3rem',
  },
  skillItem: {
    marginBottom: '2rem',
  },
  skillHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  skillName: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
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
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '10px',
    transition: 'width 0.8s ease-in-out',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  },
  statCard: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: '700',
    margin: '0 0 0.5rem 0',
  },
  statLabel: {
    fontSize: '1rem',
    fontWeight: '600',
    margin: '0',
    opacity: '0.9',
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
    fontSize: '2.2rem',
    fontWeight: '700',
    margin: '0 0 1rem 0',
  },
  ctaText: {
    fontSize: '1.2rem',
    margin: '0 0 2rem 0',
    opacity: '0.9',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ctaButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryCta: {
    background: 'white',
    color: '#667eea',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  secondaryCta: {
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '1rem 2rem',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

// Hover effects
Object.assign(styles.tab, {
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  },
});

Object.assign(styles.achievementCard, {
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 25px rgba(102, 126, 234, 0.2)',
  },
});

Object.assign(styles.statCard, {
  ':hover': {
    transform: 'translateY(-5px)',
  },
});

Object.assign(styles.primaryCta, {
  ':hover': {
    transform: 'translateY(-2px)',
  },
});

Object.assign(styles.secondaryCta, {
  ':hover': {
    background: 'white',
    color: '#667eea',
    transform: 'translateY(-2px)',
  },
});

export default AchievementsExperiences;