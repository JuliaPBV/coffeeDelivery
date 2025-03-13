import React, { useState } from "react";
import lupaIcon from "@assets/Type=magnifying-glass-regular.png";
import coffeeBeansImage from "@assets/image.png";
import { View, Text, Image, TextInput } from "react-native";

interface Coffee {
  image: any;
  category: string;
  title: string;
  description: string;
  price: string;
}

interface BannerProps {
  coffeeData: Coffee[];
  onSearch: (filteredData: Coffee[]) => void;
}

export const Banner = ({ coffeeData, onSearch }: BannerProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);

    if (!coffeeData || !Array.isArray(coffeeData)) {
      onSearch([]);
      return;
    }
    const filteredData = coffeeData.filter((coffee: Coffee) =>
      coffee.title.toLowerCase().includes(text.toLowerCase())
    );
    onSearch(filteredData);
  };

  //Para usar suas cores personalizadas, vai no arquivo tailwind.config
  // suas cores sempre vao ter custom na frente exemplo bg-custom_gray_100 ou text-custom_gray_900
  return (
    <View className="bg-custom_gray_100  p-6  items-center h-2/4">
      <Text className="font-custom_baloo2_bold text-custom_gray_900 text-base mb-4">
        Encontre o café perfeito para qualquer hora do dia
      </Text>

      <View className="flex-row items-center bg-custom_gray_200 rounded-sm p-3 w-full">
        <Image source={lupaIcon} resizeMode="contain" className="w-4 h-4" />
        <TextInput
          className="flex-1 text-custom_gray_900 ml-2"
          placeholder="Pesquisar"
          placeholderTextColor={"#8D8686"}
          value={searchText}
          onChangeText={handleSearchTextChange}
        />
      </View>
      <Image
        className="absolute w-[83px] h-[83px] top-[144px] right-2"
        source={coffeeBeansImage}
      />
    </View>
  );
};
