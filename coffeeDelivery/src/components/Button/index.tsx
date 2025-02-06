import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";
import { ThemeProvider } from "styled-components/native";
import theme, { Theme } from "@src/theme";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ThemeProvider theme={theme as Theme}>
      <Container {...rest}>
        <Title>{title}</Title>
      </Container>
    </ThemeProvider>
  );
}
