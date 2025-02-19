import styled from "styled-components/native";

export const ContainerText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_BOLD};
`;

export const CategoryList = styled.View`
  background-color: white;
  width: 93px;
  height: 25px;
  border-radius: 100px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-right: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.PURPLE};
  justify-content: center;
  align-items: center;
`;
