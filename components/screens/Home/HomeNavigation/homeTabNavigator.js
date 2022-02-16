import { createStackNavigator } from "@react-navigation/stack";
import { Button, Pressable, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";
import HomeScreen from "..";
import homeDrawerNavigator from "../HomeDrawerNavigation/homeDrawerNavigator";
import { Avatar } from "react-native-paper";
import DrawerStackNavigator from "../../../navigation/drawerStackNavigator";

import ProfileScreen from "../../Profile";
import SettingsScreen from "../../Settings";
const Stack = createStackNavigator();

const HomeTabNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Home"}
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
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <View style={styles.profileCircle}>
                <Avatar.Image
                  source={{
                    //user Image will go here
                    uri: "https://picsum.photos/200/300?random=1",
                  }}
                  size={50}
                />
              </View>
            </Pressable>
          ),
        }}
      >
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="DrawerScreens"
              component={DrawerStackNavigator}
            />
          </Stack.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  profileCircle: {
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
