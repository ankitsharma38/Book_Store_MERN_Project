import React from 'react';

const Blog = () => {
  return (
    <div style={{ 
      display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh',
      flexDirection: 'column',textAlign: 'center' 
    }}>
      <h1 style={{ fontSize: '2rem', color: '#333' }}>Page Under Maintenance</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        We are currently working on this page to bring you an improved experience. <br />
        Please check back later!
      </p>
    </div>
  );
};

export default Blog;
