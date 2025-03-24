import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createAnecdote } from "../services/anecdoteService"
import { useNotiDispatch } from "../context/notificationContext"

const AnecdoteForm = () => {

  const queryClient = useQueryClient()

  const dispatch = useNotiDispatch()

  const newAnecdoteMutation = useMutation({ 
    mutationFn: createAnecdote,
    onSuccess: ({content}) => {
      queryClient.invalidateQueries({queryKey: ['anecdotes']})
      dispatch({type: 'SHOW', payload: `anecdote '${content}' created`})
      setTimeout(() => dispatch({type: 'HIDE'}), 5000)
    },
    onError: () => {
      dispatch({type: 'SHOW', payload: `too short anecdote, must have length 5 or more`})
      setTimeout(() => dispatch({type: 'HIDE'}), 5000)
    }
   })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate(content)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
