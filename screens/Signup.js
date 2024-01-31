import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { UserInput } from "../components/auth/UserInput";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.textSignup}>SignUp</Text>
      <UserInput
        inputName="Name"
        value={name}
        setValue={setName}
        textContentType="name"
      />
      <UserInput
        inputName="Email"
        value={email}
        setValue={setEmail}
        textContentType="emailAddress"
      />
      <UserInput
        inputName="Password"
        value={password}
        setValue={setPassword}
        textContentType="password"
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", //top to bottom
  },
  textSignup: {
    fontSize: 24,
    textAlign: "center",
    color: "#EB8606",
  },
});
