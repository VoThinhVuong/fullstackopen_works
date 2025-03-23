import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getALL = async () =>{
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const anecdote = {
        content: content,
        votes: 0,
        id : (100000 * Math.random()).toFixed(0)
    }
    const response = await axios.post(baseUrl, anecdote)
    return response.data
}

const addVote = async (anecdote) => {
    const newAnecdote = {...anecdote, votes: anecdote.votes + 1}
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, newAnecdote)
    return response.data
}

export default { getALL, createNew, addVote }