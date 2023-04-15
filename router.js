import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialIcons, AntDesign } from "@expo/vector-icons";

import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

import ProfileScreen from "./Screens/ProfileScreen";
import PostsScreen from "./Screens/PostsScreen";
import CreatePostScreen from "./Screens/CreatePostsScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        name="Post"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="dynamic-feed" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#FF6C00",
          headerShown: false,
        }}
      />
      <MainTab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="post-add" size={32} color={color} />
          ),
          tabBarActiveTintColor: "#FF6C00",
          headerShown: false,
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#FF6C00",
          headerShown: false,
        }}
      />
    </MainTab.Navigator>
  );
};