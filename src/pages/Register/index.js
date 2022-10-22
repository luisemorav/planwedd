import { Link } from 'react-router-dom';
// import background from './register_img.jpg'
import styled from "styled-components";
import ButtonLink from '../../components/MainComponents/ButtonLink';
const Container = styled.div`
    background-color: white;
    background: url('https://images.pexels.com/photos/1295994/pexels-photo-1295994.jpeg');
    background-size: cover;
    background-position:center;
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`
// const ContainerInfo = styled.div`
//     width: 50%;
//     height: 100%;
//     background-color: pink;
//     background: url("${background}");
//     background-size: cover;
//     background-position: center center;
//     padding: 50px;
//     display: flex;
//     justify-content: center;
// `
const ContainerForm = styled.div`
    width: 50%;
    height: 90%;
    border-radius: 20px;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 50px;
    /* z-index:1; */
`
const ContainerInput = styled.div`
    width:80%;
    height: auto;
    /* background-color: red; */
`

// components
const CardRegister = styled.div`
    width: 80%;
    height: 150px;
    background-color: green;
    padding: 20px;
    /* display: grid; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    border-radius: 10px;
    background-color: #96D9FF;
    background: linear-gradient(124deg, rgba(198,234,255,1) 0%, rgba(150,217,255,1) 56%);
    box-shadow: 0 5px 20px rgba(0,0,0,.15);
    margin-bottom: 30px;
    /* flex-direction: column; */
    /* flex-wrap: wrap; */
`
const InputTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    color: rgba(60, 60, 67, 0.6);
    text-transform: capitalize;
`
const InputForm = styled.input`
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 1rem;
    background-color: white;
    border-radius: 10px;
    font-weight: 500;
    border: 2px solid #C6C6C8;
    color: rgba(60, 60, 67, 0.8);
    font-weight: 600;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
    outline: none;
`
const CardTitle = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    line-height: 3rem;
    color: rgb(0,0,0,0.8);
    width: 100%;
    /* line-height */
    `
const CardSubtitle = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(0,0,0,0.6);
`
const LinkStyled = styled(Link)`
    color: white;
    text-decoration: none;
    text-shadow: 0 2px 6px rgba(0,0,0,0.25);
`
const Register = ()=>{
    return(
        <Container>
            <ContainerForm>
                <CardRegister>
                    <CardTitle>Registrate ya!</CardTitle>
                    <CardSubtitle>ya tienes una cuenta? <LinkStyled to={'/login'}>Inicia sesion</LinkStyled></CardSubtitle>
                </CardRegister>
                <ContainerInput>
                    <InputTitle>Nombres</InputTitle>
                    <InputForm></InputForm>
                </ContainerInput>
                <ContainerInput>
                    <InputTitle>apellidos</InputTitle>
                    <InputForm></InputForm>
                </ContainerInput>
                <ContainerInput>
                    <InputTitle>DNI</InputTitle>
                    <InputForm></InputForm>
                </ContainerInput>
                <ContainerInput>
                    <InputTitle>Correo electronico</InputTitle>
                    <InputForm></InputForm>
                </ContainerInput>
                <ContainerInput>
                    <InputTitle>Contraseña</InputTitle>
                    <InputForm type={"password"}></InputForm>
                </ContainerInput>
                <ContainerInput>
                    <InputTitle>Confirmar Contraseña</InputTitle>
                    <InputForm type={"password"}></InputForm>
                </ContainerInput>
                <ContainerInput >
                    <ButtonLink title={"Registrarse"} color={"white"} bg={"#76ACFF"} size="1.5rem" width={"100%"} />
                </ContainerInput>
            </ContainerForm>
            {/* <ContainerInfo>
                <CardRegister></CardRegister>
            </ContainerInfo> */}
        </Container>
    )
}

export default Register