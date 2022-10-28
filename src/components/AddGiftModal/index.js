import styled from "styled-components"
import { useState} from "react"
import petitions from "../../api"
import Swal from "sweetalert2"
// import {}
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.3);
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
    `
const Form = styled.form`
    width: 600px;
    background-color: white;
    border-radius: 20px;
    position: relative;
    z-index: 2;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    h2{
        text-align: center;
    }
    `
// mini components
const Input = styled.input`
    width: 100%;
    height: 50px;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 10px;
    outline: none;
    border: 2px solid #e3e3e3;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.1);
    `
const InputFile = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 10px;
    outline: none;
    border: none;
    border: 2px solid #e3e3e3;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    `
const ButtonSubmit = styled.button`
    width: 100%;
    height: 60px;
    background-color: teal;
    border: none;
    border-radius: 10px;
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    transition: background,0.3s;
    &:hover{
        /* border: 2px solid teal;
        box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
        color: teal; */
        background-color: #00b3b3;
    }
    `
const EquitButton = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
    position: absolute;
    right:10px;
    top:10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    transition: background, color, 0.3s;
    &:hover{
        color: white;
        background-color: tomato;
    }
`
const AddGiftModal = ({modal , HiddenModal, getGifts})=>{
    const [imgDefault, setImgDefault] = useState("https://www.suzukijember.com/gallery/gambar_product/default.jpg")
    const [imgDefaultSize, setImgDefaultSize] = useState("0.00")
    const [img, setImg] = useState("")

    function handleImg(e){
        setImg(e.target.files[0])
        const urlImg = URL.createObjectURL(e.target.files[0])
        const imgSize = (e.target.files[0].size / 1000000).toFixed(2)
        setImgDefault(urlImg)
        setImgDefaultSize(imgSize)
    }
    
    function exportdata(e){
        e.preventDefault()
        const {nombre, precio, descripcion} = Object.fromEntries(
            new FormData(e.target)
        )
        // !Cambiar ID de evento segun el User
        const formData = new FormData()
        formData.append("nombre",nombre)
        formData.append("img_regalo",img)
        formData.append("precio",precio)
        formData.append("descripcion",descripcion)
        formData.append("evento_id",1)
        petition(formData)
        
    }
    async function petition(data){
        Swal.fire({
            title: 'Subiendo Regalo!',
            html: 'esto puede tardar un poco dependiendo de tu internet',
            timerProgressBar: true,
            showConfirmButton: false,
            didOpen:async () => {
                Swal.showLoading()
                try {
                    const res = await petitions.postGiftByEventId(data)
                    const date = await res.json()
                    console.log(res)
                    if(res.ok){
                        Swal.fire({
                            title: 'Exito!',
                            text: date.message,
                            icon: 'success',
                            confirmButtonText: 'aceptar'
                        })
                        HiddenModal()
                        getGifts()
                        return
                    } else{
                        Swal.fire({
                            title: 'Error!',
                            text: 'al parecer hubo un error con la autorizacion',
                            icon: 'error',
                            confirmButtonText: 'aceptar'
                        })
                    }
                    
                } catch (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'al parecer hubo un error con el servidor',
                        icon: 'error',
                        confirmButtonText: 'aceptar'
                    })
                }
            },
        })
        
    }
    return(
        <Container style={{display:modal}}>


            <Form onSubmit={exportdata}>
                <EquitButton onClick={HiddenModal}><i className="fa-solid fa-xmark"></i></EquitButton>


                <h2>Agregar Nuevo regalo deseado</h2>
                <Input type={"text"} name="nombre" placeholder={"nombre de regalo"}/>
                <Input type={"text"} name="descripcion" placeholder={"descripcion del regalo"}/>
                <Input type={"number"}  name="precio" placeholder={"precio del producto"}/>
                <img src={imgDefault} style={{maxWidth:"50%", borderRadius:"20px",objectFit:"cover"}} alt="imagen de producto"/>
                <p style={{color:(imgDefaultSize > 2 )? "red":"black" }}>{imgDefaultSize}MB de 2.00MB</p>
                <p style={{
                    display:(imgDefaultSize > 2 )? "block":"none",
                    color:(imgDefaultSize > 2 )? "red":"black"
                
                }}>el archivo es demasiado grande</p>

                <InputFile type={"file"} name="img_regalo"  onChange={handleImg}/>



                <ButtonSubmit type="submit">Agregar</ButtonSubmit>
            </Form>
        </Container>
    )
}
export default AddGiftModal