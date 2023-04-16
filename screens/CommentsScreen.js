import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const CommentsScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>comments</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CommentsScreen;