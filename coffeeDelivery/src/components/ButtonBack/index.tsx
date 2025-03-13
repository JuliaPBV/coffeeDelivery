import React from "react";
import ArrowBackIcon from "@assets/Icon.png";
import { TouchableOpacity, Image } from "react-native";

interface ButtonBackProps {
  onPress: () => void;
}

export function ButtonBack() {
  return (
    <TouchableOpacity className="p-[10px] justify-center items-center">
      <Image className="w-6 h-6" source={ArrowBackIcon} resizeMode="contain" />
    </TouchableOpacity>
  );
}
