import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const add = (event) => {
    event.preventDefault()
    console.log('add button clicked')
    const content = event.target.content.value
    event.target.content.value = ''
    dispatch(addAnecdote(content))
  }

  return (
    <form onSubmit={add}>
    <input name="content"/>
    <button type="submit">create</button>
  </form>
  )
}

export default AnecdoteForm