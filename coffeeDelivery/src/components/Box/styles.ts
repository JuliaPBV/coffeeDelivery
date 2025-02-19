import styled from "styled-components/native";

export const BoxText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_BOLD};
`;

export const BoxContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  border-radius: 6px 36px 6px 36px;
  padding: 16px;
  margin-bottom: 20px;
  margin-top: 32px;
  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_700};
  elevation: 4;
  shadow-color: "#000";
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.2;
  shadow-radius: 4;
  width: 208px;
  height: 262px;
  align-items: center;
`;

export const CoffeeImage = styled.Image`
  width: 120px;
  height: 120px;
  left: 6px;
  max-width: 100%;
  top: -50px;
  display: block;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO_2_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  //margin-top: 5px;
  margin-bottom: 8px;
  text-align: center;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TEXT_XS}px;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  text-align: center;
  margin-bottom: 8px;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO_2_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_LG}px;
  color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
  text-align: center;
  margin-bottom: 10px;
`;
