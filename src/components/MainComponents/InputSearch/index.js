import { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import petitions from '../../../api'

const Container = styled.div`
    /* width: 100%; */
    height: 50px;
    background-color: white;
    border: 2px solid #c6c6c8;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding-right: 20px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
    `
const InputSelect = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    outline: none;
    padding: 0px 20px 0px 10px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    &::placeholder{
        font-size: 1rem;
        font-weight: 500;
    }
    &:focus{
        cursor: text;
    }
    `
const InputSearch = ({saveInputValue,inputSearchValue})=>{

    // const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('')
    function handleSearch (e){
        setSearchValue(e.target.value.toLowerCase())
    }
    async function searchEvent(identificador){
        try {
            console.log(searchValue)
            const response = await petitions.getEvents()
            const results = response.results
            let array = []
            results.forEach(e => {
                // console.log(e.nombre_evento.toLowerCase())
                // console.log(identificador.toLowerCase())
                if(e.nombre_evento.toLowerCase().includes(identificador)){
                    array.push(e)
                    return
                }
            });
            saveInputValue(array)
            
        } catch (error) {
            
        }
    }
    function searchContent(e){
        if(e.key === 'Enter'){
            searchEvent(searchValue)
            return
        }
    }
    function searchContentByIcon(){
        searchEvent(searchValue)
    }
    return(
            <Container>
                <InputSelect 
                placeholder='buscar por nombre o por codigo' 
                onKeyDown={searchContent}
                onChange={handleSearch}
                />
                <i 
                onClick={searchContentByIcon}
                className="fa-solid fa-magnifying-glass" 
                style={{
                    cursor:"pointer",
                    textDecoration:"none",
                    color:"black"
                }}></i>
            </Container>
    )
}
export default InputSearch