import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	height: 100vh;
	position: relative;
`;
const ContainerBanner = styled.div`
	width: 100%;
	height: 35%;
	background-color: pink;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
`;
const ContainerDescription = styled.div`
	width: 100%;
	height: calc(100% - 35%);
	border-bottom: 2px solid #c6c6c8;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const ContainerTitle = styled.div`
	width: 100%;
	text-transform: capitalize;
	display: flex;
	justify-content: center;
`;
const ContainerInformation = styled.div`
	width: 80%;
	display: flex;
`;
const ContainerDedicatorias = styled.div`
	width: 100%;
	min-height: 50vh;
	display: flex;
	justify-content: center;
	padding: 50px 0;
	position: absolute;
	background-color: #f4f4f4;
`;

// miniComponents
const Title = styled.h1`
	font-size: 4rem;
	font-weight: 700;
	color: rgba(0, 0, 0, 0.8);
	text-align: center;
	text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
`;
const TitleMini = styled.h1`
	width: 100%;
	font-size: 2rem;
	font-weight: 800;
	color: rgba(0, 0, 0, 0.8);
	text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
`;
const SubTitle = styled.p`
	font-size: 1.2rem;
	font-weight: 700;
	color: rgba(0, 0, 0, 0.6);
	text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
`;
const Information = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	padding: 50px;
`;
const Buttons = styled.div`
	width: 50%;
	padding: 50px;
	display: flex;
	justify-content: end;
	align-items: center;
`;
const UlContainer = styled.ul`
	margin-left: 25px;
	li {
		font-size: 1.2rem;
		font-weight: 700;
		color: rgba(0, 0, 0, 0.6);
	}
`;
const Button = styled.button`
	background-color: white;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
	border: 2px solid #c6c6c8;
	padding: 20px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

const CardContainer = styled.div`
	width: 80%;
	padding: 50px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	/* background-color: red; */
`;
const Cards = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: minmax(200px 450px);
	gap: 30px;
`;
const Card = styled.div`
	background-color: white;
	border-radius: 10px;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 20px;
`;

const CardTitle = styled.div`
	width: 100%;
	font-size: 1.3rem;
	font-weight: 800;
	color: rgba(0, 0, 0, 0.6);
	text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
`;
const CardSubtitle = styled.div`
	width: 100%;
	font-size: 0.9rem;
	font-weight: 800;
	color: rgba(0, 0, 0, 0.5);
	text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
`;
const CardTime = styled.div`
	width: 100%;
	font-size: 0.8rem;
	font-weight: 800;
	color: rgba(0, 0, 0, 0.3);
	text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
`;
const TitlesContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 1500px) {
		width: 80%;
	}
`;

const User = () => {
	let id = useParams();
	// console.log(id['id'])

	const [event, setEvent] = useState([]);
	const [dedications, setDedications] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		cargarEvento();
	}, []);

	const cargarEvento = async () => {
		try {
			let config = {
				method: "GET",
				headers: {
					accept: "application/json",
				},
			};
			let res = await fetch(
				`http://127.0.0.1:5000/events${id["id"]}`,
				config
			);
			let eventData = await res.json();
			if (res.status === 200) {
				// console.log(eventData['data'][0])
				setEvent(eventData["data"][0]);
			} else if (res.status === 404) {
				console.log(eventData["message"]);
				navigate("/404");
			}
		} catch (error) {
			console.log(error);
		}
	};

    // Falta lograr que la funcion cargarDedicatorias() se ejecute
    // una vez se tenga el evento id a partir de la funcion cargarEvento()
    // al ser una funcion asíncrona se debe esperar que extraiga los datos
    // sin embargo no se como

	const cargarDedicatorias = async () => {
		try {
			// console.log(event)
			let config = {
				method: "GET",
				headers: {
					accept: "application/json",
				},
			};
			let res = await fetch(
				`http://127.0.0.1:5000/dedications/event${event["id"]}`,
				config
			);
			let dedicatoriasRaw = await res.json();
			if (res.status === 200) {
				let dedicatorias = dedicatoriasRaw["data"];
				setDedications(dedicatorias);
			} else {
				setDedications([]);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<ContainerBanner
				style={{
					background: `url(${event.img_portada})`,
				}}></ContainerBanner>
			<ContainerDescription>
				<ContainerTitle>
					<TitlesContainer>
						<Title>{event.nombre_evento}</Title>
						<SubTitle>{event.texto_portada}</SubTitle>
					</TitlesContainer>
				</ContainerTitle>
				<ContainerInformation>
					<Information>
						<TitleMini>Lugar del evento</TitleMini>
						<SubTitle>
							Av 22 de Julio Mz T Lt 24 - Asoc Fortaleza de
							Vitarte
						</SubTitle>
						<TitleMini>Fecha</TitleMini>
						<SubTitle>
							Av 22 de Julio Mz T Lt 24 - Asoc Fortaleza de
							Vitarte
						</SubTitle>
						<TitleMini>Comprometidos</TitleMini>
						<UlContainer>
							<li>Pedro Aguilar Condor</li>
							<li>Angela Guitierrez Villanueva</li>
						</UlContainer>
					</Information>
					<Buttons>
						<Button>
							<i
								style={{ fontSize: "4rem" }}
								className="fa-solid fa-gift"></i>
							<SubTitle>Dejar Regalo</SubTitle>
						</Button>
					</Buttons>
				</ContainerInformation>
			</ContainerDescription>
			<ContainerDedicatorias>
				<CardContainer>
					<TitleMini>Dedicatorias</TitleMini>
					<Cards>
						{dedications.map((dedication) => {
							return (
								<Card>
									<CardTitle>{dedication.nombre}</CardTitle>
									<CardSubtitle>
										{dedication.contenido}
									</CardSubtitle>
									<CardTime>09/10/2022</CardTime>
								</Card>
							);
						})}
					</Cards>
				</CardContainer>
			</ContainerDedicatorias>
			{/* other interactions */}
			{/* <GiftList status={showListGifts}  hideGifts={hideGifts}></GiftList> */}
		</Container>
	);
};

export default User;
