import styled, { css } from "styled-components/native";
import { Image } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const Greeting = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;

export const GreetingText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_MD}px;
`;

export const CartButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const CartIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 15px;
`;
