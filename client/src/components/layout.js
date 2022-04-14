import React from 'react'
import { NavLink } from 'react-router-dom'

const containerStyles = {
    margin: 'auto',
    maxWidth: '800px',
    fontFamily: 'sans-serif'
}

const headerStyles = {
    color: 'brown',
    fontSize: '2em',
    marginBottom: '1em',
    padding: '0.3em',
    borderBottom: '1px solid brown',
}

const navContainerStyles = {
    borderBottom: '1px solid brown',
    marginTop: '1em'
}

const navLinksStyles = {
    display: 'flex',
    listStyle: 'none',
    paddingLeft: 0,
    margin: '0.5em'
}

const navItemStyles = {
    paddingRight: '2rem'
}

const navTextStyles = {
    color: 'brown',
    textDecoration: 'none'
}

const mainContainerStyles = {
    padding: '0 0.8em',
    color: 'brown'
}

function Layout({ pageTitle, children }) {
    return (
        <div style={containerStyles}>
            <title>{pageTitle} | Employee Management System</title>
            <nav style={navContainerStyles}>
                <ul style={navLinksStyles}>
                    <li style={navItemStyles}>
                        <NavLink to="/" style={navTextStyles}>Home</NavLink>
                    </li>
                    <li style={navItemStyles}>
                        <NavLink to="/employees" style={navTextStyles}>Employees</NavLink>
                    </li>
                    <li style={navItemStyles}>
                        <NavLink to="/payroll-system" style={navTextStyles}>Payroll System</NavLink>
                    </li>
                </ul>
            </nav>
            <header style={headerStyles}>{pageTitle}</header>
            <main style={mainContainerStyles}>
                {children}
            </main>
        </div>
    )
}

export default Layout