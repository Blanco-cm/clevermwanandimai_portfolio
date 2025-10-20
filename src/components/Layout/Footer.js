// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>MyBlog</h3>
            <p style={styles.footerDescription}>
              Sharing knowledge, insights, and stories about technology, 
              development, and creative thinking.
            </p>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialLink}>Twitter</a>
              <a href="https://github.com/clever-mwanandimai" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>GitHub</a>
              <a href="https://www.linkedin.com/in/clever-mwanandimai" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>LinkedIn</a>
            </div>
          </div>
          
          <div style={styles.footerSection}>
            <h4 style={styles.footerSubtitle}>Quick Links</h4>
            <ul style={styles.footerLinks}>
              <li><a href="/" style={styles.footerLink}>Home</a></li>
              <li><a href="/blog" style={styles.footerLink}>Blog</a></li>
              <li><a href="/about" style={styles.footerLink}>About</a></li>
              <li><a href="/contact" style={styles.footerLink}>Contact</a></li>
            </ul>
          </div>
          
          <div style={styles.footerSection}>
            <h4 style={styles.footerSubtitle}>Categories</h4>
            <ul style={styles.footerLinks}>
              <li><a href="/blog/react" style={styles.footerLink}>React</a></li>
              <li><a href="/blog/javascript" style={styles.footerLink}>JavaScript</a></li>
              <li><a href="/blog/webdev" style={styles.footerLink}>Web Development</a></li>
              <li><a href="/blog/tutorials" style={styles.footerLink}>Tutorials</a></li>
            </ul>
          </div>
          
          <div style={styles.footerSection}>
            <h4 style={styles.footerSubtitle}>Newsletter</h4>
            <p style={styles.newsletterText}>Subscribe to get the latest posts and updates</p>
            <div style={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={styles.newsletterInput}
              />
              <button style={styles.newsletterBtn}>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div style={styles.footerBottom}>
          <p style={styles.copyright}>&copy; 2024 MyBlog. All rights reserved.</p>
          <div style={styles.footerLegal}>
            <a href="/privacy" style={styles.legalLink}>Privacy Policy</a>
            <a href="/terms" style={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '3rem 0 1rem',
    marginTop: 'auto',
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
    gap: '2rem',
    marginBottom: '2rem',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  footerTitle: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    color: '#fff',
  },
  footerSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: '#fff',
  },
  footerDescription: {
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    opacity: '0.9',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
  },
  socialLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
  },
  footerLinks: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  footerLink: {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    display: 'block',
    marginBottom: '0.5rem',
  },
  newsletterText: {
    marginBottom: '1rem',
    opacity: '0.9',
  },
  newsletterForm: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '1rem',
  },
  newsletterInput: {
    flex: '1',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '5px',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  newsletterBtn: {
    padding: '0.75rem 1.5rem',
    background: 'white',
    color: '#667eea',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'transform 0.3s ease',
  },
  footerBottom: {
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    paddingTop: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  copyright: {
    margin: '0',
  },
  footerLegal: {
    display: 'flex',
    gap: '2rem',
  },
  legalLink: {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
};

// Add hover effects with JavaScript
Object.assign(styles.socialLink, {
  ':hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)',
  },
});

Object.assign(styles.footerLink, {
  ':hover': {
    color: 'white',
  },
});

Object.assign(styles.legalLink, {
  ':hover': {
    color: 'white',
  },
});

Object.assign(styles.newsletterBtn, {
  ':hover': {
    transform: 'translateY(-2px)',
  },
});

export default Footer;