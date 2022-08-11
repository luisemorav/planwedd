import { Link } from "react-router-dom";
import ProfileForm from "../../components/ProfileForm";

const MyProfile = () => {
  return (
    <div className="backgroundImage1">
      <div className="row justify-content-center">
        <div className="row mt-3 justify-content-center">
          <h2 className="h3 text-center">Mi Perfil</h2>
        </div>
        <div className="row img-profile justify-content-center">
          <img
            src="https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"
            className="img-fluid"
            alt="ProfImg"
          />
        </div>
      </div>
      <ProfileForm />
      <div className="row justify-content-center mt-3">
        <div className="col-3 text-center">
          <Link to="/" className="btn btn-first mx-2">
            Guardar cambios
          </Link>
          <Link to="/myevent" className="btn btn-first mx-2">
            Mi Evento
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
