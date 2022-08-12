import { Link } from "react-router-dom";

const CardEvent = () => {
  return (
    <div className="row">
      <div
        className="card p-3 mb-3"
        style={{
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(10px)",
        }}
      >
        <p className="h5">Fecha del Evento: 10/08/2022 🎉</p>
        <div className="row justify-content-between px-3">
          <p className="h2 col-6">Nombre del evento</p>
          <Link to={"/myevent"} className="btn btn-first col-2">
            Ir al evento
          </Link>
        </div>
        <p className="h5 fw-semibold text-center">Faltan 4 días</p>
      </div>
    </div>
  );
};

export default CardEvent;
