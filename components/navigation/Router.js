import React, { Component, useEffect, useState } from "react";
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
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"Tab Navigator"} component={HomeTabNavigator} />
    </Stack.Navigator>
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
  const [isLoading, setIsLoading] = useState(true)
  const authCurrentUser = useSelector((state) => state.authReducer.currentUser);

  useEffect(()=>{
    setIsLoading(false)
  })
  if (isLoading) {
    return (
      <NavigationContainer>
        <SplashStack />
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      {authCurrentUser === null ? <AuthStack /> : <HomeStack />}
    </NavigationContainer>
  );
};

export const Router = () => {
  return <RootNavigation />;
};

export default Router;
