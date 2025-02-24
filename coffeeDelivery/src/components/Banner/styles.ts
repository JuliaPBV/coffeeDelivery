import { TextInput, Image } from "react-native";
import styled from "styled-components/native";

export const BannerContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
  align-items: center;
  height: 342px;
`;

export const BannerTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO_2_BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_MD}px;
  margin-bottom: 16px;
`;

export const SearchInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 4px;
  padding: 12px;
  width: 100%;
`;

export const SearchInput = styled(TextInput)`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  margin-left: 8px;
`;

export const SearchIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

export const CoffeeBeansImage = styled(Image)`
  position: absolute;
  width: 83px;
  height: 83px;
  top: 148px;
  right: 8px;
`;
