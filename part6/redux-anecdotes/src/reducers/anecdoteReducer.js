import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdoteService"

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

//const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addAnecdote(state, action) {
      state.push(action.payload)
    },
    addVote(state,action) {
      return state.map(anec => anec.id !== action.payload.id ? anec : action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getALL()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdote(anecdote))
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.addVote(anecdote)
    dispatch(addVote(newAnecdote))
  }
}

export const { addAnecdote, addVote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer