import styled from "styled-components/native";
import { Image } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ props }) => props.theme.COLORS["purple"]};
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Image)`
  width: 200px;
  height: 200px;
  resize-mode: contain;
`;
