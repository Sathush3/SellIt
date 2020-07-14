import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

import colors from "../config/colors.js";
export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>

      <Image
        resizeMode="contain"
        style={styles.mainImage}
        source={require("../assets/chair.jpg")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    alignSelf: "flex-start",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  mainContainer: {
    backgroundColor: colors.backgroundBlack,
    flex: 1,
    flexDirection: "column",
  },
  mainImage: {
    width: "100%",
    height: "100%",
  },
});
