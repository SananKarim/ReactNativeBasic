import { Camera, CameraType } from "expo-camera";
import React, { useEffect, useState } from "react";
import { Switch, View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function TestingCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })(setHasPermission);

  }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }

  // if (hasPermission === false) {
  //   return;
  //   <Text>No access to camera</Text>;
  // }
  const toggleSwitch = () => {
    setHasPermission((previousState) => {
      console.log("before", previousState);
      return !previousState;
    });
  };
  return (
    <View style={styles.container}>
      <Switch onValueChange={toggleSwitch} value={hasPermission} />
      <Camera>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }} 
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
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
});
