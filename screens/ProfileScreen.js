import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import { ProfilePost } from "../components/ProfilePost";
import { posts } from "../data/posts";
const ProfileScreen = () => {
  const renderItem = ({ item }) => <ProfilePost item={item} />;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/PhotoBG.jpg")}
        style={styles.image}
      >
        <View style={styles.profileBox}>
          <View style={styles.photoBox} />
          <MaterialIcons
            style={styles.logoutIcon}
            name="logout"
            size={24}
            color="#BDBDBD"
          />
          <Text style={styles.name}>Name</Text>
          <SafeAreaView style={styles.bottomBox}>
            <FlatList
              data={posts}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              style={{
                marginTop: 10,
                marginBottom: 160,
              }}
            />
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
};

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
  profileBox: {
    flex: 0.85,
    position: "relative",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  photoBox: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    height: 120,
    width: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  logoutIcon: {
    marginTop: 22,
    alignSelf: "flex-end",
  },
  name: {
    marginTop: 32,
    fontSize: 30,
    textAlign: "center",
  },
});

export default ProfileScreen;