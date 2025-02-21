import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import theme from "src/theme";

export const styles = StyleSheet.create({
  categoryButton: {
    width: 93,
    height: 25,
    borderRadius: 100,
    paddingTop: 6,
    paddingBottom: 6,
    marginRight: 8,
    borderWidth: 1,
    borderColor: theme.COLORS.PURPLE,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryButtonText: {
    color: theme.COLORS.PURPLE_DARK,
    fontFamily: theme.FONT_FAMILY.ROBOTO_BOLD,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
