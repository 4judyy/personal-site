import React from 'react';
import ProjectPage from '../common/projectPage';
import { PROJECTS } from '../common/projectdata';

function EyeExplorePage() {
    const project = PROJECTS[0];

    return <ProjectPage project={project} />;
}

export default EyeExplorePage;
