import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SkillsShowcase = () => {
  const skills = [
    'Full Stack Development', 'Backend Architecture', 'System Design', 'RESTful APIs', 
    'Microservices', 'Database Design', 'Data Structures', 'Algorithms', 'Cloud Computing',
    'DevOps', 'CI/CD Pipelines', 'Containerization', 'Network Security', 'API Gateway',
    'Load Balancing', 'Distributed Systems', 'Software Engineering', 'Agile Methodology',
    'Test-Driven Development', 'Code Review', 'Technical Leadership', 'System Architecture',
    'Performance Optimization', 'Scalability', 'Machine Learning', 'Artificial Intelligence',
    'Data Analytics', 'Big Data', 'Cybersecurity', 'Cryptography', 'Blockchain',
    'Internet of Things', 'Mobile Development', 'UI/UX Design', 'Responsive Design',
    'Progressive Web Apps', 'Serverless Computing', 'Infrastructure as Code', 'Linux Administration',
    'Shell Scripting', 'Version Control', 'Code Documentation', 'Technical Writing',
    'Problem Solving', 'Innovation', 'Research & Development', 'Project Management'
  ];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  // Dynamic counting states
  const [yearsExperience, setYearsExperience] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [technologiesCount, setTechnologiesCount] = useState(0);

  // Target values (you can update these based on your actual data)
  const targetYears = 3;
  const targetProjects = 50;
  const targetTechnologies = 20;

  const skillCategories = {
    frontend: ['React', 'JavaScript', 'TypeScript', 'CSS3', 'HTML5', 'Redux', 'SASS'],
    backend: ['Node.js', 'Python', 'Express.js', 'GraphQL', 'Java'],
    database: ['MongoDB', 'MySQL', 'Firebase'],
    tools: ['Git', 'Docker', 'AWS', 'Webpack', 'Jest', 'React Native']
  };

  // Categorized proficiency data
  const proficiencyData = {
    frontend: [
      { skill: 'React', level: 90 },
      { skill: 'JavaScript', level: 85 },
      { skill: 'TypeScript', level: 75 },
      { skill: 'CSS3', level: 85 },
      { skill: 'HTML5', level: 90 },
      { skill: 'Redux', level: 80 },
      { skill: 'SASS', level: 70 }
    ],
    backend: [
      { skill: 'Node.js', level: 80 },
      { skill: 'Python', level: 70 },
      { skill: 'Express.js', level: 75 },
      { skill: 'GraphQL', level: 65 },
      { skill: 'Java', level: 70 }
    ],
    database: [
      { skill: 'MongoDB', level: 80 },
      { skill: 'MySQL', level: 85 },
      { skill: 'Firebase', level: 75 }
    ],
    tools: [
      { skill: 'Git', level: 80 },
      { skill: 'Docker', level: 70 },
      { skill: 'AWS', level: 65 },
      { skill: 'React Native', level: 70 },
      { skill: 'Webpack', level: 60 }
      
    ]
  };

  useEffect(() => {
    // Skills slideshow
    const skillInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        setIsVisible(true);
      }, 300);
    }, 2000);

    // Dynamic counting animation
    const countInterval = setInterval(() => {
      setYearsExperience(prev => {
        if (prev < targetYears) return prev + 1;
        return prev;
      });
      
      setProjectsCompleted(prev => {
        if (prev < targetProjects) {
          const increment = Math.ceil(targetProjects / 50); // Smooth animation
          return prev + increment >= targetProjects ? targetProjects : prev + increment;
        }
        return prev;
      });
      
      setTechnologiesCount(prev => {
        if (prev < targetTechnologies) return prev + 1;
        return prev;
      });
    }, 50);

    return () => {
      clearInterval(skillInterval);
      clearInterval(countInterval);
    };
  }, [skills.length, targetYears, targetProjects, targetTechnologies]);


  const navigate = useNavigate();

  const handleViewWork = () => {
    navigate('/projects');
  };

  const handleStatsClick = (statType) => {
    // Navigate to projects page with filter based on stat type (client-side)
    navigate(`/projects?filter=${statType}`);
  };

  const SkillBar = ({ skill, level }) => (
    <div style={styles.skillBarContainer}>
      <span style={styles.skillName}>{skill}</span>
      <div style={styles.progressBar}>
        <div 
          style={{
            ...styles.progressFill,
            width: `${level}%`,
            backgroundColor: level > 70 ? '#64ffda' : level > 40 ? '#4fc3f7' : '#9575cd'
          }}
        />
      </div>
      <span style={styles.skillLevel}>{level}%</span>
    </div>
  );

  const SkillCategory = ({ title, skills, color }) => (
    <div style={styles.skillCategory}>
      <h4 style={{...styles.categoryTitle, color}}>{title}</h4>
      <div style={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <span key={index} style={styles.skillTag}>{skill}</span>
        ))}
      </div>
    </div>
  );

  const ProficiencyCategory = ({ title, skills, color, isOpen, onToggle }) => (
    <div style={styles.proficiencyCategory}>
      <div style={styles.proficiencyHeader} onClick={onToggle}>
        <h4 style={{...styles.proficiencyCategoryTitle, color}}>
          {title} ({skills.length})
        </h4>
        <span style={styles.toggleIcon}>
          {isOpen ? '▼' : '►'}
        </span>
      </div>
      {isOpen && (
        <div style={styles.proficiencySkills}>
          {skills.map((item, index) => (
            <SkillBar key={index} skill={item.skill} level={item.level} />
          ))}
        </div>
      )}
    </div>
  );

  // Stat Item Component with click handler
  const StatItem = ({ number, label, type }) => (
    <div 
      style={styles.statItem} 
      onClick={() => handleStatsClick(type)}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.cursor = 'pointer';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <h3 style={styles.statNumber}>{number}+</h3>
      <p style={styles.statLabel}>{label}</p>
    </div>
  );

  const [openCategories, setOpenCategories] = useState({
    frontend: true,
    backend: true,
    database: true,
    tools: true
  });

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 1fr',
      alignItems: 'flex-start',
      minHeight: '500px',
      backgroundColor: '#0a192f',
      padding: '2rem',
      color: 'white',
      fontFamily: "'Arial', sans-serif",
      gap: '2rem',
      width: '100%',
      boxSizing: 'border-box'
    },
    leftSection: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      height: '100%'
    },
    centerSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '2rem',
      height: '100%'
    },
    rightSection: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      height: '100%'
    },
    
    // Left & Right Section Button Styles
    sideButton: {
      background: 'transparent',
      border: '2px solid #64ffda',
      color: '#64ffda',
      padding: '1rem 1.5rem',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: '140px',
      textAlign: 'center',
      marginTop: '0',
      textDecoration: 'none'
    },
    
    // Center Section Styles
    mainSlideshow: {
      textAlign: 'center',
      width: '100%'
    },
    skillDisplay: {
      marginBottom: '1rem',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    currentSkill: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      color: '#64ffda',
      margin: 0,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.5s ease-in-out',
      textShadow: '0 0 20px rgba(100, 255, 218, 0.5)'
    },
    skillsTitle: {
      fontSize: '2rem',
      color: '#ccd6f6',
      margin: '0.5rem 0',
      fontWeight: '600'
    },
    subtitle: {
      fontSize: '1rem',
      color: '#8892b0',
      margin: '0.5rem 0 2rem 0',
      fontWeight: '300'
    },
    
    // Tech Stack Display
    techStack: {
      width: '100%',
      padding: '1.5rem',
      backgroundColor: 'rgba(100, 255, 218, 0.05)',
      borderRadius: '10px',
      border: '1px solid rgba(100, 255, 218, 0.1)'
    },
    stackTitle: {
      fontSize: '1.3rem',
      color: '#64ffda',
      marginBottom: '1rem',
      textAlign: 'center'
    },
    categoriesContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    skillCategory: {
      marginBottom: '1rem'
    },
    categoryTitle: {
      fontSize: '1.1rem',
      marginBottom: '0.5rem',
      fontWeight: '600'
    },
    skillsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },
    skillTag: {
      backgroundColor: 'rgba(100, 255, 218, 0.1)',
      color: '#64ffda',
      padding: '0.3rem 0.8rem',
      borderRadius: '15px',
      fontSize: '0.9rem',
      border: '1px solid rgba(100, 255, 218, 0.3)'
    },
    
    // Proficiency Section with Categories
    proficiencySection: {
      width: '100%',
      padding: '1.5rem',
      backgroundColor: 'rgba(2, 12, 27, 0.5)',
      borderRadius: '10px'
    },
    proficiencyTitle: {
      fontSize: '1.3rem',
      color: '#64ffda',
      marginBottom: '1.5rem',
      textAlign: 'center'
    },
    proficiencyCategory: {
      marginBottom: '1rem',
      border: '1px solid rgba(100, 255, 218, 0.2)',
      borderRadius: '8px',
      overflow: 'hidden'
    },
    proficiencyHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: 'rgba(100, 255, 218, 0.05)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    proficiencyCategoryTitle: {
      fontSize: '1.1rem',
      margin: 0,
      fontWeight: '600'
    },
    toggleIcon: {
      fontSize: '0.8rem',
      color: '#64ffda'
    },
    proficiencySkills: {
      padding: '1rem',
      backgroundColor: 'rgba(2, 12, 27, 0.3)'
    },
    skillBarContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      gap: '1rem'
    },
    skillName: {
      width: '120px',
      fontSize: '0.9rem',
      color: '#ccd6f6'
    },
    progressBar: {
      flex: 1,
      height: '8px',
      backgroundColor: 'rgba(100, 255, 218, 0.1)',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      borderRadius: '4px',
      transition: 'width 0.5s ease-in-out'
    },
    skillLevel: {
      width: '40px',
      fontSize: '0.8rem',
      color: '#8892b0',
      textAlign: 'right'
    },
    
    // Stats Section with clickable items
    statsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: '1rem'
    },
    statItem: {
      textAlign: 'center',
      transition: 'all 0.3s ease',
      padding: '0.5rem',
      borderRadius: '5px'
    },
    statNumber: {
      fontSize: '2rem',
      color: '#64ffda',
      fontWeight: 'bold',
      margin: 0,
      transition: 'all 0.3s ease'
    },
    statLabel: {
      fontSize: '0.9rem',
      color: '#8892b0',
      margin: 0,
      transition: 'all 0.3s ease'
    },
    
    // Button Text Styles
    buttonText: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      marginBottom: '0.25rem'
    },
    buttonSubtext: {
      fontSize: '0.9rem',
      opacity: 0.8
    }
  };

  return (
    <div style={styles.container}>
      {/* Left Section - Download CV (Aligned to top) */}
      <aside style={styles.leftSection}>
        <a
          href="/assets/CLEVER_MWANANDIMAI_CV.pdf"
          download
          style={styles.sideButton}
          onMouseOver={(e) => {
            e.target.style.background = 'rgba(100, 255, 218, 0.1)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          <span style={styles.buttonText}>Download CV</span>
          <span style={styles.buttonSubtext}>Get my resume</span>
        </a>
      </aside>

      {/* Center Section */}
      <main style={styles.centerSection}>
        <div style={styles.mainSlideshow}>
          <div style={styles.skillDisplay}>
            <h2 style={styles.currentSkill}>{skills[currentSkillIndex]}</h2>
          </div>
          <h1 style={styles.skillsTitle}>Skills & Technologies</h1>
          <p style={styles.subtitle}>Full-Stack Developer & Software Engineer</p>
        </div>

        <div style={styles.techStack}>
          <h3 style={styles.stackTitle}>Tech Stack</h3>
          <div style={styles.categoriesContainer}>
            <SkillCategory 
              title="Frontend" 
              skills={skillCategories.frontend} 
              color="#64ffda"
            />
            <SkillCategory 
              title="Backend" 
              skills={skillCategories.backend} 
              color="#4fc3f7"
            />
            <SkillCategory 
              title="Database" 
              skills={skillCategories.database} 
              color="#9575cd"
            />
            <SkillCategory 
              title="Tools & Platforms" 
              skills={skillCategories.tools} 
              color="#ff9800"
            />
          </div>
        </div>

        <div style={styles.proficiencySection}>
          <h3 style={styles.proficiencyTitle}>Skill Proficiency</h3>
          
          {/* Frontend Proficiency */}
          <ProficiencyCategory
            title="Frontend Development"
            skills={proficiencyData.frontend}
            color="#64ffda"
            isOpen={openCategories.frontend}
            onToggle={() => toggleCategory('frontend')}
          />

          {/* Backend Proficiency */}
          <ProficiencyCategory
            title="Backend Development"
            skills={proficiencyData.backend}
            color="#4fc3f7"
            isOpen={openCategories.backend}
            onToggle={() => toggleCategory('backend')}
          />

          {/* Database Proficiency */}
          <ProficiencyCategory
            title="Database & Storage"
            skills={proficiencyData.database}
            color="#9575cd"
            isOpen={openCategories.database}
            onToggle={() => toggleCategory('database')}
          />

          {/* Tools Proficiency */}
          <ProficiencyCategory
            title="Tools & Platforms"
            skills={proficiencyData.tools}
            color="#ff9800"
            isOpen={openCategories.tools}
            onToggle={() => toggleCategory('tools')}
          />
        </div>

        {/* Clickable Stats Section */}
        <div style={styles.statsContainer}>
          <StatItem 
            number={yearsExperience} 
            label="Years Experience" 
            type="experience" 
          />
          <StatItem 
            number={projectsCompleted} 
            label="Projects Completed" 
            type="projects" 
          />
          <StatItem 
            number={technologiesCount} 
            label="Technologies" 
            type="technologies" 
          />
        </div>
      </main>

      {/* Right Section - View My Work (Aligned to top) */}
      <aside style={styles.rightSection}>
        <button 
          style={styles.sideButton}
          onMouseOver={(e) => {
            e.target.style.background = 'rgba(100, 255, 218, 0.1)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.transform = 'translateY(0)';
          }}
          onClick={handleViewWork}
        >
          <span style={styles.buttonText}>View My Work🚀</span>
          <span style={styles.buttonSubtext}>See my projects</span>
        </button>
      </aside>
    </div>
  );
};

export default SkillsShowcase;