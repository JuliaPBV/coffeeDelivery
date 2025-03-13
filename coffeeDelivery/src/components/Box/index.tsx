import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

interface Props {
  title: string;
  description: string;
  price: string;
  image: any;
  category: string;
  onPress?: () => void;
}

export const Box: React.FC<Props> = ({
  title,
  description,
  price,
  image,
  category,
  onPress,
}) => {
  const categories = [
    {
      data: [category],
    },
  ];

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className="bg-custom_gray_800 rounded-[6px_36px_6px_36px] p-4 mb-5 mt-8 border border-custom_gray_700 
      w-52 h-[262px] items-center relative"
      >
        <Image
          source={image}
          resizeMode="cover"
          className="w-[120px] h-[120px] left-[6px] max-w-full mt-[-50px] block mb-1 "
        />
        <View style={{ alignItems: "center" }}>
          <View className="bg-custom_purple p-[4px 8px] rounded-[80px] bg-custom_purple self-center mt-[5px]">
            <Text className="text-custom_purple_dark font-custom_roboto_regular">
              {category}
            </Text>
          </View>
          <Text className="font-custom_baloo2_bold text-xl text-custom_gray_200 pt-[13px] pb-[10px] text-center">
            {title}
          </Text>
          <Text className="font-custom_roboto_regular text-sm text-custom_gray_400 text-center">
            {description}
          </Text>
          <Text className="font-custom_baloo2_bold text-2xl text-custom_yellow_dark text-center pt-[15px]">
            {price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
