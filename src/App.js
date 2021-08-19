import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MyButton from "./components/MyButton";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          marginBottom: 10,
        }}
      >
        Props
      </Text>
      <MyButton title="pprroopp" onPress={() => alert("props")} />
      <MyButton title="pprroopp" onPress={() => alert("children")}>
        Children Props
      </MyButton>
      <MyButton onPress={() => alert("default")} />
    </View>
  );
}
