import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { useRoute } from "./router";

export default function App() {
  const [user, setUser] = useState(null);
  auth.onAuthStateChanged((user) => setUser(user));

  const routing = useRoute(user);
  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
