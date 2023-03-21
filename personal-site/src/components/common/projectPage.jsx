import React from 'react';
import AbtHeader from '../abtheader'
import './projectPage.css'

function ProjectPage(props) {
    const { coverImg, name, longd, stack, role, description } = props.project;

    return (

        <div>

            <AbtHeader />

            <div style={{ display: 'flex', justifyContent: 'center' }} >

                <div className='pageContent'>
                    <div className="subcontent">
                        <div >
                            <div className='titleProject'>{name}</div>
                            <div className='role'>{role}</div>
                        </div>

                        <div className='descriptionContent'>
                            <div>{description}</div>
                        </div>

                    </div>


                    <div className='tags'>
                        {stack.map((tech) => (
                            <div className='tech' key={tech}>{tech}</div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className='imgBox'>
                            <img className="projectsIMG" src={coverImg} alt={name} />

                        </div>
                    </div>

                    <div style={{ marginTop: '5%' }}>
                        <div className="extra">extra thoughts... </div>

                        <div className='thots'>
                            {longd}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
