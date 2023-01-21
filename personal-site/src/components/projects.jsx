import Card from './common/card';
import './styling/projects.css'
import { PROJECTS } from './common/projectdata';


export default function Projects() {

    const cards = PROJECTS.map(project => {
        return (
            <Card
                img={project.coverImg}
                name={project.name}
                description={project.description}
                stack={project.stack}
                role={project.role}
                className='card'
            />
        )
    })

    return (
        <div className='body'>
            <div>
                {/* <div className="highlight" style={
                    { fontWeight: "600", marginBottom: '20px' }
                }>Projects</div> */}
                <div className='cards'>
                    {cards}
                </div>
            </div>
        </div>
    );
}