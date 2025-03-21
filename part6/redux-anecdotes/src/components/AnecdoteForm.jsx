import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNoti, hideNoti } from '../reducers/notiReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()
    

    const add = (event) => {
        event.preventDefault()
        console.log(event.target.anecdote.value)
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(addAnecdote(anecdote))
        dispatch(setNoti(`you created '${anecdote}'`))
        setTimeout(() => dispatch(hideNoti()), 5000)
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