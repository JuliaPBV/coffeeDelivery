import React from "react";
import { View, Image } from "react-native";

export function Splash() {
  return (
    <View className="flex-1 bg-custom_purple items-center justify-center">
      <Image
        className="w-[200px] h-[200px]"
        source={require("@assets/Logo.png")}
      />
    </View>
  );
}
