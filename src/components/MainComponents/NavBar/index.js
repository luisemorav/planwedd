import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
	width: 100%;
	height: 50px;
	background-color: rgba(255, 255, 255, 0.5);
	backdrop-filter: blur(75px);
	/* border-bottom: 2px solid black; */
	position: fixed;
	display: flex;
	z-index: 2;
	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(143, 143, 143, 1);
		mix-blend-mode: color-burn;
		left: 0;
		top: 0;
		z-index: -1;
		opacity: 0.2;
	}
`;
const LogoSection = styled.div`
	/* background-color: blue; */
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	font-size: 1.5rem;
	font-weight: 900;
	letter-spacing: 5px;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
	user-select: none;
`;
const Nav = styled.nav`
	width: 100%;
	height: 100%;
	display: flex;
`;
const NavSections = styled.nav`
	width: 50%;
	height: 100%;
	display: flex;
	gap: 30px;
	padding: 0 50px;
	align-items: center;
	&:last-child {
		justify-content: flex-end;
	}
`;
const LinkStyled = styled(Link)`
	color: black;
	text-decoration: none;
	font-size: 1.2rem;
	font-weight: 500;
	text-transform: capitalize;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
	transition: 0.3s;
	border-bottom: 2px solid transparent;
	&:hover {
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
		border-bottom: 2px solid rgb(0, 0, 0);
	}
`;

const NavBar = () => {
	return (
		<Container>
			<LogoSection>PLANWEDD</LogoSection>
			<Nav>
				<NavSections>
				</NavSections>
				<NavSections>
					<LinkStyled to="/login">Inciar Sesion</LinkStyled>
					<LinkStyled to="/register">Registrarse</LinkStyled>
				</NavSections>
			</Nav>
		</Container>
	);
};
export default NavBar;
