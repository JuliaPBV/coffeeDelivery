import {
  Container,
  Header,
  Greeting,
  GreetingText,
  CartButton,
  CartIcon,
  Title,
  TopBackground,
  BottomBackground,
} from "./styles";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "@src/theme";
import { StyledImage } from "./styles";
import localizador from "@assets/Vector.png";
import cartIcon from "@assets/State=Empty.png";
import { Banner } from "@src/components/Banner";
import { CategoryBox } from "@src/components/CategoryList";
import { View } from "react-native";
import { Box } from "@src/components/Box";
import { ScrollView } from "react-native-gesture-handler";

export function Catalog() {
  const coffeeData = [
    {
      image: require("@assets/Type=Latte.png"),
      title: "Latte",
      description: "Café expresso com o dobro de leite e espuma cremosa",
      price: "R$ 9,90",
    },
    {
      image: require("@assets/Type=Macchiato.png"),
      title: "Mocaccino",
      description: "Café expresso com calda de chocolate, leite e espuma",
      price: "R$ 9,90",
    },
    {
      image: require("@assets/Type=Cubano.png"),
      title: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: "R$ 9,90",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ScrollView>
        <Container>
          <TopBackground />
          <Header>
            <Greeting>
              <StyledImage source={localizador} resizeMode="contain" />
              <GreetingText>Osasco-SP</GreetingText>
            </Greeting>
            <CartButton>
              <CartIcon source={cartIcon} />
            </CartButton>
          </Header>
          <Banner />

          <BottomBackground>
            <View style={{ alignItems: "center" }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexDirection: "row",
                  gap: 14,
                }}
              >
                {coffeeData.map((coffee, index) => (
                  <Box
                    key={index}
                    image={coffee.image}
                    title={coffee.title}
                    description={coffee.description}
                    price={coffee.price}
                  />
                ))}
              </ScrollView>

              <View style={{ paddingHorizontal: 16 }}>
                <Title>Nossos cafés</Title>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <CategoryBox>Tradicionais</CategoryBox>
                  <CategoryBox>Doces</CategoryBox>
                  <CategoryBox>Especiais</CategoryBox>
                </View>
              </View>
            </View>
          </BottomBackground>
        </Container>
      </ScrollView>
    </ThemeProvider>
  );
}
