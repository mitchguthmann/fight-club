import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import { signOut } from '../api/auth';
import token from '../App';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const [currentUser, setCurrentUser] = useState(undefined);

    const [render, setRender] = useState(false)


    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };


    const bearerToken = localStorage.getItem('session_token')

    var token = false;
    
    if (bearerToken !== null ) {
        token = true;
        console.log(bearerToken);
    }
 

    const showSignIn = () => {
    if (window.innerWidth <= 960) {
        return <li className='nav-item'>
                    <Button link='/sign-in' buttonStyle='btn--outline'>COACH SIGN IN</Button>
               </li>
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        FIGHT CLUB <i className='fas fa-bolt'/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/fighters' className='nav-links' onClick={closeMobileMenu}>
                                Boxers
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/schedule' className='nav-links' onClick={closeMobileMenu}>
                                Fight Schedule
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                        </ul>
                        {!!token ? (
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item"> 
                                    <Button link='/sign-out' buttonStyle='btn--outline' 
                                    onClick={() => {signOut(); setRender(true);}}> Sign Out</Button>
                                </li>
                            </div>

        ): button && <Button link='/sign-in' buttonStyle='btn--outline'>COACH SIGN IN</Button>}
   
                </div>
            </nav>
        </>
    );
}

export default Navbar;
