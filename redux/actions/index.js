
import { Auth } from "aws-amplify";
import { ActivityIndicator, Alert } from "react-native";
import * as c from "../constants/index";


export const onLogin = (username, password) => {
  return async (dispatch) => {
    try {
      const userObject = await Auth.signIn(username, password);
      
      const authCurrentUser =
        userObject.challengeParam.userAttributes.preferred_username;
      dispatch({
        type: c.LOGIN,
        payload: { currentUser: authCurrentUser },
      });
    
      // check the current user
      //   console.log(userObject.challengeParam.userAttributes.preferred_username);
    } catch (error) {
      Alert.alert(error.message);
      console.log("Error: ", error);
    }
  };
};
export const onLogout = () => {
  return async (dispatch) => {
    try {
      const userObject = await Auth.signOut();
      dispatch({
        type: c.LOGOUT,
        payload: null
      });
    //   console.log(userObject.challengeParam.userAttributes.preferred_username);
    } catch(error) {
        Alert.alert(error.message)
        console.log('Error: ', error);
    }
   
  };
};
