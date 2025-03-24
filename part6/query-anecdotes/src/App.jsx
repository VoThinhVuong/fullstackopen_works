import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAll, voteAnecdote } from './services/anecdoteService'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useNotiDispatch } from './context/notificationContext'

const App = () => {

  const result = useQuery(
    {
      queryKey: ['anecdotes'],
      queryFn: getAll,
    }
  )

  const dispatch = useNotiDispatch()

  const queryClient = useQueryClient()
  
  const voteMutation = useMutation({
    mutationFn: voteAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes']})
    }
  })

  if ( result.isLoading ) {
    return <div>loading data...</div>
  }

  if ( result.isError ) {
    return <div>anecdote service not available due to problems in server</div>
  }
  

  const handleVote = (anecdote) => {
    const newAnecdote = {...anecdote, votes: anecdote.votes + 1}
    voteMutation.mutate(newAnecdote)
    dispatch({type: 'SHOW', payload: `anecdote '${anecdote.content}' voted`})
    setTimeout(() => dispatch({type: 'HIDE'}), 5000)
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
