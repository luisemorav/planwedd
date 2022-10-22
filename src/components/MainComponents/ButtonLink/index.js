// import { Link } from "react-router-dom";
import styled from "styled-components";

// const LinkStyled = styled(Link)`
//     /* background-color: red; */
//     width: ${props => props.full ? props.full : "auto"};
//     button {
//         width: ${props => props.full ? props.full : "auto"};
//     }
// `
const Container = styled.button`
	/* background-color: ${(props) => (props.xd ? "blue" : "green")}; */
	/* width: 100%; */
	border: none;
	padding: 10px;
	font-size: 2rem;
	font-weight: 600;
	text-transform: lowercase;
	border-radius: 10px;
	letter-spacing: 0.2rem;
	cursor: pointer;
	user-select: none;
`;
const ButtonLink = ({
	title,
	bg = "white",
	color = "black",
	size = "1rem",
	url = "/",
	width = "auto",
	type = "submit",
}) => {
	return (
		<Container

            style={{
                    width: width,
                    background: bg,
                    color: color,
                    fontSize: size,
                }}>
                {title}

		</Container>
	);
};
export default ButtonLink;