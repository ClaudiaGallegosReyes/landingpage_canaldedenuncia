import React from "react";

const Navbar = () => {

    return (
        <nav className='nav_navbarComponent'>
            <h1 className='h1_navbarTitle'>Asistente virtual laboral</h1>
            <ul className='ul_navbarItems'>
                <li className='li_navbarItem'><a className='a_navbarItem' href='#groupDescription'>¿quiénes somos?</a></li>
                <li className='li_navbarItem'><a className='a_navbarItem' href='#servicesDescription'>nuestros servicios</a></li>
                <li className='li_navbarItem'><a className='a_navbarItem' href='#subscription'>subscripción</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;