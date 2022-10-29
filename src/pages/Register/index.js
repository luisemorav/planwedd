import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styled from "styled-components";
import ButtonLink from "../../components/MainComponents/ButtonLink";
import URLf from "../../api/config";

const Container = styled.div`
	background-color: white;
	background: url("https://images.pexels.com/photos/1295994/pexels-photo-1295994.jpeg");
	background-size: cover;
	background-position: center;
	width: 100%;
	min-height: 100vh;
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
`;
const ContainerForm = styled.form`
	width: 50%;
	border-radius: 20px;
	background-color: #f4f4f4c9;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 7px;
	padding: 50px;
	margin: 20px;
	/* z-index:1; */
`;
const ContainerInput = styled.div`
	width: 80%;
	height: auto;
	/* background-color: red; */
`;

// components
const CardRegister = styled.div`
	width: 80%;
	height: 150px;
	background-color: green;
	padding: 20px;
	/* display: grid; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
	border-radius: 10px;
	background-color: #96d9ff;
	background: linear-gradient(
		124deg,
		rgba(198, 234, 255, 1) 0%,
		rgba(150, 217, 255, 1) 56%
	);
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
	margin-bottom: 20px;
	/* flex-direction: column; */
	/* flex-wrap: wrap; */
`;
const InputTitle = styled.h3`
	font-size: 0.85rem;
	font-weight: 600;
	color: rgba(60, 60, 67, 0.6);
	text-transform: capitalize;
	margin-bottom: 2px;
`;
const InputForm = styled.input`
	width: 100%;
	height: 30px;
	padding: 8px;
	font-size: 0.95rem;
	background-color: white;
	border-radius: 10px;
	font-weight: 500;
	border: 2px solid #c6c6c8;
	color: rgba(60, 60, 67, 0.8);
	font-weight: 600;
	box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
	outline: none;
`;
const CardTitle = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
	line-height: 2.5rem;
	color: rgb(0, 0, 0, 0.8);
	width: 100%;
	/* line-height */
`;
const CardSubtitle = styled.p`
	font-size: 1.2rem;
	font-weight: 600;
	color: rgb(0, 0, 0, 0.6);
`;
const LinkStyled = styled(Link)`
	color: white;
	text-decoration: none;
	text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
`;
// !LAST UPDATE
const ReturnButton = styled.div`
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
// !
const Register = () => {
	const [datos, setDatos] = useState({
		nombres: "",
		apellidos: "",
		dni: "",
		correo: "",
		username: "",
		password: "",
	});

	const [validacion, setValidacion] = useState({
		password: "",
		cpassword: "",
	});

	const navigate = useNavigate();
	function returBackPage() {
		window.history.back();
	}
	const handleInputChange = (event) => {
		if (event.target.name === "cpassword") {
			setValidacion({
				...validacion,
				[event.target.name]: event.target.value,
			});
		} else if (event.target.name === "password") {
			setValidacion({
				...validacion,
				[event.target.name]: event.target.value,
			});
			setDatos({
				...datos,
				[event.target.name]: event.target.value,
			});
		} else {
			setDatos({
				...datos,
				[event.target.name]: event.target.value,
			});
		}
	};

	const enviarDatos = async (event) => {
		event.preventDefault();
		if (validacion.password === validacion.cpassword) {
			Swal.fire({
				title: "Registrando Usuario",
				html: "Se está registrando tu usuario.",
				timerProgressBar: true,
				showConfirmButton: false,
				didOpen: async () => {
					Swal.showLoading();

					try {
						let config = {
							method: "POST",
							headers: {
								accept: "application/json",
								"Content-Type": "application/json",
							},
							body: JSON.stringify(datos),
						};
						let response = await fetch(
							`${URLf}/auth/signup`,
							config
						);

						if (response.status === 201) {
							Swal.fire({
								title: "Registrado!",
								text: "Te has registrado con éxito, ahora inicia sesión.",
								icon: "success",
								showConfirmButton: false,
								timer: 2000,
							});

							navigate("/login");
						} else if (response.status === 409) {
							Swal.fire({
								title: "Error!",
								text: "Ya existe el usuario ingresado, cambie de usuario e intente nuevamente.",
								icon: "error",
								confirmButtonText: "aceptar",
							});
						} else {
							Swal.fire({
								title: "Error!",
								text: "Ocurrió un error.",
								icon: "error",
								confirmButtonText: "aceptar",
							});
						}
					} catch (error) {
						Swal.fire({
							title: "Error!",
							text: error,
							icon: "error",
							confirmButtonText: "aceptar",
						});
					}
				},
			});
		} else {
			Swal.fire({
				title: "Error!",
				text: "Las contraseñas ingresadas no coinciden.",
				icon: "error",
				confirmButtonText: "aceptar",
			});
		}
	};

	return (
		<Container>
			<ReturnButton onClick={returBackPage}>
				<i className="fa-solid fa-arrow-left"></i>
			</ReturnButton>
			<ContainerForm onSubmit={enviarDatos}>
				<CardRegister>
					<CardTitle>Registrate ya!</CardTitle>
					<CardSubtitle>
						Ya tienes una cuenta?<br></br>
						<LinkStyled to={"/login"}>Inicia sesion</LinkStyled>
					</CardSubtitle>
				</CardRegister>
				<ContainerInput>
					<InputTitle>Nombres</InputTitle>
					<InputForm
						name="nombres"
						onChange={handleInputChange}></InputForm>
				</ContainerInput>
				<ContainerInput>
					<InputTitle>Apellidos</InputTitle>
					<InputForm
						name="apellidos"
						onChange={handleInputChange}></InputForm>
				</ContainerInput>
				<ContainerInput>
					<InputTitle>DNI</InputTitle>
					<InputForm
						name="dni"
						onChange={handleInputChange}></InputForm>
				</ContainerInput>
				<ContainerInput>
					<InputTitle>Correo electronico</InputTitle>
					<InputForm
						name="correo"
						onChange={handleInputChange}
						type={"email"}></InputForm>
				</ContainerInput>
				<ContainerInput>
					<InputTitle>Usuario</InputTitle>
					<InputForm
						name="username"
						onChange={handleInputChange}></InputForm>
				</ContainerInput>
				<ContainerInput>
					<InputTitle>Contraseña</InputTitle>
					<InputForm
						name="password"
						onChange={handleInputChange}
						type={"password"}></InputForm>
				</ContainerInput>
				<ContainerInput>
					<InputTitle>Confirmar Contraseña</InputTitle>
					<InputForm
						name="cpassword"
						onChange={handleInputChange}
						type={"password"}></InputForm>
				</ContainerInput>
				<ContainerInput>
					<ButtonLink
						title={"Registrarse"}
						color={"white"}
						bg={"#76ACFF"}
						size="1.5rem"
						width={"100%"}
					/>
				</ContainerInput>
			</ContainerForm>
		</Container>
	);
};

export default Register;
