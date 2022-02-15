import { createStackNavigator } from "@react-navigation/stack";
import { Button, Pressable, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";
import HomeScreen from "..";
import homeDrawerNavigator from "../HomeDrawerNavigation/homeDrawerNavigator";

const Stack = createStackNavigator();

const HomeTabNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Home"}
        component={homeDrawerNavigator}
        options={{
          headerTitleAlign: "center",
          headerStyle: { height: 90 },
          headerTitle: () => (
            <Image
              style={styles.logo}
              source={require("../../../../assets/images/fiuLogo.png")}
            />
          ),

          headerLeft: () => (
            <Pressable
              style={styles.profileCircle}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        }}
      />
      <Stack.Screen
        name={"HomeDrawer"}
        component={homeDrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  profileCircle: {
    backgroundColor: "black",
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
  },
  logo: {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end",
    height: 70,
    width: 70,
    resizeMode: "contain",
  },
});

export default HomeTabNavigator;
