import logo from '../resources/my-logo.png'
import './Navbar.scss'
import StickyNav from './StickyNavbar'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
    return (
        <div className='flex-horizontal'>
            <StickyNav length='70'>
                <div className="navbar-logo">
                    <img src={logo} alt="André Santos logo" />
                </div>
                <ul className="navbar-links">
                    <AnchorLink href='#projects'><li>Projects</li></AnchorLink>
                    <AnchorLink href='#about'><li>About me</li></AnchorLink>
                    <AnchorLink href='#projects'><li>Contact</li></AnchorLink>
                    <button className="navbar-button">Resume</button>
                </ul>
            </StickyNav>
        </div>
    )
}

export default Navbar;