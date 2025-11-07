import React, { useState, useEffect } from 'react';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');

  // Sample projects data - replace with actual data from your API
  const sampleProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      tools: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      status: "In Progress",
      completionDate: "2024-01-15",
      progress: 80,
      details: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      documentation: "/docs/ecommerce-platform.pdf",
      folders: [
        { name: "Frontend", files: 24 },
        { name: "Backend", files: 18 },
        { name: "Database", files: 5 },
        
        { name: "Documentation", files: 3 }
      ],
      githubUrl: "https://github.com/Blanco-cm/fintech",
      liveDemo: "https://ecommerce-demo.com",
      image: "/images/ecommerce-project.jpg"
    },
    {
      id: 2,
      title: "HYBRID ALGORITHMS FOR GENERATING EXAM TIME TABLE AND VENUE ALLOCATION AT THE UNIVERSITY OF ZIMBABWE",
      tools: ["React Native", "Firebase", "Redux", "TypeScript"],
      status: "completed",
      completionDate: "2024-03-30",
  progress: 100,
      details: "Mobile application for task management with real-time synchronization and offline capabilities.",
  documentation: "/assets/web-based-hybrid-algorithm-for-Schedulling-timetable.pdf",
      folders: [
        { name: "Mobile App", files: 32 },
        { name: "Backend", files: 12 },
        { name: "Configuration", files: 4 }
      ],
      githubUrl: "https://github.com/Blanco-cm/hybride-alogorithm-for-generating-exaam-timetable-and-venue-allocation",
      liveDemo: null,
      image: "/images/task-manager.jpg"
    },
        {
      id: 2,
      title: "Fintech (roboAdviser)",
      tools: ["React", "API ", "Java", "MySQL"],
      status: "completed",
      completionDate: "2024-03-30",
  progress: 100,
      details: "Application for task management with real-time synchronization and offline capabilities on how to invest.",
  documentation: "/assets/web-based-hybrid-algorithm-for-Schedulling-timetable.pdf",
      folders: [
        { name: "Mobile App", files: 32 },
        { name: "Backend", files: 12 },
        { name: "Configuration", files: 4 }
      ],
      githubUrl: "https://github.com/Blanco-cm/fintech",
      liveDemo: null,
      image: "/images/task-manager.jpg"
    },
    {
      id: 3,
      title: "Drone Delivery system ",
      tools: ["Java", "React", "REST API Endpoints", ],
      status: "completed",
      completionDate: "2025-10-20",
      progress: 20,
      details: "Interactive dashboard for data visualization and business intelligence reporting drone that are used to deliver goods.",
      documentation: "/docs/drone-monitoring-system.pdf",
      folders: [
        { name: "Backend API", files: 15 },
        { name: "Frontend", files: 28 },
        { name: "Data Processing", files: 8 }
      ],
      githubUrl: "https://github.com/Blanco-cm/drone-delivery-system",
      liveDemo: null,
      image: "/images/drone-monitoring-system.jpg"
    },
    {
      id: 3,
      title: "ZimStock Market Machine Learning ",
      tools: ["Python", "React", "fastST API Endpoints", ],
      status: "completed",
      completionDate: "2025-10-20",
      progress: 100,
      details: "Zimbabwean companies face significant challenges in maintaining market competitiveness and financial stability due to the absence of sophisticated, real-time stock analysis systems that integrate seasonal, fundamental, technical, and technological approaches. This technological gap prevents local businesses from accurately predicting market trends, understanding seasonal demand patterns, and making data-driven investment decisions, ultimately contributing to corporate failures and reduced foreign investment in an already volatile economic landscape. The lack of an integrated analytical framework specifically tailored to Zimbabwe's unique market conditions and seasonal patterns leaves companies vulnerable to unexpected market shifts and unable to develop proactive strategies for growth and stability.",
      documentation: "/docs/drone-monitoring-system.pdf",
      folders: [
        { name: "Backend fastAPI", files: 17 },
        { name: "Frontend", files: 28 },
        { name: "Data Processing", files: 8 }
      ],
      githubUrl: "https://github.com/Blanco-cm/zimstock-market",
      liveDemo: null,
      image: "/images/drone-monitoring-system.jpg"
    },
    
    
  ];

  // Sample comments data
  const sampleComments = {
    1: [
      { id: 1, user: "John Doe", comment: "Great project! The UI is very intuitive.", date: "2024-01-20" },
      { id: 2, user: "Jane Smith", comment: "Could you add more payment options?", date: "2024-01-22" }
    ],
    2: [
      { id: 1, user: "Mike Johnson", comment: "Looking forward to the mobile version!", date: "2024-02-15" }
    ],
    3: []
  };

  useEffect(() => {
    // Simulate API call
    setProjects(sampleProjects);
    setComments(sampleComments);
    
    // Get filter from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const urlFilter = urlParams.get('filter');
    if (urlFilter) {
      setFilter(urlFilter);
    }
  }, []);

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
  if (filter === 'completed') return project.status.toLowerCase() === "completed" || project.status === "Completed";
  if (filter === 'in-progress') return project.status.toLowerCase() === "in progress" || project.status === "In Progress";
  if (filter === 'planning') return project.status.toLowerCase() === "planning" || project.status === "Planning";
    return true;
  });

  const handleCommentSubmit = (projectId) => {
    if (!newComment.trim()) return;

    const newCommentObj = {
      id: comments[projectId] ? comments[projectId].length + 1 : 1,
      user: "Current User", // Replace with actual user data
      comment: newComment,
      date: new Date().toISOString().split('T')[0]
    };

    setComments(prev => ({
      ...prev,
      [projectId]: [...(prev[projectId] || []), newCommentObj]
    }));

    setNewComment('');
  };

  const handleDocumentationDownload = async (docPath, projectTitle) => {
    try {
      // Open in new tab for immediate viewing
      window.open(docPath, '_blank', 'noopener');

      // Try to fetch the file and trigger a download (ensures both view + download)
      const response = await fetch(docPath, { cache: 'no-store' });
      if (!response.ok) throw new Error('Network response was not ok');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${projectTitle.replace(/\s+/g, '-').toLowerCase()}-documentation.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      // release object URL after a short delay
      setTimeout(() => window.URL.revokeObjectURL(url), 1000);
    } catch (err) {
      // Fallback: attempt a normal navigation which may trigger browser download
      const link = document.createElement('a');
      link.href = docPath;
      link.target = '_blank';
      link.rel = 'noopener';
      link.download = `${projectTitle.replace(/\s+/g, '-').toLowerCase()}-documentation.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  const ProjectCard = ({ project }) => (
    <div style={styles.projectCard}>
      <div style={styles.projectHeader}>
        <h3 style={styles.projectTitle}>{project.title}</h3>
        <span style={{
          ...styles.statusBadge,
          ...(project.status === "Completed" ? styles.statusCompleted : 
               project.status === "In Progress" ? styles.statusInProgress : 
               styles.statusPlanning)
        }}>
          {project.status}
        </span>
      </div>

      <div style={styles.toolsContainer}>
        {project.tools.map((tool, index) => (
          <span key={index} style={styles.toolTag}>{tool}</span>
        ))}
      </div>

      <p style={styles.projectDetails}>{project.details}</p>

      <div style={styles.progressContainer}>
        <div style={styles.progressBar}>
          <div 
            style={{
              ...styles.progressFill,
              width: `${project.progress}%`,
              backgroundColor: project.progress === 100 ? '#64ffda' : 
                             project.progress >= 50 ? '#4fc3f7' : '#9575cd'
            }}
          />
        </div>
        <span style={styles.progressText}>{project.progress}% Complete</span>
      </div>

      <div style={styles.projectFolders}>
        <h4 style={styles.foldersTitle}>Project Structure:</h4>
        {project.folders.map((folder, index) => (
          <div key={index} style={styles.folderItem}>
            <span style={styles.folderName}>📁 {folder.name}</span>
            <span style={styles.fileCount}>({folder.files} files)</span>
          </div>
        ))}
      </div>

      <div style={styles.projectActions}>
        <button 
          style={styles.actionButton}
          onClick={() => handleDocumentationDownload(project.documentation, project.title)}
        >
          📄 Download Documentation
        </button>
        
        {project.githubUrl && (
          <button 
            style={styles.actionButton}
            onClick={() => window.open(project.githubUrl, 'blank')}
          >
            💻 View Code
          </button>
        )}
        
        {project.liveDemo && (
          <button 
            style={styles.actionButton}
            onClick={() => window.open(project.liveDemo, '_blank')}
          >
            🌐 Live Demo
          </button>
        )}
      </div>

      <div style={styles.commentsSection}>
        <h4 style={styles.commentsTitle}>Comments ({comments[project.id]?.length || 0})</h4>
        
        <div style={styles.commentsList}>
          {(comments[project.id] || []).map(comment => (
            <div key={comment.id} style={styles.commentItem}>
              <div style={styles.commentHeader}>
                <strong style={styles.commentUser}>{comment.user}</strong>
                <span style={styles.commentDate}>{comment.date}</span>
              </div>
              <p style={styles.commentText}>{comment.comment}</p>
            </div>
          ))}
        </div>

        <div style={styles.commentForm}>
          <textarea
            style={styles.commentInput}
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows="3"
          />
          <button 
            style={styles.commentButton}
            onClick={() => handleCommentSubmit(project.id)}
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );

  const ProjectDetailView = ({ project }) => (
    <div style={styles.projectDetail}>
      <button 
        style={styles.backButton}
        onClick={() => setSelectedProject(null)}
      >
        ← Back to Projects
      </button>
      
      <div style={styles.detailHeader}>
        <h1 style={styles.detailTitle}>{project.title}</h1>
        <span style={{
          ...styles.statusBadge,
          ...styles.detailStatus,
          ...(project.status === "Completed" ? styles.statusCompleted : 
               project.status === "In Progress" ? styles.statusInProgress : 
               styles.statusPlanning)
        }}>
          {project.status}
        </span>
      </div>

      <div style={styles.detailContent}>
        <div style={styles.detailSection}>
          <h3>Project Details</h3>
          <p>{project.details}</p>
        </div>

        <div style={styles.detailSection}>
          <h3>Technology Stack</h3>
          <div style={styles.toolsContainer}>
            {project.tools.map((tool, index) => (
              <span key={index} style={styles.toolTag}>{tool}</span>
            ))}
          </div>
        </div>

        <div style={styles.detailSection}>
          <h3>Project Progress</h3>
          <div style={styles.progressContainer}>
            <div style={styles.progressBar}>
              <div 
                style={{
                  ...styles.progressFill,
                  width: `${project.progress}%`
                }}
              />
            </div>
            <span style={styles.progressText}>{project.progress}% Complete</span>
          </div>
          <p>Estimated Completion: {project.completionDate}</p>
        </div>

        <div style={styles.detailSection}>
          <h3>Documentation & Files</h3>
          <button 
            style={styles.downloadButton}
            onClick={() => handleDocumentationDownload(project.documentation, project.title)}
          >
            📄 Download Full Documentation (PDF)
          </button>
          
          <div style={styles.foldersSection}>
            <h4>Project Structure:</h4>
            {project.folders.map((folder, index) => (
              <div key={index} style={styles.folderItem}>
                <span style={styles.folderName}>📁 {folder.name}</span>
                <span style={styles.fileCount}>({folder.files} files)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (selectedProject) {
    return <ProjectDetailView project={selectedProject} />;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.pageTitle}>My Projects</h1>
        <p style={styles.pageSubtitle}>Showcasing my work and development journey</p>
        
        <div style={styles.filterButtons}>
          <button 
            style={filter === 'all' ? styles.activeFilter : styles.filterButton}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            style={filter === 'completed' ? styles.activeFilter : styles.filterButton}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
          <button 
            style={filter === 'in-progress' ? styles.activeFilter : styles.filterButton}
            onClick={() => setFilter('in-progress')}
          >
            In Progress
          </button>
          <button 
            style={filter === 'planning' ? styles.activeFilter : styles.filterButton}
            onClick={() => setFilter('planning')}
          >
            Planning
          </button>
        </div>
      </div>

      <div style={styles.projectsGrid}>
        {filteredProjects.map(project => (
          <div key={project.id} style={styles.projectCardWrapper}>
            <ProjectCard project={project} />
            <button 
              style={styles.viewDetailsButton}
              onClick={() => setSelectedProject(project)}
            >
              View Full Details
            </button>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div style={styles.noProjects}>
          <h3>No projects found for the selected filter.</h3>
          <p>Try selecting a different filter or check back later for new projects.</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a192f',
    color: 'white',
    fontFamily: "'Arial', sans-serif",
    padding: '2rem'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  pageTitle: {
    fontSize: '3rem',
    color: '#64ffda',
    marginBottom: '0.5rem'
  },
  pageSubtitle: {
    fontSize: '1.2rem',
    color: '#8892b0',
    marginBottom: '2rem'
  },
  filterButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  filterButton: {
    background: 'transparent',
    border: '2px solid #64ffda',
    color: '#64ffda',
    padding: '0.5rem 1.5rem',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  activeFilter: {
    background: '#64ffda',
    border: '2px solid #64ffda',
    color: '#0a192f',
    padding: '0.5rem 1.5rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  projectCardWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  projectCard: {
    background: 'rgba(2, 12, 27, 0.7)',
    border: '1px solid rgba(100, 255, 218, 0.1)',
    borderRadius: '10px',
    padding: '1.5rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  projectTitle: {
    fontSize: '1.5rem',
    color: '#ccd6f6',
    margin: 0
  },
  statusBadge: {
    padding: '0.3rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: 'bold'
  },
  statusCompleted: {
    background: 'rgba(100, 255, 218, 0.2)',
    color: '#64ffda',
    border: '1px solid #64ffda'
  },
  statusInProgress: {
    background: 'rgba(79, 195, 247, 0.2)',
    color: '#4fc3f7',
    border: '1px solid #4fc3f7'
  },
  statusPlanning: {
    background: 'rgba(149, 117, 205, 0.2)',
    color: '#9575cd',
    border: '1px solid #9575cd'
  },
  toolsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  },
  toolTag: {
    background: 'rgba(100, 255, 218, 0.1)',
    color: '#64ffda',
    padding: '0.2rem 0.6rem',
    borderRadius: '12px',
    fontSize: '0.8rem'
  },
  projectDetails: {
    color: '#8892b0',
    lineHeight: '1.5',
    margin: 0
  },
  progressContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  progressBar: {
    flex: 1,
    height: '8px',
    background: 'rgba(100, 255, 218, 0.1)',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 0.5s ease-in-out'
  },
  progressText: {
    fontSize: '0.9rem',
    color: '#64ffda',
    minWidth: '100px'
  },
  projectFolders: {
    borderTop: '1px solid rgba(100, 255, 218, 0.1)',
    paddingTop: '1rem'
  },
  foldersTitle: {
    color: '#ccd6f6',
    marginBottom: '0.5rem'
  },
  folderItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.3rem 0',
    fontSize: '0.9rem'
  },
  folderName: {
    color: '#64ffda'
  },
  fileCount: {
    color: '#8892b0',
    fontSize: '0.8rem'
  },
  projectActions: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  },
  actionButton: {
    background: 'transparent',
    border: '1px solid #64ffda',
    color: '#64ffda',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.8rem'
  },
  viewDetailsButton: {
    background: 'rgba(100, 255, 218, 0.1)',
    border: '2px solid #64ffda',
    color: '#64ffda',
    padding: '0.75rem 1.5rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '1rem',
    fontWeight: 'bold'
  },
  commentsSection: {
    borderTop: '1px solid rgba(100, 255, 218, 0.1)',
    paddingTop: '1rem'
  },
  commentsTitle: {
    color: '#ccd6f6',
    marginBottom: '1rem'
  },
  commentsList: {
    maxHeight: '200px',
    overflowY: 'auto',
    marginBottom: '1rem'
  },
  commentItem: {
    background: 'rgba(100, 255, 218, 0.05)',
    padding: '0.8rem',
    borderRadius: '5px',
    marginBottom: '0.5rem'
  },
  commentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.3rem'
  },
  commentUser: {
    color: '#64ffda',
    fontSize: '0.9rem'
  },
  commentDate: {
    color: '#8892b0',
    fontSize: '0.8rem'
  },
  commentText: {
    color: '#ccd6f6',
    margin: 0,
    fontSize: '0.9rem'
  },
  commentForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  commentInput: {
    background: 'rgba(100, 255, 218, 0.05)',
    border: '1px solid rgba(100, 255, 218, 0.3)',
    borderRadius: '5px',
    padding: '0.8rem',
    color: 'white',
    fontFamily: 'inherit',
    resize: 'vertical'
  },
  commentButton: {
    background: '#64ffda',
    color: '#0a192f',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  noProjects: {
    textAlign: 'center',
    color: '#8892b0',
    padding: '3rem'
  },
  projectDetail: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem'
  },
  backButton: {
    background: 'transparent',
    border: '1px solid #64ffda',
    color: '#64ffda',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '2rem'
  },
  detailHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem'
  },
  detailTitle: {
    fontSize: '2.5rem',
    color: '#64ffda',
    margin: 0
  },
  detailStatus: {
    fontSize: '1rem',
    padding: '0.5rem 1rem'
  },
  detailContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  detailSection: {
    background: 'rgba(2, 12, 27, 0.7)',
    padding: '1.5rem',
    borderRadius: '10px',
    border: '1px solid rgba(100, 255, 218, 0.1)'
  },
  downloadButton: {
    background: 'rgba(100, 255, 218, 0.1)',
    border: '2px solid #64ffda',
    color: '#64ffda',
    padding: '1rem 2rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  foldersSection: {
    marginTop: '1rem'
  }
};

export default ProjectsPage;
