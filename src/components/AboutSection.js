import SectionTitle from './SectionTitle';
import AboutImage from '../resources/aboutImg.jpg';
import './AboutSection.scss'
import { SiReact, SiJavascript, SiCsharp, SiUnity, SiFirebase, SiTailwindcss, SiFigma } from 'react-icons/si';
import { FaBootstrap, FaSass } from 'react-icons/fa';
import FadeInWhenVisible from './animation/FadeInWhenVisible';
import { motion } from "framer-motion";

const AboutSection = () => {
    return (

        <div id="about" className="about-section section">
            <FadeInWhenVisible>
                <SectionTitle>A little more about me</SectionTitle>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <div className='about-section-content flex-horizontal'>
                    {/* <FadeInWhenVisible> */}
                    <motion.div className="about-image">
                        <img src={AboutImage} alt="" srcset="" />
                    </motion.div>
                    <motion.div className="about-text">
                        <p>Hi! I’m André.</p>
                        <p>My interest for web development started as a teenager when I first looked up how to customize my social media profiles, leading me to learn HTML and CSS.</p>
                        <p>Fast forward to toady and I graduated with a degree in Game Development, worked in various different fields from graphics design to AR development.</p>
                        <p>Later on I started working I chose to work as 3D Artist while doing web development freelance on the side.</p>
                        <p>I’m now in the process of pursuing a career in Web Development and Design.</p>
                        <p>Some of the technologies I work with are:</p>
                        <div className='about-tech'>
                            <div>
                                <p><SiReact />React</p>
                                <p><SiJavascript />Javascript (ES6+)</p>
                                <p><SiCsharp />C#</p>
                                <p><FaSass />Sass</p>
                                <p><FaBootstrap />Bootstrap</p>
                                <p><SiTailwindcss />Tailwind</p>
                                <p><SiFirebase /> Firebase</p>
                                <p><SiUnity />Unity</p>
                                <p><SiFigma />Figma</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </FadeInWhenVisible>
        </div>
    )
}

export default AboutSection;