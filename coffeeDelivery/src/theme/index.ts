import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    product: {
      yellowDark: "#C47F17",
      yellow: "#DBAC2C",
      purpleDark: "#4B2995",
      purple: "#8047F8",
      purpleLight: "#EBE5F9",
    },
    base: {
      gray100: "#272221",
      gray200: "#403937",
      gray300: "#574F4D",
      gray400: "#8D8686",
      gray500: "#D7D5D5",
      gray600: "#E6E5E5",
      gray700: "#EDEDED",
      gray800: "#F3F2F2",
      gray900: "#FAFAFA",
      white: "#FFFFFF",
    },
    feedback: {
      redDark: "#C44117",
      red: "#E8BAAB",
      redLight: "#F2DFD8",
    },
  },
  typography: {
    title: {
      xl: {
        fontFamily: "Baloo 2",
        fontSize: "36px",
        lineHeight: "130%",
        fontWeight: "bold",
      },
      lg: {
        fontFamily: "Baloo 2",
        fontSize: "24px",
        lineHeight: "130%",
        fontWeight: "bold",
      },
      md: {
        fontFamily: "Baloo 2",
        fontSize: "20px",
        lineHeight: "130%",
        fontWeight: "bold",
      },
      sm: {
        fontFamily: "Baloo 2",
        fontSize: "16px",
        lineHeight: "130%",
        fontWeight: "bold",
      },
      xs: {
        fontFamily: "Baloo 2",
        fontSize: "14px",
        lineHeight: "130%",
        fontWeight: "bold",
      },
    },
    text: {
      lg: {
        fontFamily: "Roboto",
        fontSize: "20px",
        lineHeight: "130%",
        fontWeight: "regular",
      },
      md: {
        fontFamily: "Roboto",
        fontSize: "16px",
        lineHeight: "130%",
        fontWeight: "regular",
      },
      sm: {
        fontFamily: "Roboto",
        fontSize: "14px",
        lineHeight: "130%",
        fontWeight: "regular",
      },
      xs: {
        fontFamily: "Roboto",
        fontSize: "12px",
        lineHeight: "130%",
        fontWeight: "regular",
      },
    },
    tag: {
      fontFamily: "Roboto",
      fontSize: "10px",
      lineHeight: "130%",
      fontWeight: "bold",
    },
    button: {
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "160%",
      fontWeight: "bold",
    },
  },
});
