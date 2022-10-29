import URL from './config'
// import { useContext } from "react";
// import UserContext from "../context/UserContext";


const key = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2Njk3Njg0OSwianRpIjoiZjVmY2MzYzgtNDYwNy00OTI4LWEyNzQtOTgzM2YyMjk2ODZiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MywibmJmIjoxNjY2OTc2ODQ5LCJleHAiOjE2NjY5ODc2NDl9.AVlGtEPCVjWIbJSdcd_sdlVzoHIxNCcriqlzq-65hMQ`

async function getEvents(){
    const response = await fetch(URL + "/events", {
        method: "GET",
        headers: {
        accept: "application/json",}
    ,})
    const data = await response.json()
    return data
}
async function getEventByIdUser(id){
    let config = {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    };
    let res = await fetch(
        `${URL}/events${id}`,
        config
    );
    return res
}
async function getDedicatoriasByEventID(id){
    let config = {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    };
    let res = await fetch(
        `${URL}/dedications/event${id}`,
        config
    )
    return res
}


// ? GIFTS PETITIONS 
async function getGiftsByEventId(id){
    const configuration = {
        method:"GET",
        headers:{
            accept: "application/json",
        },
    }
    const res = await fetch(`${URL}/gifts/event${id}`, configuration)
    return res
}


// ! DELETE PETITIONS
// !change the key bearer
async function deleteGiftById(id){
    const configuration = {
        method:"DELETE",
        headers:{
            "accept":"aplication/json"
        }
    }
    const res = await fetch(`${URL}/gifts/${id}`, configuration)
    return res
}

//* POST Petitions
async function postGiftByEventId(data,token){
    const configuration = {
        headers:{
            ContentType:"multipart/form-data",
            accept:"application/json",
            "Authorization":`Bearer ${token}`
        },
        method:"POST",
        body:data
    }
    const res = await fetch(`${URL}/gifts`,configuration)
    return res
}
async function postDedicatoria(data){
    const dedicatoria = JSON.stringify(data)
    const configuration = {
        headers:{
            "Content-Type":"application/json",
            accept:"application/json"
        },
        method:"POST",
        body:dedicatoria
    }
    const res = await fetch(`${URL}/dedications`,configuration)
    return res
}
async function postDefaultGifts(data,token){
    const gift = JSON.stringify(data)
    const configuration = {
        headers:{
            "Content-Type":"application/json",
            accept:"application/json",
            Authorization:`Bearer ${token}`
        },
        method:"POST",
        body:gift
    }
    const res = await fetch(`${URL}/gifts/soft`,configuration)
    return res
}

const petitions = {
    getEvents,
    getEventByIdUser,
    getDedicatoriasByEventID,
    getGiftsByEventId,
    deleteGiftById,
    postGiftByEventId,
    postDedicatoria,
    postDefaultGifts
}

export default petitions