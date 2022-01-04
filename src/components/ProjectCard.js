import './ProjectCard.scss'
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
import FadeInWhenVisible from './animation/FadeInWhenVisible';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from 'react';

const ProjectCard = (props) => {
    return (
        <FadeInWhenVisible>
            <div className={`project-card ${props.alternate && 'alternate'}`}>
                <div className='project-card-thumbnail'>
                    <img src={props.project.image} alt="" srcset="" />
                </div>
                <div className='project-card-text'>
                    <img src={props.project.image} alt="" />
                    <small className="primary-blue p-small bold">{props.project.type}</small>
                    <h2>{props.project.title}</h2>
                    <p className='p-small'>{props.project.description}</p>
                    <small><strong>Role:</strong> {props.project.role}</small>
                    <ul className="project-tech primary-blue p-small">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Wordpress</li>
                        <li>PHP</li>
                    </ul>
                    <IconContext.Provider value={{ color: "#bdbdbd" }}>
                        <small><a href={"http://" + props.project.link} target="_blank">{props.project.link} <FaExternalLinkAlt /></a></small>
                    </IconContext.Provider>
                </div>
            </div>
        </FadeInWhenVisible>
    )
}

export default ProjectCard;