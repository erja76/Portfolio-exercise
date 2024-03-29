import React from "react";

const Education = () => {
    const educations = [
        {
            id: 1, 
            institution: 'Raahe High School',
            degree: 'Matriculation Examination',
            year: '1945-1948',
            description: 'Back in the day when I was still young and actually managed to learn something...'
        },
        {
            id: 2, 
            institution: 'Helsinki Open University',
            degree: 'Communication Studies',
            year: '1966',
            description: 'Back when communication studies were all the rage, yo.'
        },
        {
            id: 3, 
            institution: 'University of Sussex',
            degree: 'Cultural and Media Studies',
            year: '1980-1983',
            description: 'Only the best uni in the whole of UK.'
        },
        {
            id: 4, 
            institution: 'YSAO',
            degree: 'Vet Tech Studies',
            year: '1990-1992',
            description: 'Someone needs to know how to take care of animals, even though the actual work does not pay.'
        },
        {
            id: 5, 
            institution: 'HAMK',
            degree: 'Nerdy IT Studies',
            year: '2022-2025',
            description: 'Now who am I kidding with this?'
        }
    ];

    return (
        <div className="education container mt-5" id="education">
            <h2 className="mb-4">Educational Background</h2>
            <div className="row">
                {educations.map((education) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={education.id}>
                        <div className="card h-100 shadow">
                            <div className="card-header">
                                <h5 className="=card-title mb-0">{education.institution}</h5>
                            </div>
                            <div className="card-body">
                            <h6 className="=card-subtitle mb-2 text-muted">
                                {education.degree}</h6>                                                                                          
                            <p className="card-text">{education.description}</p>
                            </div>    
                        <div className="card-footer text-muted">       
                            <small>{education.year}</small>
                        </div>
                        </div>
                    </div>
            ))}
            </div>
        </div>
    );
};

export default Education;

