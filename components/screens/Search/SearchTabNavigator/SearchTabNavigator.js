import React from "react";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, TextInput, Dimensions } from "react-native";
import { useIsFocused } from "@react-navigation/native";


import SearchTopTabNavigator from "./TopTabNavigator/TopTabNavigator";
import SearchBarScreen from "../SearchBarScreen/SearchBarScreen"
const Stack = createStackNavigator();

//Routes--> BottomTabNavigator--> SearchTabNavigator
const SearchTabNavigator = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [inputText, setInputText] = useState("");
  return (
    <Stack.Navigator
      screenOptions={{
        title: "",
        headerRight: () => (
          <View style={headerStyles.container}>
            <Ionicons
              style={headerStyles.icon}
              name="search"
              size={15}
              color={"grey"}
            />
            <TextInput
              style={headerStyles.input}
              placeholder="Search"
              onChange={(e) => setInputText(e.target.value)}
              underlineColorAndroid="transparent"
            />
          </View>
        ),
      }}
    >
      <Stack.Screen
        name={"TopTabNavigator"}
        component={SearchTopTabNavigator}
      />
      <Stack.Screen name={"SearchBar"} component={SearchBarScreen} />
    </Stack.Navigator>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: "#f7f3f3",
    flex: 1,
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 10,
    width: Dimensions.get("screen").width - 20,
  },
  icon: {
    paddingRight: 5,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: "#4A4949",
  },
});

export default SearchTabNavigator;
