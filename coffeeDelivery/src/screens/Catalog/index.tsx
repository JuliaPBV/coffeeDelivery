import {
  Container,
  Header,
  Greeting,
  GreetingEmoji,
  GreetingText,
} from "./styles";
import { buscar } from "../../assets/Type=map-pin-fill.png";
import React from "react";

export function Catalog() {
  return (
    <Container>
      <Header>
        <Greeting>
          <GreetingEmoji source={buscar} />
          <GreetingText>Osasco-SP</GreetingText>
        </Greeting>
      </Header>
    </Container>
  );
}
