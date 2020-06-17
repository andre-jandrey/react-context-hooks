import React, { Component, useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import { useAuth } from "../contexts/auth";

const Lots = () => {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text>Bem vindo: {user.name}</Text>
      <Text>{user.email}</Text>
      <Text>Lots</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.buttonText}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Lots;
