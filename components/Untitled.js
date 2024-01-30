import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./Welcome";
import WebView from "react-native-webview";

export const Untitled = () => {
  const names = ["Rayan", "Salman", "Sunny"];
  return (
    <WebView source={{ uri: "https://petshomies.com" }} />
    // <View style={styles.container}>

    //   <Text>Testing</Text>
    //   <StatusBar style="auto" />
    //   {names.map((name)=>(<Welcome key={name} name={name} />))}

    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center", //left to right
    justifyContent: "center", //top to bottom
  },
});
