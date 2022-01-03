import ProjectCard from './ProjectCard';
import './ProjectsSection.scss'
import SectionTitle from './SectionTitle';

const ProjectsSection = () => {
    return (
        <div className="projects-section section">
            <SectionTitle>Projects</SectionTitle>
            <ProjectCard />
            <ProjectCard alternate/>
        </div>
    )
}

export default ProjectsSection;