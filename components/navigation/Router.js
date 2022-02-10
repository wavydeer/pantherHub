import React, { Component, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeTabNavigator from "../navigation/homeTabNavigator";
import RegisterScreen from "../screens/Register";
import LoginScreen from "../../components/screens/Login/index";
import LandingScreen from "../screens/Landing/index";
import { useSelector } from "react-redux";
import { authReducer } from "../../redux/reducers";
import { ActivityIndicator, View } from "react-native";





const Stack = createStackNavigator();




const HomeStack = () => {

  return(
  <Stack.Navigator>
    <Stack.Screen name={"Tab Navigator"} component={HomeTabNavigator} />
  </Stack.Navigator>
  )
}

const AuthStack = () =>{
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      {/* <Stack.Screen
        name={"Landing"}
        component={LandingScreen}
        options={{ headerShown: false }}
      /> */}

      <Stack.Screen
        name={"Login Screen"}
        component={LoginScreen}
        options={{ headerShow: false }}
      />
      <Stack.Screen
        name={"Register Screen"}
        component={RegisterScreen}
        options={{ headerShow: false }}
            />
    </Stack.Navigator>
  )
}

const RootNavigation = () =>{
  const [loading, setLoading] = useState(false)
 const token = useSelector(state => state.authReducer.authToken)
 console.log(token)
 if(loading) {
  return (
    <View style= {{flex: 1, justifyContent: "center"}}>
      <ActivityIndicator size = "large" color = "blue"/>
    </View>
  )
}
  return(
    <NavigationContainer>

      {
        token === null ? 
        <AuthStack /> : <HomeStack />
      }
      
    </NavigationContainer>
  )
}

export const Router = () =>{
  return(
    <RootNavigation />
  )
  
}

 
    // const { loggedIn, loaded } = this.state;
    // if (!loaded) {
    //   return (
    //     <NavigationContainer>
    //       <Stack.Navigator>
    //         <Stack.Screen
    //           name={"Landing"}
    //           component={LandingScreen}
    //           options={{ headerShown: false }}
    //         />
    //       </Stack.Navigator>
    //     </NavigationContainer>
    //   );
    // }
    // if (!loggedIn) {
    //   return (
    //     <NavigationContainer>
    //       <Stack.Navigator screenOptions={{ headerShown: false }}>
    //         <Stack.Screen
    //           name={"Login Screen"}
    //           component={LoginScreen}
    //           options={{ headerShow: false }}
    //         />
    //         <Stack.Screen
    //           name={"Register Screen"}
    //           component={RegisterScreen}
    //           options={{ headerShow: false }}
    //         />
    //       </Stack.Navigator>
    //     </NavigationContainer>
    //   );
    // }
    // return (
    //   <NavigationContainer>
    //     <Stack.Navigator screenOptions={{ headerShown: false }}>
    //       <Stack.Screen name={"Tab Navigator"} component={HomeTabNavigator} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // );


//     return(
//       <NavigationContainer>
    
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
        
//                 {/* <Stack.Screen
//                   name={"Landing"}
//                   component={LandingScreen}
//                   options={{ headerShown: false }}
//                 /> */}
              
//         <Stack.Screen
//                   name={"Login Screen"}
//                   component={LoginScreen}
//                   options={{ headerShow: false }}
//                 />
//                 <Stack.Screen
//                   name={"Register Screen"}
//                   component={RegisterScreen}
//                   options={{ headerShow: false }}
//                 />
//         <Stack.Screen name={"Tab Navigator"} component={HomeTabNavigator} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     )
//   }
// }



export default Router;
