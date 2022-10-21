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

const petitions = {
    getEvents,
}

export default petitions