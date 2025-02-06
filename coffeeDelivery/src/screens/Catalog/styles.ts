import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

interface ContainerProps {
  theme: DefaultTheme;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS["gray_900"]};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS["gray_100"]};
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Greeting = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const GreetingEmoji = styled.Image`
  height: 32px;
  width: 32px;
  margin-right: 32px;
`;

export const GreetingText = styled.Text`
  font-size: 20px;

  ${({ theme }) => css`
    font-family: ${theme.TYPOGRAPHY["text-sm"]};
    color: ${theme.COLORS["gray_100"]};
  `};
`;
