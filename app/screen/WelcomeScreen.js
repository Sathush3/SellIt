import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={6}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell what you don't need!!</Text>
      </View>
      <View style={styles.ButtonContainer}>
        <AppButton
          title="Login"
          pressEvent={() => console.log(" login tapped")}
        />
        <AppButton
          title="Register"
          color="secondary"
          pressEvent={() => console.log("register tapped")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logoContainer: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,

    //alignSelf: "center",
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "600",
    padding: 20,
  },
  ButtonContainer: {
    padding: 20,
    width: "100%",
  },
});
