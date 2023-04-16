import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultPostsScreen from "../Screens/DefaultScreen";
import CommentsScreen from './CommentsScreen'
import MapScreen from "../Screens/MapScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Publications"
        component={DefaultPostsScreen}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>    
  );
};

export default PostsScreen;