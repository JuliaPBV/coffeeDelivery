import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@src/routes";
import { Container, Logo } from "./styles";
import { ThemeProvider } from "styled-components/native";
import theme, { Theme } from "@src/theme";

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Splash"
>;
export default function Splash() {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Catalog");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ThemeProvider theme={theme as Theme}>
      <Container>
        <Logo source={require("@assets/Logo.png")} />
      </Container>
    </ThemeProvider>
  );
}
