// import { useState } from "react";
import styled from "styled-components";
// import GiftList from "../GiftList";
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    position: relative;
`
const ContainerBanner = styled.div`
    width: 100%;
    height: 35%;
    background-color: pink;
    background: url('https://images.pexels.com/photos/2879822/pexels-photo-2879822.jpeg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`
const ContainerDescription = styled.div`
    width: 100%;
    height: calc(100% - 35%);
    /* padding-top: 30px; */
    /* border-top: 2px solid #C6C6C8; */
    border-bottom: 2px solid #C6C6C8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ContainerTitle = styled.div`
    width: 100%;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
`
const ContainerInformation = styled.div`
    width: 80%;
    display: flex;
`
const ContainerDedicatorias = styled.div`
    width: 100%;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    padding: 50px 0;
    position: absolute;
    background-color: #f4f4f4;
`

// miniComponents
const Title = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    color: rgba(0,0,0,0.8);
    text-align: center;
    text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
`
const TitleMini = styled.h1`
    width:100%;
    font-size: 2rem;
    font-weight: 800;
    color: rgba(0,0,0,0.8);
    text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
`
const SubTitle = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    color: rgba(0,0,0,0.6);
    text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
`
const Information = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 50px;
    `
const Buttons = styled.div`
    width: 50%;
    padding: 50px;
    display: flex;
    justify-content: end;
    align-items: center;
`
const UlContainer = styled.ul`
    margin-left: 25px;
    li{
        font-size: 1.2rem;
        font-weight: 700;
        color: rgba(0,0,0,0.6);
    }
`
const Button = styled.button`
    background-color: white;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
    border: 2px solid #C6C6C8;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const CardContainer = styled.div`
    width: 80%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* background-color: red; */
`
const Cards = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(200px 450px);
    gap: 30px;
`
const Card = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
`

const CardTitle = styled.div`
    width:100%;
    font-size: 1.3rem;
    font-weight: 800;
    color: rgba(0,0,0,0.6);
    text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
`
const CardSubtitle = styled.div`
    width:100%;
    font-size: 0.9rem;
    font-weight: 800;
    color: rgba(0,0,0,0.5);
    text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
`
const CardTime = styled.div`
    width:100%;
    font-size: 0.8rem;
    font-weight: 800;
    color: rgba(0,0,0,0.3);
    text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
`
const TitlesContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width:1500px) {
        width: 80%;
    }
`



const Perfil = ()=>{
    return(
        <Container>
            <ContainerBanner>
            </ContainerBanner>
            <ContainerDescription>
                <ContainerTitle>
                    <TitlesContainer >
                        <Title>pedro y angela</Title>
                        <SubTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam explicabo ab tempore quos tempora cumque, sed eligendi libero quae nesciunt deserunt dolorum voluptatem assumenda ducimus deleniti odit rem quis culpa?</SubTitle>
                    </TitlesContainer>
                </ContainerTitle>
                <ContainerInformation>
                    <Information>
                        <TitleMini>Lugar del evento</TitleMini>
                        <SubTitle>Av 22 de Julio Mz T Lt 24 - Asoc Fortaleza de Vitarte</SubTitle>
                        <TitleMini>Fecha</TitleMini>
                        <SubTitle>Av 22 de Julio Mz T Lt 24 - Asoc Fortaleza de Vitarte</SubTitle>
                        <TitleMini>Comprometidos</TitleMini>
                        <UlContainer>
                            <li>Pedro Aguilar Condor</li>
                            <li>Angela Guitierrez Villanueva</li>
                        </UlContainer>
                    </Information>
                    <Buttons>
                        <Button>
                            <i style={{fontSize:"4rem"}} className="fa-solid fa-gift"></i>
                            <SubTitle>Dejar Regalo</SubTitle>
                        </Button>
                    </Buttons>
                </ContainerInformation>
            </ContainerDescription>
            <ContainerDedicatorias>
                <CardContainer>
                    <TitleMini>Dedicatorias</TitleMini>
                    <Cards>
                        <Card>
                            <CardTitle>Jose Angel Reyes Perez</CardTitle>
                            <CardSubtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi molestias accusantium, officiis excepturi sequi eveniet, odit neque, ad commodi natus cupiditate incidunt molestiae repudiandae quis dolorem doloribus debitis nobis iusto!</CardSubtitle>
                            <CardTime>09/10/2022</CardTime>
                        </Card>
                        <Card>
                            <CardTitle>Jose Angel Reyes Perez</CardTitle>
                            <CardSubtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi molestias accusantium, officiis excepturi sequi eveniet, odit neque, ad commodi natus cupiditate incidunt molestiae repudiandae quis dolorem doloribus debitis nobis iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sint delectus. Earum sint aliquid magnam fugit quam necessitatibus praesentium esse! Consequuntur quod earum et, quidem temporibus maiores? Quo, exercitationem esse?</CardSubtitle>
                            <CardTime>09/10/2022</CardTime>
                        </Card>
                        <Card>
                            <CardTitle>Jose Angel Reyes Perez</CardTitle>
                            <CardSubtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi molestias accusantium, officiis excepturi sequi eveniet, odit neque, ad commodi natus cupiditate incidunt molestiae repudiandae quis dolorem doloribus debitis nobis iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sint delectus. Earum sint aliquid magnam fugit quam necessitatibus praesentium esse! Consequuntur quod earum et, quidem temporibus maiores? Quo, exercitationem esse?</CardSubtitle>
                            <CardTime>09/10/2022</CardTime>
                        </Card>
                        <Card>
                            <CardTitle>Jose Angel Reyes Perez</CardTitle>
                            <CardSubtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi molestias accusantium, officiis excepturi sequi eveniet, odit neque, ad commodi natus cupiditate incidunt molestiae repudiandae quis dolorem doloribus debitis nobis iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sint delectus. Earum sint aliquid magnam fugit quam necessitatibus praesentium esse! Consequuntur quod earum et, quidem temporibus maiores? Quo, exercitationem esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quae animi architecto atque sed quia cum, harum magnam magni adipisci rem doloremque, nemo provident, quam voluptatum. Est fugiat eligendi aperiam?</CardSubtitle>
                            <CardTime>09/10/2022</CardTime>
                        </Card>
                    </Cards>
                </CardContainer>
            </ContainerDedicatorias>
            {/* other interactions */}
            {/* <GiftList status={showListGifts}  hideGifts={hideGifts}></GiftList> */}
        </Container>
    )
}
export default Perfil
