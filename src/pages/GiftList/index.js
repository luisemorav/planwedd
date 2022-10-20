import { useState } from "react";
import GiftPayModal from '../../components/GiftPayModal'
import styled from "styled-components";

const AllContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f4f4f4;
`
const Container = styled.div`
    width: 100%;
    background-color:#f4f4f4;
`
const ContainerGifts = styled.div`
    width: 100%;
    height: calc(100% - 60px);
    /* background-color: green; */
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(3, 400px);
    /* grid-auto-columns:300px; */
    grid-auto-rows: 200px;
    justify-content: center;
    padding: 30px;
    gap: 30px;
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
// mini components =>
const Title1 = styled.h2`
    font-size: 3rem;
    text-shadow: 0px 2px 6px rgba(0 ,0 ,0, 0.25);
    text-align: center;
    padding-top: 10px;
`
const CardGift = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.10);
    display: flex;
    overflow: hidden;
    transition: .3s;
    &:hover{
        box-shadow: 0px 5px 20px rgba(0,0,0,0.20);
    }
`
const PhotoCard = styled.div`

    width: 50%;
    height: 100%;
    padding: 20px;
    img{
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`
const DescriptionCard = styled.div`
    width: 50%;
    height: 100%;
    background-color:#f5f8fa;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const TitleCard1 = styled.h3`
    font-size: 1.3rem;
    font-weight: 600;
    text-shadow: 0px 2px 6px rgba(0 ,0 ,0, 0.25);
    overflow: hidden;
    height: 75px;
`
const ButtonCard = styled.button`
    background-color: white;
    transition: border, color , background, 0.3s;
    border: 2px solid transparent;
    &:hover{
        background-color: #f4f4f4;
        color: rgba(0,0,0,0.8);
        border: 2px solid rgba(0,0,0,0.5);
    }
    font-weight: 500;
    border-radius: 5px;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.10);
    width: 100%;
`
const ButtonsCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const ButtonPrice = styled.div`
    border: none;
    border-radius: 5px;
    width: 100%;
    user-select: none;
