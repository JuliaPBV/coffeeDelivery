import styled from "styled-components/native";

export const ContainerText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_BOLD};
`;

export const CategoryBoxContainer = styled.View`
  background-color: transparent;
  width: 100px;
  height: 40px;
  border-radius: 8px;
  padding: 8px 16px;
  margin-right: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.PURPLE};
  justify-content: center;
  align-items: center;
`;
