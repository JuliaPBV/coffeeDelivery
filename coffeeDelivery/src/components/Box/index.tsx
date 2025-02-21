import React from "react";

import { TouchableOpacity, View } from "react-native";
import {
  BoxContainer,
  CategoryBox,
  CoffeeImage,
  Description,
  Price,
  Text,
  Title,
} from "./styles";
import { useTheme } from "styled-components/native";

interface Props {
  title: string;
  description: string;
  price: string;
  image: any;
  category: string;
  onPress?: () => void;
}

export const Box: React.FC<Props> = ({
  title,
  description,
  price,
  image,
  category,
  onPress,
}) => {
  const theme = useTheme();

  const categories = [
    {
      data: [category],
    },
  ];

  return (
    <TouchableOpacity onPress={onPress}>
      <BoxContainer>
        <CoffeeImage source={image} resizeMode="cover" />
        <View style={{ alignItems: "center" }}>
          <CategoryBox>
            <Text>{category}</Text>
          </CategoryBox>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Price>{price}</Price>
        </View>
      </BoxContainer>
    </TouchableOpacity>
  );
};
