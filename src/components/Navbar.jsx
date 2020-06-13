import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const StyledNavbar = styled.nav`
background: whitesmoke;
display: flex;
justify-content: space-between;
position: sticky;
top: 0;
width: 100%;
& h1 {
    margin-left: 0.9rem;
}

& a {
    color: black;
    text-decoration: none;
}
& ul {
    list-style: none;
    display: flex;
    align-items:center;
    width: 60%;
    justify-content: space-evenly;
}
 & .fa {
     font-size: 1.2rem;
     margin-right: 0.4rem;
 }

 & span {
     font-weight: lighter;
 }
`

export default function Navbar() {
    return (
        <StyledNavbar>
        <h1>Rented</h1>
        <ul>
            <Link to="/">
                <li><FontAwesomeIcon icon={faHome} className="fa" /><span>Home</span></li>
            </Link>
            <Link to="/search">
                <li><FontAwesomeIcon icon={faSearch} className="fa"/><span>Search</span></li>
            </Link>
        </ul>
        </StyledNavbar>
    )
}