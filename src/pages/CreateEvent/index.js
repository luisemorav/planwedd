import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import petitions from "../../api";
import UserContext from "../../context/UserContext";
import "./master.css";

const CreateEvent = () => {
	const { user, logout } = useContext(UserContext);

	const [evento, setEvent] = useState();

	const [existEvent, setExistEvent] = useState(false);

	const [primaryColor, setPrimaryColor] = useState("#ffcda9");
	const [secondaryColor, setSecondaryColor] = useState("#ffbd59");

	const navigate = useNavigate();

	const [imgpreview, setImgpreview] = useState("");

	const [img, setImg] = useState();

	const [imgsize, setImgsize] = useState(0);

	const [colorconfig, setColorconfig] = useState({
		primary: "#ffcda9",
		secondary: "#ffbd59",
	});

	const [datosE, setDatosE] = useState({
		nombre_evento: "",
		fecha_evento: "",
		texto_portada: "",
		configuraciones: JSON.stringify(colorconfig),
	});

	const [datosB, setDatosB] = useState({
		banco: "",
		nro_cuenta: "",
		titular: "",
	});

	const cargarEvento = async () => {
		try {
			const res = await petitions.getEventByIdUser(user.id);
			// console.log(res);
			let eventData = await res.json();
			if (res.status === 200) {
				setExistEvent(true);

				// console.log(eventData);
				setEvent(eventData.data[0]);

				setPrimaryColor(
					JSON.parse(eventData.data[0]["configuraciones"])["primary"]
				);
				setSecondaryColor(
					JSON.parse(eventData.data[0]["configuraciones"])[
						"secondary"
					]
				);

				setDatosE({
					nombre_evento: eventData.data[0]["nombre_evento"],
					fecha_evento: eventData.data[0]["fecha_evento"],
					texto_portada: eventData.data[0]["texto_portada"],
					img_portada: eventData.data[0]["img_portada"],
					configuraciones: eventData.data[0]["configuraciones"],
				});

				return;
			} else if (res.status === 404) {
				console.log(eventData["message"]);
			}
		} catch (error) {
			// navigate("/404");
			console.log(error);
		}
	};

	useEffect(() => {
		cargarEvento();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleInputChange = (event) => {
		if (
			event.target.name === "banco" ||
			event.target.name === "nro_cuenta" ||
			event.target.name === "titular"
		) {
			setDatosB({
				...datosB,
				[event.target.name]: event.target.value,
			});
		} else if (
			event.target.name === "primary" ||
			event.target.name === "secondary"
		) {
			setColorconfig({
				...colorconfig,
				[event.target.name]: event.target.value,
			});
			setDatosE({
				...datosE,
				configuraciones: JSON.stringify(colorconfig),
			});
			if (event.target.name === "primary") {
				setPrimaryColor(event.target.value);
			} else if (event.target.name === "secondary") {
				setSecondaryColor(event.target.value);
			}
		} else {
			setDatosE({
				...datosE,
				[event.target.name]: event.target.value,
				configuraciones: JSON.stringify(colorconfig),
			});
		}
	};

	const renderImage = (inputFile) => {
		const image = URL.createObjectURL(inputFile.target.files[0]);
		setImgpreview(image);
		setImg(inputFile.target.files[0]);
		setImgsize(inputFile.target.files[0].size);
	};

	const enviarDatos = async (event) => {
		event.preventDefault();

		const formData = new FormData();

		formData.set("nombre_evento", datosE.nombre_evento);
		formData.set("fecha_evento", datosE.fecha_evento);
		formData.set("texto_portada", datosE.texto_portada);
		formData.set("img_portada", img);
		formData.set("configuraciones", datosE.configuraciones);

		try {
			let config = {
				method: "post",
				headers: {
					accept: "application/json",
					Authorization: `Bearer ${user.access_token}`,
					ContentType: "multipart/form-data",
				},
				body: formData,
			};
			let response = await fetch("http://127.0.0.1:5000/events", config);
			let json = await response.json();
			console.log(json);
		} catch (error) {
			console.log(error);
		}
	};

	const actualizarDatos = async (event) => {
		event.preventDefault();

		try {
			let config = {
				method: "put",
				headers: {
					accept: "application/json",
					Authorization: `Bearer ${user.access_token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(datosE),
			};
			let response = await fetch(
				`http://127.0.0.1:5000/events/${evento["id"]}`,
				config
			);
			let json = await response.json();
			console.log(json);
		} catch (error) {
			console.log(error);
		}
	};

	const logOut = () => {
		logout();
		navigate("/login");
	};

	const logIn = () => {
		navigate("/login");
	};

	if (!user) {
		logIn();
	}

	return (
		<div className="_backgroundImage _fontWeight600">
			<div className="card _backgroundOpacity p-3">
				<div className="d-flex justify-content-between">
					<h4>
						Bienvenido{" "}
						<strong>
							{user
								? `${user.nombres}`
								: ", para comenzar inicia sesión"}
						</strong>
						, crea o edita tu evento en el formulario de abajo.
					</h4>
					{user ? (
						<button onClick={logOut}>Cerrar Sesión</button>
					) : (
						<button onClick={logIn}>Iniciar Sesión</button>
					)}
				</div>
			</div>
			<div className="container _containerCentral p-3">
				<h1 className="text-center">
					{existEvent ? "Edita tu Evento" : "Crea tu Evento"}
				</h1>
				<div className="card _backgroundOpacity">
					<div className="card-body">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
									<label
										htmlFor="nombre"
										className="form-label">
										Nombre del evento
									</label>
									<input
										name="nombre_evento"
										type="text"
										id="nombre"
										placeholder="Escribe aqui el nombre de tu evento. Ej. Paco & Lulu..."
										className="form-control form-control-lg"
										onChange={handleInputChange}
										defaultValue={
											existEvent
												? evento.nombre_evento
												: ""
										}></input>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<label
										htmlFor="fecha"
										className="form-label">
										Fecha del evento
									</label>
									<input
										name="fecha_evento"
										type="date"
										id="fecha"
										className="form-control form-control-lg"
										onChange={handleInputChange}
										defaultValue={
											existEvent
												? evento.fecha_evento
												: ""
										}></input>
								</div>
							</div>

							<div className="row">
								<div className="_padTop10 col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<label
										htmlFor="mensaje"
										className="form-label">
										Mensaje de bienvenida
									</label>
									<textarea
										name="texto_portada"
										id="mensaje"
										rows="11"
										placeholder="Escribe aqui el mensaje de bienvenida quelos invitados puedan leer en tu perfil..."
										className="form-control"
										onChange={handleInputChange}
										defaultValue={
											existEvent
												? evento.texto_portada
												: ""
										}></textarea>
								</div>

								<div className="_padTop10 col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<label
										htmlFor="portada"
										className="form-label">
										{existEvent
											? "Tu foto de protada"
											: "Agregar foto de portada"}
									</label>
									<img
										className="img-fluid"
										alt="preview"
										src={
											existEvent
												? evento.img_portada
												: imgpreview
										}></img>
									<p className="text-center">
										{(imgsize / 1000000).toFixed(2)}MB de
										2MB
									</p>
									{existEvent ? (
										""
									) : (
										<input
											className="form-control form-control-sm mb-2"
											id="portada"
											type="file"
											onChange={renderImage}
											accept="image/png,image/jpeg"></input>
									)}

									<label
										htmlFor="color1"
										className="form-label">
										Color Principal
									</label>
									<label className="form-label _infoMessage">
										Seleccione un color principal para tu
										página.
									</label>
									<input
										className="form-control form-control-sm"
										type="color"
										name="primary"
										onInput={handleInputChange}
										id="color1"
										value={primaryColor}
									/>
									<label
										htmlFor="color2"
										className="form-label">
										Color Secundario
									</label>
									<label className="form-label _infoMessage">
										Seleccione un color secundario para tu
										página.
									</label>
									<input
										className="form-control form-control-sm"
										type="color"
										name="secondary"
										onInput={handleInputChange}
										id="color2"
										value={secondaryColor}
									/>
								</div>

								<div className="_padTop10 col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<label className="form-label">
										Información bancaria
									</label>

									<div className="card">
										<div className="card-body">
											<div className="row">
												<label className="form-label _infoMessage">
													Seleccione la cuenta
													bancaria donde se
													depositarán los regalos
												</label>

												<div className="_padTop10 col-lg-12 col-md-12 col-sm-12 col-xs-12">
													<label
														htmlFor="banco"
														className="form-label _fontSize13">
														Banco
													</label>
													<select
														defaultValue={
															"Seleccione..."
														}
														name="banco"
														className="form-select form-select-sm"
														onChange={
															handleInputChange
														}>
														<option disabled>
															Seleccione...
														</option>
														<option value="BCP">
															BCP
														</option>
														<option value="Interbank">
															Interbank
														</option>
														<option value="BBVA">
															BBVA
														</option>
														<option value="Scotiabank">
															Scotiabank
														</option>
														<option value="Scotiabank">
															Banbif
														</option>
														<option value="Scotiabank">
															Banco de la Nación
														</option>
													</select>
												</div>

												<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
													<label
														htmlFor="cuenta"
														className="form-label _fontSize13">
														Titular
													</label>
													<input
														type="text"
														name="titular"
														id="cuenta"
														onChange={
															handleInputChange
														}
														placeholder="Escribe aqui el nombre del titular de la cuenta..."
														className="form-control form-control-sm"></input>
												</div>

												<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
													<label
														htmlFor="CCI"
														className="form-label _fontSize13">
														Número de Cuenta
													</label>
													<input
														type="text"
														name="nro_cuenta"
														id="CCI"
														placeholder="215-..."
														onChange={
															handleInputChange
														}
														className="form-control form-control-sm"></input>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="_padTop10 text-center col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<button
										type="button"
										onClick={
											existEvent
												? actualizarDatos
												: enviarDatos
										}
										className="_textButton col-white btn btn-info btn-lg">
										{existEvent
											? "Guardar Cambios"
											: "Crear Evento"}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateEvent;