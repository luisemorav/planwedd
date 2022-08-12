import CheckBoxD from "../../components/Checkbox";

const CreateEvent = () => {
  return (
    <div className="backgroundImage4 pt-5">
      <div className="container">
        <h2 className="h1 text-center mb-4 fw-semibold">Crear Evento</h2>
        <div
          className="card p-4"
          style={{
            background: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="row">
            <div className="col-8">
              <div class="mb-3">
                <label class="form-label fw-semibold">Nombre del evento</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Paco y Lulu"
                />
              </div>
            </div>
            <div className="col-4">
              <div class="mb-3">
                <label class="form-label fw-semibold">Fecha del evento</label>
                <input
                  id="startDate"
                  class="form-control form-control-sm"
                  type="date"
                />
              </div>
            </div>
          </div>
          <div className="row px-3">
            <div class="card" style={{ width: "300px" }}>
              <div class="card-body">
                <h5 class="card-title">Secciones de mi página</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {" "}
                  La lista de regalos es obligatoria
                </h6>
                <div class="card-text">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked
                      disabled
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Lista de Regalos
                    </label>
                  </div>
                  <CheckBoxD label="Dedicatorias"/>
                  <CheckBoxD label="Confirmación de Asistencia"/>
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
