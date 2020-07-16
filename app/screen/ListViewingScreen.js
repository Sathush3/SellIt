import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItems from "../components/ListItems";

export default function ListViewingScreen() {
  return (
    <View>
      <Image style={styles.Image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.listItemContainer}>
          <ListItems
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    paddingTop: 10,
  },
  listItemContainer: {
    marginTop: 40,
  },
});
