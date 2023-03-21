import React from 'react';
import ProjectPage from '../common/projectPage';
import { PROJECTS } from '../common/projectdata';

function StudySprint() {
    const project = PROJECTS[2];

    return <ProjectPage project={project} />;
}

export default StudySprint;
