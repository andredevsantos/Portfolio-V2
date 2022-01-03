import ProjectCard from './ProjectCard';
import './ProjectsSection.scss'
import SectionTitle from './SectionTitle';
import FadeInWhenVisible from './animation/FadeInWhenVisible';
import { motion } from "framer-motion";

const ProjectsSection = () => {
    return (
        <div className="projects-section section">
            <FadeInWhenVisible>
                <SectionTitle>Projects</SectionTitle>
            </FadeInWhenVisible>
            <ProjectCard />
            <ProjectCard alternate />
        </div>
    )
}

export default ProjectsSection;