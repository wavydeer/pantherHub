import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  Avatar,
  Title,
  Paragraph,
  Caption,
  Text,
  Drawer,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";

import { onLogout } from "../../redux/actions";

import colors from "../../assets/Colors";
import ProfileScreen from "../screens/Profile";
import SettingsScreen from "../screens/Settings";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

const DrawerStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const DrawerContent = ({ navigation, props }) => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(onLogout());
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.userContainer}>
              <Avatar.Image
                source={{
                  //user Image will go here
                  uri: "https://picsum.photos/200/300?random=1",
                }}
                size={70}
              />
              <View style={styles.userDesriptionContainer}>
                <Title style={styles.title}>Malcolm Verdier</Title>
                <Caption style={styles.caption}>@mverd026</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                navigation.navigate("DrawerScreens", { screen: "Profile" });
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="settings-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />
          </Drawer.Section>
          <Drawer.Section>
            <TouchableRipple
              onPress={() => {
                //toggleTheme()
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch
                    value={
                      () => {} //this is where you switch to dark mode
                    }
                  />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          //   icon={({ color, size }) => (
          //     <Icon name="exit-to-app" color={color} size={size} />
          //   )}
          label="Log out"
          onPress={() => {
            handleLogout();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {},
  userDesriptionContainer: {
    alignItems: "center",
    marginLeft: 15,
    flexDirection: "column",
  },
  title: {
    alignItems: "center",
    fontSize: 28,
    marginTop: 10,
    fontWeight: "bold",
  },
  caption: {
    alignItems: "center",
    fontSize: 18,
    lineHeight: 20,
  },

  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default DrawerStackNavigator;
