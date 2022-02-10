import { AsyncStorage } from "@aws-amplify/core";
import { Auth } from "aws-amplify";
import * as c from "../constants/index"


// A way to get the cached token
// export const init = () => {
//     return async dispatch => {
//              let token = await AsyncStorage.getItem('token')
//              if(token !== null){
//                  console.log('token fetched')
//                  dispatch({
//                     type:c.LOGIN,
//                     payload: token
//                 })
//              }
             
// }
// }
// to get the init cached items at open do useEffect
// in app.js do 
// const init =() => {dispatch(Init())}
//useEffect(() => {
// init()
//},[])
// YOU NEED TO CLEAR THE STORAGE ON LOGOUT AsyncStorage.clear
export const onLogin = (username, password) => {
    const token = username + password; // change later
    //caching example
//  return async dispatch => {
//      let token = null;
//      if(username === true && password === true){
//          token = username + password
//          await AsyncStorage.setItem('token', token);

//      }
//      dispatch({
//             type:c.LOGIN,
//             payload: token
//      })

//  }
    // do a try catch error here to see if the user logged in succesfully

    return async dispatch => {
        try {
       const userObject = await Auth.signIn(username, password)
        dispatch({
            type:c.LOGIN,
            payload: {authToken : token }
        })
        console.log(userObject.challengeParam.userAttributes)
        
    }catch (error){
        console.log('Error: ', error);
    }
    }

}
export const onLogout = () => {
    return({
        type:c.LOGOUT,
        payload: null
    })
}