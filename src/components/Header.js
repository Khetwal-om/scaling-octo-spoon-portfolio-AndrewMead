import React from 'react';
import { NavLink } from 'react-router-dom';




function Header() {
    return <header>hi there HomePage
        <NavLink to="/" exact activeClassName="is-active">HomePage</NavLink>
        <NavLink to="/portfolio" exact activeClassName="is-active">Portfolio</NavLink>
        <NavLink to="/contacts" exact activeClassName="is-avtive">Contacts</NavLink>
    </header>
}


export default Header
