import React from 'react';
import headerImage from './header-img.png'; // Adjust the path as needed
 
function Header() {
  return (
    <header style={headerStyle}>
      <img src={headerImage} alt="Header" style={imageStyle} />
    </header>
  );
}
 
const headerStyle = {
  position: 'relative',
  width: '100%',
  height: '65px', // Adjust the height as needed
  backgroundColor: 'black',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '110px', // Adjust to provide space for the image
};
 
const imageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '250px', // Adjust the width as needed
  height: 'auto',
};
 
// const titleStyle = {
//   color: 'white',
//   margin: 0,
// };
 
export default Header;
