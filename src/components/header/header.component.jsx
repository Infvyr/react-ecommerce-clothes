import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionsList,
	OptionsItem,
	OptionLink,
	OptionContainer,
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionsList>
				<OptionsItem>
					<OptionLink to="/">HOME</OptionLink>
				</OptionsItem>
				<OptionsItem>
					<OptionLink to="/shop">SHOP</OptionLink>
				</OptionsItem>
				<OptionsItem>
					<OptionLink to="/contact">CONTACT</OptionLink>
				</OptionsItem>
				{currentUser ? (
					<OptionContainer onClick={() => auth.signOut()}>
						SIGN OUT
					</OptionContainer>
				) : (
					<OptionsItem>
						<OptionLink to="/signin">SIGN IN</OptionLink>
					</OptionsItem>
				)}
				<CartIcon />
			</OptionsList>
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapSateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapSateToProps)(Header);