`

const GiftList = ()=>{
    const [showGiftModal, SetShowGiftModal] = useState("none")
    function showModal(){
        SetShowGiftModal("grid")
    }
    function hiddenGiftModal(){
        SetShowGiftModal("none")
    }
    return(
        <AllContainer>
            <GiftPayModal showGiftModal={showGiftModal} hiddenGiftModal={hiddenGiftModal}></GiftPayModal>
            <ContainerBanner />

            <Container>
                <Title1>Lista de regalos</Title1>
                <ContainerGifts>
                    <CardGift>
                        <PhotoCard><img src="https://home.ripley.com.pe/Attachment/WOP_5/2064260010252/2064260010252_2.jpg" alt="" /></PhotoCard>
                        <DescriptionCard>
                            <TitleCard1>Mueble verde reforzado.</TitleCard1>
                            <ButtonsCard>
                                <ButtonPrice>s/100</ButtonPrice>
                                <ButtonCard onClick={showModal}>regalar</ButtonCard>
                            </ButtonsCard>
                        </DescriptionCard>
                    </CardGift>
                    <CardGift>
                        <PhotoCard><img src="https://http2.mlstatic.com/D_NQ_NP_810141-MPE49141021704_022022-O.jpg" alt="" /></PhotoCard>
                        <DescriptionCard>
                            <TitleCard1>Sillon XL color Gris.</TitleCard1>
                            <ButtonsCard>
                                <ButtonPrice>s/200</ButtonPrice>
                                <ButtonCard onClick={showModal}>regalar</ButtonCard>
                            </ButtonsCard>
                        </DescriptionCard>
                    </CardGift>
                    <CardGift>
                        <PhotoCard><img src="https://www.estilos.com.pe/121003-large_default/familia-set-de-cubiertos-48-pz-acero-inox-xy-001c.jpg" alt="" /></PhotoCard>
                        <DescriptionCard>
                            <TitleCard1>Cubiertos de metal.</TitleCard1>
                            <ButtonsCard>
                                <ButtonPrice>s/50</ButtonPrice>
                                <ButtonCard onClick={showModal}>regalar</ButtonCard>
                            </ButtonsCard>
                        </DescriptionCard>
                    </CardGift>
                    <CardGift>
                        <PhotoCard><img src="https://www.estilos.com.pe/121003-large_default/familia-set-de-cubiertos-48-pz-acero-inox-xy-001c.jpg" alt="" /></PhotoCard>
                        <DescriptionCard>
                            <TitleCard1>Cubiertos de metal.</TitleCard1>
                            <ButtonsCard>
                                <ButtonPrice>s/50</ButtonPrice>
                                <ButtonCard onClick={showModal}>regalar</ButtonCard>
                            </ButtonsCard>
                        </DescriptionCard>
                    </CardGift>
                    <CardGift>
                        <PhotoCard><img src="https://www.estilos.com.pe/121003-large_default/familia-set-de-cubiertos-48-pz-acero-inox-xy-001c.jpg" alt="" /></PhotoCard>
                        <DescriptionCard>
                            <TitleCard1>Cubiertos de metal.</TitleCard1>
                            <ButtonsCard>
                                <ButtonPrice>s/50</ButtonPrice>
                                <ButtonCard onClick={showModal}>regalar</ButtonCard>
                            </ButtonsCard>
                        </DescriptionCard>
                    </CardGift>
                    <CardGift>
                        <PhotoCard><img src="https://www.estilos.com.pe/121003-large_default/familia-set-de-cubiertos-48-pz-acero-inox-xy-001c.jpg" alt="" /></PhotoCard>
                        <DescriptionCard>
                            <TitleCard1>Cubiertos de metal.</TitleCard1>
                            <ButtonsCard>
                                <ButtonPrice>s/50</ButtonPrice>
                                <ButtonCard onClick={showModal}>regalar</ButtonCard>
                            </ButtonsCard>
                        </DescriptionCard>
                    </CardGift>
                    <CardGift>
                        <PhotoCard><img src="https://www.estilos.com.pe/121003-large_default/familia-set-de-cubiertos-48-pz-acero-inox-xy-001c.jpg" alt="" /></PhotoCard>
                        <DescriptionCard>
                            <TitleCard1>Cubiertos de metal.</TitleCard1>
                            <ButtonsCard>
                                <ButtonPrice>s/50</ButtonPrice>
                                <ButtonCard onClick={showModal}>regalar</ButtonCard>
                            </ButtonsCard>
                        </DescriptionCard>
                    </CardGift>
                    <CardGift>
                        <PhotoCard><img src="https://www.estilos.com.pe/121003-large_default/familia-set-de-cubiertos-48-pz-acero-inox-xy-001c.jpg" alt="" /></PhotoCard>
                        <DescriptionCard>
                            <TitleCard1>Cubiertos de metal.</TitleCard1>
                            <ButtonsCard>
                                <ButtonPrice>s/50</ButtonPrice>
                                <ButtonCard onClick={showModal}>regalar</ButtonCard>
                            </ButtonsCard>
                        </DescriptionCard>
                    </CardGift>
                    <CardGift>
                        <PhotoCard><img src="https://www.estilos.com.pe/121003-large_default/familia-set-de-cubiertos-48-pz-acero-inox-xy-001c.jpg" alt="" /></PhotoCard>
                        <DescriptionCard>
                            <TitleCard1>Cubiertos de metal.</TitleCard1>
                            <ButtonsCard>
                                <ButtonPrice>s/50</ButtonPrice>
                                <ButtonCard onClick={showModal}>regalar</ButtonCard>
                            </ButtonsCard>
                        </DescriptionCard>
                    </CardGift>
                </ContainerGifts>
            </Container>
        </AllContainer>
    )
}
export default GiftList;