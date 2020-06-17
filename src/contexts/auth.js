import React, { createContext } from 'react'


/**
 * Criação dos contextos de stado e de dispatch
 */
const AuthStateContext = createContext()
const AuthDispatchContext = createContext()


/**
 * Constantes de tipos para usar como action creators
 */
const authTypes = {
  SIGNIN : 'SIGNIN',
  SIGNOUT : 'SIGNOUT'
}

/**
 * Reducer responsável por chamar os métodos responsáveis por cada ação
 */
function authReducer(state, action) {
  switch (action.type) {
    case authTypes.SIGNIN: {
      return signIn(action.payload)
    }
    case authTypes.SIGNOUT: {
      return signOut()
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

/**
 *  Criação do provider
 */
function AuthProvider({ children }) {
  const [state, dispatch] = React.useReducer(authReducer, {auth: 0})
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

/**
 * Helper para pegar o state
 */
function useAuthState() {
  const context = React.useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider')
  }
  return context
}

/**
 * Helper para pegar o dispatch
 */
function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext)
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider')
  }
  return context
}
/**
 * Helper para trazer o state e o dispatch juntos
 */
function useAuth() {
  return [useAuthState(), useAuthDispatch()]
}


function signIn(data, state) {
  //const response = await auth.signIn()
  
  //setUser(response.user)

  //api.defaults.headers.Authorization = `Bearer ${response.token}` 

  //await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user))
  //await AsyncStorage.setItem('@RNAuth:token', response.token)

  //return { ...state, user: response.user }
  return { ...state, signed: true, user: {name: 'Jhon Doe', email: data.email} }

}

function signOut(data, state) {
  //Chama rota de logout
  //AsyncStorage.clear().then(() => {
      
  //})

  return { ...state, signed: false, user: null }
}
//Função de exemplo para requisições assincronas e dispatch das alterações no context
// user-context.js
async function updateUser(dispatch, user, updates) {
    //dispatch({type: 'start update', updates})
    try {
      const user = await api.post('/auth/login', {
        email: 'Finn',
        password: 'Williams'
      });
      //dispatch({type: 'finish update', updatedUser})
    } catch (error) {
      //dispatch({type: 'fail update', error})
    }
}
  
/**
 * Como usar isso na tela de formulario
 */
/*import {useUserState, useUserDispatch, updateUser} from './user-context'
function UserSettings() {
  const {user, status, error} = useUserState()
  const userDispatch = useUserDispatch()
  function handleSubmit(event) {
    event.preventDefault()
    updateUser(userDispatch, user, formState)
  }
  // more code...
}*/

export {AuthProvider, useAuthState, useAuthDispatch, useAuth, authTypes/*,updateUser*/}