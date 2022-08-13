import { useParams } from "react-router-dom";
const Profile = () => {
    const { username } = useParams();
    return (
        <div>
            <main className="">
                <div className="container" style={{background:'blue'}}>
                    <div className="row p-0" style={{background:'blue',height:'300px',overflow:'hidden'}}>
                        <img src="https://scontent.flim16-2.fna.fbcdn.net/v/t39.30808-6/291055282_1477964352667216_2997685414931243401_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFK7OO1Q7sNzJb3BtIrt8sdqLhVB3aYB-aouFUHdpgH5jxOLHFRl6_NGcQaBl8g-x6sr7_mJZL3qGwCE_J7q7H0&_nc_ohc=8CiksDnMjboAX_R1Oa5&_nc_ht=scontent.flim16-2.fna&oh=00_AT_bnFQFcLoLuNrOBVHa-71BE_Hy5gf3878XWQ5SMFeAKA&oe=62FB7214" alt=""
                        style={{objectFit:'cover', objectPosition:'center center', width:'100%', height:'100%',padding:'0'}}
                        />
                    </div>
                    <div className="row align-items-center p-3" style={{background:'gray',transform:'translateY(-100px)',borderRadius:'40px 40px 0 0'}}>
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <img src="https://scontent.flim16-1.fna.fbcdn.net/v/t39.30808-6/290797709_1477961596000825_1352120522964527081_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_aid=0&_nc_eui2=AeFQYxCApODZ4A0Nq6ZnhqTjL0efQDaCzNQvR59ANoLM1HGmdzVVmZYGVF5ofpJs_cULtCev0jzVxfv9ZZJ6yAGJ&_nc_ohc=FmvB_ZngwlgAX_Jc6VQ&_nc_ht=scontent.flim16-1.fna&oh=00_AT92p9Jw6o61oAwb26D8ukJdnmytXb0tA0nn_0dPtMlPBQ&oe=62FACC4D" alt="profile-img" style={{borderRadius:'100%', width:'200px', border:'4px solid black'}}/>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <h3 className="escalable-font2">{username} d ela asdasdadasdasdasdasd</h3>
                        </div>
                        <div className="col-12 col-md-4 row gap-2 justify-content-center">
                            <button className="btn btn-success" style={{maxWidth:'200px'}}>Enviar mensaje</button>
                            <button className="btn btn-success" style={{maxWidth:'200px'}}>Regalar</button>
                        </div>
                    </div>
                    <div className="container d-grid align-items-center">
                    <div className="row" style={{background:'red', transform:'translateY(-50px)'}}>
                        <div className="col d-flex justify-content-center">
                            <button className="btn btn-outline-light" style={{fontSize:'1.5em',fontWeight:'bold', padding:'0 4em'}}>Post</button>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <button className="btn btn-outline-light" style={{fontSize:'1.5em',fontWeight:'bold', padding:'0 4em'}}>Amigos</button>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <button className="btn btn-outline-light" style={{fontSize:'1.5em',fontWeight:'bold', padding:'0 4em'}}>Fotos</button>
                        </div>
                    </div>
                </div>
                </div>
                
                <div className="container">

                </div>
            </main> 
        </div>
    )
}

export default Profile;