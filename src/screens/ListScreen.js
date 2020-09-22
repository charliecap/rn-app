import React from "react";
import { View, Text, Stylesheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 32 },
    { name: "Friend 2", age: 31 },
    { name: "Friend 3", age: 36 },
    { name: "Friend 4", age: 38 },
    { name: "Friend 5", age: 37 },
    { name: "Friend 6", age: 33 },
    { name: "Friend 7", age: 30 },
    { name: "Friend 8", age: 39 },
    { name: "Friend 9", age: 1 },
  ];

  return (
    <FlatList
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // element === {item: {name: 'Friend #1 }, index:0 }
        return (
          <Text style={styles.textStyle}>
            {item.name} -- Age: {item.age}
          </Text>
        );
      }}
    />
  );
};
const styles = {
  textStyle: {
    marginVertical: 50,
  },
};

export default ListScreen;
