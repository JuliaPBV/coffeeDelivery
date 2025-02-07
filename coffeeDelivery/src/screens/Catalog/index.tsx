import {
  Container,
  Header,
  Greeting,
  GreetingText,
  CartButton,
  CartIcon,
  Title,
} from "./styles";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "@src/theme";
import { StyledImage } from "./styles";
import localizador from "@assets/Vector.png";
import cartIcon from "@assets/State=Empty.png";
import { Banner } from "@src/components/Banner";
import { View } from "react-native";
import { CategoryBox } from "@src/components/CategoryBox";

export function Catalog() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <Greeting>
            <StyledImage source={localizador} resizeMode="contain" />
            <GreetingText>Osasco-SP</GreetingText>
          </Greeting>
          <CartButton>
            <CartIcon source={cartIcon} />
          </CartButton>
        </Header>
        <Banner />

        <View style={{ paddingHorizontal: 16 }}>
          <Title>Nossos cafés</Title>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <CategoryBox>Tradicionais</CategoryBox>
            <CategoryBox>Doces</CategoryBox>
            <CategoryBox>Especiais</CategoryBox>
          </View>
        </View>
      </Container>
    </ThemeProvider>
  );
}
