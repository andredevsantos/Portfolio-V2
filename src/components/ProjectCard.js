import './ProjectCard.scss'
import arcadeSrc from '../resources/arcade.png'
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
import FadeInWhenVisible from './animation/FadeInWhenVisible';
import { motion } from "framer-motion";


const ProjectCard = (props) => {
    return (
        <FadeInWhenVisible>
            <motion.div className={`project-card ${props.alternate && 'alternate'}`}>
                <div className='project-card-thumbnail'>
                    <img src={arcadeSrc} alt="" srcset="" />
                </div>
                <div className='project-card-text'>
                    <img src={arcadeSrc} alt="" srcset="" />
                    <small className="primary-blue p-small bold">Client project</small>
                    <h2>ARcade Sports</h2>
                    <p className='p-small'>Designed the website as well as seperate sections the client requested.<br />Created and implemented wordpress theme and components.</p>
                    <small><strong>Role:</strong> Developer, Designer</small>
                    <ul className="project-tech primary-blue p-small">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Wordpress</li>
                        <li>PHP</li>
                    </ul>
                    <IconContext.Provider value={{ color: "#bdbdbd" }}>
                        <small>arcadesports.io <FaExternalLinkAlt /></small>
                    </IconContext.Provider>
                </div>
            </motion.div>
        </FadeInWhenVisible>
    )
}

export default ProjectCard;