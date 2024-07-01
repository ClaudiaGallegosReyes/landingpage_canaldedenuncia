import React from "react";

const Navbar = ({ whatsappUrl }) => {

    return (
        <nav className='nav_navbarComponent'>
            <h1 className='h1_navbarTitle'>WhyWa</h1>
            <ul className='ul_navbarItems'>
                <li className='li_navbarItem'><a className='a_navbarItem' href='#groupDescription'>¿quiénes somos?</a></li>
                <li className='li_navbarItem'><a className='a_navbarItem' href='#servicesDescription'>nuestros servicios</a></li>
                <li className='li_navbarItem'><a className='a_navbarItem' href={whatsappUrl}>contáctanos</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;