import React from "react";
import { Image, View } from "react-native";
import styles from "./styles"

const LandingScreen = () => {
  return (
  <View style = {styles.background}>
    <Image style = {styles.container} source= {{uri: 'https://media.giphy.com/media/LNf3zdNq9pEX3qEJyk/giphy.gif'}}/>

  </View>
  )
};
export default LandingScreen;
