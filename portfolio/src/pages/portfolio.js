import React from 'react';
import projects from '../projects.json';

function Portfolio() {
    return(
        <>
        <h1>{projects[0].ProjectTitle}</h1>
        <h2>{projects[0].Link}</h2>
        <h3><img src={projects[0].ImageLocation} alt="test" /></h3>
        </>
    );
}

export default Portfolio;