import { useParams,Link } from "react-router-dom";
const Profile = () => {
    const { username } = useParams();
    return (
        <div>
            <main className="backgroundImage2">
                <div className="container" style={{background:'var(--main-color)'}}>
                    <div className="row p-0" style={{background:'blue',height:'300px',overflow:'hidden'}}>
                        <img src="https://scontent.flim16-2.fna.fbcdn.net/v/t39.30808-6/291055282_1477964352667216_2997685414931243401_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFK7OO1Q7sNzJb3BtIrt8sdqLhVB3aYB-aouFUHdpgH5jxOLHFRl6_NGcQaBl8g-x6sr7_mJZL3qGwCE_J7q7H0&_nc_ohc=8CiksDnMjboAX_R1Oa5&_nc_ht=scontent.flim16-2.fna&oh=00_AT_bnFQFcLoLuNrOBVHa-71BE_Hy5gf3878XWQ5SMFeAKA&oe=62FB7214" alt=""
                        style={{objectFit:'cover', objectPosition:'center center', width:'100%', height:'100%',padding:'0'}}
                        />
                    </div>
                    <div className="row align-items-center p-3" style={{background:'var(--main-color)',transform:'translateY(-100px)',borderRadius:'40px 40px 0 0'}}>
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <img src="https://cdn0.matrimonio.com.co/article-real-wedding/635/original/1280/jpg/92227.jpeg" alt="profile-img" style={{borderRadius:'100%', width:'200px',height:'200px', border:'4px solid #212529',objectFit:'cover'}}/>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <h3 className="escalable-font2 d-flex gap-3 justify-content-center align-items-center">
                                {username}
                                <i class="fa-solid fa-heart"></i>
                                xpersona
                            </h3>
                        </div>
                        <div className="col-12 col-md-4 row gap-2 justify-content-center">
                            <button className="btn btn-success d-flex justify-content-center align-items-center gap-3" style={{maxWidth:'200px', background:'var(--button-color)'}}>
                                <i class="fa-solid fa-message"></i>
                                Enviar mensaje
                            </button>
                            <Link className="container px-5" to={'/createevent'}>
                                    <button className="btn btn-success p-2 d-flex justify-content-center gap-3" style={{width:'100%',background:'var(--button-color)'}}>
                                        <i class="fa-solid fa-gift"></i>
                                        Regalar
                                    </button>
                            </Link>
                        </div>
                    </div>
                    <div className="container d-grid align-items-center">
                    <div className="row gap-3" style={{transform:'translateY(-50px)'}}>
                        <div className="col d-flex justify-content-center">
                            <button className="btn btn-dark" style={{fontSize:'1.5em',fontWeight:'bold', padding:'0 4em'}}>Post</button>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <button className="btn btn-dark" style={{fontSize:'1.5em',fontWeight:'bold', padding:'0 4em'}}>Amigos</button>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <button className="btn btn-dark" style={{fontSize:'1.5em',fontWeight:'bold', padding:'0 4em'}}>Fotos</button>
                        </div>
                    </div>
                </div>
                </div>
                
                <div className="container d-flex align-items-center justify-content-center py-5" style={{background:'#52525241',backdropFilter:'blur(10px)'}}>
                    <div className="container row" style={{height:'100%'}}>

                        
                        <div className="col-12 col-xl-5 mb-5">
                            <div className="p-3 d-flex flex-column gap-3">
                                <div className="d-flex flex-column rounded-4 p-3" style={{background:'var(--main-color)'}}>
                                    <h3>Description</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequatur, a quasi dolorum delectus in ea tempore, fugiat exercitationem magni voluptate eos, pariatur laborum aliquam molestias consectetur deserunt quisquam consequuntur.</p>
                                </div>
                                <div className="d-flex flex-column rounded-4 p-3" style={{background:'var(--main-color)'}}>
                                    <h4>Lugar de la boda:</h4>
                                    <p>Lugar de la boda:</p>
                                </div>
                                <div className="d-flex flex-column rounded-4 p-3" style={{background:'var(--main-color)'}}>
                                    <h4>fecha de la boda:</h4>
                                    <p>22 de marzo del 2023</p>
                                </div>
                                <div className="d-flex flex-column rounded-4 p-3" style={{background:'var(--main-color)'}}>
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
                        <div className="col-12 col-xl-7" >
                            <div className="container py-3 d-flex flex-column gap-3 ">
                                <div className="container ">
                                    <div className="row d-flex align-items-center p-3 gap-3 rounded-4" style={{background:'var(--main-color)'}}>
                                        <button className="col-3 btn btn-success p-2" style={{background:'var(--button-color)',fontWeight:'bold'}}>Crear publicacion</button>
                                        <input className="col form-control p-2" type="text" style={{background:'transparent', border:'2px solid #212529',fontSize:'1em', fontFamily:'var(--title-font)'}}/>
                                    </div>
                                </div>
                                {/* aqui va lo nuevo */}
                                <div className="d-flex flex-column align-items-center p-4 rounded-4" style={{background:'var(--main-color)'}}>
                                    <i className="fa-solid fa-champagne-glasses escalable-font2"></i>
                                    <h3>Fecha de la boda</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main> 
        </div>
    )
}

export default Profile;