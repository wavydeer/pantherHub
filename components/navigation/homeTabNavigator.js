import React, { useState, useEffect, Component } from "react";
import { View, SafeAreaView, StatusBar, TextInput } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/Search/index";
import MessageTabNavigator from "../screens/Message/MessageNavigation/MessageTabNavigator";
import ToolsScreen from "../screens/Tools/index";
import PostScreen from "../screens/Post/index";
import colors from "../../assets/Colors";
import SearchTabNavigator from "../screens/Search/SearchTabNavigator/SearchTabNavigator";

export class HomeTabNavigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Tab = createBottomTabNavigator();
    // const insets = useSafeAreaInsets; doesnt work on ios

    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: "left",
          headerTitleStyle: { fontSize: 22 },
          tabBarLabel: () => {
            return null;
          },
        tabBarStyle: { height: 100  /* +insets.bottom*/ },
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Tools") {
              iconName = focused ? "aperture" : "aperture-outline";
            } else if (route.name === "MessageTab") {
              iconName = focused
                ? "chatbox-ellipses"
                : "chatbox-ellipses-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Post") {
              iconName = focused ? "add" : "add-outline";
            }

            return (
              <Ionicons name={iconName} size={28} color={colors.primary} />
            );
          },
        })}
      >
        <Tab.Screen name={"Home"} component={HomeScreen} />
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


export default HomeTabNavigator;

