import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";


export default function LoginScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Image source={ require('../assets/login.png') } style={styles.image}/>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Field with Eye Icon */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={hidePassword}
        />

        <TouchableOpacity
          onPress={() => setHidePassword(!hidePassword)}
        >
          
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f4ec",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    marginBottom: 10,
    color: '#1f2933',
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: "#ffffff",
    marginBottom: 20,
    color: '#1f2933'
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    marginBottom: 15,
    color: '#1f2933',
  },

  passwordInput: {
    flex: 1,
    height: 55
  },

  button: {
    backgroundColor: "#2e7d57",
    height: 55,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    alignSelf: "center",
    borderColor: "#63521b",
    borderWidth: 1,
    marginTop: 15,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600"
  },

  signupText: {
    textAlign: "center",
    marginTop: 20
  },

  signupLink: {
    color: "#bb8b22"
  },

  image: {
    width: 130,
    height: 130,
    alignSelf: "center",
    marginBottom: 30,
  }
});