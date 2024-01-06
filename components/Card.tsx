import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import Colors from "../constants/Colors";
import { Post } from "../app/(tabs)";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

const Card = (props: Post) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.body}>{props.body}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderColor: Colors.grey,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width: "100%",
    backgroundColor: Colors.space,
    marginVertical: 4,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },

  body: {
    fontSize: 12,
  },
});
