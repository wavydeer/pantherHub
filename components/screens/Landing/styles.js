import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../assets/Colors";

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("screen").height
  },
  container: {
    width: 150,
    height: 150 ,
    marginBottom:20,
  },
  loadingBar:{
      display:'flex',
      paddingTop:10,
      
  }
});
export default styles;
