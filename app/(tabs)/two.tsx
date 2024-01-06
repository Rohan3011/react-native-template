import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { Button, Overlay } from "@rneui/themed";
import React from "react";

export default function TabTwoScreen() {
  const [visible, setVisible] = React.useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Button onPress={toggleOverlay}>
        <Text className="text-white">CLick me</Text>
      </Button>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello!</Text>
        <Text>Welcome to React Native Elements</Text>
        <Button title="Start Building" onPress={toggleOverlay} />
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
