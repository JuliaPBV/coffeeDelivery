import React from "react";
import { BannerContainer, BannerTitle, SearchInput } from "./styles";

export const Banner = () => {
  return (
    <BannerContainer>
      <BannerTitle>
        Encontre o café perfeito para qualquer hora do dia
      </BannerTitle>
      <SearchInput placeholder="Pesquisar" />
    </BannerContainer>
  );
};
