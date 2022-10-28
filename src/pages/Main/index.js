import { useState } from "react";
import { Link } from "react-router-dom";
// import petitions from '../../api/index'
import {
	NavBarView,
	InputSearchView,
	StepsCardsView,
	ButtonLinkView,
	FooterCardView,
} from "../../components/MainComponents";
import styled from "styled-components";
const Container = styled.div`
	background-color: white;
	width: 100%;
	position: relative;
`;
const Separator = styled.div`
	height: calc(100vh + 200px);
`;
const ContainerImage = styled.div`
	background-color: white;
	background-image: url("https://images.pexels.com/photos/2959196/pexels-photo-2959196.jpeg");
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: calc(100vh + 200px);
	position: absolute;
	z-index: 1;
	opacity: 0.8;
`;
const ContainerContent = styled.div`
	width: 100%;
	height: 100vh;
	position: absolute;
	z-index: 1;
	padding-top: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ContainerSlogan = styled.div`
	max-width: 600px;
	max-height: 600px;
`;
const ContainerButtons = styled.div`
	margin: 20px 0;
	display: flex;
	gap: 10px;
`;
//! mejorar en el futuro =>
const ContainerSearch = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 200px 0;
	gap: 20px;
`;
const ContainerSearchInput = styled.div`
	min-width: 350px;
	width: 700px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const ContainerSteps = styled.div`
	width: 100%;
`;
// micro components -----------------
const TitleLogo = styled.h1`
	font-size: 5rem;
	text-transform: uppercase;
	font-weight: 900;
	letter-spacing: 0.5rem;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
	user-select: none;
`;
const Description = styled.p`
	font-size: 2rem;
	font-weight: 600;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;
const InputTitle = styled.p`
	font-size: 1.5rem;
	font-weight: 600;
	text-shadow: 0 2px 4px rgba(60, 60, 67, 0.6);
	color: rgba(60, 60, 67, 0.8);
`;

// ! card Fetchs
//? input search results
const ContainerSearchResult = styled.div`
	width: 700px;
	background-color: white;
	border: 2px solid #c6c6c8;
	border-radius: 10px;
	overflow: auto;
	padding: 30px;
	display: grid;
	gap: 20px;
	cursor: pointer;
`;
const CardEvents = styled.div`
	background-color: white;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
	display: flex;
	width: 100%;
	height: 150px;
	border-radius: 5px;
`;
const EventsCardLeft = styled.div`
	width: 50%;
	/* background-color: red; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */
	padding: 20px;
`;
const EventsCardRight = styled.div`
	width: 50%;
	/* background-color: green; */
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0 10px 10px 0;
	}
`;

const EventsTitle = styled.p`
	font-size: 1.3rem;
	font-weight: 500;
	line-height: 20px;
`;
const EventsFecha = styled.p``;
// !-------------------------
const Main = () => {
	const [inputSearchValue, setInputSearchValue] = useState("");

	function saveInputValue(value) {
		setInputSearchValue(value);
		inputSearchValue.forEach((element) => {
			console.log(element.id);
		});
		// showEvents()
	}
	// function showEvents(){
	//     console.log(inputSearchValue)
	// }

	return (
		<Container>
			<NavBarView />

			<ContainerImage>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
					style={{ position: "absolute", bottom: "0" }}>
					<path
						fill="#fff"
						fillOpacity="1"
						d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
				</svg>
			</ContainerImage>

			<ContainerContent>
				<ContainerSlogan>
					<TitleLogo>Planwedd</TitleLogo>
					<Description>
						tu boda con regalos que quieres. crea tu evento e invita
						a tus amigos.
					</Description>
					{/* buttons */}
					<ContainerButtons>
						<ButtonLinkView
							title="comenzar"
							color={"white"}
							bg={"black"}
							size="1.5rem"></ButtonLinkView>
						<ButtonLinkView
							title="regalar"
							size="1.5rem"></ButtonLinkView>
					</ContainerButtons>
				</ContainerSlogan>
			</ContainerContent>

			<Separator />

			<ContainerSearch>
				<ContainerSearchInput>
					<InputTitle>Buscar evento</InputTitle>
					<InputSearchView
						saveInputValue={saveInputValue}
						inputSearchValue={inputSearchValue}></InputSearchView>
				</ContainerSearchInput>

				{/* Input Result Search */}
				<ContainerSearchResult>
					{inputSearchValue &&
						inputSearchValue.map((element, index) => (
							<Link
								key={index}
								to={"/event/" + element.usuario_id}
								style={{
									textDecoration: "none",
									color: "rgba(0,0,0,0.8)",
								}}>
								<CardEvents id_event={element.id}>
									<EventsCardLeft>
										<EventsTitle>
											{element.nombre_evento}
										</EventsTitle>
										<EventsFecha>
											fecha de evento:{" "}
											{element.fecha_evento}
										</EventsFecha>
									</EventsCardLeft>
									<EventsCardRight>
										<img
											src={element.img_portada}
											alt="foto de portada"></img>
									</EventsCardRight>
								</CardEvents>
							</Link>
						))}
				</ContainerSearchResult>
				{/* ------------------ */}
			</ContainerSearch>

			{/* body  --------------------------*/}
			<ContainerSteps>
				<StepsCardsView />
			</ContainerSteps>
			{/* footer ------------------------ */}
			<FooterCardView></FooterCardView>
		</Container>
	);
};
export default Main;
