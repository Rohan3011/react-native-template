import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { Button, Overlay } from "@rneui/themed";
import React from "react";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";
import { Link } from "expo-router";

export default function TabTwoScreen() {
  const [visible, setVisible] = React.useState(false);
  const width = useSharedValue(100);
  const translateX = useSharedValue(0);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }],
    width: withSpring(width.value),
  }));

  const handlePress = () => {
    translateX.value += 50;
    width.value += 50;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>

      <Animated.View
        style={[
          {
            height: 100,
            backgroundColor: "violet",
            marginVertical: 10,
          },
          animatedStyles,
        ]}
      />
      <Button onPress={handlePress}>
        <Text className="text-white">Increase</Text>
      </Button>

      <Button onPress={toggleOverlay}>
        <Text className="text-white font-bold">CLick me</Text>
      </Button>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello!</Text>
        <Text>Welcome to React Native Elements</Text>
        <Link href="/test/">Go to Test screen</Link>
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
