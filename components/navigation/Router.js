import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeTabNavigator from "../navigation/homeTabNavigator";
import RegisterScreen from "../screens/Register";
import LoginScreen from "../../components/screens/Login/index";
import LandingScreen from "../screens/Landing/index";
import styles from "../screens/Landing/styles";

//Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from '../../redux/reducers/index'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

//Firebase
import { initializeApp, onAuthStateChanged } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDVJVXJu_d1mAEEx5mL5s79MQvsty3aV2A",
  authDomain: "fir-auth-fa4ef.firebaseapp.com",
  projectId: "fir-auth-fa4ef",
  storageBucket: "fir-auth-fa4ef.appspot.com",
  messagingSenderId: "706815803394",
  appId: "1:706815803394:web:d2e92f110eab03de3e671b",
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import firebase from "firebase/compat";

const Stack = createStackNavigator();

export class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={"Landing"}
              component={LandingScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
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
        </NavigationContainer>
      );
    }
    return (

      // Provider component makes the Redux store available to any nested components that need to access the Redux store.
      <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={"Tab Navigator"} component={HomeTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }
}

export default Router;
