import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  SafeAreaView,
  Platform,
  Alert,
  Image,
} from "react-native";

import { useState } from "react";

export default function Todo() {
  const [entered, setEntered] = useState("");
  const [todos, setTodos] = useState([]);

  function enterTodoText(enteredValue) {
    setEntered(enteredValue);
  }

  function addTodoText() {
    if (entered != "") {
      Alert.alert("Message", "Do you want to add this todo", [
        {
          text: "Yes",
          onPress: () => {
            setTodos([...todos, entered]);
            setEntered("");
          },
        },
        { text: "No" },
      ]);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexForTodo}>
        <TextInput
          style={styles.textInput}
          onChangeText={enterTodoText}
          placeholder="Add ur Todo"
          value={entered}
          inputMode="text"
        />

        <Button title="Add Todo" color={"#FF0079FF"} onPress={addTodoText} />
      </View>

      <FlatList
        style={styles.todoList}
        data={todos}
        renderItem={(value) => {
          return <Text style={styles.todo}>{value.item}</Text>;
        }}
        ListFooterComponent={() => (
          <>
            <Image
              source={{
                width: 200,
                height: 200,
                uri: "https://picsum.photos/200/300",
              }}
            />
            <View style={{ backgroundColor: "gold", height: 50 }} />
            <View style={{ backgroundColor: "green", height: 50 }} />
            <View style={{ backgroundColor: "blue", height: 50 }} />
          </>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 29 : 0,
    // paddingTop: 30,
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  flexForTodo: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
    paddingBottom: 10,
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    width: "60%",
    borderColor: "#cccccc",
    marginRight: 5,
    padding: 5,
    paddingLeft: 15,
    fontSize: 15,
    borderRadius: 10,
  },
  todo: {
    borderWidth: 1,
    borderColor: "pink",
    marginVertical: 5,
    padding: 10,
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "#FF0079FF",
    color: "white",
    borderRadius: 10,
  },
  todoList: {
    flex: 1,
    backgroundColor: "red",
  },
});
