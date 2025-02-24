import { Image } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  width: 100%;
  height: 546px;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
`;

export const ShopCartIcon = styled(Image)`
  width: 20px;
  height: 20px;
  padding: 8px;
`;

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  width: 100%;
  height: 222px;
  bottom: 0px;
  position: absolute;
`;
