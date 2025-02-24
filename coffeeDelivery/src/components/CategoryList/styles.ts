import styled from "styled-components/native";

export const CategoryButton = styled.TouchableOpacity`
  width: 93px;
  height: 25px;
  border-radius: 100px;
  padding: 6px 0;
  margin-right: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.PURPLE};
  justify-content: center;
  align-items: center;
`;

export const CategoryButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_REGULAR};
`;

export const SectionHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;
