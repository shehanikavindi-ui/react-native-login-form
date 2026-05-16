import { useState } from "react";
import { Text, View, StyleSheet, Platform, StatusBar, KeyboardAvoidingView, Image, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const img = require("../assets/images/image.png");

export default function Index() {

  type FormErrors = {
    email?: string;
    password?: string;
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = ()=> {
    let errors: FormErrors = {};

    if (!email) errors.email = "Email is required!";
    if (!password) errors.password = "Password is required!";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = ()=> {
    if (validateForm()) {
      console.log("Submitted", email, password);
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f8eef9" />
      <KeyboardAvoidingView 
        style={styles.loginForm}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}>

        <Text style={styles.helloTxt}>Hello !</Text>
        <Text style={styles.subHelloTxt}>Log in on PiNK AURA</Text>

        <Image source={img} style={styles.image} resizeMode="contain"/>

        <TextInput style={styles.input} value={email} onChangeText={setEmail}
          placeholder="Enter Your Email" 
          placeholderTextColor="#969195" 
          autoCapitalize="none" />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}
        <TextInput style={styles.input} value={password} onChangeText={setPassword}
          placeholder="Enter Your Password" 
          placeholderTextColor="#969195"  
          secureTextEntry />
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}

        <Pressable style={styles.loginBtn}>
          <Text style={styles.loginBtnText} onPress={handleSubmit}>Login</Text>
        </Pressable>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS == "android" ? 25 : 0,
    paddingHorizontal: 30,
    backgroundColor: "#f8eef9",
  },
  loginForm: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    width: "100%",

    ...Platform.select ({
      ios: {
        shadowOffset: { height: 2, width: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  helloTxt: {
    fontSize: 40,
    color: "#c570ad",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subHelloTxt: {
    fontSize: 17,
    color: "#c2acbd",
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 170,
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "#f6eef7",
    marginBottom: 10,
    paddingInlineStart: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 5,
  },
  loginBtn: {
    marginTop: 10,
    marginBottom: 5,
    height: 45,
    width: "100%",
    backgroundColor: "#c570ad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  loginBtnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});