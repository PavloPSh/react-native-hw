import { MaterialIcons } from "@expo/vector-icons";
import { useEffect} from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { PublicationsPost } from "../components/PublicationsPost";

import { authSignOutUser } from "../redux/auth/authOperations"; 
import { fetchAllPosts } from "../redux/posts/postsOperations";

const DefaultPostsScreen = ({ navigation }) => {
  const allPosts = useSelector((state) => state.posts.allItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  const renderItem = ({ item }) => (
    <PublicationsPost item={item} navigation={navigation} />
  );

  const signOut = () => {
    dispatch(authSignOutUser());
  };

  const updatePosts = () => {
    dispatch(fetchAllPosts());
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
      <TouchableOpacity
          activeOpacity={0.8}
          style={styles.updateIcon}
          onPress={updatePosts}
        >
          <MaterialIcons name="update" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Publications</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.link}
          onPress={signOut}
        >
          <MaterialIcons
            style={styles.logoutIcon}
            name="logout"
            size={24}
            color="#BDBDBD"
          />
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.bottomBox}>
        <FlatList
          data={allPosts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          style={{
            marginBottom: 100,
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
  updateIcon: {
    marginRight: "auto",
    marginBottom: 10,
  },
  logoutIcon: {
    marginLeft: 103,
    marginBottom: 12,
  },
  bottomBox: {
    marginTop: 5,
    alignSelf: "center",
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

export default DefaultPostsScreen;