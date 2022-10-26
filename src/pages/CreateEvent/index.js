import { useState } from "react";
import "./master.css";

const CreateEvent = () => {
	const [username, setUsername] = useState("Nombre Apellido");

	return (
		<div className="_backgroundImage _fontWeight600">
			<div className="card _backgroundOpacity p-3">
				<div className="d-flex justify-content-between">
					<h4>
						Bienvenido <strong>{username}</strong>, crea o edita tu
						evento en el formulario de abajo.
					</h4>
					<button>Cerrar Sesión</button>
				</div>
			</div>
			<div className="container _containerCentral p-3">
				<h1 className="text-center">Crea tu evento!</h1>
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
										type="text"
										id="nombre"
										className="form-control form-control-lg"></input>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<label
										htmlFor="fecha"
										className="form-label">
										Fecha del evento
									</label>
									<input
										type="date"
										id="fecha"
										className="form-control form-control-lg"></input>
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
										id="mensaje"
										rows="11"
										className="form-control"></textarea>
								</div>

								<div className="_padTop10 col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<label
										htmlFor="portada"
										className="form-label">
										Agregar foto de portada
									</label>
									<img
										className="img-fluid"
                                        alt="preview"
										src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></img>
									<input
										className="form-control form-control-sm mb-2"
										id="portada"
										type="file"></input>

									{/* Gonzalo, borra esto si es que lo puedes mejorar */}
									<label
										htmlFor="color1"
										className="form-label">
										Color Principal
									</label>
									<input
										className="form-control form-control-sm"
										type="color"
										id="color1"
										value="#ffcda9"
									/>
									<label
										htmlFor="color2"
										className="form-label">
										Color Secundario
									</label>
									<input
										className="form-control form-control-sm"
										type="color"
										id="color2"
										value="#ffbd59"
									/>
									{/* -------------------------------------------------- */}
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
													<select className="form-select form-select-sm">
														<option
															disabled
															selected>
															Seleccione...
														</option>
														<option value="BCP">
															BCP
														</option>
														<option value="Internank">
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
														Número de cuenta
													</label>
													<input
														type="text"
														id="cuenta"
														className="form-control form-control-sm"></input>
												</div>

												<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
													<label
														htmlFor="CCI"
														className="form-label _fontSize13">
														Número de cuenta
														interbancario
													</label>
													<input
														type="text"
														id="CCI"
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
										className="_textButton col-white btn btn-info btn-lg">
										Crear evento
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
