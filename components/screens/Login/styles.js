import { StyleSheet } from "react-native";
import colors from "../../../assets/Colors";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.primary,
    height: windowHeight,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    height:Dimensions.get("screen").height ,
  },
  container: {
    position: "absolute",
    width: 350,
    backgroundColor: colors.white,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: "silver",
    borderStyle: "solid",
  },
  logo: {
    textAlign: "center",
    padding: 20,
    fontSize: 50,
    color: colors.black,
    marginBottom: 40,
  },
  inputView: {
    alignSelf: "center",
    width: "80%",
    backgroundColor: "#465881",
    paddingRight: 5,
    borderRadius: 5,
    height: 40,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  inputText: {
    borderBottomStartRadius: 2,
    borderStyle: "solid",
    borderBottomColor: "silver",
    height: 50,
    width: "100%",
    justifyContent: "center",
    height: 50,
    color: "white",
    fontSize: 18,
  },

  loginBtn: {
    alignSelf: "center",
    width: "80%",
    backgroundColor: '#2691d9',

    borderRadius: 25,
    borderBottomWidth: 1,
    borderColor: "silver",
    borderStyle: "solid",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
   
  },
  pass: {
    color: 'grey',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 40,
  },
  signup: {
    marginTop: 30,
    textAlign: "center",
    color: "#666666",
    marginBottom: 30,
  },
  signup_link: {
    fontSize: 16,
    color: "#2691d9",
    
  },
  loginText: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
});
export default styles;
