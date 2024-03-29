import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import './projects.css';
import book from '../assets/images/books2.jpg';
import food from '../assets/images/food2.jpg';
import cat from '../assets/images/cats2.jpg';

const Projects = () => {
    const projects = [
        {
            id: 1, 
            subject: 'Books',
            image: book,
            alt: 'image of thick books',
            year: '1952-1976',
            description: 'I have written many books in my lifetime. Too many to mention.'
        },
        {
            id: 2, 
            subject: 'Food',
            image: food,
            alt: 'image of yummy food',
            year: 'since forever',
            description: 'I am quite a proficient chef. It is a project that does not leave a mark, as the end product vanishes off the plates.'
        },
        {
            id: 3, 
            subject: 'Cats',
            image: cat,
            alt: 'image of cute cats',
            year: '1984-',
            description: 'In the current absence of a canine, my felines are my project. Project happy I call it.'
        },       
    ];

    return (
        <div className="projects container mt-5" id="projects">
            <h2 className="projects-heading mb-4">Projects</h2>
            <Carousel>
                {projects.map((project) => (
                    <Carousel.Item key={project.id}>
                        <Card className="project-card">
                            <Card.Img variant="top" src={project.image} alt={project.alt} />
                            <Card.Body>
                                <Card.Title>{project.subject}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="project-card-footer">{project.year}</Card.Footer>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Projects;

