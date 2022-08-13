import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Profile = () => {
  const { username } = useParams();
  return (
    <div>
      <main className="backgroundImage2">
        <div className="container" style={{ background: "var(--main-color)" }}>
          <div
            className="row p-0"
            style={{ background: "blue", height: "300px", overflow: "hidden" }}
          >
            <img
              src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              style={{
                objectFit: "cover",
                objectPosition: "center center",
                width: "100%",
                height: "100%",
                padding: "0",
              }}
            />
          </div>
          <div
            className="row align-items-center p-3"
            style={{
              background: "var(--main-color)",
              transform: "translateY(-100px)",
              borderRadius: "40px 40px 0 0",
            }}
          >
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <img
                src="https://cdn0.matrimonio.com.co/article-real-wedding/635/original/1280/jpg/92227.jpeg"
                alt="profile-img"
                style={{
                  borderRadius: "100%",
                  width: "200px",
                  height: "200px",
                  border: "4px solid #212529",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <h3 className="escalable-font2 d-flex gap-3 justify-content-center align-items-center">
                Paco
                <i className="fa-solid fa-heart"></i>
                Lulu
              </h3>
            </div>
            <div className="col-12 col-md-4 row gap-2 justify-content-center">
              <button
                className="btn btn-success d-flex justify-content-center align-items-center gap-3"
                style={{ maxWidth: "200px", background: "var(--button-color)" }}
              >
                <i className="fa-solid fa-message"></i>
                Enviar mensaje
              </button>
              <button
                className="btn btn-success d-flex justify-content-center align-items-center gap-3"
                style={{ maxWidth: "200px", background: "var(--button-color)" }}
              >
                <i className="fa-solid fa-gift"></i>
                Regalar
              </button>
            </div>
          </div>
          <div className="container d-grid align-items-center">
            <div className="row" style={{ transform: "translateY(-50px)" }}>
              <div className="col d-flex justify-content-center">
                <button
                  className="btn btn-dark"
                  style={{
                    fontSize: "1.5em",
                    fontWeight: "bold",
                    padding: "0 4em",
                  }}
                >
                  Post
                </button>
              </div>
              <div className="col d-flex justify-content-center">
                <button
                  className="btn btn-dark"
                  style={{
                    fontSize: "1.5em",
                    fontWeight: "bold",
                    padding: "0 4em",
                  }}
                >
                  Amigos
                </button>
              </div>
              <div className="col d-flex justify-content-center">
                <button
                  className="btn btn-dark"
                  style={{
                    fontSize: "1.5em",
                    fontWeight: "bold",
                    padding: "0 4em",
                  }}
                >
                  Fotos
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container d-flex align-items-center justify-content-center py-5"
          style={{ background: "#52525241", backdropFilter: "blur(10px)" }}
        >
          <div className="container row" style={{ height: "100%" }}>
            <div className="col-12 col-xl-5 mb-5">
              <div className="p-3 d-flex flex-column gap-3">
                <div
                  className="d-flex flex-column rounded-4 p-3"
                  style={{ background: "var(--main-color)" }}
                >
                  <h3>Description</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Qui consequatur, a quasi dolorum delectus in ea tempore,
                    fugiat exercitationem magni voluptate eos, pariatur laborum
                    aliquam molestias consectetur deserunt quisquam
                    consequuntur.
                  </p>
                </div>
                <div
                  className="d-flex flex-column rounded-4 p-3"
                  style={{ background: "var(--main-color)" }}
                >
                  <h4>Lugar de la boda:</h4>
                  <p>Lugar de la boda:</p>
                </div>
                <div
                  className="d-flex flex-column rounded-4 p-3"
                  style={{ background: "var(--main-color)" }}
                >
                  <h4>fecha de la boda:</h4>
                  <p>22 de marzo del 2023</p>
                </div>
                <div
                  className="d-flex flex-column rounded-4 p-3"
                  style={{ background: "var(--main-color)" }}
                >
                  <div className="row">
                    <div className="d-flex justify-content-center">
                      <h2>Comprometidos</h2>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <h3>daniray</h3>
                      <h3>xpersona</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-7">
              <div className="container py-3 d-flex flex-column gap-3 ">
                <div className="container ">
                  <div
                    className="row d-flex align-items-center p-3 gap-3 rounded-4"
                    style={{ background: "var(--main-color)" }}
                  >
                    <Link
                      to={"/shoppingcart"} className="col-3 btn btn-success p-2"
                      style={{
                        background: "var(--button-color)",
                        fontWeight: "bold",
                      }}
                    >
                      Dejar una dedicatoria
                    </Link>
                    <input
                      className="col form-control p-2"
                      type="text"
                      style={{
                        background: "transparent",
                        border: "2px solid #212529",
                        fontSize: "1em",
                        fontFamily: "var(--title-font)",
                      }}
                    />
                  </div>
                </div>
                {/* aqui va lo nuevo */}
                <div
                  className="d-flex flex-column align-items-center p-4 rounded-4"
                  style={{ background: "var(--main-color)" }}
                >
                  <i className="fa-solid fa-champagne-glasses escalable-font2"></i>
                  <h3>Fecha de la boda</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
