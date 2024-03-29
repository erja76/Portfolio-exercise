import React from 'react';
import Navbar from './components/Navbar';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
      <div>
        <Navbar />
        <div style={{ padding: '20px' }}>
        <PersonalInfo />
        <Education />
        <Projects />
        <WorkExperience />
        </div>
        <footer style={{ backgroundColor: 'lightgray', padding: '10px', textAlign: 'center' }}>
          <strong>This is the end of that page and there is nothing more to it.</strong>
        </footer>
      </div>
  );
}

export default App;

