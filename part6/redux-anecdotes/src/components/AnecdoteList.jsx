import { useSelector, useDispatch } from 'react-redux'
import reducer from '../reducers/anecdoteReducer'
import { addVote } from '../reducers/anecdoteReducer'

const Anecdote = ({anecdote, voteHandler}) => {
    return(
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => voteHandler(anecdote.id)}>vote</button>
            </div>
        </div>
    )
}


const AnecdoteList = () => {

    const anecdotes = useSelector(state => state).sort((a, b) => b.votes - a.votes)
    const dispatch = useDispatch(reducer)

    const vote = (id) => {
        dispatch(addVote(id))
    }

    return(

        <div>
            {anecdotes.map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} voteHandler={vote}/>)}
        </div>
    )
}

export default AnecdoteList