import styled from "styled-components/native";
import { Image } from "react-native";

export const Container = styled.View`
  flex: 1;
  position: relative;
  flex-direction: column;
`;

export const TopBackground = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  width: 100%;
  height: 342px;
  flex-direction: row;
  position: absolute;
`;

export const BottomBackground = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
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
  align-items: center;
`;

export const StyledImage = styled(Image)`
  width: 20px;
  height: 20px;
  margin: 12px;
`;

export const GreetingText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  font-size: ${({ theme }) => theme.FONT_SIZE.TEXT_SM}px;
  padding-top: 4px;
`;

export const CartButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const CartIcon = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 15px;
  padding-right: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO_2_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_SM}px;
  padding-bottom: 16px;
  font-weight: bold;
`;
