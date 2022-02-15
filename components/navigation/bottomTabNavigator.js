import React, { useState, useEffect, Component } from "react";
import { View, SafeAreaView, StatusBar, TextInput } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";


import HomeTabNavigator from "../screens/Home/HomeNavigation/homeTabNavigator"
import SearchScreen from "../screens/Search/index";
import MessageTabNavigator from "../screens/Message/MessageNavigation/MessageTabNavigator";
import ToolsScreen from "../screens/Tools/index";
import PostScreen from "../screens/Post/index";
import colors from "../../assets/Colors";
import SearchTabNavigator from "../screens/Search/SearchTabNavigator/SearchTabNavigator";

export class BottomTabNavigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const Tab = createBottomTabNavigator();
    //const insets = useSafeAreaInsets; //doesnt work on ios

    return (
      <Tab.Navigator
        // screenOptions={({ route }) => ({
        //   showIcon :true,
        //   headerTitleAlign: "left",
        //   headerTitleStyle: { fontSize: 22 },
        //   // tabBarLabel: () => {
        //   //   return null;
        //   // },
        //   tabBarStyle: { height: 70 /*+insets.bottom*/ },
        //   tabBarIcon: ({ focused }) => {
        //     let iconName;
            

        //     if (route.name === "Home") {
        //       iconName = focused ? "home" : "home-outline";
        //     } else if (route.name === "Tools") {
        //       iconName = focused ? "aperture" : "aperture-outline";
        //     } else if (route.name === "MessageTab") {
        //       iconName = focused
        //         ? "chatbox-ellipses"
        //         : "chatbox-ellipses-outline";
        //     } else if (route.name === "Search") {
        //       iconName = focused ? "search" : "search-outline";
        //     } else if (route.name === "Post") {
        //       iconName = focused ? "add" : "add-outline";
        //     }

        //     return (
        //       <View>
        //       <Ionicons name= {iconName} size={20} style={{backgroundColor : 'black'}} />
        //       </View>
        //     );
        //   },
        // })}
        
      >
        <Tab.Screen
          name={"HomeTab"}
          component={HomeTabNavigator}
          options={{headerShown: false,}}
          
        />
        <Tab.Screen
          name={"Search"}
          component={SearchTabNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen name={"Post"} component={PostScreen} />
        <Tab.Screen
          name={"Tools"}
          component={ToolsScreen}
          // options={{ headerShown: false }}
        />
        <Tab.Screen
          name={"MessageTab"}
          component={MessageTabNavigator}
          options={{
            //header is in MessageTab Navigator
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTabNavigator;
