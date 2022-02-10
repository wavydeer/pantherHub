import React from "react";
import { SafeAreaView, View, Text,StatusBar, Button } from "react-native";
import styles from "./styles"
import { Ionicons } from "@expo/vector-icons";
import { onLogout } from "../../../redux/actions";
import { useDispatch } from "react-redux";

const HomeScreen = () => {
  
const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(onLogout())
  }

  return(
  <View style={styles.container}>
    <StatusBar translucent backgroundColor={"transparent"} barStyle="dark-content" />
  <Text>Home screen</Text>
  <Button title="LOGOUT" onPress={handleLogout}>
    LOGOUT
  </Button>
  </View>
  )
};

export default HomeScreen;
