import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notiReducer'
import anecdoteService from '../services/anecdoteService'

const Anecdote = ({anecdote, voteHandler}) => {
    return(
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => voteHandler(anecdote)}>vote</button>
            </div>
        </div>
    )
}


const AnecdoteList = () => {

    const anecdotes = useSelector(state => { 
        if (state.filter === '')
            return [...state.anecdotes].sort((a, b) => b.votes - a.votes)
        else
            return [...state.anecdotes]
        .filter(anec => anec.content.toLowerCase().includes(state.filter.toLowerCase()))
        .sort((a, b) => b.votes - a.votes)
    })

    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
    }

    return(

        <div>
            {anecdotes.map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} voteHandler={vote}/>)}
        </div>
    )
}

export default AnecdoteList