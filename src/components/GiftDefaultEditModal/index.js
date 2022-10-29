import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.2);
	position: fixed;
	z-index: 5;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Card = styled.div`
	padding: 20px;
	width: 600px;
	/* height: 400px; */
	position: relative;
	background-color: white;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	overflow: hidden;
	z-index: 6;
	@media (max-width: 650px) {
		width: 100vw;
		height: 100vh;
		border-radius: 0;
	}
`;
const Title = styled.h3`
	font-size: 2.2rem;
`;
const InputPrice = styled.input`
	width: 100%;
	font-size: 1.5rem;
	padding: 5px 10px;
	border-radius: 5px;
	border: 2px solid gray;
	outline: none;
`;
const Button = styled.div`
	width: 100%;
	background-color: teal;
	padding: 10px 20px;
	border-radius: 5px;
	font-size: 1.5rem;
	font-weight: 600;
	color: white;
	text-align: center;
	cursor: pointer;
`;
const ExitButton = styled.div`
	width: 50px;
	height: 50px;
	background-color: white;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
	border-radius: 50%;
	position: absolute;
	top: 20px;
	right: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	cursor: pointer;
	transition: background, color, 0.3s;
	&:hover {
		background-color: tomato;
		color: white;
	}
`;
const GiftDefaultEditModal = ({
	valueBefore = 0,
	defaultGifts,
	editPriceModal,
	HiddenModalEdit,
	setDefaultGifts,
	idDefaultGift,
}) => {
	return (
		<Container style={{ display: editPriceModal }}>
			<Card>
				<ExitButton onClick={HiddenModalEdit}>
					<i className="fa-solid fa-xmark"></i>
				</ExitButton>
				<Title>Editar precio del regalo prederminado</Title>
				<InputPrice type="number"></InputPrice>
				<Button>Guardar</Button>
			</Card>
		</Container>
	);
};
export default GiftDefaultEditModal;
