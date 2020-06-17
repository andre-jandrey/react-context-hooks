import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { useAuth } from "../../contexts/auth";

import { styles } from "./styles";

const SignIn = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({ email: email, password: password });
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoFocus={true}
        keyboardType="email-address"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={(pass) => setPassword(pass)}
      />
      <TouchableOpacity onPress={handleSignIn} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.buttonText}>
        <Text style={styles.buttonText}>Esqueci a senha</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
