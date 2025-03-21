import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNoti, hideNoti } from '../reducers/notiReducer'

const Anecdote = ({anecdote, voteHandler}) => {
    return(
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => voteHandler(anecdote.id, anecdote.content)}>vote</button>
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

    const vote = (id, content) => {
        dispatch(addVote(id))
        dispatch(setNoti(`you voted '${content}'`))
        setTimeout(() => dispatch(hideNoti()), 5000)
    }

    return(

        <div>
            {anecdotes.map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} voteHandler={vote}/>)}
        </div>
    )
}

export default AnecdoteList