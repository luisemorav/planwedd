import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import petitions from "../../api";
import Swal from "sweetalert2";
import UserContext from "../../context/UserContext";
import "./master.css";
import URLf from "../../api/config";

const CreateEvent = () => {
	const { user, logout, loadEvent } = useContext(UserContext);

	const [evento, setEvent] = useState();

	const [cuenta, setCuenta] = useState();

	const [existEvent, setExistEvent] = useState(false);

	const [existCuenta, setExistCuenta] = useState(false);

	const [primaryColor, setPrimaryColor] = useState("#ffcda9");
	const [secondaryColor, setSecondaryColor] = useState("#ffbd59");

	const navigate = useNavigate();

	const [imgpreview, setImgpreview] = useState(
		"https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png"
	);

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
		banco: "Seleccionar...",
		nro_cuenta: "",
		titular: "",
		usuario_id: user.id,
	});

	const cargarEvento = async () => {
		try {
			const res = await petitions.getEventByIdUser(user.id);

			let eventData = await res.json();
			if (res.status === 200) {
				setExistEvent(true);

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

				let mievento = {
					event_id: eventData.data[0]["id"],
				};
				loadEvent(mievento);

				if (user.cuenta_id !== null) {
					cargarCuenta();
				}

				return;
			} else if (res.status === 404) {
				console.log(eventData["message"]);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const cargarCuenta = async () => {
		try {
			let config = {
				method: "GET",
				headers: {
					accept: "application/json",
					Authorization: `Bearer ${user.access_token}`,
					"Content-Type": "application/json",
				},
			};
			let res = await fetch(
				`${URLf}/baccounts/${user.cuenta_id}`,
				config
			);
			let cuentaData = await res.json();
			if (res.status === 200) {
				setDatosB({
					banco: cuentaData.data["banco"],
					nro_cuenta: cuentaData.data["nro_cuenta"],
					titular: cuentaData.data["titular"],
					usuario_id: cuentaData.data["usuario"]["id"],
				});

				setExistCuenta(true);

				setCuenta(cuentaData.data);
				return;
			} else if (res.status === 404) {
				console.log(cuentaData["message"]);
			}
		} catch (error) {
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

		Swal.fire({
			title: "Estas seguro?",
			text: "Los campos de imagen no se podran modificar posteriormente.",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#008080",
			cancelButtonColor: "#ff6347",
			confirmButtonText: "Crear Evento",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: "Creando Evento",
					html: "Se est?? creando tu evento.",
					timerProgressBar: true,
					showConfirmButton: false,
					didOpen: async () => {
						Swal.showLoading();

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
							let response = await fetch(
								`${URLf}/events`,
								config
							);
							let json = await response.json();
							Swal.fire({
								title: "Exito!",
								text: json.message,
								icon: "success",
								confirmButtonText: "aceptar",
							});
							cargarEvento();
						} catch (error) {
							console.log(error);
							Swal.fire({
								title: "Error!",
								text: "Al parecer hubo un error con la autorizacion",
								icon: "error",
								confirmButtonText: "aceptar",
							});
						}

						try {
							let config = {
								method: "post",
								headers: {
									accept: "application/json",
									Authorization: `Bearer ${user.access_token}`,
									"Content-Type": "application/json",
								},
								body: JSON.stringify(datosB),
							};
							let response = await fetch(
								`${URLf}/baccounts`,
								config
							);
							let json = await response.json();
							console.log(json);
						} catch (error) {
							console.log(error);
						}
					},
				});
			}
		});
	};

	const actualizarDatos = async (event) => {
		event.preventDefault();
		Swal.showLoading();
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
				`${URLf}/events/${evento["id"]}`,
				config
			);
			let json = await response.json();
			Swal.fire("Listo!", json.messsage, "success");
			cargarEvento();
		} catch (error) {
			console.log(error);
		}

		try {
			let datosB2 = datosB;
			delete datosB2.usuario_id;

			let config = {
				method: "put",
				headers: {
					accept: "application/json",
					Authorization: `Bearer ${user.access_token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(datosB2),
			};
			let response = await fetch(
				`${URLf}/baccounts/${user.cuenta_id}`,
				config
			);
			let json = await response.json();
			console.log(json.messsage);
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

	const cargarLista = () => {
		navigate("/createGift");
	};

	if (!user) {
		logIn();
	}

	return (
		<div className="_backgroundImage _fontWeight600">
			<div className="card _backgroundOpacity p-3">
				<div className="d-flex justify-content-between">
					<h4>
						Bienvenid@{" "}
						<strong>
							{user
								? `${user.nombres}`
								: ", para comenzar inicia sesi??n"}
						</strong>
						, crea o edita tu evento en el formulario de abajo.
					</h4>
					{user ? (
						<button
							onClick={logOut}
							className="_textButton col-white btn btn-info">
							Cerrar Sesi??n
						</button>
					) : (
						<button onClick={logIn}>Iniciar Sesi??n</button>
					)}
				</div>
			</div>
			<div className="container _containerCentral p-3">
				<h1 className="text-center">
					{existEvent ? "Edita tu Evento" : "Crea tu Evento"}
				</h1>
				<h5 className="text-center">
					Link de tu evento:
					<strong>
						{existEvent
							? ` ${window.location.host}/event/${user.id}`
							: "-"}
					</strong>
				</h5>
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
											? "Tu foto de portada"
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
										p??gina.
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
										p??gina.
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
										Informaci??n bancaria
									</label>

									<div className="card">
										<div className="card-body">
											<div className="row">
												<label className="form-label _infoMessage">
													Seleccione la cuenta
													bancaria donde se
													depositar??n los regalos
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
														{existCuenta ? (
															<option>
																{cuenta.banco}
															</option>
														) : (
															<option disabled>
																Seleccione...
															</option>
														)}
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
														<option value="Banbif">
															Banbif
														</option>
														<option value="Banco de la Naci??n">
															Banco de la Naci??n
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
														className="form-control form-control-sm"
														defaultValue={
															existCuenta
																? cuenta.titular
																: ""
														}></input>
												</div>

												<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
													<label
														htmlFor="CCI"
														className="form-label _fontSize13">
														N??mero de Cuenta
													</label>
													<input
														type="text"
														name="nro_cuenta"
														id="CCI"
														placeholder="215-..."
														onChange={
															handleInputChange
														}
														className="form-control form-control-sm"
														defaultValue={
															existCuenta
																? cuenta.nro_cuenta
																: ""
														}></input>
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
									{existEvent ? (
										<button
											type="button"
											onClick={cargarLista}
											className="ms-5 _textButton col-white btn btn-info btn-lg">
											Lista de Regalos
										</button>
									) : (
										""
									)}
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
