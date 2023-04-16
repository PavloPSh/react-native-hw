import { EvilIcons } from "@expo/vector-icons";

import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export const PublicationsPost = ({ item, navigation }) => {
  const { photo, title, comments, photoLocation, inputLocation } = item;
  return (
    <>
      <Image
        source={{
          uri: photo,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.informationBox}>
      <TouchableOpacity
          style={styles.spanBox}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Comments")}
        >
          <EvilIcons name="comment" size={24} color="black" />
          <Text>{comments}</Text>
        </TouchableOpacity>
        <View style={styles.spanBox}>
          <EvilIcons name="location" size={24} color="black" />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Map", { photoLocation })}
          >
            <Text>{inputLocation}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 32,
    borderRadius: 8,
    width: 343,
    height: 240,
  },
  title: {
    fontSize: 16,
    marginTop: 8,
  },
  informationBox: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 343,
  },
  spanBox: {
    flexDirection: "row",
  },
});