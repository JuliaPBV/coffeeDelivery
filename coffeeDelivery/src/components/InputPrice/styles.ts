import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  border: 1px solid ${({ theme }) => theme.COLORS.BASE.GRAY_700};
  border-radius: 12px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Size = styled.View`
  height: 56px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.BASE.GRAY_700};
  margin-right: 18px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.TYPOGRAPHY?.TEXT?.md?.fontSize || "16px"};
  font-family: ${({ theme }) =>
    theme.TYPOGRAPHY?.TEXT?.sm?.fontFamily || "Roboto"};
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_300};
`;

export const Input = styled(TextInput)`
  flex: 1;
  margin-left: 7px;
`;
