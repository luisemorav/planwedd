import styled from "styled-components";
import GiftPayModal from '../../components/GiftPayModal'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import petitions from "../../api";
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
    height: 45%;
    background-color: white;
    background-size: cover;
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
    text-transform: capitalize;
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
    const [background, setBackground] = useState("")
    const [modalData, setModalData] = useState("")
    const [giftsList, setGiftsList] = useState("")

    const {id,userId} = useParams()

    async function getGifts(){
        const res = await petitions.getGiftsByEventId(id) 
        const {data} = await res.json()
        if(res.status === 200){
            let gifts = []
            data.forEach(e=>{
                // setGiftsList(data)
                if(e.status === true){
                    gifts.push(e)
                }
                // console.log(e.status)
            })
            setGiftsList(gifts)
            return
        }
    }
    async function getBackground(){
        console.log(userId)
        const res = await petitions.getEventByIdUser(userId)
        const {data} = await res.json()
        if(res.status === 200){
            setBackground(data[0].img_portada)
        }
    }


    const [showGiftModal, SetShowGiftModal] = useState("none")
    function showModal(id){
        giftsList.forEach(element => {
            if(element.id === id){
                setModalData(element)
            }
        });
        SetShowGiftModal("grid")
    }
    function hiddenGiftModal(){
        SetShowGiftModal("none")
    }
    useEffect(()=>{
        getGifts()
        getBackground()
    },[])
    return(
        <AllContainer>
            <GiftPayModal showGiftModal={showGiftModal} hiddenGiftModal={hiddenGiftModal} modalData={modalData}></GiftPayModal>
            <ContainerBanner style={{backgroundImage:`url('${background}')`}} />

            <Container>
                <Title1>Lista de regalos</Title1>
                <ContainerGifts>
                    {
                        giftsList &&
                        giftsList.map((e,i)=>{
                            return(
                                <CardGift key={i} >
                                    <PhotoCard><img src={e.img_regalo} alt={e.description} /></PhotoCard>
                                    <DescriptionCard>
                                        <TitleCard1>{e.nombre}</TitleCard1>
                                        <ButtonsCard>
                                            <ButtonPrice>s/{e.precio}</ButtonPrice>
                                            <ButtonCard onClick={()=>showModal(e.id)}>regalar</ButtonCard>
                                        </ButtonsCard>
                                    </DescriptionCard>
                                </CardGift>
                            )
                        })
                    }
                </ContainerGifts>
            </Container>
        </AllContainer>
    )
}
export default GiftList;