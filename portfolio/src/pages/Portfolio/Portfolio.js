import React from 'react';
import projects from '../../projects.json';
import Card from '../../components/Card/Card';

function Portfolio() {
    return(
        <div className="background">
        {projects.map((index) => {
            return(
            <Card 
                title={index.ProjectTitle} 
                image={index.ImageLocation} 
                link={index.Link}
                key={index.ImageLocation} 
            />
            );
        })}
        </div>
    );
}

export default Portfolio;