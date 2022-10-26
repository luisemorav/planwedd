import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
`
const Title1 = styled.div`
    width: 100%;
    height: 10vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #e3e3e3;
    h2{
        font-size: 3rem;
        text-transform: uppercase;
    }
`
const GiftsContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
`
const GiftList = styled.div`
    width: 60%;
    height: 100%;
    background-color: #f4f4f4;
    display: grid;
    grid-template-columns: 400px 400px;
    grid-auto-rows: 200px;
    justify-content: center;
    gap: 30px;
    padding: 30px;
`
const GiftsDefault = styled.div`
    width: 40%;
    height: 90vh;
    background-color:#f5f8fa;
    border-left: 2px solid #e3e3e3;
    display: flex;
    flex-direction: column;
    overflow: auto;
    gap: 30px;
    padding: 30px;
`

const AddCardGift = styled.button`
    background-color: white;
    width: 100%;
    max-height: 40px;
    height: 40px;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 1.5rem;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.10);
`
const CardGiftDefault = styled.div`
    width: 100%;
    min-height: 200px;
    height: 200px;
    background-color: white;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    border-radius: 10px;
    display: flex;
    overflow: hidden;

`
// minicomponents ===> 
const CardDefaultTitle = styled.h5`
    font-size: 1.5rem;
`
const CardDefaultPrice = styled.h2`
    font-size: 1rem;
`
const CardDefaultLeftContainer = styled.div`
    width: 40%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        border-radius: 10px;
        height: 100%;
        object-fit: contain;
    }
    `
const CardDefaultRightContainer = styled.div`
    width: 60%;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`
const ButtonGiftDefault = styled.button`
    background-color: white;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.1);
    font-weight: 600;
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    transition: color, background, 0.3s;
    &:hover{
        background-color: lightgreen;
        color:white;
    }
`

// fetch Cards =============
const CardSelect = styled.div`
    border-radius: 10px;
    background-color: white;
    display: flex;
    overflow: hidden;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
`
const CardSelectLeft = styled.div`
    width: 50%;
    height: 100%;
    padding: 20px;
    img{
        border-radius: 20px;
        width: 100%;
        object-fit: contain;
    }
`
const CardSelectRight = styled.div`
    width: 50%;
    height: 100%;
    background-color: #f5f8fa;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const CardListTitle = styled.p`
    font-size: 1rem;
    font-weight: 600;
    line-height: 90%;
`
const CardListPrice = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
`
const CardListButtonDelete = styled.button`
    width: 100%;
    padding: 5px 10px;
    background-color: white;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    transition: color, background, 0.3s;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.1);
    &:hover{
        background-color: tomato;
        color: white;
    }
`

const CreateGiftList = ()=>{
    return(
        <Container>
            <Title1>
                <h2>crea tu lista de regalos</h2>
            </Title1>
            <GiftsContainer>
                <GiftList>
                    {/* ForEach This */}
                    <CardSelect>
                        <CardSelectLeft>
                            <img src="https://hogarimagen.com/wp-content/uploads/2019/03/Sillon-para-dormitorio-N%C3%B3rdica-color-negro.png" alt="" />
                        </CardSelectLeft>
                        <CardSelectRight>
                            <CardListButtonDelete>Eliminar</CardListButtonDelete>
                            <CardListTitle>Sillón Nórdica Negro – RIO</CardListTitle>
                            <CardListPrice>S/700</CardListPrice>
                        </CardSelectRight>
                    </CardSelect>
                </GiftList>
                <GiftsDefault>
                    <AddCardGift>
                        <i className="fa-solid fa-plus"></i>
                        <h4>Crear nuevo regalo</h4>
                    </AddCardGift>
                    {/* ForEach disable this when the user add the card default */}
                    <CardGiftDefault>
                        <CardDefaultLeftContainer>
                            <img src="https://hogarimagen.com/wp-content/uploads/2019/03/Sillon-para-dormitorio-N%C3%B3rdica-color-negro.png" alt="" />
                        </CardDefaultLeftContainer>
                        <CardDefaultRightContainer>
                            <ButtonGiftDefault>Agregar</ButtonGiftDefault>
                            <CardDefaultTitle>Sillón Nórdica Negro – RIO</CardDefaultTitle>
                            <CardDefaultPrice>s/700</CardDefaultPrice>
                        </CardDefaultRightContainer>
                    </CardGiftDefault>
                    
                </GiftsDefault>
            </GiftsContainer>
        </Container>
    )
}
export default CreateGiftList