import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { View, StyleSheet, TouchableOpacity } from "react-native";

export const CameraButtons = ({
  pickImage,
  handleTypeOfCamera,
  deletePhoto,
  takePic,
}) => {
  return (
    <View style={styles.uploadPhotoBox}>
      <TouchableOpacity style={styles.cameraBtn} onPress={pickImage}>
        <AntDesign name="upload" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cameraBtn} onPress={handleTypeOfCamera}>
        <MaterialIcons name="flip-camera-ios" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cameraBtn} onPress={deletePhoto}>
        <MaterialIcons name="delete" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cameraBtn} onPress={takePic}>
        <FontAwesome5 name="camera" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadPhotoBox: {
    position: "absolute",
    bottom: 0,
    left: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  cameraBtn: {
    marginLeft: 30,
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
});