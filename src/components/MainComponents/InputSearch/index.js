import { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'


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
const InputSearch = ()=>{
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('')
    function handleSearch (e){
        setSearchValue(e.target.value)
    }
    function searchContent(e){
        if(e.key === 'Enter'){
            navigate('/' + searchValue)
            return
        }
    }
    return(
            <Container>
                <InputSelect 
                placeholder='buscar por nombre o por codigo' 
                onKeyDown={searchContent}
                onChange={handleSearch}
                />
                <Link to={'/' + searchValue}>
                    <i className="fa-solid fa-magnifying-glass" 
                    style={{
                        cursor:"pointer",
                        textDecoration:"none",
                        color:"black"
                        }}></i>
                </Link>
            </Container>
    )
}
export default InputSearch