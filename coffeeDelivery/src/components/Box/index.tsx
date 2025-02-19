import React from "react";

import { TouchableOpacity, View } from "react-native";
import { BoxContainer, CoffeeImage, Description, Price, Title } from "./styles";
import { CategoryBox as StyledCategoryBox } from "../CategoryList";
import styled, { useTheme } from "styled-components/native";

interface Props {
  title: string;
  description: string;
  price: string;
  image: any;
  onPress?: () => void;
}

export const CategoryBox = styled(StyledCategoryBox)`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_LIGHT};
  margin-top: 5px;
  margin-bottom: 4px;
`;

export const Box: React.FC<Props> = ({
  title,
  description,
  price,
  image,
  onPress,
}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <BoxContainer>
        <CoffeeImage source={image} resizeMode="couver" />
        <View style={{ alignItems: "center" }}>
          <CategoryBox>Tradicional</CategoryBox>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Price>{price}</Price>
        </View>
      </BoxContainer>
    </TouchableOpacity>
  );
};
