import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="backgroundImage2" style={{ with: "100%", height: "100%" }}>
      <div
        className="container"
        style={{
          maxWidth: "700px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          className="container card p-5"
          style={{
            background: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "3em" }}>PLANWEED</h1>
            <p style={{ fontSize: "2em" }}>Bienvenido, Inicia Sesion!</p>
            <p style={{ fontSize: "1em" }}>
              o si no tienes una cuenta <Link to={"/register"}>regístrate</Link>
            </p>
          </div>
          <div className="container mt-5">
            <form action="" className="d-flex flex-column gap-3">
              <input
                className="form-control p-3"
                type="text"
                placeholder="Nombre de usuario o email"
              />

              <div class="input-group mb-3">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Repetir contraseña"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-success"
                  type="button"
                  id="button-addon2"
                >
                  <i class="fa-solid fa-eye"></i>
                </button>
              </div>
              <div className="d-grid">
                <button className="btn btn-outline-success p-2">
                  Iniciar sesion
                </button>
              </div>
            </form>
          </div>
          <div className="container mt-3">
            <div style={{ textAlign: "center" }}>
              <p>o inicia sesion con:</p>
            </div>
            <div className="d-flex gap-3 justify-content-center">
              <button className="btn btn-light p-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
                  alt="facebook-logo"
                  style={{ width: "30px" }}
                />
              </button>
              <button className="btn btn-light p-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                  alt="facebook-logo"
                  style={{ width: "30px" }}
                />
              </button>
              <button className="btn btn-light p-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/0/747.png"
                  alt="facebook-logo"
                  style={{ width: "30px" }}
                />
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Login;
