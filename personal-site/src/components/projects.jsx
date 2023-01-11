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
            />
        )
    })

    return (
        <div>
            <div className="head" style={
                { fontWeight: "bold" }
            }>Projects</div>

            <div className='container'>
                <div>
                    {cards}
                </div>
            </div >
        </div>
    );
}