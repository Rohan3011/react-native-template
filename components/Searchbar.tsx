import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { TextInput } from "./Themed";

const SearchBar = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        selectionColor={Colors.black}
        placeholder="what are you looking for?"
      />
      <Pressable style={styles.searchBtn}>
        {({ pressed }) => (
          <FontAwesome
            name="search"
            size={24}
            color={Colors.black}
            style={{ opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  searchBtn: {
    backgroundColor: Colors.lava,
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
  },
});
