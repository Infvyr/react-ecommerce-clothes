import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
	<header className="header">
		<Link to="/" className="logo-container">
			<Logo className="logo" />
		</Link>
		<nav className="options">
			<ul>
				<li>
					<Link to="/shop" className="option">
						SHOP
					</Link>
				</li>
				<li>
					<Link to="/contact" className="option">
						CONTACT
					</Link>
				</li>
				{currentUser ? (
					<li className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</li>
				) : (
					<li>
						<Link to="/signin" className="option">
							{' '}
							SIGN IN{' '}
						</Link>
					</li>
				)}
				<CartIcon />
			</ul>
		</nav>
		{hidden ? null : <CartDropdown />}
	</header>
);

const mapSateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});

export default connect(mapSateToProps)(Header);
