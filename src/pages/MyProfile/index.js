const MyProfile = () => {
  return (
    <div className="backgroundImage1">
      <div className="container text-center">
        <div className="row mt-3">
          <h1 className="h3">Mi Perfil</h1>
        </div>
        <div>
          <img
            src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"
            className="img-fluid"
            alt="ProfImg"
            width={200}
          />
        </div>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-4">
          <div className="mb-3 row">
            <label className="col-form-label">Nombre</label>
            <input type="text" className="form-control" id="txtNombre" />
          </div>
        </div>
        <div className="col-4">
          <div className="mb-3 row">
            <label className="col-form-label">Apellido</label>
            <input type="text" className="form-control" id="txtApellido" />
          </div>
        </div>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-4">
          <div className="mb-3 row">
            <label className="col-form-label">Mail</label>
            <input type="email" className="form-control" id="txtNombre" />
          </div>
        </div>
        <div className="col-4">
          <div className="mb-3 row">
            <label className="col-form-label">Teléfono</label>
            <input type="text" className="form-control" id="txtApellido" />
          </div>
        </div>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-4">
          <label className="col-form-label">Tipo de Documento</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>DNI</option>
            <option value="1">Pasaporte</option>
            <option value="2">Carnet de extranjería</option>
            <option value="3">RUC</option>
          </select>
        </div>
        <div className="col-4">
          <div className="mb-3 row">
            <label className="col-form-label">Número de Documento</label>
            <input type="text" className="form-control" id="txtApellido" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
