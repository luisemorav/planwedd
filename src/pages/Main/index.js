import {Link} from 'react-router-dom';
const Main = () => {
    return (
        <div>
            <header>
            </header>
            <main>
                <div className="backgroundImage3" style={{height:'100vh'}}>
                    <div className="container d-flex flex-column align-items-center justify-content-center p-5" style={{height:'100%'}}>
                        <div className="d-flex flex-column">
                            <h1 className="escalable-font1" style={{textTransform:'uppercase',fontFamily:'var(--title-font)', fontWeight:'900',letterSpacing:'3px',color:'white',textShadow:'0 0 20px black'}}>Adquiere o regala obsequios ya!</h1>
                            <Link to={'/register'}>
                                <button className="btn btn-success px-5 py-0 escalable-font2" style={{alignSelf:'start'}}>
                                    comprar
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container py-5">
                        <div className="row gap-3 justify-content-center ">
                        <div className="col-4 col-xl d-flex justify-content-center align-items-center py-1  gap-2 card text-center"
                            style={{minHeight:'300px',maxHeight:'400px'}}
                            >
                                <div className="d-flex align-items-end" style={{height:'50%'}}>
                                    <i class="fa-solid fa-user escalable-font1"></i>
                                </div>
                                <div style={{height:'50%'}}>
                                    <h5>Disfruta</h5>
                                    <p>Crea tu perfil y personalizalo</p>
                                </div>
                            </div>
                            <div className="col-4 col-xl d-flex justify-content-center align-items-center py-1  gap-2 card text-center"
                            style={{minHeight:'300px',maxHeight:'400px'}}
                            >
                                <div className="d-flex align-items-end" style={{height:'50%'}}>
                                    <i class="fa-solid fa-gift escalable-font1" ></i>
                                </div>
                                <div style={{height:'50%'}}>
                                    <h5>Disfruta</h5>
                                    <p>Crea tu lista de regalos para la boda</p>
                                </div>
                            </div>
                            <div className="col-4 col-xl d-flex justify-content-center align-items-center py-1  gap-2 card text-center"
                            style={{minHeight:'300px',maxHeight:'400px'}}
                            >
                                <div className="d-flex align-items-end" style={{height:'50%'}}>
                                    <i class="fa-solid fa-envelope escalable-font1" ></i>
                                </div>
                                <div style={{height:'50%'}}>
                                    <h5>Disfruta</h5>
                                    <p>Compartelo con tus amigos</p>
                                </div>
                            </div>
                            <div className="col-4 col-xl d-flex justify-content-center align-items-center py-1  gap-2 card text-center"
                            style={{minHeight:'300px',maxHeight:'400px'}}
                            >
                                <div className="d-flex align-items-end" style={{height:'50%'}}>
                                    <i class="fa-solid fa-champagne-glasses escalable-font1"></i>
                                </div>
                                <div style={{height:'50%'}}>
                                    <h5>Disfruta</h5>
                                    <p>Recibe los regalos de tus amigos en efectivo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    );
}
export default Main;