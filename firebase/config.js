import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDlDux9L6pkVLYAAwciNXGiaBjAaa8gOpM",
    authDomain: "pp-rn-hw.firebaseapp.com",
    projectId: "pp-rn-hw",
    storageBucket: "pp-rn-hw.appspot.com",
    messagingSenderId: "98463589396",
    appId: "1:98463589396:web:6ae586c7a967ec2ad13301"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});