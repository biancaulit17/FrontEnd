import React from 'react';
 
const footerStyle = {
  marginTop: 'auto',
  backgroundColor: 'black', // Optional: Add background color
  padding: 'px', // Optional: Add padding
  textAlign: 'center', // Optional: Center the text
  width: '100%',
  color: 'white' // Optional: Add text color
};
 
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  Height: '100vh'
};
 
const Footer = () => {
  return (
    <div style={containerStyle}>
      <footer style={footerStyle}>
        <p>© 2024 KopeeTearia. All rights reserved.</p>
      </footer>
    </div>
  );
};
 
export default Footer;