import { Container, Header, Greeting, GreetingText } from "./styles";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "@src/theme";
import { StyledImage } from "./styles";
import localizador from "@assets/Vector.png";

export function Catalog() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <Greeting>
            <StyledImage source={localizador} resizeMode="contain" />
            <GreetingText>Osasco-SP</GreetingText>
          </Greeting>
        </Header>
      </Container>
    </ThemeProvider>
  );
}
