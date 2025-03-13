import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Baloo2_400Regular, Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import * as SplashScreen from "expo-splash-screen";
import { Routes } from "../routes";
import "../styles/global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_400Regular,
    Baloo2_700Bold,
  });

  return (
    <GestureHandlerRootView>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <Routes />
    </GestureHandlerRootView>
  );
}
