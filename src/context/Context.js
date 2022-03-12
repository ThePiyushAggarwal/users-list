import { createContext, useReducer } from 'react'
import reducer from './Reducer'

const RANDOM_URL = 'https://randomuser.me/api'

const Context = createContext()

export const ContextProvider = ({ children }) => {
  const initialState = {
    user: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const getUsers = async () => {
    const response = await fetch(`${RANDOM_URL}/?inc=name&noinfo`)

    const data = await response.json()

    dispatch({
      type: 'GET_USERS',
      payload: data.results,
    })
  }

  return (
    <Context.Provider
      value={{
        user: state.user,
        getUsers,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
