import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRODUCT.PUERPLEDARK};
`;

export const Brand = styled.Image.attrs({
  resizeMode: "contain",
})``;
