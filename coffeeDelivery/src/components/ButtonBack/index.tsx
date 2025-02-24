import React from "react";
import { Container, ArrowBack } from "./styles";
import ArrowBackIcon from "@assets/Icon.png";

interface ButtonBackProps {
  onPress: () => void;
}

export function ButtonBack() {
  return (
    <Container>
      <ArrowBack source={ArrowBackIcon} resizeMode="contain" />
    </Container>
  );
}
