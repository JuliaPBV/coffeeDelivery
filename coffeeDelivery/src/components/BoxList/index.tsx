import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import {
  BoxContainerList,
  CoffeeImageList,
  TitleList,
  DescriptionList,
  PriceList,
  TextList,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export function BoxList({ title, data }) {
  const navigation = useNavigation();

  const handlePress = (item) => {
    const navigation = navigate("Product", {
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
      <TextList>{title}</TextList>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <BoxContainerList>
              <CoffeeImageList source={item.image} resizeMode="contain" />

              <View style={{ flex: 1 }}>
                <TitleList>{item.title}</TitleList>
                <DescriptionList>{item.description}</DescriptionList>
                <PriceList>{item.price}</PriceList>
              </View>
            </BoxContainerList>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
