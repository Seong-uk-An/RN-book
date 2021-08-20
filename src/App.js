import React from "react";
import { View } from "react-native";
import EventButton from "./components/EventButton";
import EventInput from "./components/EventInput";

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
      <EventButton />
      <EventInput />
    </View>
  );
}
