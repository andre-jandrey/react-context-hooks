import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import { useAuth, authTypes } from '../contexts/auth'

const SignIn = () => {
    const [state, dispatch] = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSignIn() {
        console.log(email)
        dispatch({ type: authTypes.SIGNIN, payload: { email: email, password: password } });
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Email'
                style={styles.input}
                autoFocus={true}
                keyboardType='email-address'
                value={email}
                onChangeText={email => setEmail( email )}
            />
            <TextInput
                placeholder='Senha'
                style={styles.input}
                secureTextEntry={true}
                value={password}
                onChangeText={pass => setPassword( pass )}
            />
            <TouchableOpacity onPress={handleSignIn} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={styles.buttonText}>
                <Text style={styles.buttonText}>Esqueci a senha</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ccc',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'

    },
    logo: {
        width: '100%',
        height: 100,
    },
    pageHeader: {
        margin: 16,
        padding: 16,
        marginTop: 60,
        borderRadius: 8,
    },
    headerText: {
        color: '#FFFFFF',
        textAlign: 'center',
        /*fontFamily: Inter,*/
        fontWeight: "900",
        fontSize: 48,
    },
    input: {
        width: '90%',
        backgroundColor: '#F6F6F6',
        borderColor: '#E8E8E8',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
        padding: 8,
        margin: 16
    },
    button: {
        width: '90%',
        margin: 16,
        padding: 16,
        fontSize: 16,
        backgroundColor: '#5DB075',
        borderRadius: 100,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    }
})

export default SignIn