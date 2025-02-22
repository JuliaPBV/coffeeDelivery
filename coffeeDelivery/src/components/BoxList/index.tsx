import React from "react";
import { FlatList, View } from "react-native";
import {
  BoxContainerList,
  CoffeeImageList,
  TitleList,
  DescriptionList,
  PriceList,
} from "./styles";

export function BoxList({ title, data }) {
  return (
    <View>
      <TitleList>{title}</TitleList>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <BoxContainerList>
            <CoffeeImageList source={item.image} resizeMode="contain" />
            <View style={{ flex: 1, paddingLeft: 10 }}>
              <TitleList>{item.title}</TitleList>
              <DescriptionList>{item.description}</DescriptionList>
              <PriceList>{item.price}</PriceList>
            </View>
          </BoxContainerList>
        )}
      />
    </View>
  );
}
