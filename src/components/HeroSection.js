import './HeroSection.scss';
import ComputerVideo from '../video.mp4';
import AnimateOnScroll from './AnimateOnScroll';

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <div className='hero-text col secondary-white'>
                <p className='p-large'>Hey there, I'm</p>
                <h1 className='primary-white'>André Santos</h1>
                <p className='p-large'>I'm an artist turned <span><strong className='primary-blue'>Front-end Developer</strong></span> based in<strong> Lisbon, Portugal </strong> passionate about solving creative and technical problems.</p>
                <br />
                <p className='p-small'>👋 Currently looking for new opportunities</p>
            </div>
            <div className='computer col'>
                <AnimateOnScroll className='asd'/>
            </div>
        </div>
    )
}

export default HeroSection;