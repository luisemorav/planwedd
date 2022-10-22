import styled from 'styled-components'
const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    /* background-color: blue; */
`
const StepsTitleContainer = styled.div`
    width: 100%;
    height: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow:0 2px 4px rgba(0, 0, 0, 0.35);

`
const StepsTitle = styled.h1`
    font-size: 3rem;
    padding: 100px 0;
`
const StepsCardsContainer = styled.div`
    width: 100%;
    height:500px;
    display: flex;
    align-items: center;
`
// cards components
const StepsCard = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    width: 70%;
    height: 60%;
    border-radius: 10px;
    background-color: ${props => props.bg ? props.bg :"transparent"};
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 30px;
    box-shadow: 0px 5px 20px ${props => props.bg ? "rgba(0, 0, 0, 0.15)" : "transparent"};
    i{
        color: white;
        font-size: 10rem;
    }
`
const TimeLine = styled.div`
    min-width: 20px;
    height:calc(100% + 30px);
    background-color: #F4F4F4;
    border-radius: 10px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 10px solid black;
    /* border: 2px solid black; */
`
const BubleCount = styled.div`
    width: 20px;
    height: 20px;
    font-weight: 500;
    font-size: 0.9rem;
    border-radius:50%;
    transform: scale(3);
    background-color:#F4F4F4;
    color: rgba(60, 60, 67, 0.8);
    display: flex;
    justify-content: center;
` 

// micro components
const CardText = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    text-shadow:0 2px 4px rgba(0, 0, 0, 0.15);
    text-align: ${props => props.last ? "end" : "start"};
`


const StepsCards = ()=>{
    return(
        <Container>
            <StepsTitleContainer>
                <StepsTitle>Como crear un evento?</StepsTitle>
            </StepsTitleContainer>

            <StepsCardsContainer>
                <StepsCard>
                    <Card bg="#6BE4C0"><i className="fa-solid fa-user-plus"></i></Card>
                </StepsCard>
                <TimeLine><BubleCount>1</BubleCount></TimeLine>
                <StepsCard>
                    <Card><CardText>crea tu perfil y personalizalo a tu gusto, para que tus amigos puedan ver tu evento y darte el regalo.</CardText>
                    </Card>
                </StepsCard>
            </StepsCardsContainer>

            <StepsCardsContainer>
                <StepsCard>
                    <Card>
                        <CardText last>Crea tu lista de regalos deseado para que tus amigos y familiares lo vean.</CardText>
                    </Card>
                </StepsCard>
                <TimeLine><BubleCount>2</BubleCount></TimeLine>
                <StepsCard>
                    <Card bg="#7AE3FA"><i className="fa-solid fa-gift"></i></Card>
                </StepsCard>
            </StepsCardsContainer>

            <StepsCardsContainer>
                <StepsCard>
                    <Card bg="rgba(160, 181, 255, 1)"><i className="fa-solid fa-share"></i></Card>
                </StepsCard>
                
                <TimeLine><BubleCount>3</BubleCount></TimeLine>
                <StepsCard>
                    <Card>
                        <CardText>Comparte el link para que tus amigos puedan darte los regalos.</CardText>
                    </Card>
                </StepsCard>
            </StepsCardsContainer>

            <StepsCardsContainer>
                <StepsCard>
                    <Card>
                        <CardText last>Disfruta del regalo de tus amigos convertidos en efectivo y gastalos donde quieras.</CardText>
                    </Card>
                </StepsCard>
                <TimeLine><BubleCount>4</BubleCount></TimeLine>
                <StepsCard>
                    <Card bg="rgba(255, 178, 215, 1)"><i className="fa-regular fa-face-laugh-wink"></i></Card>
                </StepsCard>
            </StepsCardsContainer>
            <StepsCardsContainer style={{height:"250px"}}>
                <StepsCard>
                </StepsCard>
                <TimeLine></TimeLine>
                <StepsCard>
                </StepsCard>
            </StepsCardsContainer >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{
                position:'absolute', 
                bottom:'0', 
                width:'100%'
                // height:""
                }}><path fill="#f4f4f4" fillOpacity="1" d="M0,256L48,224C96,192,192,128,288,122.7C384,117,480,171,576,192C672,213,768,203,864,181.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </Container>
    )
}
export default StepsCards