import { useField } from '../hooks/index'
import { useNavigate } from "react-router-dom"

const CreateNew = (props) => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
    navigate('/')
    props.setNotification(`a new anecdote ${content.value} created!`)
    setTimeout(() => props.setNotification(null), 5000)
  }


  const resetBtn = () =>{
    content.reset()
    author.reset()
    info.reset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} reset=''/>
        </div>
        <div>
          author
          <input {...author} reset=''/>
        </div> 
        <div>
          url for more info
          <input {...info} reset=''/>
        </div>
        <button>create</button>
      </form>
      <button onClick={resetBtn}>reset</button>
    </div>
  )

}

export default CreateNew