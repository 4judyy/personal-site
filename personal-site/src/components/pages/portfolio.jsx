import React from 'react';
import ProjectPage from '../common/projectPage';
import { PROJECTS } from '../common/projectdata';

function Portfolio() {
    const project = PROJECTS[1];

    return <ProjectPage project={project} />;
}

export default Portfolio;
