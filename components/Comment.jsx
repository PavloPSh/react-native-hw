import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
  } from "react-native";
  import { useSelector } from "react-redux";
  
  export const Comment = ({ item }) => {
    const userId = useSelector((state) => state.auth.userId);
    const { text, createdAt, photoURL, uid } = item;
    const messageStatus =
      uid === userId
        ? [styles.messageBoxSent, "sent"]
        : [styles.messageBoxRecived, "recived"];
    const date = new Date(createdAt).toLocaleString();

    return (
      <View style={styles.box}>
      {messageStatus[1] === "recived" && (
        <Image
          style={styles.postImg}
          source={{
            uri: photoURL,
          }}
        />
      )}
      <View style={messageStatus[0]}>
        <Text style={styles.message}>{text}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>   
      {messageStatus[1] === "sent" && (
        <Image
          style={styles.postImg}
          source={{
            uri: photoURL,
          }}
        />
      )}
    </View>    
    );
  };

  const styles = StyleSheet.create({
    box: {
      flexDirection: "row",
      alignItems: "center",
    },
    messageBoxSent: {
      marginLeft: "auto",
      marginRight: 5,
      marginTop: 10,
      width: "50%",
      padding: 10,
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderRadius: 10,
    },
    messageBoxRecived: {
      marginRight: "auto",
      marginTop: 10,
      marginLeft: 5,
      width: "50%",
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderRadius: 10,
    },
    message: {
      fontSize: 13,
    },
    date: {
      marginTop: 8,
      marginLeft: "auto",
      fontSize: 10,
      color: "#BDBDBD",
    },
    postImg: {
      width: 28,
      height: 28,
      borderRadius: 50,
    },
  });