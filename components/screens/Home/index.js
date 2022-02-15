import React from "react";
import { SafeAreaView, View, Text,StatusBar, Button } from "react-native";
import styles from "./styles"
import  Icon  from "react-native-vector-icons/Ionicons";
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
  <Icon
  name="ios-add"
  color="#ccc"
  size={1000}
/>
  <Button title="LOGOUT" onPress={handleLogout}>
  </Button>
  
  </View>
  )
};

export default HomeScreen;
