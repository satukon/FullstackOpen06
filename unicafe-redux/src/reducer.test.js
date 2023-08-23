import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  test('ok is incremented', () => {
    const action = {
      type: 'OK'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })
  })

  test('bad is incremented', () => {
    const action = {
      type: 'BAD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    })
  })

  test('initial states are returned', () => {

    //Increment good by one
    const incrementAction = {
      type: 'GOOD'
    }
    const state = initialState
  
    deepFreeze(state)
    const stateAfterIncrement = counterReducer(state, incrementAction)

    expect(stateAfterIncrement).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  
    //Then reset stats, check that good is now 0
    const resetAction = {
      type: 'ZERO'
    }
    deepFreeze(stateAfterIncrement)
  
    const stateAfterReset = counterReducer(stateAfterIncrement, resetAction);
    expect(stateAfterReset).toEqual({
      good: 0,
      ok: 0,
      bad: 0
    })
  })

})