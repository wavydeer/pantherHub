import { StyleSheet } from "react-native"

import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
    container:{
        backgroundColor:'gold',
        height: windowHeight,
        alignItems: 'center',
        justifyContent:'center',

    }
    
})
export default styles;