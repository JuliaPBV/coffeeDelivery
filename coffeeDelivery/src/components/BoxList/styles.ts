import styled from "styled-components/native";

export const BoxContainerList = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  border-radius: 6px 36px 6px 36px;
  margin-bottom: 32px;
  margin-top: 14px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_700};
  elevation: 4;
  shadowcolor: "#000";
  shadowoffset: {
    width: 0;
    height: 2;
  }
  shadowopacity: 0.2;
  shadowradius: 4;
  width: 311;
  height: 125px;
  align-items: center;
  flex-direction: row;
  align-self: center;
`;

export const CoffeeImageList = styled.Image`
  width: 96px;
  height: 96px;
  left: 8px;
  margin-top: -56px;
  display: block;
`;

export const TextList = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO_2_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS};
  padding-left: 4px;
  padding-top: 35px;
  padding-bottom: 14px;
`;

export const TitleList = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO_2_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding-left: 14px;
`;

export const DescriptionList = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.TEXT_XS}px;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin-top: 4px;
  padding-left: 14px;
  padding-right: 14px;
  flex-wrap: wrap;
`;

export const PriceList = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO_2_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_LG}px;
  color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
  padding-left: 14px;
  padding-top: 8px;
`;
