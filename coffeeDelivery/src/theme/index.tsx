import { DefaultTheme } from "styled-components/native";

export interface Theme extends DefaultTheme {
  COLORS: {
    WHITE: string;
    YELLOW_DARK: string;
    YELLOW: string;
    PURPLE_DARK: string;
    PURPLE: string;
    PURPLE_LIGHT: string;
    GRAY_100: string;
    GRAY_200: string;
    GRAY_300: string;
    GRAY_400: string;
    GRAY_500: string;
    GRAY_600: string;
    GRAY_700: string;
    GRAY_800: string;
    GRAY_900: string;
    RED_DARK: string;
    RED: string;
    RED_LIGHT: string;
  };
  FONT_FAMILY: {
    BALOO_2_BOLD: string;
    ROBOTO_REGULAR: string;
    ROBOTO_BOLD: string;
  };
  FONT_SIZE: {
    TITLE_XL: number;
    TITLE_LG: number;
    TITLE_MD: number;
    TITLE_SM: number;
    TITLE_XS: number;
    TEXT_LG: number;
    TEXT_MD: number;
    TEXT_SM: number;
    TEXT_XS: number;
    TAG: number;
    BUTTON: number;
  };
  LINE_HEIGHT: {
    TITLE_XL: string;
    TITLE_LG: string;
    TITLE_MD: string;
    TITLE_SM: string;
    TITLE_XS: string;
    TEXT_LG: string;
    TEXT_MD: string;
    TEXT_SM: string;
    TEXT_XS: string;
    TAG: string;
    BUTTON: string;
  };
}

const theme: Theme = {
  COLORS: {
    WHITE: "#FFFFFF",
    YELLOW_DARK: "#C47F17",
    YELLOW: "#DBAC2C",
    PURPLE_DARK: "#4B2995",
    PURPLE: "#8047F8",
    PURPLE_LIGHT: "#EBE5F9",
    GRAY_100: "#272221",
    GRAY_200: "#403937",
    GRAY_300: "#574F4D",
    GRAY_400: "#8D8686",
    GRAY_500: "#D7D5D5",
    GRAY_600: "#E6E5F5",
    GRAY_700: "#EDEDED",
    GRAY_800: "#F3F2F2",
    GRAY_900: "#FAFAFA",
    RED_DARK: "#C44117",
    RED: "#E8BAAB",
    RED_LIGHT: "#F2DFD8",
  },
  FONT_FAMILY: {
    BALOO_2_BOLD: "Baloo2_700Bold",
    ROBOTO_REGULAR: "Roboto_400Regular",
    ROBOTO_BOLD: "Roboto_700Bold",
  },
  FONT_SIZE: {
    TITLE_XL: 36,
    TITLE_LG: 24,
    TITLE_MD: 20,
    TITLE_SM: 16,
    TITLE_XS: 14,
    TEXT_LG: 20,
    TEXT_MD: 16,
    TEXT_SM: 14,
    TEXT_XS: 12,
    TAG: 10,
    BUTTON: 14,
  },
  LINE_HEIGHT: {
    TITLE_XL: "130%",
    TITLE_LG: "130%",
    TITLE_MD: "130%",
    TITLE_SM: "130%",
    TITLE_XS: "130%",
    TEXT_LG: "130%",
    TEXT_MD: "130%",
    TEXT_SM: "130%",
    TEXT_XS: "130%",
    TAG: "130%",
    BUTTON: "160%",
  },
};

export default theme; // Exporte o objeto theme, não a interface
