import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import petitions from "../../api";
import AddGiftModal from "../../components/AddGiftModal";
import Swal from "sweetalert2";
import GiftDefaultEditModal from "../../components/GiftDefaultEditModal";
import giftsDefault from "../../api/giftsDefaults";

import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Container = styled.div`
	width: 100%;
	height: 100vh;
`;
const Title1 = styled.div`
	width: 100%;
	height: 10vh;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 2px solid #e3e3e3;
	h2 {
		font-size: 3rem;
		text-transform: uppercase;
	}
`;
const GiftsContainer = styled.div`
	width: 100%;
	height: 90vh;
	display: flex;
`;
const GiftList = styled.div`
	width: 60%;
	height: 100%;
	background-color: #f4f4f4;
	display: grid;
	grid-template-columns: 450px 450px;
	grid-auto-rows: 250px;
	justify-content: center;
	gap: 30px;
	padding: 30px;
	overflow: auto;
	@media (max-width: 1650px) {
		grid-template-columns: 400px 400px;
	}
	@media (max-width: 1500px) {
		grid-template-columns: 400px;
	}
`;
const GiftsDefault = styled.div`
	width: 40%;
	height: 90vh;
	background-color: #f5f8fa;
	border-left: 2px solid #e3e3e3;
	display: flex;
	flex-direction: column;
	overflow: auto;
	gap: 30px;
	padding: 30px;
`;
const AddCardGift = styled.button`
	background-color: white;
	width: 100%;
	max-height: 40px;
	height: 40px;
	border: none;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	font-size: 1.5rem;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
`;
const CardGiftDefault = styled.div`
	width: 100%;
	min-height: 200px;
	height: 200px;
	background-color: white;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	display: flex;
	overflow: hidden;
`;
// minicomponents ===>
const CardDefaultTitle = styled.h5`
	font-size: 1rem;
`;
const CardDefaultPrice = styled.h2`
	font-size: 1rem;
	position: absolute;
	font-weight: bold;
	bottom: 5px;
	left: 20px;
`;
const CardDefaultLeftContainer = styled.div`
	width: 40%;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		border-radius: 10px;
		height: 100%;
		object-fit: contain;
	}
`;
const CardDefaultRightContainer = styled.div`
	width: 60%;
	background-color: #f4f4f4;
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px;
	position: relative;
`;
const ButtonGiftDefault = styled.button`
	background-color: lightgray;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
	font-weight: 600;
	width: 100%;
	padding: 5px 10px;
	border-radius: 5px;
	border: none;
	transition: color, background, 0.3s;
	&:hover {
		background-color: teal;
		color: white;
	}
`;
// fetch Cards =============
const CardSelect = styled.div`
	border-radius: 10px;
	background-color: white;
	display: flex;
	overflow: hidden;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
`;
const CardSelectLeft = styled.div`
	width: 50%;
	height: 100%;
	padding: 20px;
	img {
		border-radius: 20px;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
const CardSelectRight = styled.div`
	width: 50%;
	height: 100%;
	background-color: #f5f8fa;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	position: relative;
`;
const CardListTitle = styled.p`
	font-size: 1.1rem;
	font-weight: 600;
	line-height: 90%;
	margin: 0;
	overflow: hidden;
`;
const CardListPrice = styled.p`
	font-size: 1.2rem;
	font-weight: 700;
	margin: 0;
	position: absolute;
	bottom: 20px;
`;
const CardListButtonDelete = styled.button`
	width: 100%;
	padding: 5px 10px;
	background-color: lightgray;
	border: none;
	border-radius: 5px;
	font-weight: 600;
	transition: color, background, 0.3s;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
	&:hover {
		background-color: tomato;
		color: white;
	}
