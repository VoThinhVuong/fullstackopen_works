import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notiReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()
    

    const add = async (event) => {
        event.preventDefault()
        console.log(event.target.anecdote.value)
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        dispatch(createAnecdote(content))
        dispatch(setNotification(`you created '${content}'`, 5))
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