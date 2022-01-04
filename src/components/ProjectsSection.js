import ProjectCard from './ProjectCard';
import './ProjectsSection.scss'
import SectionTitle from './SectionTitle';
import FadeInWhenVisible from './animation/FadeInWhenVisible';
import { motion } from "framer-motion";

const publicURL = process.env.PUBLIC_URL;

const projects = [
    {
        type: 'Client project',
        title: 'ARcade Sports',
        description: `Designed the website as well as separate sections the client requested.
        Created and implemented wordpress theme and components`,
        role: 'Developer, Designer',
        // tech: ['HTML', 'CSS', 'Wordpress', 'PHP'],
        link: 'arcadesports.io',
        image: publicURL + '/images/arcade.png'
    },
    {
        type: 'Client project',
        title: 'Sex on Wheels',
        description: `Sex on Wheels is an interactive documentary about sexuality.
        As you move on this “journey”, you are faced with questions you have to answer. 
        After your answers, you are presented a graphic representation of your position regarding the issues raised.`,
        role: 'Developer, Designer',
        link: 'sexonwheels.net',
        image: publicURL + '/images/sexonwheels.png'
    }
]

const ProjectsSection = () => {
    let projectsCreated = 0;
    let isAlternate;

    const ProjectCardCreator = (item) => {
        isAlternate = projectsCreated % 2 == 0;
        ++projectsCreated
        console.log(projectsCreated)
        return (<ProjectCard alternate={!isAlternate && true} project={item} />)
    }
    
    return (
        <div id="projects" className="projects-section section">
            <FadeInWhenVisible>
                <SectionTitle>Projects</SectionTitle>
            </FadeInWhenVisible>
            {projects.map(project => (
                ProjectCardCreator(project)
            ))}
        </div>
    )
}

export default ProjectsSection;