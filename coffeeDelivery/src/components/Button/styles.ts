import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.PRODUCT.PURPLE};
  padding: 12px;
  border-radius: 8px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.TYPOGRAPHY.TEXT.md.fontSize};
  color: ${({ theme }) => theme.COLORS.BASE.WHITE};
  font-family: ${({ theme }) => theme.TYPOGRAPHY.TEXT.md.fontFamily};
`;
