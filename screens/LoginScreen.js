import React, { useEffect, useState } from "react";

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [inputEmailBgColor, setInputEmailBgColor] = useState("#F8F8F8");
  const [inputPasswordBgColor, setInputPasswordBgColor] = useState("#F8F8F8");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleLogin = () => {
    console.log("Credentials", `${email} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboard}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ImageBackground
          source={require("../assets/img/PhotoBG.jpg")}
          style={styles.image}
        >
          <View style={styles.registrationBox}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.form}>
              <TextInput
                placeholder="Email"
                style={[styles.input, { borderColor: inputEmailBgColor }]}
                onChangeText={(text) => setEmail(text)}
                onFocus={() => setInputEmailBgColor("#FF6C00")}
                onBlur={() => setInputEmailBgColor("#F8F8F8")}
                textAlign={"left"}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={[styles.input, { borderColor: inputPasswordBgColor }]}
                onChangeText={(text) => setPassword(text)}
                onFocus={() => setInputPasswordBgColor("#FF6C00")}
                onBlur={() => setInputPasswordBgColor("#F8F8F8")}
                textAlign={"left"}
              />
              {!isKeyboardVisible && (
                <View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={handleLogin}
                  >
                    <Text style={styles.btnTitle}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.link}
                    onPress={() => navigation.navigate("Registration")}
                  >
                    <Text style={styles.linkText}>
                      Don't have an account? Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  registrationBox: {
    flex: 0.5,
    position: "relative",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    marginTop: 15,
    paddingLeft:16,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#F8F8F8",
    borderRadius: 8,
  },
  btn: {
    height: 51,
    background: "#FF6C00",
    borderRadius: 100,
    borderWidth: 1,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        backgroundColor: "#FF6C00",
        borderColor: "#f0f8ff",
      },
      android: {
        backgroundColor: "#FF6C00",
        borderColor: "transparent",
      },
    }),
  },
  btnTitle: {
    color: "#f0f8ff",
    fontSize: 18,
  },
  link: {
    backgroundColor: "transparent",
    marginTop: 15,
    fontSize: 18,
    textAlign: "center",
  },
  linkText: {
    textAlign: "center",
    color: "#1B4371",
    fontSize: 18,
  },
});