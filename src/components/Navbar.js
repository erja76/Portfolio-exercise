import React from 'react';

function Navbar() {
  return (
    <nav style={{ padding: '10px', textAlign: 'center' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
      <li style={{ display: 'inline', marginRight: '10px' }}><a href="#personal-info">Personal Info</a></li>
        <li style={{ display: 'inline', marginRight: '10px' }}><a href="#education">Education</a></li>
        <li style={{ display: 'inline', marginRight: '10px' }}><a href="#projects">Projects</a></li>
        <li style={{ display: 'inline', marginRight: '10px' }}><a href="#work-experience">Work Experience</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

