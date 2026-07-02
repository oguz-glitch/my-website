import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.subtitle}>Learn more about who we are and what we do</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Who We Are</h2>
        <p style={styles.text}>
          We are a passionate team of developers dedicated to building modern web applications.
          Our journey began with a love for technology and a desire to create meaningful digital
          experiences for users around the world.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.text}>
          Our mission is to deliver high-quality web solutions using the latest technologies.
          We believe in continuous learning and improvement, which is why we are always exploring
          new tools and frameworks to enhance our skills.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Values</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Innovation – We embrace new ideas and technologies</li>
          <li style={styles.listItem}>Collaboration – We work together to achieve great results</li>
          <li style={styles.listItem}>Integrity – We are honest and transparent in everything we do</li>
          <li style={styles.listItem}>Quality – We strive for excellence in every project</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Team</h2>
        <div style={styles.teamContainer}>
          <div style={styles.card}>
            <div style={styles.avatar}>👨‍💻</div>
            <h3 style={styles.cardTitle}>John Smith</h3>
            <p style={styles.cardRole}>Full Stack Developer</p>
            <p style={styles.cardDesc}>Experienced in React, Node.js, and MongoDB.</p>
          </div>
          <div style={styles.card}>
            <div style={styles.avatar}>👩‍🎨</div>
            <h3 style={styles.cardTitle}>Jane Doe</h3>
            <p style={styles.cardRole}>UI/UX Designer</p>
            <p style={styles.cardDesc}>Passionate about creating beautiful user interfaces.</p>
          </div>
          <div style={styles.card}>
            <div style={styles.avatar}>👨‍💼</div>
            <h3 style={styles.cardTitle}>Bob Johnson</h3>
            <p style={styles.cardRole}>Project Manager</p>
            <p style={styles.cardDesc}>Ensures projects are delivered on time and within budget.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '60px 20px',
    borderRadius: '10px',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    opacity: 0.8,
  },
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    color: '#2c3e50',
    borderBottom: '2px solid #3498db',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#555',
  },
  list: {
    paddingLeft: '20px',
  },
  listItem: {
    fontSize: '1.1rem',
    lineHeight: '2',
    color: '#555',
  },
  teamContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#f8f9fa',
    border: '1px solid #dee2e6',
    borderRadius: '10px',
    padding: '25px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  avatar: {
    fontSize: '3rem',
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '1.2rem',
    color: '#2c3e50',
    marginBottom: '5px',
  },
  cardRole: {
    fontSize: '0.95rem',
    color: '#3498db',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  cardDesc: {
    fontSize: '0.9rem',
    color: '#666',
    lineHeight: '1.5',
  },
};

export default AboutUs;
