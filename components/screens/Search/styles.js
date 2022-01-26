import { StyleSheet } from "react-native"

import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
    container:{
        backgroundColor:'green',
        height: windowHeight,
        

    }
    
})
export default styles;