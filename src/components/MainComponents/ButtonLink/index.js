import styled from "styled-components";

const Container = styled.button`
	/* background-color: ${(props) => (props.xd ? "blue" : "green")}; */
	/* width: 100%; */
	border: none;
	padding: 10px;
	font-size: 2rem;
	font-weight: 600;
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