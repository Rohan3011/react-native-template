import { StatusBar } from "expo-status-bar";
import { Button, Platform, Pressable, StyleSheet } from "react-native";

import { Text, TextInput, View } from "../components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import Colors from "../constants/Colors";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
};

export default function ModalScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="firstName"
        />
        {errors.firstName && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Last name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastName"
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
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
  form: {
    height: 280,
    display: "flex",
    backgroundColor: "green",
    width: "100%",
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
