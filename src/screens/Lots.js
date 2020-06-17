import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

import { useAuth, authTypes } from '../contexts/auth'

const Lots = () => {
    const [state, dispatch] = useAuth()

    function handleSignOut() {
        dispatch({ type: authTypes.SIGNOUT });
    }

    return (
        <View style={styles.container}>
            <Text>Bem vindo: {state.user.name}</Text>
            <Text>{state.user.email}</Text>
            <Text>Lots</Text>
            <TouchableOpacity onPress={handleSignOut} style={styles.buttonText}>
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})

export default Lots
