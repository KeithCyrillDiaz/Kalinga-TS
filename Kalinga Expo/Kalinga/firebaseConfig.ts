import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app"
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getStorage } from "firebase/storage";

// const reactNativePersistence = (firebaseAuth as any).getReactNativePersistence;

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const fireBaseApp = initializeApp(firebaseConfig);
    console.log('Firebase app is initialized:', fireBaseApp.name);

export const auth = initializeAuth(fireBaseApp, {
  persistence: getReactNativePersistence(AsyncStorage) // getReactNativePersistence need custom declarations to bypass TS
});

export const storage = getStorage(fireBaseApp)
