import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

export default function listItemSeperator(style) {
  return <View style={[styles.separator, style]}></View>;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.lightGrey,
    margin: 5,
  },
});
