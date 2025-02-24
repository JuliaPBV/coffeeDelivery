import React from "react";
import { FlatList } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "@src/theme";
import { CategoryButton, CategoryButtonText } from "./styles";

interface CategoryListProps {
  categories: string[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <ThemeProvider theme={theme}>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <CategoryButton onPress={() => console.log(`${item} pressionado`)}>
            <CategoryButtonText>{item}</CategoryButtonText>
          </CategoryButton>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </ThemeProvider>
  );
}
