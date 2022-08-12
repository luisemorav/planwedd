import {Link} from 'react-router-dom'
const Register = () => {
    return(
        <div className="container" style={{maxWidth:'700px', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center'}} >
            <div className="container card p-5">
                <div className="container" style={{display:'flex', flexDirection:'column',textAlign:'center'}}>
                    <h1 style={{fontSize:'3em'}}>PLANWEED</h1>
                    <p style={{fontSize:'2em'}}>Bienvenido!</p>
                    <p style={{fontSize:'1em'}}>registrate, o si ya tienes una cuenta <Link to={'/login'}>Inicia sesion</Link></p>
                </div>
                <div className="container mt-5">
                    <form action="" className="d-flex flex-column gap-3">
                        <input 
                        className="form-control p-3" 
                        type="text" 
                        placeholder="nombre de usuario"
                        />
                        <input 
                        className="form-control p-3" 
                        type="email" 
                        placeholder="correo electronico"
                        />
                        <div class="input-group mb-3">
                            <input type="text" className="form-control p-3" placeholder="contrasenia" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-outline-success" type="button" id="button-addon2"><i class="fa-solid fa-eye"></i></button>
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" className="form-control p-3" placeholder="repetir contrasenia" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-outline-success" type="button" id="button-addon2"><i class="fa-solid fa-eye"></i></button>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-outline-success p-2">
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
                <div className="container mt-3">
                    <div style={{textAlign:'center'}}>
                        <p>o registrate con:</p>

                    </div>
                    <div className="d-flex gap-3 justify-content-center">
                        <button className="btn btn-light p-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="facebook-logo" style={{width:'30px'}}/>
                        </button>
                        <button className="btn btn-light p-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="facebook-logo" style={{width:'30px'}}/>
                        </button>
                        <button className="btn btn-light p-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="facebook-logo" style={{width:'30px'}}/>
                        </button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>

    )
}

export default Register;