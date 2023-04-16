import {
    SafeAreaView,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
  } from "react-native";
  
  export const CameraOptions = ({
    photo,
    setNewPostPhoto,
    sharePic,
    savePhoto,
    discard,
  }) => {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ url: "data:image/jpg;base64," + photo }}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={setNewPostPhoto}
        >
          <Text style={styles.btnTitle}>Set Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={sharePic}
        >
          <Text style={styles.btnTitle}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={savePhoto}
        >
          <Text style={styles.btnTitle}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={discard}
        >
          <Text style={styles.btnTitle}>Discard</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 15,
    },
    btn: {
      height: 51,
      background: "#F6F6F6",
      borderRadius: 10,
      borderWidth: 1,
      height: 40,
      marginTop: 5,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 50,
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
      color: "#000000",
      fontSize: 18,
    },
    preview: {
      borderRadius: 20,
      width: "100%",
      height: 500,
    },
  });