import { useEffect } from "react";
import styled from "styled-components";
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
const Card = styled.div`
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
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    img{
        border-radius: 10px;
        width: 100%;
        object-fit: contain;
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
    /* text-align: center; */

`
const TitleGift2 = styled.h3`
    font-size: 1.5rem;
    font-weight: 400;
    /* text-align: center; */

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
const ExitButton = styled.button`
    position: absolute;
    right: 20px;
    top: 20px;
    border-radius: 50%;
    border: none;
    font-size: 1.8rem;
    width: 50px;
    height: 50px;
    background-color:white;
    color: black;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.15);
    transition: color, background, 0.3s;
    &:hover{
        background-color: tomato;
        color: #f4f4f4;
    }
`
const GiftPayModal = ({showGiftModal, hiddenGiftModal,modalData})=>{
    return(
        <Container style={{display:showGiftModal}}>
            <Card>
                <ExitButton onClick={hiddenGiftModal}>
                    <i className="fa-solid fa-xmark"></i>
                </ExitButton>
                <PhotoContainer>
                    <TitleGift>{modalData.nombre}</TitleGift>
                    <TitleGift2>s/{modalData.precio}</TitleGift2>
                    <img src={modalData.img_regalo} alt="" />
                </PhotoContainer>
                <FormContainer>
                    <TitleForm>Pasarela de pago</TitleForm>
                    <InputForm placeholder="numero de tarjeta" type={"number"}></InputForm>
                    <InputForm placeholder="Nombre"></InputForm>
                    <MiniInputsContainer>
                        <MiniInputForm placeholder="Fecha de Expiracion"></MiniInputForm>
                        <MiniInputForm placeholder="CVC" type={"number"}></MiniInputForm>
                    </MiniInputsContainer>
                    <ButtonPay>Pagar</ButtonPay>
                </FormContainer>
            </Card>
        </Container>
    )
}
export default GiftPayModal