import SectionTitle from './SectionTitle';
import AboutImage from '../resources/aboutImg.jpg';
import './AboutSection.scss'
import { SiReact, SiJavascript, SiCsharp, SiUnity, SiFirebase, SiTailwindcss, SiFigma} from 'react-icons/si';
import { FaBootstrap, FaSass } from 'react-icons/fa';

const AboutSection = () => {
    return (
        <div className="about-section section">
            <SectionTitle>A little more about me</SectionTitle>
            <div className='about-section-content flex-horizontal'>
                <div className="about-text">
                    <p>Hi! I’m André.</p>
                        <p>My interest for web development started as a teenager when I first looked up how to customize MyAnimeList profile, leading me to learn HTML and CSS.</p>
                        <p>I graduated with a degree in Game Development and started working as a 3D Artist.
                        I’m now looking to switch careers into Web Development.</p>
                        <p>Some of the technologies I work with are:</p>
                    <div className='about-tech'>
                        <div>
                            <p><SiReact />React</p>
                            <p><SiJavascript/>Javascript</p>
                            <p><SiCsharp/>C#</p>
                            <p><FaSass/>Sass</p>
                            <p><FaBootstrap/>Bootstrap</p>
                            <p><SiTailwindcss/>Tailwind</p>
                            <p><SiFirebase/> Firebase</p>
                            <p><SiUnity/>Unity</p>
                            <p><SiFigma/>Figma</p>
                        </div>
                    </div>
                </div>
                <div className="about-image">
                    <img src={AboutImage} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default AboutSection;