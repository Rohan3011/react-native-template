import { View, Text } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { Pressable } from "react-native";

const TestScreen = () => {
  return (
    <View style={{ display: "flex", width: "100%", alignItems: "center" }}>
      <Text>TestScreen</Text>
      <Animated.View
        className="px-8 py-4 w-[200px] h-[100px] mt-10 bg-blue-500 rounded shadow-xl"
        style={{ backgroundColor: "red" }}
      >
        <Pressable onPress={() => console.log("clicked")}>
          <Text className="text-white font-semibold">Button</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default TestScreen;
