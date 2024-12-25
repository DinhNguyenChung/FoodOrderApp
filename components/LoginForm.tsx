import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface LoginFormProps {
  onSwitchToSignUp: () => void; // Callback để chuyển sang SignUpForm
}

const LoginForm: React.FC<LoginFormProps & { navigation: any }> = ({ onSwitchToSignUp, navigation }) => {
    const handleLogin = () => {
        navigation.navigate("Home");
    };
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <View style={styles.options}>
        <TouchableOpacity>
          <Text style={styles.rememberMe}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleLogin}
      style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSwitchToSignUp}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or login with</Text>
      <View style={styles.socialButtons}>
        <FontAwesome name="facebook" size={30} color="#3b5998" />
        <FontAwesome name="google" size={30} color="#db4a39" />
        <FontAwesome name="apple" size={30} color="#000" />
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    flex:1,
    width:"100%"
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 20,
  },
  rememberMe: {
    color: "#555",
  },
  forgotPassword: {
    color: "#007BFF",
  },
  loginButton: {
    backgroundColor: "#28a745",
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signUpText: {
    color: "#007BFF",
    marginVertical: 10,
  },
  orText: {
    marginVertical: 10,
    color: "#aaa",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
    marginTop: 10,
  },
});
