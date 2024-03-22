import React, { useState, useEffect } from "react";
import { View, Text, Alert, TextInput, StyleSheet } from "react-native";

const WelcomeMessage = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (name.length === 10) {
      Alert.alert("Aviso", "O nome atingiu 10 caracteres!");
    }
  }, [name]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Text style={styles.welcomeMessage}>Seja bem-vindo, {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: "80%",
  },
  welcomeMessage: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WelcomeMessage;
