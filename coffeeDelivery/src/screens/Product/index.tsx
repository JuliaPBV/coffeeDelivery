import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "@src/theme";
import shopCartIcon from "@assets/car.png";
import { Container, Footer, Header, ShopCartIcon } from "./styles";
import { ButtonBack } from "@src/components/ButtonBack";

export function Product() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <ButtonBack />
          <ShopCartIcon source={shopCartIcon} resizeMode="contain" />
        </Header>
        <Footer></Footer>
      </Container>
    </ThemeProvider>
  );
}
