import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
	padding: 10px 15px;
	cursor: pointer;
`;

export const HeaderContainer = styled.header`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	position: sticky;
	top: 0;
	background-color: white;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
	z-index: 1010;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
`;

export const OptionsContainer = styled.nav`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const OptionsList = styled.ul`
	padding: 0;
	margin: 0;
	display: inherit;
	align-items: center;
`;

export const OptionsItem = styled.li`
	display: inherit;
	list-style-type: none;
`;

export const OptionLink = styled(Link)`
	${OptionContainerStyles}
`;
export const OptionContainer = styled.li`
	${OptionContainerStyles}
`;
