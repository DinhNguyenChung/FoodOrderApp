import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from "react-native";
import LoginForm from '../../components/LoginForm'
import SignUpForm from "../../components/SignUpForm";

const Login = ({navigation}) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* View 1: Tên Login và Background */}
      <ImageBackground
        source={{
          uri: "https://i.ibb.co/dMfN1vP/Brown-Simple-Cute-Catering-Logo-removebg-preview.png",
        }}
        style={styles.background}
      >
        {/* <View style={styles.header}>
          <Text style={styles.headerText}>{isSignUp ? "Sign Up" : "Login"}</Text>
        </View> */}
      </ImageBackground>

      {/* Chuyển đổi giữa LoginForm và SignUpForm */}
      <View style={styles.formContainer}>
        {isSignUp ? (
          <SignUpForm onSwitchToLogin={() => setIsSignUp(false)} />
        ) : (
          <LoginForm onSwitchToSignUp={() => setIsSignUp(true)} navigation={navigation} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "orange",
    height: 350,
  },
  header: {
    position: "absolute",
    top: 310,
  },
  headerText: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  formContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
});
 