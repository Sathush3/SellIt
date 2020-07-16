import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors.js";
export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>

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
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
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
    marginTop: 30,
    width: "100%",
    height: "100%",
  },
});
