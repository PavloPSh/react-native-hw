import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const CreatPostScreen = () => {
  const handleKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboard}>
      <View
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.topBox}>
          <Text style={styles.title}>Create Post</Text>
        </View>
        <View style={styles.bottomBox}>
          <View style={styles.imageLoader}></View>
          <Text style={styles.photoInfo}>Upload photo</Text>
          <View style={styles.form}>
            <TextInput placeholder="Title..." style={styles.inputTitle} />
            <View style={styles.inputPosition}>
              <EvilIcons
                style={styles.inputIcon}
                name="location"
                size={24}
                color="#BDBDBD"
              />
              <TextInput
                inlineImageLeft="search_icon"
                placeholder="Location..."
                style={styles.input}
              />
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
              <Text style={styles.btnTitle}>Publish</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.deleteBtn}>
            <AntDesign name="delete" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  topBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 88,

    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },
  title: {
    fontSize: 17,
    marginBottom: 11,
  },
  bottomBox: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
  imageLoader: {
    width: 343,
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  photoInfo: {
    marginTop: 8,
  },
  form: {
    marginTop: 32,
  },
  inputTitle: {
    height: 50,
    marginTop: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#E8E8E8",
  },
  input: {
    height: 50,
    marginTop: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#E8E8E8",
    paddingLeft: 25,
  },
  inputPosition: {
    position: "relative",
  },
  inputIcon: {
    position: "absolute",
    bottom: "20%",
  },
  btn: {
    height: 51,
    background: "#F6F6F6",
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        backgroundColor: "#F6F6F6",
        borderColor: "#f0f8ff",
      },
      android: {
        backgroundColor: "#F6F6F6",
        borderColor: "transparent",
      },
    }),
  },
  btnTitle: {
    color: "#BDBDBD",
    fontSize: 18,
  },
  deleteBtn: {
    height: 51,
    background: "#F6F6F6",
    borderRadius: 20,
    borderWidth: 1,
    height: 40,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 140,
    ...Platform.select({
      ios: {
        backgroundColor: "#F6F6F6",
        borderColor: "#f0f8ff",
      },
      android: {
        backgroundColor: "#F6F6F6",
        borderColor: "transparent",
      },
    }),
  },
});

export default CreatPostScreen;