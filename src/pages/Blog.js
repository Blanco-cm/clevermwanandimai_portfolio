// BlogPage.jsx
import React, { useState } from 'react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
      category: "react",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=React+Hooks",
      author: "Jane Doe"
    },
    {
      id: 2,
      title: "Modern JavaScript ES6+ Features",
      excerpt: "Explore the powerful features introduced in ES6 and beyond that every developer should know.",
      category: "javascript",
      date: "2024-01-12",
      readTime: "8 min read",
      image: "https://via.placeholder.com/400x250/f093fb/ffffff?text=JavaScript+ES6",
      author: "John Smith"
    },
    {
      id: 3,
      title: "Building Responsive Web Design",
      excerpt: "Master the art of creating websites that look great on all devices with modern CSS techniques.",
      category: "webdev",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "https://via.placeholder.com/400x250/4facfe/ffffff?text=Web+Design",
      author: "Sarah Wilson"
    },
    {
      id: 4,
      title: "React Performance Optimization",
      excerpt: "Discover techniques to optimize your React applications for better performance and user experience.",
      category: "react",
      date: "2024-01-08",
      readTime: "7 min read",
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=React+Performance",
      author: "Mike Johnson"
    },
    {
      id: 5,
      title: "CSS Grid vs Flexbox",
      excerpt: "Understand when to use CSS Grid and when to use Flexbox for your layout needs.",
      category: "webdev",
      date: "2024-01-05",
      readTime: "4 min read",
      image: "https://via.placeholder.com/400x250/4facfe/ffffff?text=CSS+Grid+Flexbox",
      author: "Emily Brown"
    },
    {
      id: 6,
      title: "JavaScript Async/Await Patterns",
      excerpt: "Learn modern asynchronous programming patterns in JavaScript with async/await.",
      category: "javascript",
      date: "2024-01-03",
      readTime: "6 min read",
      image: "https://via.placeholder.com/400x250/f093fb/ffffff?text=Async+Await",
      author: "David Lee"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'react', name: 'React' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'webdev', name: 'Web Development' },
    { id: 'tutorials', name: 'Tutorials' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div style={styles.blogPage}>
      <div style={styles.blogContainer}>
        {/* Hero Section */}
        <section style={styles.blogHero}>
          <h1 style={styles.blogHeroTitle}>Blog & Articles</h1>
          <p style={styles.blogHeroSubtitle}>
            Discover the latest insights, tutorials, and stories about web development, 
            programming, and technology.
          </p>
        </section>

        {/* Categories Filter */}
        <section style={styles.categoriesSection}>
          <div style={styles.categoriesContainer}>
            {categories.map(category => (
              <button
                key={category.id}
                style={{
                  ...styles.categoryBtn,
                  ...(selectedCategory === category.id ? styles.categoryBtnActive : {})
                }}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section style={styles.blogPosts}>
          <div style={styles.postsGrid}>
            {filteredPosts.map(post => (
              <article key={post.id} style={styles.postCard}>
                <div style={styles.postImage}>
                  <img src={post.image} alt={post.title} style={styles.postImageImg} />
                  <div style={styles.postCategory}>{post.category}</div>
                </div>
                <div style={styles.postContent}>
                  <div style={styles.postMeta}>
                    <span style={styles.postDate}>{post.date}</span>
                    <span style={styles.postReadTime}>{post.readTime}</span>
                  </div>
                  <h2 style={styles.postTitle}>{post.title}</h2>
                  <p style={styles.postExcerpt}>{post.excerpt}</p>
                  <div style={styles.postFooter}>
                    <span style={styles.postAuthor}>By {post.author}</span>
                    <button style={styles.readMoreBtn}>Read More</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Load More Button */}
        <section style={styles.loadMoreSection}>
          <button style={styles.loadMoreBtn}>Load More Articles</button>
        </section>
      </div>
    </div>
  );
};

const styles = {
  blogPage: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  },
  blogContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  blogHero: {
    textAlign: 'center',
    padding: '4rem 0',
    background: 'white',
    borderRadius: '15px',
    marginBottom: '2rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  blogHeroTitle: {
    fontSize: '3rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem',
  },
  blogHeroSubtitle: {
    fontSize: '1.2rem',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  categoriesSection: {
    marginBottom: '3rem',
  },
  categoriesContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  categoryBtn: {
    padding: '0.75rem 1.5rem',
    border: '2px solid #667eea',
    background: 'transparent',
    color: '#667eea',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
  categoryBtnActive: {
    background: '#667eea',
    color: 'white',
  },
  blogPosts: {
    marginBottom: '3rem',
  },
  postsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
  },
  postCard: {
    background: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  postImage: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden',
  },
  postImageImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  postCategory: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    background: '#667eea',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  postContent: {
    padding: '1.5rem',
  },
  postMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    fontSize: '0.9rem',
    color: '#666',
  },
  postDate: {
    fontWeight: '600',
  },
  postReadTime: {
    background: '#f0f4ff',
    color: '#667eea',
    padding: '0.25rem 0.5rem',
    borderRadius: '10px',
    fontWeight: '600',
  },
  postTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#333',
    lineHeight: '1.4',
  },
  postExcerpt: {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  postFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postAuthor: {
    fontWeight: '600',
    color: '#333',
  },
  readMoreBtn: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'transform 0.3s ease',
  },
  loadMoreSection: {
    textAlign: 'center',
    padding: '2rem 0',
  },
  loadMoreBtn: {
    background: 'white',
    color: '#667eea',
    border: '2px solid #667eea',
    padding: '1rem 2rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
  },
};

// Add hover effects
Object.assign(styles.categoryBtn, {
  ':hover': {
    background: '#667eea',
    color: 'white',
    transform: 'translateY(-2px)',
  },
});

Object.assign(styles.postCard, {
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
  },
});

Object.assign(styles.postImageImg, {
  ':hover': {
    transform: 'scale(1.05)',
  },
});

Object.assign(styles.readMoreBtn, {
  ':hover': {
    transform: 'translateX(5px)',
  },
});

Object.assign(styles.loadMoreBtn, {
  ':hover': {
    background: '#667eea',
    color: 'white',
    transform: 'translateY(-2px)',
  },
});

export default BlogPage;