
import { useParams } from "react-router-dom";
import styled from "styled-components";
import petitions from "../../api";
import Swal from "sweetalert2";
const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    display: grid;
    place-content: center;
    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: .2;
        z-index: 1;
    }
    `
const CardForm = styled.form`
    width: 900px;
    height: 600px;
    position: relative;
    background-color: red;
    border-radius: 20px;
    display: flex;
    overflow: hidden;
    z-index: 5;

    @media (max-width: 1000px) {
        width: 600px;
        height: 400px;
    }
    @media (max-width: 650px) {
        width: 100vw;
        height: 100vh;
    }
`
const PhotoContainer = styled.div`
    width: 50%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    position: relative;
    img{
        position: absolute;
        bottom: 20px;
        /* margin: 0 20px; */
        border-radius: 10px;
        width: 90%;
        height: 60%;
        object-fit: cover;
        object-position: center;
    }
`
const FormContainer = styled.div`
    width: 50%;
    height: 100%;
    background-color: #f5f8fa;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`

// mini components
const TitleGift = styled.h3`
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 600;
    margin:0;
    /* text-align: center; */

`
const TitleGift2 = styled.h3`
    font-size: 1.2rem;
    font-weight: 400;
    margin:0;
    overflow: hidden;

`
const TitleGiftPrice = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    margin:0;
`
const TitleForm = styled.h4`
    font-size: 2rem;
    text-shadow: 0px 2px 6px rgba(0 ,0 ,0, 0.25);
`
const InputForm = styled.input`
    width: 100%;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 5px 10px;
    font-weight: 500;
    font-size: 1.2rem;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.15);
`
const MiniInputsContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
`
const MiniInputForm = styled.input`
width: 50%;
border-radius: 5px;
border: none;
outline: none;
padding: 5px 10px;
font-weight: 500;
font-size: 1.2rem;
box-shadow: 0px 5px 20px rgba(0,0,0,0.15);
`
const ButtonPay = styled.button`
    width: 100%;
    background-color: teal;
    color: white;
    font-weight: 800;
    border: none;
    padding: 10px;
    border-radius: 5px;
    text-transform: uppercase;
    letter-spacing: 2px;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.15);
`
const ContainerTitles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ExitButton = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
    border-radius: 50%;
    border: none;
    font-size: 1.8rem;
    width: 50px;
    height: 50px;
    background-color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.15);
    transition: color, background, 0.3s;
    &:hover{
        background-color: tomato;
        color: #f4f4f4;
    }
`
const TextAreDedicatoria = styled.textarea`
    width: 100%;
    height: 100%;
    resize: none;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 5px 10px;
    font-weight: 500;
    font-size: 1.2rem;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.15);
`
const GiftPayModal = ({showGiftModal, hiddenGiftModal,modalData, giftId, getGifts})=>{
    const {id} = useParams()
    console.log(giftId)
    function exportData(e){
        e.preventDefault()
        const {
            card_cvc,
            card_dedicatoria,
            card_expirationDate,
            card_name,
            card_number
        } = Object.fromEntries(
            new FormData(e.target)
        )
        const dedicationsJson = {
            nombre:card_name,
            contenido:card_dedicatoria,
            evento_id:Number(id)
        }
        
        Swal.fire({
            title: 'Estas seguro?',
            text: "este regalo sera eliminado si aceptas",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#008080',
            cancelButtonColor: '#ff6347',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Eliminando Regalo',
                    html: 'esto puede tardar un poco dependiendo de tu internet',
                    timerProgressBar: true,
                    showConfirmButton: false,
                    didOpen:async () => {
                        Swal.showLoading()
                        try {
                            const res = await petitions.postDedicatoria(dedicationsJson)
                            const date = await res.json()
                            const res2 = await petitions.deleteGiftById(giftId)
                            const date2 = await res2.json()
                            console.log(res)
                            console.log(res2)
                            if(res.ok && res2.ok){
                                Swal.fire({
                                    title: 'Exito!',
                                    text: "El regalo se compro con exito!",
                                    icon: 'success',
                                    confirmButtonText: 'aceptar'
                                })
                                getGifts()
                                hiddenGiftModal()
                                return
                            } else{
                                Swal.fire({
                                    title: 'Error!',
                                    text: 'al parecer hubo un error con el servidor',
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
          })

    }
    return(
        <Container style={{display:showGiftModal}}>
            <CardForm onSubmit={exportData}>
                <ExitButton onClick={hiddenGiftModal}>
                    <i className="fa-solid fa-xmark"></i>
                </ExitButton>
                <PhotoContainer>
                    <ContainerTitles>
                        <TitleGift>{modalData.nombre}</TitleGift>
                        <TitleGift2>s/{modalData.descripcion}</TitleGift2>
                        <TitleGiftPrice>s/{modalData.precio}</TitleGiftPrice>
                    </ContainerTitles>
                    <img src={modalData.img_regalo} alt=""/>
                </PhotoContainer>
                <FormContainer>
                    <TitleForm>Pasarela de pago</TitleForm>
                    <InputForm name="card_number" placeholder="numero de tarjeta" type={"number"}></InputForm>
                    <InputForm name="card_name" placeholder="Nombre"></InputForm>
                    <MiniInputsContainer>
                        <MiniInputForm name="card_expirationDate" placeholder="Fecha de Expiracion"></MiniInputForm>
                        <MiniInputForm name="card_cvc" placeholder="CVC" type={"number"}></MiniInputForm>
                    </MiniInputsContainer>
                    <TextAreDedicatoria name="card_dedicatoria" placeholder="dedicatoria"></TextAreDedicatoria>
                    <ButtonPay>Pagar</ButtonPay>
                </FormContainer>
            </CardForm>
        </Container>
    )
}
export default GiftPayModal