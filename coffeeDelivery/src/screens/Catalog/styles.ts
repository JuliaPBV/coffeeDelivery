import styled, { css } from "styled-components/native";
import { Image } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  justify-content: center;
  position: relative;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Greeting = styled.View`
  flex-direction: row;
  position: "absolute";
  margin-top: 0px;
`;

export const StyledImage = styled(Image)`
  //position: absolute;
  //top: 10px;
  //left: 10px;
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;

export const GreetingText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_MD}px;
`;
