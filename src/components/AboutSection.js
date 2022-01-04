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
                        <p className='primary-blue bold'>Hi! I’m André.</p>
                        <p>My interest in web development started as a teenager when I first looked up how to customize my social media profiles, which led to learning HTML and CSS.</p>
                        <p>Fast-forward a few years, and I've graduated with a degree in Game Development and worked in different fields from Graphic Design to AR development. For the last two years, I worked as a 3D Artist while continuing web development on the side.</p>
                        <p className='bold primary-blue'>I'm now in the process of pursuing a career in Web Development and Design.</p>
                        <p>Some of the technologies I work with are:</p>
                        <div className='about-tech'>
                            <div>
                                <p><SiReact />React</p>
                                <p><SiJavascript />Javascript (ES6+)</p>
                                <p><FaSass />Sass</p>
                                <p><FaBootstrap />Bootstrap</p>
                                <p><SiTailwindcss />Tailwind</p>
                                <p><SiFirebase /> Firebase</p>
                                <p><SiFigma />Figma</p>
                                <p><SiUnity />Unity</p>
                                <p><SiCsharp />C#</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </FadeInWhenVisible>
        </div>
    )
}

export default AboutSection;