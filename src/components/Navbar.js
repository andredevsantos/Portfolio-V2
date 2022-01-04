import logo from '../resources/my-logo.png'
import './Navbar.scss'
import StickyNav from './StickyNavbar'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { CgMenuCheese } from 'react-icons/cg'
import { useState } from 'react'

const publicURL = process.env.PUBLIC_URL;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const CloseNav = () => {
        console.log("clicked")
        setIsOpen(false);
    }
    const ToggleNav = () => {
        console.log("clicked")
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className='flex-horizontal big-nav'>
                <StickyNav length='70'>
                    <div className="navbar-logo">
                        <AnchorLink href="#home">
                            <img src={logo} alt="André Santos logo" />
                        </AnchorLink>
                    </div>
                    <ul className="navbar-links">
                        <AnchorLink href='#projects'><li>Projects</li></AnchorLink>
                        <AnchorLink href='#about'><li>About me</li></AnchorLink>
                        <AnchorLink href='#footer'><li>Contact</li></AnchorLink>
                        <a href={publicURL + "/images/andresantosCV.pdf"} target='_blank' download="AndreSantosCV"><button className="navbar-button">Resume</button></a>
                    </ul>
                </StickyNav>
            </div>
            <div className='nav mobile-nav'>
                <div className={(!isOpen ? 'hiddenNav ' : '') + 'navbar-links-mobile'}>
                    <ul className="navbar-links">
                        <AnchorLink onClick={CloseNav} href='#projects'><li>Projects</li></AnchorLink>
                        <AnchorLink onClick={CloseNav} href='#about'><li>About me</li></AnchorLink>
                        <AnchorLink onClick={CloseNav} href='#footer'><li>Contact</li></AnchorLink>
                        <a href={publicURL + "/images/andresantosCV.pdf"} target='_blank' download="AndreSantosCV"><button className="navbar-button">Resume</button></a>
                        <div onClick={CloseNav} className='preventScroll'></div>
                    </ul>
                </div>
                <div className='flex-horizontal visible-nav'>
                    <div className="navbar-logo">
                        <AnchorLink onClick={CloseNav} href="#home">
                            <img src={logo} alt="André Santos logo" />
                        </AnchorLink>
                    </div>
                    <div>
                        <a onClick={ToggleNav}>
                            <CgMenuCheese />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;