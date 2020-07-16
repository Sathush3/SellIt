import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import Constants from "expo-constants";

import ListItems from "../components/ListItems";
import Screen from "../components/Screen";
import colors from "../config/colors";
import listItemSeperator from "../components/listItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "t1",
    description: "d1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "t2",
    description: "d2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "t3",
    description: "d3",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessageScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={listItemSeperator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    paddingTop: Constants.statusBarHeight,
  },
});
