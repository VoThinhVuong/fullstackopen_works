import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = () => axios.get(baseUrl).then(res => res.data)

export const createAnecdote = async (anecdote) => {
    const newAnecdote = {
        content: anecdote,
        votes: 0,
        id: (100000 * Math.random()).toFixed(0)
    }
    const response = await axios.post(baseUrl,newAnecdote)
    return response.data
}

export const voteAnecdote = async (anecdote) => {
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
    return response.data
}