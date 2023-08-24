import { filterChange } from '../reducers/filterReducer'
import { useDispatch, useSelector } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)

  const handleChange = (event) => {
    console.log('filter input changed')
    const changedFilter = event.target.value
    dispatch(filterChange(changedFilter))
  }

  const style = {
    marginBottom: 20
  }
  
  return (
    <div style={style}>
      filter <input onChange={handleChange} value={filter}/>
    </div>
  )
}
  
export default Filter