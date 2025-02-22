import React from "react";
import {
  FlatList,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "@src/theme";
import { styles } from "./styles";

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
          <TouchableOpacity
            style={styles.categoryButton}
            onPress={() => console.log(`${item} pressionado`)}
          >
            <Text style={styles.categoryButtonText}>{item}</Text>
          </TouchableOpacity>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </ThemeProvider>
  );
}
