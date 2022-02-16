import React, { Component, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "../navigation/bottomTabNavigator";
import RegisterScreen from "../screens/Register";
import LoginScreen from "../../components/screens/Login/index";
import LandingScreen from "../screens/Landing/index";
import { useSelector } from "react-redux";

import { ActivityIndicator, View, Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./drawerStackNavigator";
import colors from "../../assets/Colors";
import { authReducer } from "../../redux/reducers";
import DrawerStackNavigator from "./drawerStackNavigator";
import ProfileScreen from "../screens/Profile";
import SettingsScreen from "../screens/Settings";
import { Drawer } from "react-native-paper";
const Stack = createStackNavigator();
const Draw = createDrawerNavigator();
const windowWidth = Dimensions.get("window").width;

const DrawerStack = () => {
  return (
    <>
      <Draw.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          drawerType: "slide",
          drawerStyle: {
            width: windowWidth * 0.7,
          },
          activeTintColor: colors.brightGold,
          drawerActiveTintColor: colors.primary,
        }}
      >
        <Draw.Screen
          name={"Tab Navigator"}
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Draw.Navigator>
    </>
  );
};
const SplashStack = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setSplash(false);
  }, []);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={"Landing"}
        component={LandingScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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
  );
};

const RootNavigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const authCurrentUser = useSelector((state) => state.authReducer.currentUser);

  useEffect(() => {
    setIsLoading(false);
  });

  if (isLoading) {
    try {
      <NavigationContainer>
        <SplashStack />
      </NavigationContainer>;
    } catch {
      setIsLoading(false);
    }
  }

  return (
    <NavigationContainer>
      {authCurrentUser == null ? <AuthStack /> : <DrawerStack />}
    </NavigationContainer>
  );
};

export const Router = () => {
  return <RootNavigation />;
};

export default Router;
