import logo from '../resources/my-logo.png'
import './Footer.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SiGithub, SiInstagram, SiItchdotio, SiLinkedin } from 'react-icons/si';

const Footer = (props) => {
    return (
        <footer>
            <div className='footer-logo'>
                <img src={logo} alt="André Santos logo" />
            </div>

            <small className="tiny terciary-white">{props.children}</small>
            <ul>
                <li><a href='https://github.com/andredevsantos' target="_blank"><SiGithub/></a></li>
                <li><a href='https://www.linkedin.com/in/andrsantos/' target="_blank"><SiLinkedin/></a></li>
                <li><a href='https://theonedev.itch.io/' target="_blank"><SiItchdotio/></a></li>
                <li><a href='https://www.instagram.com/andresantoswo/' target="_blank"><SiInstagram/></a></li>
            </ul>
        </footer>
    )
}

export default Footer;
