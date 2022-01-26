import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import NewsScreen from "../../NewsScreen";
import SearchScreen from "../..";
import colors from "../../../../../assets/Colors"

// Routes--> homeTabNavigator--> SearchTabNavigator--> TopTabNavigator
const SearchTopTabNavigator = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarIndicatorStyle: { backgroundColor: colors.primary },
        tabBarIndicatorContainerStyle: {
          width: 300,
          alignSelf: "center",
          left: 25,
        },
      }}
    >
      <Tab.Screen name="Explore" component={SearchScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
    </Tab.Navigator>
  );
};

export default SearchTopTabNavigator;
