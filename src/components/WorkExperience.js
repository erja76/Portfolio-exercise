import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';

function WorkExperience() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (accordionIndex) => {
    setOpenAccordion(openAccordion === accordionIndex ? null : accordionIndex);
  };

  return (
    <div className="work-experience-container" id="work-experience">
      <h2 style={{ marginBottom: '30px' }}>Work Experience</h2>
      <div className="accordion-container">
        <Accordion style={{ borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', margin: 'auto', maxWidth: '600px' }}>
          <div>
            <button onClick={() => toggleAccordion(1)} style={{ padding: '5px' }}>Author</button>
            {openAccordion === 1 && (
              <div>
                <p style={{ marginTop: '10px' }}>Writer of stories, creator of characters, inventor of worlds.</p>
              </div>
            )}
          </div>
          <div>
            <button onClick={() => toggleAccordion(2)} style={{ padding: '5px' }}>Chef</button>
            {openAccordion === 2 && (
              <div>
                <p style={{ marginTop: '10px' }}>Creator of food, feeder of people.</p>
              </div>
            )}
          </div>
          <div>
            <button onClick={() => toggleAccordion(3)} style={{ padding: '5px' }}>Media Analyst</button>
            {openAccordion === 3 && (
              <div>
                <p style={{ marginTop: '10px' }}>Reader of newspapers, collector of articles.</p>
              </div>
            )}
          </div>
          <div>
            <button onClick={() => toggleAccordion(4)} style={{ padding: '5px' }}>Vet Tech</button>
            {openAccordion === 4 && (
              <div>
                <p style={{ marginTop: '10px' }}>Caretaker of animals. Feeder, cleaner, medicator, entertainer, machine operator.</p>
              </div>
            )}
          </div>
          <div>
            <button onClick={() => toggleAccordion(5)} style={{ padding: '5px' }}>Jockey</button>
            {openAccordion === 5 && (
              <div>
                <p style={{ marginTop: '10px', marginBottom: '10px' }}>Rider of horses.</p>
              </div>
            )}
          </div>
        </Accordion>
      </div>
    </div>
  );
}

export default WorkExperience;


