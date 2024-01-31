import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export const UserInput = ({inputName}) => {
  return (
    <View style={{ marginHorizontal: 24 }}>
      <Text>{inputName}</Text>
      <TextInput style={styles.nameInput} />
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
