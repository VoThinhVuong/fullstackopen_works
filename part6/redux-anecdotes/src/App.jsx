import { useSelector, useDispatch } from 'react-redux'
import reducer from './reducers/anecdoteReducer'
import {addVote, addAnecdote} from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state).sort((a, b) => b.votes - a.votes)
  const dispatch = useDispatch(reducer)

  const vote = (id) => {
    dispatch(addVote(id))
  }

  const add = (event) => {
    event.preventDefault()
    console.log(event.target.anecdote.value)
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addAnecdote(anecdote))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App