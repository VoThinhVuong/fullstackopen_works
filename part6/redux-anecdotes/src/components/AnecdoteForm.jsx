import { useDispatch } from 'react-redux'
import reducer from '../reducers/anecdoteReducer'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch(reducer)
    

    const add = (event) => {
        event.preventDefault()
        console.log(event.target.anecdote.value)
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(addAnecdote(anecdote))
    }
    

    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={add}>
                <div><input name='anecdote' /></div>
                <button type='submit'>create</button>
            </form>
        </div>
        
    )
}

export default AnecdoteForm