import {
  createStackNavigator,
  NavigationContainer,
} from "@react-navigation/stack";
import MessageScreen from "../index";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import NotificationScreen from "../NotificationScreen/index";


const Stack = createStackNavigator();
// Router --> homeTabNavigator --> MessageTabNavigator
// This navigator is to navigate between the icons in the message screen

const MessageTabNavigator = ({ navigation }) => {
  const isFocused = useIsFocused();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "left",
        headerTitleStyle: { fontSize: 25 },
        headerRight: () => (
          <View style={headerStyles.container}>
            <Ionicons
              style={headerStyles.icon}
              name={isFocused ? "add-circle-outline" : "add-circle"}
              size={24}
              color="black"
              // have ready for when creating new chat
              //   onPress={ () => navigation.navigate("Notifications")}
            />
            <Ionicons
              style={headerStyles.icon}
              name={isFocused ? "notifications-outline" : "notifications"}
              size={24}
              color="black"
              onPress={() => navigation.navigate("Notifications")}
            />
          </View>
        ),
      }}
    >
      <Stack.Screen name={"Chats"} component={MessageScreen} />
      <Stack.Screen name={"Notifications"} component={NotificationScreen} />
    </Stack.Navigator>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 10,
  },
  icon: {
    //Change the space between the icons it will do it evenly
    paddingHorizontal: 10,
  },
});

export default MessageTabNavigator;
