import React from "react";
import { TextInputProps } from "react-native";
import { ThemeProvider } from "styled-components/native";

import { Container, Size, Label, Input } from "./styles";
import { theme } from "@src/theme";

type Props = TextInputProps & {
  size: string;
};

export function InputPrice({ size, ...rest }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Size>
          <Label>{size}</Label>
        </Size>

        <Label>R$</Label>

        <Input keyboardType="numeric" {...rest} />
      </Container>
    </ThemeProvider>
  );
}
