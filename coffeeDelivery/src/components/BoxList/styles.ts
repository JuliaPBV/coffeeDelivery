import styled from "styled-components/native";

export const BoxTextList = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_BOLD};
`;

export const BoxContainerList = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  border-radius: 6px 36px 6px 36px;
  //padding: 16px;
  //padding-left: 20px;
  margin-bottom: 20px;
  margin-top: 32px;
  border-width: 1px;
  position: "relative";
  border-color: ${({ theme }) => theme.COLORS.GRAY_700};
  elevation: 4;
  shadowcolor: "#000";
  shadowoffset: {
    width: 0;
    height: 2;
  }
  shadowopacity: 0.2;
  shadowradius: 4;
  width: 100%;
  height: 120px;
  align-items: "flex-start";
  flexdirection: "row";
`;

export const CoffeeImageList = styled.Image`
  width: 120px;
  height: 120px;
  left: 8px;
  max-width: 100%;
  margin-top: -16px;
  display: block;
  margin-bottom: 4px;
  position: "absolute";
`;

export const TextList = styled.Text`
  color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_BOLD};
`;

export const TitleList = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO_2_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding-top: 13px;
  padding-bottom: 10px;
  font-weight: bold;
  text-align: center;
`;

export const DescriptionList = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TEXT_XS}px;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  text-align: center;
`;

export const PriceList = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO_2_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_LG}px;
  color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
  text-align: center;
  padding-top: 15px;
`;
