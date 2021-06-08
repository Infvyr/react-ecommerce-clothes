import styled, { css } from 'styled-components';

// default button styles
const buttonStyles = css`
	background-color: black;
	color: white;

	&:hover {
		background-color: white;
		color: black;
		border-color: black;
	}
`;

// inverted button styles
const invertedButtonStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
	}
`;

// google button styles
const googleButtonStyles = css`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: transparent;
		border-color: #4285f4;
		color: #4285f4;
	}
`;

const getButtonStyles = (props) => {
	if (props.isGoogleSignIn) return googleButtonStyles;

	return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
	padding: 20px 35px 20px 35px;
	min-width: 165px;
	letter-spacing: 0.5px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: inherit;
	font-weight: bolder;

	cursor: pointer;
	border: 1px solid transparent;
	transition: background-color 300ms ease-in-out, color 300ms ease-in-out,
		border-color 300ms ease-in-out;

	${getButtonStyles}

	.buttons {
		display: flex;
		justify-content: space-between;
		gap: 15px;
	}
`;
