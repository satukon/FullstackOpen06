import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'


const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <div>
      <p>
      <i>"{anecdote.content}"</i>
      </p>
      <p>
      has {anecdote.votes} votes {} <button onClick={handleClick}>vote</button>
      </p>
      <hr></hr>
    </div>
  )
}

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  const vote = (id) => {
    console.log('vote button clicked')
    dispatch(voteAnecdote(id))
  }
  
  return (
  <div>
    {anecdotes.map(anecdote => (
      <Anecdote
        key={anecdote.id}
        anecdote={anecdote}
        handleClick={() => vote(anecdote.id)}
      />
    ))}
  </div>
 )
}
export default Anecdotes