`;
// const CardListDescription = styled.p`
//     margin: 0;
//     overflow: hidden;
// `
const ReturButton = styled.div`
	width: 50px;
	height: 50px;
	background-color: white;
	position: absolute;
	top: 20px;
	left: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	border-radius: 50%;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
	transition: background, color, transform, 0.3s;
	&:hover {
		background-color: lightgreen;
		color: white;
		transform: scale(1.2);
	}
`;
const CreateGiftList = () => {
	// let giftsDefaultEdit = giftsDefault
	const [defaultGifts, setDefaultGifts] = useState(giftsDefault);
	const { myEvent, user } = useContext(UserContext);
	const idEvent = myEvent.event_id;
	const [giftList, setGiftList] = useState("");
	const [modal, setModal] = useState("none");
	const [editPriceModal, setEditPriceModal] = useState("none");

	const [idDefaultGift, setIdDefaultGift] = useState("");
	function returnBack() {
		window.history.back();
	}
	function ShowModal() {
		setModal("flex");
	}
	function HiddenModal() {
		setModal("none");
	}
	function ShowModalEdit(id) {
		setEditPriceModal("flex");
		console.log(id);
	}
	function HiddenModalEdit() {
		setEditPriceModal("none");
	}
	async function getGifts() {
		try {
			const res = await petitions.getGiftsByEventId(idEvent);
			const { data } = await res.json();
			if (res.status === 200) {
				const gifts = [];
				data.forEach((e) => {
					if (e.status) {
						gifts.push(e);
					}
				});
				if (giftList !== []) {
					setGiftList(gifts);
				} else {
					setGiftList("");
				}
				return;
			}
		} catch (error) {
			console.log(error);
		}
	}

	async function deleteGift(id) {
		Swal.fire({
			title: "Estas seguro?",
			text: "este regalo sera eliminado si aceptas",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#008080",
			cancelButtonColor: "#ff6347",
			confirmButtonText: "Eliminar",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: "Eliminando Regalo",
					html: "esto puede tardar un poco dependiendo de tu internet",
					timerProgressBar: true,
					showConfirmButton: false,
					didOpen: async () => {
						Swal.showLoading();
						try {
							const res = await petitions.deleteGiftById(id);
							const date = await res.json();
							// console.log(res);
							if (res.ok) {
								Swal.fire({
									title: "Exito!",
									text: date.message,
									icon: "success",
									confirmButtonText: "aceptar",
								});
								getGifts();
								return;
							} else {
								Swal.fire({
									title: "Error!",
									text: "al parecer hubo un error con la autorizacion",
									icon: "error",
									confirmButtonText: "aceptar",
								});
							}
						} catch (error) {
							Swal.fire({
								title: "Error!",
								text: "al parecer hubo un error con el servidor",
								icon: "error",
								confirmButtonText: "aceptar",
							});
						}
					},
				});
			}
		});
	}
	// ! POST DEFUALT GIFT CHANGE THE EVENT_ID
	async function postDefaultGift(id) {
		let data;

		defaultGifts.forEach((e, i) => {
			if (i === id) {
				data = {
					...e,
					evento_id: idEvent,
				};
			}
		});
		const res = await petitions.postDefaultGifts(data, user.access_token);
		const response = await res.json();
		Swal.fire({
			title: "Regalo agregado!",
			text: response.message,
			icon: "success",
			showConfirmButton: false,
			timer: 1200,
		});
		getGifts();
	}
	// function ChangeEdit(idList){
	//     ShowModalEdit()
	//     setIdDefaultGift(idList)
	// }
	useEffect(() => {
		getGifts();
		// console.log(giftList);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Container>
			<ReturButton onClick={returnBack}>
				<i className="fa-solid fa-arrow-left"></i>
			</ReturButton>
			<GiftDefaultEditModal
				defaultGifts={defaultGifts}
				idDefaultGift={idDefaultGift}
				editPriceModal={editPriceModal}
				HiddenModalEdit={HiddenModalEdit}
				setDefaultGifts={setDefaultGifts}
			/>

			<AddGiftModal
				modal={modal}
				HiddenModal={HiddenModal}
				getGifts={getGifts}></AddGiftModal>
			<Title1>
				<h2>crea tu lista de regalos</h2>
			</Title1>
			<GiftsContainer>
				<GiftList>
					{/* ForEach This */}
					{giftList &&
						giftList.map((e, i) => {
							return (
								<CardSelect key={i}>
									<CardSelectLeft>
										<img
											src={e.img_regalo}
											alt={e.descripcion}
										/>
									</CardSelectLeft>
									<CardSelectRight>
										<CardListButtonDelete
											onClick={() => {
												deleteGift(e.id);
											}}>
											Eliminar
										</CardListButtonDelete>
										<CardListTitle>
											{e.nombre}
										</CardListTitle>
										<CardListPrice>
											S/{e.precio}
										</CardListPrice>
									</CardSelectRight>
								</CardSelect>
							);
						})}
				</GiftList>
				<GiftsDefault>
					<AddCardGift onClick={ShowModal}>
						<i className="fa-solid fa-plus"></i>
						<h4>Crear nuevo regalo</h4>
					</AddCardGift>
					{/* ForEach disable this when the user add the card default */}
					{defaultGifts &&
						defaultGifts.map((e, i) => {
							return (
								<CardGiftDefault key={i}>
									<CardDefaultLeftContainer>
										<img
											src={e.img_regalo}
											alt={e.descripcion}
										/>
									</CardDefaultLeftContainer>
									<CardDefaultRightContainer>
										<div
											style={{
												width: "100%",
												display: "flex",
												gap: "20px",
											}}>
											{/* <ButtonGiftDefault style={{width:"50%"}} onClick={()=>ShowModalEdit(i)}>Editar</ButtonGiftDefault> */}
											<ButtonGiftDefault
												onClick={() =>
													postDefaultGift(i)
												}
												//  style={{width:"50%"}}
											>
												Agregar
											</ButtonGiftDefault>
										</div>
										<CardDefaultTitle>
											{e.nombre}
										</CardDefaultTitle>
										<CardDefaultPrice>
											s/{e.precio}
										</CardDefaultPrice>
									</CardDefaultRightContainer>
								</CardGiftDefault>
							);
						})}
				</GiftsDefault>
			</GiftsContainer>
		</Container>
	);
};
export default CreateGiftList;
