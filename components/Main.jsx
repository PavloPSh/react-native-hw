import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "../router";
import { useEffect, useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authStateChangeUser } from "../redux/auth/authOperations";
import { StyleSheet, Text, ActivityIndicator } from "react-native";

const Main = () => {
  const { stateChange } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const routing = useRoute(stateChange);

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  return !stateChange ? (
    <ActivityIndicator size="large" />
  ) : (
    <NavigationContainer>{routing}</NavigationContainer>
  );    
};

export default Main;