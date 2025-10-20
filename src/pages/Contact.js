// ContactUs.jsx
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      info: 'cmwanandimai10@gmail.com',
      link: 'mailto:cmwanandimai10@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      info: '+263771772005|+263716367564',
      link: 'tel:+263771772005'
    },
    {
      icon: '📍',
      title: 'Location',
      info: 'Harare, Zimbabwe',
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      info: 'linkedin.com.clever.mwanandimai',
      link: 'https.www.linkedin.com.clever.mwanandimai'
    }
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <section style={styles.header}>
          <h1 style={styles.title}>Get In Touch</h1>
          <p style={styles.subtitle}>
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </section>

        <div style={styles.content}>
          {/* Contact Form */}
          <section style={styles.formSection}>
            <h2 style={styles.formTitle}>Send Me a Message</h2>
            <form style={styles.form} onSubmit={handleSubmit}>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <button type="submit" style={styles.submitButton}>
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <section style={styles.infoSection}>
            <h2 style={styles.infoTitle}>Contact Information</h2>
            <p style={styles.infoDescription}>
              Feel free to reach out through any of these channels. I typically 
              respond within 24 hours.
            </p>
            
            <div style={styles.contactList}>
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link} 
                  style={styles.contactItem}
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <span style={styles.contactIcon}>{item.icon}</span>
                  <div style={styles.contactText}>
                    <h3 style={styles.contactTitle}>{item.title}</h3>
                    <p style={styles.contactInfo}>{item.info}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div style={styles.socialSection}>
              <h3 style={styles.socialTitle}>Follow Me</h3>
              <div style={styles.socialLinks}>
                <a href="#" style={styles.socialLink}>GitHub</a>
                <a href="#" style={styles.socialLink}>Twitter</a>
                <a href="https.www.linkedin.com.clever.mwanandimai" style={styles.socialLink}>LinkedIn</a>
                <a href="#" style={styles.socialLink}>Instagram</a>
              </div>
            </div>
          </section>
        </div>
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
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'start',
  },
  formSection: {
    background: 'white',
    padding: '3rem',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  formTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 2rem 0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333',
  },
  input: {
    padding: '1rem',
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    padding: '1rem',
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    fontSize: '1rem',
    resize: 'vertical',
    transition: 'border-color 0.3s ease',
    fontFamily: 'inherit',
  },
  submitButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '1.2rem 2rem',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    marginTop: '1rem',
  },
  infoSection: {
    background: 'white',
    padding: '3rem',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    height: 'fit-content',
  },
  infoTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 1rem 0',
  },
  infoDescription: {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.6',
    margin: '0 0 2rem 0',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '3rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.5rem',
    background: '#f8f9ff',
    borderRadius: '15px',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.3s ease',
  },
  contactIcon: {
    fontSize: '2rem',
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
  },
  contactText: {
    flex: '1',
  },
  contactTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#333',
    margin: '0 0 0.25rem 0',
  },
  contactInfo: {
    fontSize: '1rem',
    color: '#666',
    margin: '0',
  },
  socialSection: {
    borderTop: '2px solid #f0f0f0',
    paddingTop: '2rem',
  },
  socialTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#333',
    margin: '0 0 1rem 0',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  socialLink: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'transform 0.3s ease',
  },
};

// Hover effects
Object.assign(styles.input, {
  ':focus': {
    outline: 'none',
    borderColor: '#667eea',
  },
});

Object.assign(styles.textarea, {
  ':focus': {
    outline: 'none',
    borderColor: '#667eea',
  },
});

Object.assign(styles.submitButton, {
  ':hover': {
    transform: 'translateY(-2px)',
  },
});

Object.assign(styles.contactItem, {
  ':hover': {
    background: '#667eea',
    color: 'white',
    transform: 'translateX(10px)',
  },
});

Object.assign(styles.socialLink, {
  ':hover': {
    transform: 'translateY(-2px)',
  },
});

export default ContactUs;