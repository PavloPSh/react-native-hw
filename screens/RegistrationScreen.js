import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

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
  Image,
} from "react-native";

import uuid from "react-native-uuid";
import * as MediaLibrary from "expo-media-library";

import { useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { authSignUpUser } from "../redux/auth/authOperations";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const initialState = {
  nickname: "",
  email: "",
  password: "",
  userPhoto:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
};

export default function RegistrationScreen({ navigation }) {
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [inputLoginBgColor, setInputLoginBgColor] = useState("#F8F8F8");
  const [inputEmailBgColor, setInputEmailBgColor] = useState("#F8F8F8");
  const [inputPasswordBgColor, setInputPasswordBgColor] = useState("#F8F8F8");

  const [state, setState] = useState(initialState);
  const [profilePhoto, setProfilePhoto] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
  );

  const dispatch = useDispatch()

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);
  
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

  const handleRegistration = () => {
    dispatch(authSignUpUser(state));
    setState(initialState);
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      const photoLink = await uploadPhotoToServer(result.assets[0].uri);
      console.log(photoLink);
      setProfilePhoto(photoLink);
      setState((prevState) => ({ ...prevState, userPhoto: photoLink }));
    } catch (error) {
      console.log(error.message);
  }
};

  const uploadPhotoToServer = async (photo) => {
    const storage = getStorage();
    const id = uuid.v4();
    const storageRef = ref(storage, `images/${id}`);
    const resp = await fetch(photo);
    const file = await resp.blob();
    await uploadBytes(storageRef, file);
    const link = await getDownloadURL(ref(storage, `images/${id}`));
    return link;
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
          <View style={styles.photoBox}>
              <Image
                style={styles.profilePhoto}
                source={{ uri: profilePhoto }}
              />
              <TouchableOpacity
                activeOpacity={0.2}
                style={styles.addPhotoBtn}
                onPress={pickImage}
              >
                <Ionicons name="add-circle-outline" size={30} color="#FF6C00" />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.form}>
              <TextInput
                placeholder="Login"
                style={[styles.input, { borderColor: inputLoginBgColor }]}
                value={state.nickname}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, nickname: value }))
                }
                onFocus={() => setInputLoginBgColor("#FF6C00")}
                onBlur={() => setInputLoginBgColor("#F8F8F8")}
                textAlign={"left"}
              />
              <TextInput
                placeholder="Email"
                style={[styles.input, { borderColor: inputEmailBgColor }]}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                onFocus={() => setInputEmailBgColor("#FF6C00")}
                onBlur={() => setInputEmailBgColor("#F8F8F8")}
                textAlign={"left"}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={[styles.input, { borderColor: inputPasswordBgColor }]}
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
                onFocus={() => setInputPasswordBgColor("#FF6C00")}
                onBlur={() => setInputPasswordBgColor("#F8F8F8")}
                textAlign={"left"}
              />
              {!isKeyboardVisible && (
                <View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={handleRegistration}
                  >
                    <Text style={styles.btnTitle}>Sign Up</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.link}
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={styles.linkText}>
                      Already have an account? Log in
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
    flex: 0.75,
    position: "relative",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  photoBox: {
    position: "absolute",
    top: -60,
    height: 120,
    width: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  profilePhoto: {
    flex: 1,
    borderRadius: 16,
  },
  addPhotoBtn: {
    position: "absolute",
    right: -15,
    bottom: 10,
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
    paddingLeft: 16,
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
  linkText: {
    marginTop: 16,
    textAlign: "center",
    color: "#1B4371",
    fontSize: 18,
  },
});