import React from "react";
import { SafeAreaView, View, Text,StatusBar } from "react-native";
import styles from "./styles"
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = (props) => {
  return(
  <View style={styles.container}>
    <StatusBar translucent backgroundColor={"transparent"} barStyle="dark-content" />
  <Text>Home screen</Text>
  <Ionicons
              name="md-home"
              size={24}
              color={"black"}
            />
  </View>
  )
};

export default HomeScreen;
