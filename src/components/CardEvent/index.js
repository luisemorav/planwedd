// import { Link } from "react-router-dom";
// import { useState } from "react";

// const CardEvent = () => {
//   const event = JSON.parse(localStorage.getItem("evento")) || {};
//   console.log(event);
//   const [evento, setEvento] = useState(event)

//   return (
//     <div className="row">
//       <div
//         className="card p-3 mb-3"
//         style={{
//           background: "rgba(255, 255, 255, 0.25)",
//           backdropFilter: "blur(10px)",
//         }}
//       >
//         <p className="h5">Fecha del Evento: {evento.FechaEvento} 🎉</p>
//         <div className="row justify-content-between px-3">
//           <p className="h2 col-6">{evento.NombreEvento}</p>
//           <Link to={"/user/:username"} className="btn btn-first col-2">
//             Ir al evento
//           </Link>
//         </div>
//         <p className="h5 fw-semibold text-center">Faltan 3 días</p>
//       </div>
//     </div>
//   );
// };

// export default CardEvent;
