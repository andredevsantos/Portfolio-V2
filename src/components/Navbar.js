import logo from '../resources/my-logo.png'
import './Navbar.scss'
import StickyNav from './StickyNavbar'

const Navbar = () => {
    return (
        <div className='flex-horizontal'>
            <StickyNav length='70'>
                <div className="navbar-logo">
                    <img src={logo} alt="André Santos logo" />
                </div>
                <ul className="navbar-links">
                    <li>Projects</li>
                    <li>About me</li>
                    <li>Contact</li>
                    <button className="navbar-button">Resume</button>
                </ul>
            </StickyNav>
        </div>
    )
}

export default Navbar;