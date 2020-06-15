import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {StyledNavbar} from './styles/StyledNavbar'
import {LoginConsumer} from '../loginContext'

export default function Navbar() {
    const [login, setLogin] = useContext(LoginConsumer)
    const renderLogInOrOut = () => {
        if (login) {
            return (
                <>
                <Link to="/profile">
                    <li><FontAwesomeIcon icon={faUser} className="fa"/><span>Profile</span></li>
                </Link>
                <li onClick={() => setLogin(false)}><FontAwesomeIcon icon={faSignOutAlt} className="fa"/><span>Log Out</span></li>
                </>
            )
        }
        else {
            return (
            <Link to="/signin">
                <li><FontAwesomeIcon icon={faUser} className="fa"/><span>Sign In</span></li>
            </Link>
            )
        }
    }
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
            {renderLogInOrOut()}
        </ul>
        </StyledNavbar>
    )
}