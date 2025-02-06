import { TextInput } from "react-native";
import styled from "styled-components/native";

export const BannerContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
  align-items: center;
`;

export const BannerTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_LG}px;
  margin-bottom: 16px;
`;

export const SearchInput = styled(TextInput)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 8px;
  padding: 12px;
  width: 100%;
`;
