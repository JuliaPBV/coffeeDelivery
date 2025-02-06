// src/theme/index.ts
import { DefaultTheme } from "styled-components/native";
export const theme: DefaultTheme = {
  COLORS: {
    // Produto
    "yellow-dark": "#C47F17",
    yellow: "#DBAC2C",
    "purple-dark": "#4B2995",
    purple: "#8047F8",
    "purple-light": "#EBE5F9",

    // Base
    "gray-100": "#272221",
    "gray-200": "#403937",
    "gray-300": "#574F4D",
    "gray-400": "#8D8686",
    "gray-500": "#D7D5D5",
    "gray-600": "#E6E5E5",
    "gray-700": "#EDEDED",
    "gray-800": "#F3F2F2",
    "gray-900": "#FAFAFA",
    white: "#FFFFFF",

    // Feedback
    "red-dark": "#C44117",
    red: "#E8BAAB",
    "red-light": "#F2DFD8",
  },

  TYPOGRAPHY: {
    // Baloo 2 Font (Title)
    "title-xl": {
      fontFamily: "Baloo 2",
      fontSize: "36px",
      lineHeight: "130%",
      fontWeight: "bold",
    },
    "title-lg": {
      fontFamily: "Baloo 2",
      fontSize: "24px",
      lineHeight: "130%",
      fontWeight: "bold",
    },
    "title-md": {
      fontFamily: "Baloo 2",
      fontSize: "20px",
      lineHeight: "130%",
      fontWeight: "bold",
    },
    "title-sm": {
      fontFamily: "Baloo 2",
      fontSize: "16px",
      lineHeight: "130%",
      fontWeight: "bold",
    },
    "title-xs": {
      fontFamily: "Baloo 2",
      fontSize: "14px",
      lineHeight: "130%",
      fontWeight: "bold",
    },

    // Roboto Font (Text)
    "text-lg": {
      fontFamily: "Roboto",
      fontSize: "20px",
      lineHeight: "130%",
      fontWeight: "regular",
    },
    "text-md": {
      fontFamily: "Roboto",
      fontSize: "16px",
      lineHeight: "130%",
      fontWeight: "regular",
    },
    "text-sm": {
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "130%",
      fontWeight: "regular",
    },
    "text-xs": {
      fontFamily: "Roboto",
      fontSize: "12px",
      lineHeight: "130%",
      fontWeight: "regular",
    },

    // Button
    button: {
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "160%",
      fontWeight: "bold",
    },

    // Tag
    tag: {
      fontFamily: "Roboto",
      fontSize: "10px",
      lineHeight: "130%",
      fontWeight: "bold",
    },

    // Label
    "label-yellow-default": {
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "130%",
      fontWeight: "regular",
      color: "#DBAC2C", // Correspondente ao 'yellow'
    },
    "label-yellow-focus": {
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "130%",
      fontWeight: "bold",
      color: "#C47F17", // Correspondente ao 'yellow-dark'
    },
    "label-purple-default": {
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "130%",
      fontWeight: "regular",
      color: "#8047F8", // Correspondente ao 'purple'
    },
    "label-purple-focus": {
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "130%",
      fontWeight: "bold",
      color: "#4B2995", // Correspondente ao 'purple-dark'
    },
    "icon-default": {
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "130%",
      fontWeight: "regular",
    },
    "icon-focus": {
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "130%",
      fontWeight: "bold",
    },
    "remove-default": {
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "130%",
      fontWeight: "regular",
    },
    "remove-focus": {
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "130%",
      fontWeight: "bold",
    },
  },

  SIZES: {
    lg: "24px",
    md: "16px",
    sm: "12px",
    xs: "8px",
  },
};
