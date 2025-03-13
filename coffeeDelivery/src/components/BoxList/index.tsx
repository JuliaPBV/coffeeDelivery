import React from "react";
import { FlatList, TouchableOpacity, View, Text, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/commonjs/src/types";
import { RootStackParamList } from "@src/@types/rootStack";

export function BoxList({ title, data }) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = (item) => {
    navigation.navigate("Product", {
      coffee: {
        image: item.image,
        category: item.category,
        title: item.title,
        description: item.description,
        price: item.price,
      },
    });
  };

  return (
    <View>
      <Text className="text-custom_gray_400 font-custom_baloo2_bold text-sm pl-[10px] pt-[35px] pb-[14px]">
        {title}
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <View
              className="bg-custom_gray_800 rounded-[6px_36px_6px_36px] mb-8 mt-[14px] border-custom_gray_700 
            w-[311px] h-[125px] items-center flex-row self-center"
            >
              <Image
                className="w-24 h-24 left-2 mt-[-56px] block"
                source={item.image}
                resizeMode="contain"
              />

              <View style={{ flex: 1 }}>
                <Text className="font-custom_baloo2_bold text-sm text-custom_gray_200 pl-[14px]">
                  {item.title}
                </Text>
                <Text className="font-custom_roboto_regular text-xs text-custom_gray_400 mt-1 pl-[14px] pr-[14px] flex-wrap">
                  {item.description}
                </Text>
                <Text className="font-custom_baloo2_bold text-2xl text-custom_yellow_dark pl-[14px] pt-2">
                  {item.price}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
