import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
	children,
	isGoogleSignIn,
	isOutlined,
	...otherProps
}) => (
	<button
		className={`${isOutlined ? 'inverted' : ''} 
        ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
		{...otherProps}>
		{children}
	</button>
);

export default CustomButton;
