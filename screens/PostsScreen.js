import { MaterialIcons } from "@expo/vector-icons";

import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";

import { PublicationsPost } from "../components/PublicationsPost";

import { posts } from "../data/posts";

const PostsScreen = () => {
  const renderItem = ({ item }) => <PublicationsPost item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Text style={styles.title}>Publications</Text>
        <MaterialIcons
          style={styles.logoutIcon}
          name="logout"
          size={24}
          color="#BDBDBD"
        />
      </View>
      <SafeAreaView style={styles.bottomBox}>
        <View style={styles.userBox}>
          <Image
            source={{
              uri: "https://nationaltoday.com/wp-content/uploads/2022/05/National-Snail-Day.jpg.webp",
            }}
            style={styles.userPhoto}
          />
          <View style={styles.userInformation}>
            <Text style={styles.userName}>Pavlo</Text>
            <Text style={styles.userMail}>ravlyk@mail.com</Text>
          </View>
        </View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  topBox: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    height: 88,

    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },
  title: {
    fontSize: 17,
    marginBottom: 11,
  },
  logoutIcon: {
    marginLeft: 103,
    marginBottom: 12,
  },
  bottomBox: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
  userBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  userPhoto: {
    borderRadius: 16,
    width: 60,
    height: 60,
  },
  userInformation: {
    marginLeft: 8,
  },
  userName: {
    fontSize: 13,
  },
  userMail: {
    fontSize: 13,
  },
});

export default PostsScreen;