import React, { createContext, useContext, useState } from "react";
import api from '../services/api'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function signOut() {
    return setUser(null);
  }

  async function signIn({ email, password }) {

    const response = await api.post('/auth/login', { email, password})
    console.log('Token : '+ response.data.access_token)

    api.defaults.headers.Authorization = `Bearer ${response.data.access_token}` 
  
    const response2 = await api.post('/auth/me')

    console.log(response2.data)
    setUser({ name: response2.data.name, email: response2.data.email });
  }

  async function updateUser(dispatch, user, updates) {
    //dispatch({type: 'start update', updates})
    try {
      const user = await api.post("/auth/login", {
        email: "Finn",
        password: "Williams",
      });
      //dispatch({type: 'finish update', updatedUser})
    } catch (error) {
      //dispatch({type: 'fail update', error})
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("You must be use an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
