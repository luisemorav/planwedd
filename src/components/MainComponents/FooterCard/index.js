
import styled from 'styled-components'
import { ButtonLinkView } from '../'

const Container = styled.div`
    width: 100%;
    /* height: 100vh; */
    background-color:#f4f4f4;
    /* background-color: red; */
`
const ContainerCard = styled.div`
    width: 100%;
    /* height: 50%; */
    padding: 150px 0;
    /* background-color: pink; */
    display: grid;
    place-content: center;
`
const ContainerFooter = styled.div`
    width: 100%;
    height: 200px;
    /* margin: 0 100px; */
    padding: 20px;
    border-top:3px solid #C6C6C8;
    display: flex;
    justify-content: space-around;
    `

// micro components
const Card = styled.div`
    width: 800px;
    height: 400px;
    border-radius: 20px;
    background-color: pink;
    background: url('https://images.pexels.com/photos/2165931/pexels-photo-2165931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-position: 200px center;
    background-size: cover;
    background-repeat: no-repeat;

    box-shadow: 0 5px 20px rgba(0,0,0,.35);
    display: flex;
    position: relative;
    overflow: hidden;
`
const CardContent = styled.div`
    width: 50%;
    height: 100%;
    background-color: #96D9FF;
    background: linear-gradient(124deg, rgba(198,234,255,1) 0%, rgba(150,217,255,1) 56%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    gap: 10px;
    /* align-items: center; */
`
const CardTitle = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    line-height: 3rem;
    color: rgb(0,0,0,0.8);
    `
const CardSubtitle = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(0,0,0,0.6);
`
const FooterCard = ()=>{
    return(
        <Container>
            <ContainerCard>
                <Card>
                    <CardContent>
                        <CardTitle>Que esperas, unete ya!</CardTitle>
                        <CardSubtitle>crea tu evento y haz que tu boda sea inolvidable</CardSubtitle>
                        <ButtonLinkView title="comenzar" color="white" bg="black" size="1.5rem"></ButtonLinkView>

                    </CardContent>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                    style={{
                        // background:"pink",
                        position:"absolute",
                        left:"24%",
                        top:"50%",
                        transform:"rotate(90deg) scale(1.5)",
                        
                    }}
                    ><path fill="#96D9FF" fillOpacity="1" d="M0,160L15,176C30,192,60,224,90,213.3C120,203,150,149,180,160C210,171,240,245,270,256C300,267,330,213,360,197.3C390,181,420,203,450,197.3C480,192,510,160,540,149.3C570,139,600,149,630,176C660,203,690,245,720,240C750,235,780,181,810,176C840,171,870,213,900,240C930,267,960,277,990,256C1020,235,1050,181,1080,165.3C1110,149,1140,171,1170,197.3C1200,224,1230,256,1260,261.3C1290,267,1320,245,1350,208C1380,171,1410,117,1425,90.7L1440,64L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path></svg>

                </Card>
            </ContainerCard>
            <ContainerFooter>
                    <CardSubtitle>Contactanos</CardSubtitle>
                    <CardSubtitle>Nuestras Redes</CardSubtitle>
                    <CardSubtitle>© todos los derechos reservados</CardSubtitle>
            </ContainerFooter>
        </Container>
    )
}
export default FooterCard