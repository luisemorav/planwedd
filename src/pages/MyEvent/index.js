import CheckBoxD from "../../components/Checkbox";
import Option from "../../components/Option";

const MyEvent = () => {
  return (
    <div className="backgroundImage4 pt-4">
      <div className="container">
        <h2 className="h1 text-center mb-2 fw-semibold">Mi Evento</h2>
        <div
          className="card p-4"
          style={{
            background: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="row">
            <div className="col-8">
              <div className="mb-3">
                <label className="form-label fw-semibold">Nombre del evento</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Paco y Lulu"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label className="form-label fw-semibold">Fecha del evento</label>
                <input
                  id="startDate"
                  className="form-control form-control-sm"
                  type="date"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-between px-3">
            <div className="card col-3">
              <div className="card-body">
                <p className="card-title h5 text-center">Secciones de mi página</p>
                <p className="card-subtitle mb-2 text-muted h6">
                  La lista de regalos es obligatoria.
                </p>
                <div className="card-text">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked
                      disabled
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Lista de Regalos
                    </label>
                  </div>
                  <CheckBoxD label="Dedicatorias" />
                  <CheckBoxD label="Confirmación de Asistencia" />
                </div>
              </div>
            </div>
            <div className="card col-4">
              <div className="card-body">
                <p className="card-title h5 text-center">
                  Foto y mensaje de bienvenida
                </p>
                <p className="card-subtitle mb-2 text-muted h6">
                  Agrega una fotografía y un mensaje que puedan ver los
                  invitados al entrar a tu página.
                </p>
                <div className="card-text">
                  <label className="form-label fw-semibold mb-0">Foto</label>
                  <input
                    type="file"
                    className="form-control form-control-sm mb-3"
                  />
                  <label className="form-label fw-semibold mb-0">
                    Mensaje de Bienvenida
                  </label>
                  <textarea className="form-control"></textarea>
                  <p
                    className="text-muted mb-0 fw-semibold text-end"
                    style={{ fontSize: "12px" }}
                  >
                    Máx 255 caracteres.
                  </p>
                </div>
              </div>
            </div>
            <div className="card col-4">
              <div className="card-body">
                <p className="card-title h5 text-center">Información bancaria</p>
                <p className="card-subtitle mb-2 text-muted h6">
                  Seleccione el banco, tipo de moneda y número de cuenta a donde
                  se realizará los depósitos.
                </p>
                <div className="card-text">
                  <label className="form-label fw-semibold mb-0">Banco</label>
                  <select
                    className="form-select form-select-sm mb-2"
                    aria-label="Default select example"
                  >
                    <option selected>BCP</option>
                    <option value="1">Interbank</option>
                    <option value="2">BBVA</option>
                    <option value="3">ScotiaBank</option>
                  </select>
                  <label className="form-label fw-semibold mb-0">Moneda</label>
                  <Option label="S/ : Soles" checked />
                  <Option label="$ : Dólares"/>
                  <label className="form-label fw-semibold mb-0">Número de Cuenta</label>
                  <input
                    type="text"
                    className="form-control form-control-sm mb-2"
                    placeholder="215-23434..."
                  />
                  <label className="form-label fw-semibold mb-0">Número de Cuenta Interbancario</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="000-215-23434..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <button className="btn btn-first col-2">
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEvent;