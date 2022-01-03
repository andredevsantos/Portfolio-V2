import React, { useState, useEffect } from 'react'

const StickyNav = (props) => {
    const [nav, setNav] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    });

    const handleScroll = () => {
        window.pageYOffset > props.length ? !nav && setNav(true) : nav && setNav(false)
    }

    return (
            <div className={`nav ${nav && 'scrollNav'}`}>
                {props.children}
            </div>
    )
}

export default StickyNav;