// ResumePage.jsx
import React from 'react';

const ResumePage = () => {
  // PDF file path in public/assets folder (must be in public for browser access)
  const pdfFile = "/assets/CLEVER_MWANANDIMAI_CV.pdf";
  
  const personalInfo = {
    name: "Clever Mwanandimai",
    title: "Senior Full Stack Developer",
    email: "cmwanandimai10@gmail.com",
    phone: "+263771772005 | +263716367564",
    location: "Harare, Zimbabwe",
    linkedin: "linkedin.com/in/clever-mwanandimai",
    github: "github.com/clever-mwanandimai",
    portfolio: "clevermwanandimai.dev"
  };

  const downloadPDF = () => {
    // Create a temporary link to trigger download from public/assets
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'CLEVER_MWANANDIMAI_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const viewPDF = () => {
    // Open PDF in new tab from public/assets
    window.open(pdfFile, '_blank');
  };

  // Function to get PDF URL with page parameter for first page only
  const getFirstPagePDF = () => {
    // For most PDF viewers, you can use #page=1 to show first page
    return `${pdfFile}#page=1&view=FitV`;
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header with Download Buttons */}
        <section style={styles.header}>
          <div style={styles.headerContent}>
            <h1 style={styles.pageTitle}>My Resume</h1>
            <p style={styles.pageSubtitle}>
              Professional CV and portfolio overview
            </p>
          </div>
          <div style={styles.downloadButtons}>
            <button style={styles.viewButton} onClick={viewPDF}>
              👁️ View Full CV
            </button>
            <button style={styles.pdfButton} onClick={downloadPDF}>
              📄 Download CV
            </button>
            <button style={styles.printButton} onClick={() => window.print()}>
              🖨️ Print
            </button>
          </div>
        </section>

        {/* PDF Preview Section */}
        <section style={styles.previewSection}>
          <div style={styles.previewContainer}>
            <h2 style={styles.previewTitle}>Curriculum Vitae</h2>
            <p style={styles.previewSubtitle}>
              Preview (First Page) - Click "View Full CV" to see complete document
            </p>
            
            {/* PDF Preview Container */}
            <div style={styles.pdfPreviewContainer}>
              <div style={styles.pdfViewer}>
                <iframe
                  src={getFirstPagePDF()}
                  title="Resume PDF Preview - First Page"
                  style={styles.pdfIframe}
                  allowFullScreen
                >
                  <div style={styles.fallbackContent}>
                    <div style={styles.fallbackIcon}>📄</div>
                    <h3 style={styles.fallbackTitle}>PDF Preview Not Available</h3>
                    <p style={styles.fallbackText}>
                      Your browser doesn't support PDF preview. 
                      Please download the PDF to view it.
                    </p>
                    <button style={styles.fallbackButton} onClick={downloadPDF}>
                      Download CV PDF
                    </button>
                  </div>
                </iframe>
              </div>
              
              {/* PDF Preview Info */}
              <div style={styles.pdfInfo}>
                <div style={styles.pdfInfoItem}>
                  <span style={styles.infoIcon}>📄</span>
                  <span>PDF Document</span>
                </div>
                <div style={styles.pdfInfoItem}>
                  <span style={styles.infoIcon}>👁️</span>
                  <span>First Page Preview</span>
                </div>
                <div style={styles.pdfInfoItem}>
                  <span style={styles.infoIcon}>⚡</span>
                  <span>Fast Loading</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={styles.quickActions}>
              <button style={styles.primaryAction} onClick={viewPDF}>
                <span style={styles.actionIcon}>👁️</span>
                <span style={styles.actionText}>View Full CV</span>
                <span style={styles.actionSubtext}>Open complete document in new tab</span>
              </button>
              <button style={styles.secondaryAction} onClick={downloadPDF}>
                <span style={styles.actionIcon}>📥</span>
                <span style={styles.actionText}>Download PDF</span>
                <span style={styles.actionSubtext}>Save to your device</span>
              </button>
              <button style={styles.tertiaryAction} onClick={() => window.print()}>
                <span style={styles.actionIcon}>🖨️</span>
                <span style={styles.actionText}>Print CV</span>
                <span style={styles.actionSubtext}>Print-friendly version</span>
              </button>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section style={styles.contactSection}>
          <h2 style={styles.contactTitle}>Contact Information</h2>
          <div style={styles.contactGrid}>
            <div style={styles.contactCard}>
              <span style={styles.contactIcon}>📧</span>
              <div style={styles.contactDetails}>
                <h3 style={styles.contactType}>Email</h3>
                <p style={styles.contactValue}>{personalInfo.email}</p>
              </div>
            </div>
            <div style={styles.contactCard}>
              <span style={styles.contactIcon}>📱</span>
              <div style={styles.contactDetails}>
                <h3 style={styles.contactType}>Phone</h3>
                <p style={styles.contactValue}>{personalInfo.phone}</p>
              </div>
            </div>
            <div style={styles.contactCard}>
              <span style={styles.contactIcon}>📍</span>
              <div style={styles.contactDetails}>
                <h3 style={styles.contactType}>Location</h3>
                <p style={styles.contactValue}>{personalInfo.location}</p>
              </div>
            </div>
            <div style={styles.contactCard}>
              <span style={styles.contactIcon}>💼</span>
              <div style={styles.contactDetails}>
                <h3 style={styles.contactType}>LinkedIn</h3>
                <p style={styles.contactValue}>{personalInfo.linkedin}</p>
              </div>
            </div>
            <div style={styles.contactCard}>
              <span style={styles.contactIcon}>🐙</span>
              <div style={styles.contactDetails}>
                <h3 style={styles.contactType}>GitHub</h3>
                <p style={styles.contactValue}>{personalInfo.github}</p>
              </div>
            </div>
            <div style={styles.contactCard}>
              <span style={styles.contactIcon}>🌐</span>
              <div style={styles.contactDetails}>
                <h3 style={styles.contactType}>Portfolio</h3>
                <p style={styles.contactValue}>{personalInfo.portfolio}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Download Section */}
        <section style={styles.bottomDownload}>
          <h2 style={styles.bottomTitle}>Get My Complete CV</h2>
          <p style={styles.bottomText}>
            Download or view the full version of my curriculum vitae
          </p>
          <div style={styles.bottomButtons}>
            <button style={styles.bottomViewButton} onClick={viewPDF}>
              <span style={styles.buttonIcon}>👁️</span>
              <span>View Full CV</span>
              <span style={styles.buttonSubtext}>Complete document</span>
            </button>
            <button style={styles.bottomPdfButton} onClick={downloadPDF}>
              <span style={styles.buttonIcon}>📥</span>
              <span>Download PDF</span>
              <span style={styles.buttonSubtext}>Save to device</span>
            </button>
            <button style={styles.bottomPrintButton} onClick={() => window.print()}>
              <span style={styles.buttonIcon}>🖨️</span>
              <span>Print CV</span>
              <span style={styles.buttonSubtext}>Print-friendly</span>
            </button>
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
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    marginBottom: '2rem',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  headerContent: {
    flex: '1',
  },
  pageTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: '0 0 0.5rem 0',
  },
  pageSubtitle: {
    fontSize: '1.1rem',
    color: '#666',
    margin: '0',
  },
  downloadButtons: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  viewButton: {
    background: '#17a2b8',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  pdfButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  printButton: {
    background: '#6c757d',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  previewSection: {
    background: 'white',
    borderRadius: '15px',
    padding: '3rem',
    marginBottom: '3rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  previewContainer: {
    textAlign: 'center',
  },
  previewTitle: {
    fontSize: '2.2rem',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 1rem 0',
  },
  previewSubtitle: {
    fontSize: '1.2rem',
    color: '#666',
    margin: '0 0 3rem 0',
  },
  pdfPreviewContainer: {
    background: '#f8f9fa',
    borderRadius: '15px',
    padding: '2rem',
    marginBottom: '2rem',
    border: '2px dashed #dee2e6',
  },
  pdfViewer: {
    width: '100%',
    height: '700px',
    background: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    border: '1px solid #e0e0e0',
    marginBottom: '1.5rem',
  },
  pdfIframe: {
    border: 'none',
    width: '100%',
    height: '100%',
  },
  pdfInfo: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  pdfInfoItem: {
    background: 'rgba(102, 126, 234, 0.1)',
    color: '#667eea',
    padding: '0.75rem 1.5rem',
    borderRadius: '25px',
    fontSize: '0.9rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: '1px solid rgba(102, 126, 234, 0.2)',
  },
  infoIcon: {
    fontSize: '1rem',
  },
  fallbackContent: {
    padding: '3rem 2rem',
    textAlign: 'center',
    background: '#f8f9fa',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackIcon: {
    fontSize: '4rem',
    marginBottom: '1rem',
  },
  fallbackTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 1rem 0',
  },
  fallbackText: {
    fontSize: '1.1rem',
    color: '#666',
    margin: '0 0 2rem 0',
    maxWidth: '400px',
    lineHeight: '1.5',
  },
  fallbackButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  quickActions: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  primaryAction: {
    background: 'linear-gradient(135deg, #17a2b8 0%, #138496 100%)',
    color: 'white',
    border: 'none',
    padding: '1.5rem 1rem',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  secondaryAction: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '1.5rem 1rem',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  tertiaryAction: {
    background: '#6c757d',
    color: 'white',
    border: 'none',
    padding: '1.5rem 1rem',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  actionIcon: {
    fontSize: '2.5rem',
  },
  actionText: {
    fontSize: '1.2rem',
    fontWeight: '600',
  },
  actionSubtext: {
    fontSize: '0.85rem',
    opacity: '0.9',
    fontWeight: '400',
  },
  contactSection: {
    background: 'white',
    borderRadius: '15px',
    padding: '3rem',
    marginBottom: '3rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  contactTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 2rem 0',
    textAlign: 'center',
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  contactCard: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  contactIcon: {
    fontSize: '2rem',
    width: '60px',
    height: '60px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
  },
  contactDetails: {
    flex: '1',
  },
  contactType: {
    fontSize: '1rem',
    fontWeight: '600',
    margin: '0 0 0.5rem 0',
    opacity: '0.9',
  },
  contactValue: {
    fontSize: '1.1rem',
    fontWeight: '700',
    margin: '0',
  },
  bottomDownload: {
    background: 'white',
    padding: '3rem',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  bottomTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 1rem 0',
  },
  bottomText: {
    fontSize: '1.1rem',
    color: '#666',
    margin: '0 0 2rem 0',
  },
  bottomButtons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  bottomViewButton: {
    background: '#17a2b8',
    color: 'white',
    border: 'none',
    padding: '1.5rem 1rem',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  bottomPdfButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '1.5rem 1rem',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  bottomPrintButton: {
    background: '#6c757d',
    color: 'white',
    border: 'none',
    padding: '1.5rem 1rem',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  buttonIcon: {
    fontSize: '2rem',
  },
  buttonSubtext: {
    fontSize: '0.8rem',
    opacity: '0.9',
    fontWeight: '400',
  },
};

// Hover effects
Object.assign(styles.viewButton, {
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
});

Object.assign(styles.pdfButton, {
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
});

Object.assign(styles.printButton, {
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
});

Object.assign(styles.primaryAction, {
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
  },
});

Object.assign(styles.secondaryAction, {
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
  },
});

Object.assign(styles.tertiaryAction, {
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
  },
});

Object.assign(styles.contactCard, {
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
  },
});

Object.assign(styles.fallbackButton, {
  ':hover': {
    transform: 'translateY(-2px)',
  },
});

Object.assign(styles.bottomViewButton, {
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
  },
});

Object.assign(styles.bottomPdfButton, {
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
  },
});

Object.assign(styles.bottomPrintButton, {
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
  },
});

export default ResumePage;