import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CategoryBoxContainer, ContainerText } from "./styles";

interface Props {
  children: string;
  onPress?: () => void;
}

export const CategoryBox: React.FC<Props> = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CategoryBoxContainer>
        <ContainerText>{children}</ContainerText>
      </CategoryBoxContainer>
    </TouchableOpacity>
  );
};
