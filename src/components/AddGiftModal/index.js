import styled from "styled-components"
import { useState} from "react"
import { useForm } from "react-hook-form"
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
const AddGiftModal = ({modal , HiddenModal})=>{
    const [imgDefault, setImgDefault] = useState("https://www.suzukijember.com/gallery/gambar_product/default.jpg")
    const [imgDefaultSize, setImgDefaultSize] = useState("0.00")

    const {postGift, handleSubmit} = useForm()
    const [img, setImg] = useState("")

    function handleImg(e){
        setImg(e.target.files[0])
        const urlImg = URL.createObjectURL(e.target.files[0])
        const imgSize = (e.target.files[0].size / 1000000).toFixed(2)
        setImgDefault(urlImg)
        setImgDefaultSize(imgSize)
        // console.log((imgSize / 1000000).toFixed(2))
    }
    // const image = URL.createObjectURL(inputFile.target.files[0]);
    // setImgpreview(image);
    // setImgsize(inputFile.target.files[0].size);
    // console.log(imgsize / 1000000);
    
    function exportdata(data){
        // e.preventDefault()
        const formData = new FormData()
        formData.append("nombre","nose")
        formData.append("description","desc")
        formData.append("img_regalo",img)
        formData.append("precio","999")
        formData.append("evento_id","1")
        console.log(formData.values())
        for (const value of formData){
            console.log(value)
        }
        petition(formData)
    }
    async function petition(data){
        const res = await fetch("http://127.0.0.1:5000/gifts", {
            headers:{
                'Content-Type':'multipart/form-data',
                accept:"application/json",
                Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2NjgwMTUwNywianRpIjoiMDExNTVkOTktMTU5Mi00ODk3LWIxYjUtNTRjODA4ZTZmNmE2IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MywibmJmIjoxNjY2ODAxNTA3LCJleHAiOjE2NjY4MTIzMDd9.J-Q0aM06W8fQ8v6Vdi2xc83H8vmxdd3PmEfwHGuwl5w"
            },
            method:"POST",
            body:data
        })
        // const date = await res.json()
        // console.log(date)
    }
    return(
        <Container style={{display:modal}}>


            <Form onSubmit={handleSubmit(exportdata)}>
                <EquitButton onClick={HiddenModal}><i className="fa-solid fa-xmark"></i></EquitButton>

                <h2>Agregar Nuevo regalo deseado</h2>
                <Input type={"text"}  placeholder={"nombre de regalo"}/>
                <Input type={"text"}  placeholder={"description"}/>
                <Input type={"number"} placeholder={"precio del producto"}/>
                <img src={imgDefault} style={{maxWidth:"50%", borderRadius:"20px",objectFit:"cover"}} alt="imagen de producto"/>
                <p style={{color:(imgDefaultSize > 2 )? "red":"black" }}>{imgDefaultSize}MB de 2.00MB</p>
                <p style={{
                    display:(imgDefaultSize > 2 )? "block":"none",
                    color:(imgDefaultSize > 2 )? "red":"black"
                
                }}>el archivo es demasiado grande</p>
                <InputFile type={"file"}  onChange={handleImg}/>
                {/* <Input type={"number"}  placeholder={"event id"}/> */}
                <ButtonSubmit type="submit">Agregar</ButtonSubmit>
            </Form>
        </Container>
    )
}
export default AddGiftModal