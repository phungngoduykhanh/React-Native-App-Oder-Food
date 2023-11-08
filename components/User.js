import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";

export default function SignIn({ navigation }) {
  const handleSignUpClick = () => {
    navigation.navigate("SignUp");
  };
  const handleRegisterClick = () => {
    navigation.navigate("Register");
  };
  return (
    <ImageBackground
      source={require("../assets/Pattern_ChatDetails.png")}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Image
          style={styles.iconSignIn}
          source={require("../assets/Group_SignIn.png")}
        />
        <Text style={styles.didFood}>DIDFOOD</Text>
        <Text style={styles.signinText}>Sign Up For Free</Text>

        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/Profile.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="madeofzero . . |"
            placeholderTextColor="#22242E"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/Message.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#22242E"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/Lock.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#22242E"
          />
          <Image
            source={require("../assets/Show.png")}
            style={styles.inputIconShow}
          />
        </View>
        <View style={styles.checkBox}>
          <View style={styles.check}>
            <Image
              source={require("../assets/check.png")}
              style={styles.inputIcon}
            />
          </View>
          <Text style={styles.checkText}>Keep Me Signed In</Text>
        </View>
        <View style={styles.checkBox}>
          <View style={styles.check}>
            <Image
              source={require("../assets/check.png")}
              style={styles.inputIcon}
            />
          </View>
          <Text style={styles.checkText}>Email Me About Special Pricing</Text>
        </View>
        <TouchableOpacity style={styles.createAccountButton}>
          <Text
            style={styles.createAccountButtonText}
            onPress={handleRegisterClick}
          >
            Create Account
          </Text>
        </TouchableOpacity>
        <Text style={styles.tex} onPress={handleSignUpClick}>
          already have an account?
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFF",
  },
  iconSignIn: {
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
  },
  didFood: {
    color: "#000",
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
  },
  signinText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 32,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 20,
    width: 350,
    height: 57,
    borderRadius: 15,
    marginRight: "auto",
    marginLeft: "auto",
    elevation: 3,
  },
  inputIcon: {
    marginLeft: 20,
    marginRight: 15,
    alignItems: "center",
  },
  inputIconShow: {
    marginLeft: 190,
  },
  input: {
    alignItems: "center",
    opacity: 0.3,
  },
  check: {
    width: 24,
    height: 24,
    backgroundColor: "#6B50F6",
    borderRadius: 15,
    marginLeft: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  checkBox: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkText: {
    marginLeft: 10,
    color: "#22242E",
    fontSize: 15,
    opacity: 0.5,
  },
  createAccountButton: {
    width: 175,
    height: 57,
    backgroundColor: "#6B50F6",
    borderRadius: 15,
    justifyContent: "center",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  createAccountButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
  },
  tex: {
    color: "#6B50F6",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
  },
});