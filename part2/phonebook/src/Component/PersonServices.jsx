import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
    let allPersons = []
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createPerson = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const changeNumber = (newObject)=> {
    
    const request = axios.put(`${baseUrl}/${newObject.id}`, newObject)
    return request.then(response => response.data)
}

export default {getAll, createPerson, deletePerson, changeNumber}