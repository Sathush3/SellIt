import React, { useState } from "react";
import Statusbar from "expo-status-bar";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
  ImageBackground,
  TextInput,
} from "react-native";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListViewingScreen from "./app/screen/ListViewingScreen";
import MessageScreen from "./app/screen/MessageScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItems from "./app/components/ListItems";
import AccountScreen from "./app/screen/AccountScreen";
import ListingScreen from "./app/screen/ListingScreen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  console.log("app started");
  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        secureTextEntry={true}
        maxLength={5}
        onChangeText={(text) => setFirstName(text)}
        placeholder="First name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}
      />
    </Screen>
  );
}
/*<Icon name="email" size={100} />*/
