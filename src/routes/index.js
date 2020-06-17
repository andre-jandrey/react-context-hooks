import React from 'react'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import { useAuth } from '../contexts/auth'
import { View, ActivityIndicator } from 'react-native'

const Routes = () => {
    const [state, dispatch] = useAuth()

    console.log(state);
  
    //console.log(dispatch);
    /*const { signed, loading } = useAuth()


    if (loading) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator size='large' color='#999' /></View> 
    }*/

    return state.signed ? <AppRoutes /> : <AuthRoutes />
    return <AuthRoutes />
    
}

export default Routes