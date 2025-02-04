import React from "react";
import { Container } from "./Styles";
import { Brand } from "./Styles";
import brandImg from "../../assets/Logo.png";

export function SingIn() {
  return (
    <Container>
      <Brand source={brandImg} />
    </Container>
  );
}
