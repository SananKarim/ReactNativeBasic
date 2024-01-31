import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { UserInput } from "../components/auth/UserInput";

export const Signup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSignup}>SignUp</Text>
      <UserInput inputName="Name" />
      <UserInput inputName="Email" />
      <UserInput inputName="Password" />
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
