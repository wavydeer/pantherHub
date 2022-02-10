import React, {useState, useEffect} from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Button, Alert, Pressable,
} from "react-native";
import {useNavigation} from '@react-navigation/native';


import homeTabNavigator from "../../navigation/homeTabNavigator";


import styles from "./styles";
import RegisterScreen from "../Register";
import { Auth } from "aws-amplify";
import { useDispatch } from "react-redux";
import { onLogin } from "../../../redux/actions";


//Nedd to create loading feature when the user is loging in
const LoginScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    dispatch(onLogin(username,password))
    e.preventDefault();
  }

    return (
      <View style={styles.background}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.logo}>Login</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Username"
              placeholderTextColor="grey"
              value= {username}
              onChangeText={text => setUsername(text)}
              
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor="grey"
              value = {password}
              onChangeText={text => setPassword(text)}
              
          
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.pass}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* This is the Login button and when you press it it runs the onSignIn method*/}
          <Pressable style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginText} >LOGIN</Text>
          </Pressable>

          <TouchableOpacity>
            <Text style={styles.signup}>
              Not a member?{" "}
              <Text onPress={() => navigation.navigate("Register Screen")} style={{ fontSize: 16, color: "#2691d9" }}>Signup</Text>
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  
}
export default LoginScreen;
