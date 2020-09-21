import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>My First App!</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    paddingTop: "50%",
  },
});

export default HomeScreen;
