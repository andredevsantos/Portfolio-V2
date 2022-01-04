import './HeroSection.scss';
import AnimateOnScroll from './AnimateOnScroll';
import { animate, motion } from "framer-motion";

const motionContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: .1,
            staggerDirection: 1
        }
    }
}

const variants = {
    hidden: { opacity: 0, y: -10 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .4,
            animate: {
                from: 30
            }
        }
    }
}


const HeroSection = () => {
    return (
        <motion.div id='home' className='hero-section'
            variants={motionContainer}
            initial="hidden"
            animate="show">
            <motion.div className='hero-text col secondary-white'>
                <motion.p variants={variants} className='p-large'>Hi, I'm</motion.p>
                <motion.h1 variants={variants} className='primary-white'>André Santos</motion.h1>
                <motion.p variants={variants} className='p-large'>I'm an artist turned<span><strong className='primary-blue'> Front-end Developer </strong></span>
                    based in<strong> Lisbon, Portugal </strong> passionate about solving creative and technical problems.</motion.p>
                <br />
                <motion.p variants={variants} className='p-small'>👋 Currently looking for new opportunities</motion.p>
            </motion.div>
            <motion.div variants={variants} className='computer col'>
                <AnimateOnScroll className='asd' />
            </motion.div>
        </motion.div>
    )
}

export default HeroSection;