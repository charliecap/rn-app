import React from "react";
import { Text, Stylesheet, View } from "react-native";

const ComponentsScreen = () => {
  //   const greeting = <Text>"Hi, there! Thanks for checking my app out!"</Text>;
  const yourName = "Charlie";

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.textStyle2}>My name is {yourName}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 45,
  },
  textStyle2: {
    fontSize: 20,
  },
};

export default ComponentsScreen;
