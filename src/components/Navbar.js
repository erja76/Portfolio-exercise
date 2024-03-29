import React from 'react';

function Navbar() {
  return (
    <nav style={{ backgroundColor: 'lightgray', padding: '10px', textAlign: 'center' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
      <li style={{ display: 'inline', marginRight: '25px' }}><a href="#personal-info"><strong>Personal Info</strong></a></li>
        <li style={{ display: 'inline', marginRight: '25px' }}><a href="#education"><strong>Education</strong></a></li>
        <li style={{ display: 'inline', marginRight: '25px' }}><a href="#projects"><strong>Projects</strong></a></li>
        <li style={{ display: 'inline', marginRight: '25px' }}><a href="#work-experience"><strong>Work Experience</strong></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

