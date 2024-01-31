import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export const UserInput = ({ inputName, value, setValue, textContentType }) => {
  const isPasswordInput = textContentType === "password";

  return (
    <View style={{ marginHorizontal: 24 }}>
      <Text>{inputName}</Text>
      <TextInput
        style={styles.nameInput}
        value={value}
        textContentType={textContentType}
        autoCompleteType={isPasswordInput ? "password" : textContentType}
        secureTextEntry={isPasswordInput}
        onChangeText={(text) => {
          setValue(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nameInput: {
    borderBottomWidth: 0.5,
    height: 40,
    borderBottomColor: "#8e93a1",
    marginBottom: 30,
  },
});
