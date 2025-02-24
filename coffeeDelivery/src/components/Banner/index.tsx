import React from "react";
import {
  BannerContainer,
  BannerTitle,
  CoffeeBeansImage,
  SearchIcon,
  SearchInput,
  SearchInputContainer,
} from "./styles";
import theme from "@src/theme";
import lupaIcon from "@assets/Type=magnifying-glass-regular.png";
import coffeeBeansImage from "@assets/image.png";

export const Banner = () => {
  return (
    <BannerContainer>
      <BannerTitle>
        Encontre o café perfeito para qualquer hora do dia
      </BannerTitle>
      <SearchInputContainer>
        <SearchIcon source={lupaIcon} resizeMode="contain" />
        <SearchInput
          placeholder="Pesquisar"
          placeholderTextColor={theme.COLORS.GRAY_400}
        />
      </SearchInputContainer>
      <CoffeeBeansImage source={coffeeBeansImage} />
    </BannerContainer>
  );
};
