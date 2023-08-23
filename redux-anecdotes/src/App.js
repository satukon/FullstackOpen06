import { useSelector, useDispatch } from 'react-redux'
import { addAnecdote, voteAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote button clicked', id)
    dispatch(voteAnecdote(id))
  }

  const add = (event) => {
    event.preventDefault()
    console.log('add button clicked')
    const content = event.target.content.value
    event.target.content.value = ''
    dispatch(addAnecdote(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            <i>"{anecdote.content}"</i>
          </div>
          <div>
            has {anecdote.votes} votes {}
            <button onClick={() => vote(anecdote.id)}>vote</button>
            <hr></hr>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input  name="content"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App