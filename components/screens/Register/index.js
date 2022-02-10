import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";


import styles from "./styles";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const onSignUp= () => {}
    return (
      <View style={styles.background}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.logo}>REGISTER</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="First Name"
              placeholderTextColor={"#D6D2C1"}
              value={name}
              onChangeText={(firstName) => this.setState({ firstName })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Last Name"
              placeholderTextColor={"#D6D2C1"}
              onChangeText={(lastName) => this.setState({ lastName })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              placeholderTextColor={"#D6D2C1"}
              onChangeText={(email) => this.setState({ email })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor={"#D6D2C1"}
              onChangeText={(password) => this.setState({ password })}
            />
          </View>
          {/* This is the Login button and when you press it it runs the onSignUp method*/}
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this.onSignUp()}
          >
            <Text style={styles.loginText}>REGISTER</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }

export default RegisterScreen;
