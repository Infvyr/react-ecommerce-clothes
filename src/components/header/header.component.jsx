import React from 'react'
import { Link } from 'react-router-dom'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'

const Header = ({currentUser}) => (
    <header className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {
                currentUser 
                ? 
                (<div className="option" onClick={()=>auth.signOut()}>
                    SIGN OUT
                </div>)
                :
                (<Link to="/signin" className="option" onClick={signInWithGoogle}>
                    {' '}
                    SIGN IN{' '}
                </Link>)
            }
        </div>
    </header>
)

export default Header;