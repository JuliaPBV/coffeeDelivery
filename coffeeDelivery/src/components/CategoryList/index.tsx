import React from "react";
import { FlatList, TouchableOpacity, Text } from "react-native";

interface CategoryListProps {
  categories: string[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="w-[93px] h-[25px] rounded-full p-[6px] mr-2 border border-custom_purple justify-center items-center"
          onPress={() => console.log(`${item} pressionado`)}
        >
          <Text className="text-custom_purple_dark font-custom_roboto_regular">
            {item}
          </Text>
        </TouchableOpacity>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
