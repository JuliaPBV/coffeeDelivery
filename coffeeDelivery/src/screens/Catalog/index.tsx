import {
  Container,
  Header,
  Greeting,
  GreetingText,
  CartButton,
  CartIcon,
} from "./styles";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "@src/theme";
import { StyledImage } from "./styles";
import localizador from "@assets/Vector.png";
import cartIcon from "@assets/Type=shopping-cart-fill.png";
import { Banner } from "@src/components/Banner";

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
      </Container>
    </ThemeProvider>
  );
}
