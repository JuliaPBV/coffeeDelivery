import React from "react";
import shopCartIcon from "@assets/car.png";
import { ButtonBack } from "@src/components/ButtonBack";
import { View, Image } from "react-native";

export function Product() {
  return (
    <View className="flex-1 bg-custom_gray_100 w-full h-[546px]">
      <View className=" bg-custom_gray_100 mt-5 flex-row justify-between items-center p-[14px]">
        <ButtonBack />
        <Image
          className="w-5 h-5 p-2"
          source={shopCartIcon}
          resizeMode="contain"
        />
      </View>
      <View
        className=" bg-custom_gray_900 w-full h-[222px}
      bottom-0 absolute"
      />
    </View>
  );
}
