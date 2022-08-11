const ProfileForm = () => {
  return (
    <div>
      <div className="row gx-5 justify-content-center">
        <div className="col-4">
          <div className="mb-3 row">
            <label className="col-form-label fw-semibold">Nombre</label>
            <input type="text" className="form-control" id="txtNombre" />
          </div>
        </div>
        <div className="col-4">
          <div className="mb-3 row">
            <label className="col-form-label fw-semibold">Apellido</label>
            <input type="text" className="form-control" id="txtApellido" />
          </div>
        </div>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-4">
          <div className="mb-3 row">
            <label className="col-form-label fw-semibold">Mail</label>
            <input type="email" className="form-control" id="txtNombre" />
          </div>
        </div>
        <div className="col-4">
          <div className="mb-3 row">
            <label className="col-form-label fw-semibold">Teléfono</label>
            <input type="text" className="form-control" id="txtApellido" />
          </div>
        </div>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-4">
          <label className="col-form-label fw-semibold">
            Tipo de Documento
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>DNI</option>
            <option value="1">Pasaporte</option>
            <option value="2">Carnet de extranjería</option>
            <option value="3">RUC</option>
          </select>
        </div>
        <div className="col-4">
          <div className="mb-3 row">
            <label className="col-form-label fw-semibold">
              Número de Documento
            </label>
            <input type="text" className="form-control" id="txtApellido" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
