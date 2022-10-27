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


// ! DELETE PETITIONS
// !change the key bearer
async function deleteGiftById(id){
    const configuration = {
        method:"DELETE",
        headers:{
            "accept":"aplication/json",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2Njc0MTE5MiwianRpIjoiZmM1OGRmZGQtNTIzNC00YTM4LWE1N2MtM2U0NmY2MjkyYWEwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MywibmJmIjoxNjY2NzQxMTkyLCJleHAiOjE2NjY3NTE5OTJ9.lVVrsu8nwy2mibNFvkVJbeSbywf0uP1Z2Wy1ys80zIg"
        }
    }
    const res = await fetch(`${URL}/gifts/${id}`, configuration)
    return res
}

//* POST Petitions

// async function postDefaultGift(gift){
//     const configuration = {
//         method:"POST",
//         headers:{
//             "accept":"aplication/json",
//             "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2Njc0MTE5MiwianRpIjoiZmM1OGRmZGQtNTIzNC00YTM4LWE1N2MtM2U0NmY2MjkyYWEwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MywibmJmIjoxNjY2NzQxMTkyLCJleHAiOjE2NjY3NTE5OTJ9.lVVrsu8nwy2mibNFvkVJbeSbywf0uP1Z2Wy1ys80zIg"
//         }
//     }
// }
const petitions = {
    getEvents,
    getEventByIdUser,
    getDedicatoriasByEventID,
    getGiftsByEventId,
    deleteGiftById,
    // postDefaultGift
}

export default petitions