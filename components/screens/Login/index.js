import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";

import firebase from "firebase/compat";


import styles from "./styles";
import RegisterScreen from "../Register";

export class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.onSignIn = this.onSignIn.bind(this);
  }
  
  onSignIn() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  render() {
    return (
      <View style={styles.background}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.logo}>Login</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              placeholderTextColor="grey"
              onChangeText={(email) => this.setState({ email })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..."
              placeholderTextColor="grey"
              onChangeText={(password) => this.setState({ password})}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.pass}>Forgot Password?</Text>
          </TouchableOpacity>
          {/* This is the Login button and when you press it it runs the onSignIn method*/}
          <TouchableOpacity style={styles.loginBtn} onPress={() => this.onSignIn()}>
            <Text style={styles.loginText} >LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signup}>
              Not a member?{" "}
              <Text onPress={() => this.props.navigation.navigate("Register Screen")} style={{ fontSize: 16, color: "#2691d9" }}>Signup</Text>
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}
export default LoginScreen;
