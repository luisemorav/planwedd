import URL from './config'

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

const petitions = {
    getEvents,
    getEventByIdUser,
    getDedicatoriasByEventID,
    getGiftsByEventId
}

export default petitions